import { useState } from 'react'
import { LocalImage } from '../components/common/LocalImage'
import { DesignLink } from '../components/navigation/DesignLink'
import { selectP1News } from '../data/p1Newsroom'
import { P1NewsCard } from '../components/content/P1NewsCard'
import { p1GuideLibrary } from '../data/p1GuideLibrary'
import { FeaturedCarousel } from './FeaturedCarousel'
import '../styles/release-home.css'
import { p1Catalog } from '../data/p1Catalog'
import type { Game, Platform, ReleaseEvent } from '../data/types'
import { releaseWindow, selectReleaseEntries } from '../utils/p1Releases'
import type { ReleaseEntry, ReleaseFilters } from '../utils/p1Releases'
import { formatDate } from '../utils/format'
import { P1Review } from './P1Review'
function Events({ events }: { events: ReleaseEvent[] }) {
  const groups = events.reduce<{ date: string | null; labels: string[] }[]>((result, event) => {
    const group = result.find(item => item.date === event.date)
    if (group) {
      if (!group.labels.includes(event.platformLabel)) group.labels.push(event.platformLabel)
    } else result.push({ date: event.date, labels: [event.platformLabel] })
    return result
  }, [])
  return <div className="release-event-list">{groups.map(group =>
    <div className="release-event" key={group.date ?? 'tba'}>
      <strong>{group.date ? <time dateTime={group.date}>{formatDate(group.date)}</time> : 'Release date TBA'}</strong>
      <span>{group.labels.join(' · ')}</span>
    </div>
  )}</div>
}
function landscape(game: Game) { return game.screenshots[0] ?? game.cover }
function ReleaseRow({ items, recent }: { items: ReleaseEntry[]; recent: boolean }) {
  return <div className={recent ? 'release-card-row' : 'release-upcoming-list'}>
    {items.map(({ game, events }) => <article className="release-card" key={game.id}>
      <DesignLink className="release-card-art" to={`/games/${game.slug}`} aria-label={`Explore ${game.title}`}><LocalImage media={landscape(game)} /></DesignLink>
      <div className="release-card-copy"><p className="eyebrow">{game.genres.join(' / ')}</p><h3><DesignLink to={`/games/${game.slug}`}>{game.title}</DesignLink></h3><Events events={events} />{recent ? <P1Review game={game} compact /> : <p className="release-row-description">{game.description}</p>}</div>
      {!recent && <DesignLink className="release-row-link" to={`/games/${game.slug}`} aria-label={`View ${game.title} details`}>View game ↗</DesignLink>}
    </article>)}
  </div>
}
function EditorialGateways() {
  const story = selectP1News()[0]
  const entries = [
    ...(story ? [{ label: 'News', title: story.title, summary: story.summary, image: story.image, to: `/news#${story.id}` }] : []),
    ...p1GuideLibrary.filter(item => p1Catalog.some(game => game.id === item.gameId)).slice(0, 2).map(guide => ({ label: 'Guide', title: guide.title, summary: guide.summary, image: landscape(p1Catalog.find(game => game.id === guide.gameId)!), to: `/guides/${guide.id}` })),
  ]
  return <section className="release-editorial"><div className="release-section-heading"><h2>Beyond the game</h2><span className="eyebrow">News & guides</span></div><nav className="release-gateways" aria-label="Explore more gaming">{entries.map(entry => <DesignLink key={entry.to} to={entry.to}><LocalImage media={entry.image} /><div><span className="eyebrow">{entry.label} · Editorial</span><h3>{entry.title} ↗</h3><p>{entry.summary}</p></div></DesignLink>)}</nav></section>
}
export function ReleaseHome() {
  const now = new Date()
  const window = releaseWindow(now)
  const latestNews = selectP1News(now).slice(0, 3)
  const [filters, setFilters] = useState<ReleaseFilters>({ platform: '', month: '' })
  const banner = p1Catalog.find(item => item.id === 'grand-theft-auto-vi')!
  const months: string[] = []
  const cursor = new Date(`${window.start.slice(0, 7)}-01T00:00:00Z`)
  while (cursor.toISOString().slice(0, 7) <= window.end.slice(0, 7)) { months.push(cursor.toISOString().slice(0, 7)); cursor.setUTCMonth(cursor.getUTCMonth() + 1) }
  return <div className="release-home">
    <section className="release-banner" aria-label="Featured promotion"><LocalImage media={banner.screenshots[3]} /><div className="release-banner-copy"><p className="eyebrow">Featured game</p><h1>{banner.title}</h1><p className="release-banner-tagline">Explore Leonida.</p><p className="release-state">{banner.releaseDate && banner.releaseDate > window.today ? 'Coming soon' : 'Available now'}</p><Events events={banner.releaseInfo?.events ?? []} /><DesignLink className="button-link" to={`/games/${banner.slug}`}>Discover the game ↗</DesignLink></div></section>
    <FeaturedCarousel now={now} />
    {latestNews.length > 0 && <section className="release-latest-news" aria-label="Latest new-game updates"><div className="release-section-heading"><h2>Latest new-game updates</h2><DesignLink to="/news">All news ↗</DesignLink></div><div className="p1-latest-grid">{latestNews.map(item => <P1NewsCard key={item.id} item={item} />)}</div></section>}
    <div className="release-filters" role="group" aria-label="Filter release lists"><div><label htmlFor="release-platform">Release platform</label><select id="release-platform" value={filters.platform} onChange={event => setFilters({ ...filters, platform: event.target.value as Platform | '' })}><option value="">All platforms</option>{(['PC', 'PlayStation', 'Xbox', 'Nintendo'] as const).map(platform => <option key={platform}>{platform}</option>)}</select></div><div><label htmlFor="release-month">Release month</label><select id="release-month" value={filters.month} onChange={event => setFilters({ ...filters, month: event.target.value })}><option value="">All months</option>{months.map(month => <option key={month} value={month}>{new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${month}-01T00:00:00Z`))}</option>)}</select></div><button type="button" onClick={() => setFilters({ platform: '', month: '' })}>Reset release filters</button><p>Filters apply to the release lists below.</p></div>
    {(['recent', 'upcoming'] as const).map(section => { const items = selectReleaseEntries(p1Catalog, section, now, filters); return <section key={section} aria-label={section === 'recent' ? 'Recently released' : 'Anticipated upcoming'}><div className="release-section-heading"><div><p className="eyebrow">{section === 'recent' ? 'Ready to play' : 'On the horizon'}</p><h2>{section === 'recent' ? 'Recently released' : 'Anticipated upcoming'}</h2></div><DesignLink to="/games?sort=release">Browse library ↗</DesignLink></div><p className="release-section-note">{section === 'recent' ? `${formatDate(window.start)} – ${formatDate(window.today)} · Past two months` : `${formatDate(window.today)} (exclusive) – ${formatDate(window.end)} · Next three months`}</p>{section === 'upcoming' && <div className="release-months" role="group" aria-label="Upcoming release month"><button type="button" aria-pressed={filters.month === ''} onClick={() => setFilters({ ...filters, month: '' })}>All months</button>{months.filter(month => month >= window.today.slice(0, 7)).map(month => <button type="button" key={month} aria-pressed={filters.month === month} onClick={() => setFilters({ ...filters, month })}>{new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${month}-01T00:00:00Z`))}</button>)}</div>}<p className="release-section-note" role="status">{items.length} {items.length === 1 ? 'game' : 'games'}</p>{items.length ? <ReleaseRow items={items} recent={section === 'recent'} /> : <div className="release-empty"><p>No matching releases.</p><p>Try another platform or month, or reset the release filters.</p></div>}</section> })}
    <EditorialGateways />
  </div>
}
