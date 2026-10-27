import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigationType } from 'react-router-dom'
import type { FormEvent, MouseEvent } from 'react'
import { EmptyState } from '../components/common/EmptyState'
import { LocalImage } from '../components/common/LocalImage'
import { PageHeader } from '../components/common/PageHeader'
import { guidesForGame, p2Games, p2Guides } from '../data/p2Catalog'
import { usePageQuery } from '../hooks/usePageQuery'
import { rememberP2Return, safeGuidesReturnTo } from '../utils/p2ReturnContext'
import '../styles/ratings-design.css'
import '../styles/p2-guides.css'

const gamesPerPage = 6

export function P2Guides() {
  const { params, update } = usePageQuery()
  const location = useLocation()
  const navigationType = useNavigationType()
  const returnTo = safeGuidesReturnTo(`/guides${location.search}`)
  const q = (params.get('q') ?? '').trim()
  const gameFilter = params.get('game') ?? ''
  const filteredGame = p2Games.find(game => game.id === gameFilter)
  const invalidGameFilter = Boolean(gameFilter && !filteredGame)
  const categories = [...new Set(p2Guides.map(guide => guide.type))].sort()
  const rawType = params.get('type') ?? ''
  const category = categories.includes(rawType) ? rawType : ''
  const invalidCategory = Boolean(rawType && !category)
  const selectedGuides = (id: string) => guidesForGame(id).filter(guide => !category || guide.type === category)
  const games = invalidGameFilter || invalidCategory ? [] : p2Games.filter(game => (!q || game.title.toLowerCase().includes(q.toLowerCase())) && (!filteredGame || game.id === filteredGame.id) && selectedGuides(game.id).length > 0)
  const guideCount = games.reduce((sum, game) => sum + selectedGuides(game.id).length, 0)
  const pageCount = Math.max(1, Math.ceil(games.length / gamesPerPage))
  const rawPage = params.get('page')
  const parsedPage = rawPage && /^[1-9]\d*$/.test(rawPage) ? Number(rawPage) : 1
  const page = Number.isSafeInteger(parsedPage) ? Math.min(parsedPage, pageCount) : 1
  const pageValue = page === 1 ? null : String(page)
  const visibleGames = games.slice((page - 1) * gamesPerPage, page * gamesPerPage)
  const resultsHeading = useRef<HTMLHeadingElement>(null)
  const focusAfterPageChange = useRef(false)

  useEffect(() => {
    if (rawPage !== pageValue) update({ page: pageValue }, { replace: true })
  }, [rawPage, pageValue, update])

  useEffect(() => {
    if (!focusAfterPageChange.current) return
    focusAfterPageChange.current = false
    resultsHeading.current?.scrollIntoView?.({ block: 'start' })
    resultsHeading.current?.focus()
  }, [page])

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

  function detailHref(slug: string) {
    const search = new URLSearchParams({ returnTo })
    return `/games/${slug}?${search.toString()}`
  }

  function rememberOpen(event: MouseEvent<HTMLAnchorElement>, gameId: string) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    rememberP2Return(gameId, returnTo, window.scrollY)
  }

  function changeFilters(patch: Record<string, string | null>) {
    update({ ...patch, page: null })
  }

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = String(new FormData(event.currentTarget).get('q') ?? '').trim()
    changeFilters({ q: value || null })
  }

  function pageHref(target: number) {
    const next = new URLSearchParams(params)
    if (target === 1) next.delete('page')
    else next.set('page', String(target))
    next.delete('design')
    return `/guides${next.size ? `?${next.toString()}` : ''}`
  }

  function onPageClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button === 0 && !event.defaultPrevented && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      focusAfterPageChange.current = true
    }
  }

  return <div className="p2-guides-page">
    <PageHeader title="Guides" description="Find a practical guide for a game in the catalogue." />
    <div className="p2-guide-tools">
      <form className="p2-guide-search" role="search" onSubmit={search}>
        <label htmlFor="p2-guide-search">Search guides by game</label>
        <div><input key={q} id="p2-guide-search" name="q" type="search" defaultValue={q} placeholder="Try Elden Ring, Hades, Balatro…" /><button type="submit">Search</button></div>
      </form>
      <div className="p2-filters"><label>Guide category<select value={category} onChange={event => changeFilters({ type: event.target.value || null })}><option value="">All categories</option>{categories.map(type => <option key={type} value={type}>{type}</option>)}</select></label></div>
    </div>
    {invalidCategory && <div className="p2-filter-banner"><p>Unknown guide category: <strong>{rawType}</strong></p><button type="button" onClick={() => changeFilters({ type: null })}>Clear category</button></div>}
    {invalidGameFilter && <div className="p2-filter-banner">
      <p>Unknown game filter: <strong>{gameFilter}</strong></p>
      <button type="button" onClick={() => changeFilters({ game: null })}>Clear filter</button>
      <Link to="/guides">Show all games</Link>
    </div>}
    {filteredGame && <div className="p2-filter-banner">
      <p>Filtered by: <strong>{filteredGame.title}</strong></p>
      <button type="button" onClick={() => changeFilters({ game: null })}>Clear filter</button>
      <Link to="/guides">Show all games</Link>
    </div>}
    <div className="p2-results-heading"><h2 ref={resultsHeading} tabIndex={-1}>Guide library</h2><p role="status" aria-live="polite">{games.length ? `Showing ${(page - 1) * gamesPerPage + 1}–${Math.min(page * gamesPerPage, games.length)} of ` : ''}{games.length} {games.length === 1 ? 'game' : 'games'} · {guideCount} {guideCount === 1 ? 'selected guide' : 'selected guides'}{q ? ` matching “${q}”` : ''}</p></div>
    <details className="p2-guide-about"><summary>About these guides</summary><p>Steam guides come from the top-rated community listing; IGN and Nintendo Life pages are editor-selected. No view or like counts were available, so no popularity ranking is claimed. Each link opens a specific guide or game wiki; “Browse more guides” opens a directory. Platform and version notes appear where the source makes them clear. Older community guides may cover an earlier patch.</p></details>
    {games.length ? <>
      <div className="p2-guide-grid">{visibleGames.map(game => {
        const guides = selectedGuides(game.id)
        return <article className="p2-guide-card" key={game.id}>
          <div className="p2-guide-game"><Link className="p2-guide-cover" to={detailHref(game.slug)} onClick={event => rememberOpen(event, game.id)} aria-label={`${game.title} cover`}><LocalImage fallbackAlt={`Artwork unavailable for ${game.title}`} media={game.cover} /></Link><div><p className="p2-guide-source">{game.primaryGenre}</p><h2><Link to={detailHref(game.slug)} onClick={event => rememberOpen(event, game.id)}>{game.title}</Link></h2></div></div>
          <div className="p2-guide-body">
            <div className="p2-guide-entries">{guides.map(guide => <section key={guide.id} className="p2-guide-entry">
              <p className="p2-guide-type">{guide.type}</p>
              <h3><a href={guide.url} target="_blank" rel="noopener noreferrer">{guide.title} ↗</a></h3>
              <p className="p2-guide-byline">{guide.source}</p>
              <p className="p2-guide-summary">{guide.summary}</p>
              {guide.versionNote && <p className="p2-guide-version">{guide.versionNote}</p>}
              <details className="p2-guide-entry-details"><summary>Source details</summary><p>By {guide.author} · {guide.platform} · Checked {guide.checkedOn}</p><p>{guide.selection}</p></details>
            </section>)}</div>
            <a className="p2-guide-browse" href={game.guideHubUrl} target="_blank" rel="noopener noreferrer">Browse more guides ↗</a>
          </div>
        </article>
      })}</div>
      {pageCount > 1 && <nav className="p2-guide-pagination" aria-label="Guide pages">
        {page > 1 && <Link to={pageHref(page - 1)} onClick={onPageClick}>Previous page</Link>}
        <span aria-current="page">Page {page} of {pageCount}</span>
        {page < pageCount && <Link to={pageHref(page + 1)} onClick={onPageClick}>Next page</Link>}
      </nav>}
    </> : <EmptyState title="No guides found" description={gameFilter ? 'No guides match this game filter.' : 'Try another game name or clear the search.'} onReset={() => changeFilters({ q: null, game: null, type: null })} />}
    <p className="p2-muted">External links only. NexusPlay does not host full guide text or embed videos. {p2Guides.length} guides across {p2Games.length} games.</p>
  </div>
}
