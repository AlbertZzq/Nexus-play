import { useEffect, type FormEvent } from 'react'
import { EmptyState } from '../components/common/EmptyState'
import { PageHeader } from '../components/common/PageHeader'
import { P2GameCard } from '../components/games/P2GameCard'
import { compareMostReviewed, p2Games, p2Genres } from '../data/p2Catalog'
import { usePageQuery } from '../hooks/usePageQuery'
import { useLocation, useNavigationType } from 'react-router-dom'
import { parseGamesQuery, p2Platforms as platforms, p2Modes as modes } from '../utils/p2GamesQuery'
import '../styles/ratings-design.css'

export function P2Games() {
  const { params, update } = usePageQuery()
  const location = useLocation()
  const navigationType = useNavigationType()
  const { q, genre, platform, mode, sort, ignored: ignoredFilters } = parseGamesQuery(params)
  const results = p2Games
    .filter(game => (!q || game.title.toLowerCase().includes(q.toLowerCase())) && (!genre || game.genres.includes(genre)) && (!platform || game.platforms.includes(platform)) && (!mode || (mode === 'Single-player' || mode === 'Multiplayer' ? game.modes.includes(mode) : (game.multiplayer ?? []).includes(mode))))
    .sort((a, b) => sort === 'name' ? a.title.localeCompare(b.title, 'en') : compareMostReviewed(a, b))
  const reset = () => update({ q: null, genre: null, platform: null, mode: null, sort: null })
  const active = [
    q && { key: 'q', label: `Search: ${q}` },
    genre && { key: 'genre', label: genre },
    platform && { key: 'platform', label: platform },
    mode && { key: 'mode', label: mode },
  ].filter(Boolean) as { key: string; label: string }[]

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = String(new FormData(event.currentTarget).get('q') ?? '').trim()
    update({ q: value || null })
  }

  useEffect(() => {
    const y = (location.state as { restoreScroll?: number } | null)?.restoreScroll
    if (navigationType !== 'PUSH' || typeof y !== 'number' || !Number.isFinite(y) || y < 0) return
    let frame = 0
    let attempts = 0
    const restore = () => {
      const available = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight
      if (available >= y || attempts++ >= 120) {
        window.scrollTo(0, y)
        return
      }
      frame = requestAnimationFrame(restore)
    }
    frame = requestAnimationFrame(restore)
    return () => cancelAnimationFrame(frame)
  }, [location.state, navigationType])

  return <div className="p2-games-page">
    <PageHeader title="Games" description={`${p2Games.length} released games across PC, PlayStation, Xbox and Nintendo.`} />
    {ignoredFilters.length > 0 && <p className="p2-filter-warning" role="status">Unknown filter value{ignoredFilters.length === 1 ? '' : 's'} ignored: {ignoredFilters.join(', ')}. Use Reset filters to clear the URL.</p>}
    <form className="p2-search" role="search" onSubmit={search}>
      <label htmlFor="p2-game-search">Search by name</label>
      <div><input key={q} id="p2-game-search" name="q" type="search" defaultValue={q} placeholder="Try Elden Ring, Hades, Balatro…" /><button type="submit">Search</button></div>
    </form>
    <div className="p2-filters">
      <label>Genre<select value={genre} onChange={event => update({ genre: event.target.value || null })}><option value="">All genres</option>{p2Genres.map(item => <option key={item} value={item}>{item} ({p2Games.filter(game => game.genres.includes(item)).length})</option>)}</select></label>
      <label>Platform<select value={platform} onChange={event => update({ platform: event.target.value || null })}><option value="">All platforms</option>{platforms.map(item => <option key={item} value={item}>{item} ({p2Games.filter(game => game.platforms.includes(item)).length})</option>)}</select></label>
      <label>Mode<select value={mode} onChange={event => update({ mode: event.target.value || null })}><option value="">All modes</option>{modes.map(item => <option key={item} value={item}>{item} ({p2Games.filter(game => item === 'Single-player' || item === 'Multiplayer' ? game.modes.includes(item) : (game.multiplayer ?? []).includes(item)).length})</option>)}</select></label>
      <label>Sort<select value={sort} onChange={event => update({ sort: event.target.value === 'name' ? 'name' : null })}><option value="reviews">Most reviewed</option><option value="name">Name A–Z</option></select></label>
      <button className="p2-reset" type="button" onClick={reset}>Reset filters</button>
    </div>
    <p className="p2-filter-note">Filter counts show the whole {p2Games.length}-game library; genre counts overlap because a game can have several genres.</p>
    {active.length > 0 && <div className="p2-active-filters" aria-label="Active filters"><span>Active filters</span>{active.map(item => <button key={item.key} type="button" onClick={() => update({ [item.key]: null })}>{item.label} <span aria-hidden="true">×</span></button>)}<button className="p2-clear-all" type="button" onClick={reset}>Clear all</button></div>}
    <div className="p2-results-heading" id="results"><h2>Game library</h2><p role="status" aria-live="polite">{results.length} {results.length === 1 ? 'game' : 'games'} · {sort === 'name' ? 'Name A–Z' : 'Most reviewed'}{q ? ` · “${q}”` : ''}</p></div>
    {results.length ? <div className="p2-game-grid">{results.map(game => <P2GameCard key={game.id} game={game} />)}</div> : <EmptyState title="No games found" description="No game matches this combination. Clear the search or reset the filters to see the full library." onReset={reset} />}
  </div>
}

