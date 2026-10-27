import { EmptyState } from '../components/common/EmptyState'
import { PageHeader } from '../components/common/PageHeader'
import { GuideCard } from '../components/content/GuideCard'
import { p1Catalog } from '../data/p1Catalog'
import { prepGuides, releasedGuides } from '../data/p1GuideLibrary'
import type { Guide, GuideType } from '../data/types'
import { usePageQuery } from '../hooks/usePageQuery'
import '../styles/pages.css'

const types: readonly GuideType[] = ['Beginner', 'Build', 'Boss', 'Farming', 'Progression', 'Collectibles']

export function P1Guides() {
  const { params, update } = usePageQuery()
  const gameValue = params.get('game') ?? ''
  const typeValue = params.get('type') ?? ''
  const gameId = p1Catalog.some(game => game.id === gameValue) ? gameValue : ''
  const type = types.includes(typeValue as GuideType) ? typeValue : ''
  const matches = (guide: Guide) => (!gameId || guide.gameId === gameId) && (!type || guide.type === type)
  const released = releasedGuides.filter(matches)
  const prep = prepGuides.filter(matches)
  const count = released.length + prep.length
  const selectedGame = p1Catalog.find(game => game.id === gameId)
  const googleQuery = selectedGame || type ? [selectedGame?.title, type, 'guide'].filter(Boolean).join(' ') : 'game guides'
  const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`
  const reset = () => update({ game: null, type: null })

  return <div className="editorial-page">
    <p className="eyebrow">Learn the route. Make it your own.</p>
    <PageHeader title="Guides" description="Two practical guides grounded in official lessons and manuals, plus one upcoming-game preparation checklist." />
    <div className="guide-filters">
      <label className="guide-game-filter">Game<select value={gameId} onChange={event => update({ game: event.target.value || null })}><option value="">All games</option>{p1Catalog.map(game => <option key={game.id} value={game.id}>{game.title}</option>)}</select></label>
      <div className="editorial-filters" role="group" aria-label="Guide types">
        {['', ...types].map(option => <button type="button" key={option} aria-pressed={type === option} onClick={() => update({ type: option || null })}>{option || 'All types'}</button>)}
      </div>
    </div>
    <div className="guide-search-more-row"><a className="guide-search-more" href={googleSearch} target="_blank" rel="noopener noreferrer">Search more guides <span aria-hidden="true">↗</span></a></div>
    {count ? <div className="guide-sections" id="library">
      {released.length > 0 && <section className="editorial-results" aria-labelledby="released-guides-heading">
        <div className="editorial-results-heading"><h2 id="released-guides-heading">Recently released guides</h2><p>{released.length} {released.length === 1 ? 'guide' : 'guides'}</p></div>
        <div className="guide-grid">{released.map(guide => <GuideCard key={guide.id} guide={guide} catalog={p1Catalog} />)}</div>
      </section>}
      {prep.length > 0 && <section className="editorial-results" aria-labelledby="prep-guides-heading">
        <div className="editorial-results-heading"><h2 id="prep-guides-heading">Upcoming game prep</h2><p>{prep.length} {prep.length === 1 ? 'guide' : 'guides'}</p></div>
        <div className="guide-grid">{prep.map(guide => <GuideCard key={guide.id} guide={guide} catalog={p1Catalog} />)}</div>
      </section>}
    </div> : <EmptyState title="No guides found" description="Try another game or guide type to find a guide." onReset={reset} />}
  </div>
}
