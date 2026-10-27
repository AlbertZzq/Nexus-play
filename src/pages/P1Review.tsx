import type { Game } from '../data/types'
import { p1Review } from '../data/p1Catalog'
export function P1Review({ game, compact = false }: { game: Game; compact?: boolean }) {
  const review = p1Review(game)
  if (compact) return <div className="release-review">{review ? <>
    <strong>Steam (PC) {review.positivePercent}% positive</strong>
    <span>{review.total.toLocaleString('en-US')} English reviews</span>
  </> : <span>Player review data: Not available</span>}</div>
  return <div className="release-review">{review ? <><strong>Steam (PC) {review.positivePercent}% positive</strong><span>{review.total.toLocaleString('en-US')} reviews · {review.scope}</span><a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Review source ↗</a><small>Checked {review.checkedOn}</small></> : <span>Player review data: Not available</span>}</div>
}
