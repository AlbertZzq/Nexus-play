export function RatingBadge({ score, label = 'Player rating' }: { score: number | null; label?: string }) {
  if (score === null) return <span className="rating-badge" aria-label={`${label}: Not rated`}>Not rated</span>
  return <span className="rating-badge" aria-label={`${label}: ${score.toFixed(1)} out of 10`}>
    <strong>{score.toFixed(1)}</strong><span>/ 10<span className="rating-label">{label}</span></span>
  </span>
}
