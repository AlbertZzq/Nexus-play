import { DesignLink } from '../components/navigation/DesignLink'
import { releaseStatus, selectedGameDate, storeLinks } from '../data/p1GameFacts'
import { useState } from 'react'
import { PageHeader } from '../components/common/PageHeader'
import { EmptyState } from '../components/common/EmptyState'
import { LocalImage } from '../components/common/LocalImage'
import { p1Catalog } from '../data/p1Catalog'
import { anticipatedGroupLabel, anticipatedGroupKey, anticipatedPlatforms, anticipatedStatuses, p1Anticipated } from '../data/p1Anticipated'
import type { AnticipatedStatus } from '../data/p1Anticipated'
import type { Game, Platform } from '../data/types'
import { usePageQuery } from '../hooks/usePageQuery'
import { formatDate } from '../utils/format'
import { p1HeroArt } from '../data/p1HeroArt'
import '../styles/pages.css'

const catalog = p1Catalog
const statusOptions = anticipatedStatuses

function artwork(game: Game) {
  if (p1HeroArt[game.id]) return { src: p1HeroArt[game.id], alt: `${game.title} — official artwork`, kind: 'official' as const }
  if (game.screenshots[0]) return game.screenshots[0]
  return game.cover
}

export function P1ReleaseCalendar() {
  const { params, update } = usePageQuery()
  const platformValue = params.get('platform') ?? ''
  const platform = anticipatedPlatforms.includes(platformValue as Platform) ? (platformValue as Platform) : ''
  const [status, setStatus] = useState<AnticipatedStatus | ''>('')
  const rows = p1Anticipated
    .map(entry => ({ entry, game: catalog.find(game => game.id === entry.gameId) }))
    .filter((row): row is { entry: (typeof p1Anticipated)[number]; game: Game } => Boolean(row.game))
    .filter(({ game }) => (!platform || game.platforms.includes(platform)) && (!status || releaseStatus(game) === status))
    .sort((a, b) => (selectedGameDate(a.game) ?? '9999').localeCompare(selectedGameDate(b.game) ?? '9999'))
  const groups = [...new Set(rows.map(({ game }) => anticipatedGroupKey(selectedGameDate(game))))]
    .map(key => ({ key, label: anticipatedGroupLabel(key), rows: rows.filter(({ game }) => anticipatedGroupKey(selectedGameDate(game)) === key) }))
  const reset = () => { setStatus(''); update({ platform: null }) }

  return <div className="calendar-page anticipated-calendar">
    <p className="eyebrow">A date for your next adventure</p>
    <PageHeader title="Release Calendar" description="Selected Releases — editorial highlights with release dates and platform information." />
    <p className="details-meta">Dates shown separately from storefront wishlist availability. Remake, remaster and re-release dates use the new edition.</p>
    <div className="anticipated-filters">
      <div className="anticipated-filter-group">
        <span className="eyebrow">Platform</span>
        <div className="editorial-filters" role="group" aria-label="Filter by platform">
          {['', ...anticipatedPlatforms].map(option => <button type="button" key={option || 'all'} aria-pressed={platform === option} onClick={() => update({ platform: option || null })}>{option || 'All'}</button>)}
        </div>
      </div>
      <div className="anticipated-filter-group">
        <span className="eyebrow">Status</span>
        <div className="editorial-filters" role="group" aria-label="Filter by release status">
          {['', ...statusOptions].map(option => <button type="button" key={option || 'all'} aria-pressed={status === option} onClick={() => setStatus(option as AnticipatedStatus | '')}>{option || 'All'}</button>)}
        </div>
      </div>
    </div>
    <div className="anticipated-count"><p role="status" aria-live="polite">{rows.length} of {p1Anticipated.length} releases</p></div>
    {groups.length ? <div className="anticipated-months">{groups.map(group => <section key={group.key} aria-label={group.label} className="anticipated-month">
      <div className="anticipated-month-heading"><h2>{group.label}</h2><span>{group.rows.length} {group.rows.length === 1 ? 'release' : 'releases'}</span></div>
      <div className="anticipated-grid">{group.rows.map(({ entry, game }) => {
        const stores = storeLinks(game)
        return <article className="anticipated-card" key={game.id} aria-labelledby={`anticipated-${game.id}`}>
          <div className="anticipated-art"><LocalImage media={artwork(game)} /></div>
          <div className="anticipated-body">
            <div className="anticipated-meta">
              <span className={`anticipated-status status-${releaseStatus(game).toLowerCase().replaceAll(" ", "-")}`}>{releaseStatus(game)}</span>
              {entry.edition && <span className="anticipated-edition">{entry.edition}</span>}
              {selectedGameDate(game) ? <time dateTime={selectedGameDate(game)!}>{formatDate(selectedGameDate(game)!)}</time> : <span>Date TBA</span>}
              {entry.wishlistAvailable && <span className="anticipated-edition">Store wishlist available</span>}
            </div>
            <h3 id={`anticipated-${game.id}`}><DesignLink to={`/games/${game.slug}`}>{game.title}</DesignLink></h3>
            <p className="anticipated-facts">{game.platforms.join(' · ')}<span className="anticipated-dot">·</span>{game.genres.join(' · ')}</p>
            <p className="anticipated-summary">{game.description}</p>
            <p className="anticipated-trending"><strong>Highlights</strong><span>{entry.trending}</span></p>
            <div className="anticipated-links">
              <a className="anticipated-official" href={entry.officialUrl} target="_blank" rel="noopener noreferrer">Official details <span aria-hidden="true">↗</span></a>
              <div className="anticipated-stores">{stores.map(store => <a key={store.label} href={store.url} target="_blank" rel="noopener noreferrer">{store.label} <span aria-hidden="true">↗</span></a>)}</div>
            </div>
          </div>
        </article>
      })}</div>
    </section>)}</div> : <EmptyState title="No releases found" description="Try another platform or status to find an anticipated release." onReset={reset} />}
  </div>
}
