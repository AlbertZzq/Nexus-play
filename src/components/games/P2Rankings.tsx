import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { LocalImage } from '../common/LocalImage'
import { compactCount, formatRating, p2Games } from '../../data/p2Catalog'
import { minimumRankingReviews, rankedGames, rankingCohorts } from '../../utils/p2Rankings'

const cohorts = rankingCohorts(p2Games)
export function P2Rankings() {
  const [cohortKey, setCohortKey] = useState(cohorts[0].key)
  const [boundaries, setBoundaries] = useState({ start: true, end: true })
  const rail = useRef<HTMLOListElement>(null)
  const cohort = cohorts.find(item => item.key === cohortKey) ?? cohorts[0]
  const entries = rankedGames(p2Games, cohort)

  useEffect(() => {
    const node = rail.current
    if (!node) return
    node.scrollLeft = 0
    const update = () => setBoundaries({ start: node.scrollLeft <= 1, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 1 })
    update()
    node.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null
    observer?.observe(node)
    return () => { node.removeEventListener('scroll', update); window.removeEventListener('resize', update); observer?.disconnect() }
  }, [cohortKey])

  function move(direction: number) {
    const node = rail.current
    if (node) node.scrollTo({ left: Math.max(0, Math.min(node.scrollWidth - node.clientWidth, node.scrollLeft + direction * node.clientWidth)), behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  function navigateRail(event: KeyboardEvent<HTMLOListElement>) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a'))
    const index = links.indexOf(document.activeElement as HTMLAnchorElement)
    if (index < 0) return
    event.preventDefault()
    const target = event.key === 'Home' ? 0 : event.key === 'End' ? links.length - 1 : Math.max(0, Math.min(links.length - 1, index + (event.key === 'ArrowRight' ? 1 : -1)))
    links[target]?.focus({ preventScroll: true })
    links[target]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'auto' })
  }
  return <section className="p2-home-section p2-rankings" aria-labelledby="p2-rankings-heading">
    <div className="p2-section-heading"><h2 id="p2-rankings-heading">Player ratings by source</h2></div>
    <div className="p2-ranking-toolbar">
      <label>Rating source and platform<select value={cohort.key} onChange={event => setCohortKey(event.target.value)}>{cohorts.map(item => <option key={item.key} value={item.key}>{item.label}</option>)}</select></label>
      <div className="p2-ranking-controls"><button type="button" aria-label="Previous ranked games" aria-controls="p2-ranking-rail" disabled={boundaries.start} onClick={() => move(-1)}>←</button><button type="button" aria-label="Next ranked games" aria-controls="p2-ranking-rail" disabled={boundaries.end} onClick={() => move(1)}>→</button></div>
    </div>
    <p className="p2-section-note" id="p2-ranking-context">{cohort.label}. {cohort.scale === 'percent' ? 'Share of positive reviews (%)' : '10-point user score'}. {entries.length} games with at least {minimumRankingReviews} ratings. Equal scores share a rank; review count, then title break display ties.</p>
    <ol className="p2-ranking-rail" id="p2-ranking-rail" aria-label="Ranked games" aria-describedby="p2-ranking-context" ref={rail} onKeyDown={navigateRail}>
      {entries.map(({ game, rating, rank }) => <li key={game.id} className="p2-ranked-game"><Link to={`/games/${game.slug}`}>
        <div className="p2-ranking-cover"><LocalImage media={game.cover} fallbackAlt={`Artwork unavailable for ${game.title}`} /><span className="p2-cover-score"><strong>{formatRating(rating)}</strong></span></div>
        <div className="p2-ranked-copy"><span className="p2-rank-number">#{rank}</span><div><h3>{game.title}</h3><p>{rating.source} · {rating.platform}</p><p>{compactCount(rating.count)} ratings · Checked {rating.checkedOn}</p></div></div>
      </Link></li>)}
    </ol>
  </section>
}
