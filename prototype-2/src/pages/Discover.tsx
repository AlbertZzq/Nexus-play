import { useState } from 'react'
import { EmptyState } from '../components/common/EmptyState'
import { PageHeader } from '../components/common/PageHeader'
import { GameFilters } from '../components/games/GameFilters'
import { GameCard } from '../components/games/GameCard'
import { games } from '../data/games'
import { p1Catalog } from '../data/p1Catalog'
import { useDesign } from '../app/DesignProvider'
import { DesignLink } from '../components/navigation/DesignLink'
import { usePageQuery } from '../hooks/usePageQuery'
import { releaseWindow } from '../utils/p1Releases'
import { selectGames } from '../utils/catalog'
import type { GameQuery } from '../utils/catalog'
import '../styles/pages.css'

const genres = new Set(games.flatMap(game => game.genres))
const years = new Set(games.flatMap(game => game.releaseDate ? [game.releaseDate.slice(0, 4)] : []))
const platforms = new Set(['PC', 'PlayStation', 'Xbox', 'Nintendo'])
const sorts = new Set(['popularity', 'rating', 'release', 'name'])
const defaults: GameQuery = { q: '', genre: '', platform: '', rating: 0, year: '', sort: 'popularity' }

function parseQuery(params: URLSearchParams, p1 = false): GameQuery {
  const validGenres = p1 ? new Set(p1Catalog.flatMap(game => game.genres)) : genres
  const validYears = p1 ? new Set(p1Catalog.flatMap(game => game.releaseDate ? [game.releaseDate.slice(0, 4)] : [])) : years
  const rating = Number(params.get('rating') ?? 0)
  const genre = params.get('genre') ?? ''
  const platform = params.get('platform') ?? ''
  const year = params.get('year') ?? ''
  const sort = params.get('sort') ?? ''
  return {
    q: (params.get('q') ?? '').trim(),
    genre: validGenres.has(genre) ? genre : '',
    platform: platforms.has(platform) ? platform as GameQuery['platform'] : '',
    rating: Number.isFinite(rating) && rating >= 0 && rating <= 10 ? rating : 0,
    year: validYears.has(year) ? year : '',
    sort: sorts.has(sort) ? sort as GameQuery['sort'] : 'popularity',
  }
}

export function Discover({ mode = 'discover' }: { mode?: 'discover' | 'games' }) {
  const { design } = useDesign()
  const { params, update } = usePageQuery()
  const [resetVersion, setResetVersion] = useState(0)
  const p1 = design === '1'
  const query = parseQuery(params, p1)
  if (p1) { query.rating = 0; query.sort = params.get('sort') === 'name' ? 'name' : 'release' }
  const allGames = params.get('view') === 'all'
  const [now] = useState(() => new Date())
  const cutoff = releaseWindow(now).start
  const catalog = p1 ? p1Catalog : games
  const visible = p1 && !allGames && !query.q ? catalog.filter(game => !game.releaseDate || game.releaseDate >= cutoff) : catalog
  const results = selectGames(visible, query)
  if (p1 && query.sort === 'release') results.sort((a, b) => {
    if (!a.releaseDate || !b.releaseDate) return a.releaseDate ? -1 : b.releaseDate ? 1 : a.title.localeCompare(b.title)
    return Math.abs(new Date(a.releaseDate).getTime() - now.getTime()) - Math.abs(new Date(b.releaseDate).getTime() - now.getTime()) || a.title.localeCompare(b.title)
  })
  const isGames = mode === 'games'
  const platformOptions = ['PC', 'PlayStation', 'Xbox', 'Nintendo'] as const

  function change(patch: Partial<GameQuery>) {
    update(Object.fromEntries(Object.entries(patch).map(([key, value]) => [key, value === (p1 && key === 'sort' ? 'release' : defaults[key as keyof GameQuery]) ? null : String(value)])))
  }

  function reset() {
    if (p1) update({ q: null, genre: null, platform: null, rating: null, year: null, sort: null, view: null })
    else change(defaults)
    setResetVersion(version => version + 1)
  }

  return <div className="discover-page">
    <p className="eyebrow">{isGames ? 'Browse the full catalog' : 'Your next adventure starts here'}</p>
    <PageHeader
      title={isGames ? 'Games' : 'Discover Games'}
      description={isGames
        ? p1 ? 'Browse recent and upcoming releases, or search the full library. Filter by platform, genre and release year.' : 'Search every game in the catalog and filter by platform, genre, rating and release year.'
        : 'Explore games by genre, platform and player rating. Find something worth your next play session.'}
    />
    {isGames && <div className="games-platform-bar">
      <div className="editorial-filters" role="group" aria-label="Filter games by platform">
        <button type="button" aria-pressed={query.platform === ''} onClick={() => change({ platform: '' })}>All platforms</button>
        {platformOptions.map(option => <button type="button" key={option} aria-pressed={query.platform === option} onClick={() => change({ platform: option })}>{option}</button>)}
      </div>
      <DesignLink to={`/calendar${query.platform ? `?platform=${query.platform}` : ''}`}>Release calendar <span aria-hidden="true">↗</span></DesignLink>
    </div>}
    {p1 && <div className="editorial-filters p1-library-view" role="group" aria-label="Library view"><button type="button" aria-pressed={!allGames} onClick={() => update({ view: null })}>Recent & upcoming</button><button type="button" aria-pressed={allGames} onClick={() => update({ view: 'all' })}>All games</button></div>}
    <div className="discover-layout">
      <GameFilters key={resetVersion} query={query} onChange={change} searchLabel={isGames ? 'Search games' : 'Search Discover'} p1={p1} />
      <section className="discover-results" aria-labelledby="results-heading" id="results">
        <div className="discover-results-heading"><h2 id="results-heading">Game library</h2><p role="status" aria-live="polite">{results.length} {results.length === 1 ? 'game' : 'games'}{query.q ? ` matching “${query.q}”` : ' to explore'}</p></div>
        {results.length ? <div className="game-grid">{results.map(game => <GameCard key={game.id} game={game} interactive={isGames} p1={p1} />)}</div> : <EmptyState title="No games found" description="Try another title or broaden your filters to explore more games." onReset={reset} />}
      </section>
    </div>
  </div>
}
