import type { P2Game, P2Rating } from '../data/p2Catalog'

export const minimumRankingReviews = 100
export interface RatingCohort { key: string; source: string; platform: string; scale: P2Rating['scale']; label: string }
function validRating(rating: P2Rating) {
  return Number.isFinite(rating.score) && rating.score > 0 && rating.score <= (rating.scale === 'percent' ? 100 : 10) && Number.isFinite(rating.count) && rating.count > 0
}
function cohortKey(rating: Pick<P2Rating, 'source' | 'platform' | 'scale'>) {
  return JSON.stringify([rating.source, rating.platform, rating.scale])
}
export function mostReviewedRating(game: P2Game) {
  return game.ratings.filter(validRating).sort((a, b) => b.count - a.count || a.source.localeCompare(b.source, 'en') || a.platform.localeCompare(b.platform, 'en'))[0]
}
export function rankingCohorts(games: readonly P2Game[]): RatingCohort[] {
  const cohorts = new Map<string, RatingCohort>()
  for (const game of games) for (const rating of game.ratings) {
    if (!validRating(rating) || rating.count < minimumRankingReviews) continue
    const key = cohortKey(rating)
    cohorts.set(key, { key, source: rating.source, platform: rating.platform, scale: rating.scale, label: `${rating.source} · ${rating.platform} · ${rating.scale === 'percent' ? '% positive' : '/10'}` })
  }
  return [...cohorts.values()].sort((a, b) => Number(b.source === 'Steam' && b.platform === 'PC' && b.scale === 'percent') - Number(a.source === 'Steam' && a.platform === 'PC' && a.scale === 'percent') || a.label.localeCompare(b.label, 'en'))
}
export function rankedGames(games: readonly P2Game[], cohort: RatingCohort) {
  const entries = games.flatMap(game => {
    const rating = game.ratings.filter(rating => validRating(rating) && rating.count >= minimumRankingReviews && cohortKey(rating) === cohort.key).sort((a, b) => b.count - a.count)[0]
    return rating ? [{ game, rating }] : []
  }).sort((a, b) => b.rating.score - a.rating.score || b.rating.count - a.rating.count || a.game.title.localeCompare(b.game.title, 'en') || a.game.id.localeCompare(b.game.id, 'en'))
  let rank = 1
  return entries.map((entry, index) => {
    if (index && entry.rating.score !== entries[index - 1].rating.score) rank = index + 1
    return { ...entry, rank }
  })
}
