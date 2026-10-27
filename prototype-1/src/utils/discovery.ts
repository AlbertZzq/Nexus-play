import type { Game } from '../data/types'

export const RECENT_RELEASE_DAYS = 365
const today = () => new Date().toISOString().slice(0, 10)
const dates = (game: Game) => game.releaseInfo?.events.length
  ? game.releaseInfo.events.map(event => event.date)
  : [game.releaseDate]
const releasedDates = (game: Game, asOf: string) => dates(game).filter((date): date is string => date !== null && date <= asOf)

export function selectRecentReleases(items: readonly Game[], asOf = today(), windowDays = RECENT_RELEASE_DAYS): Game[] {
  const cutoff = new Date(`${asOf}T00:00:00Z`)
  cutoff.setUTCDate(cutoff.getUTCDate() - windowDays)
  const firstDay = cutoff.toISOString().slice(0, 10)
  return items.map(game => ({ game, date: releasedDates(game, asOf).sort().at(-1) }))
    .filter((item): item is { game: Game; date: string } => item.date !== undefined && item.date >= firstDay)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(item => item.game)
}

export function selectUpcomingGames(items: readonly Game[], asOf = today()): Game[] {
  return items.filter(game => releasedDates(game, asOf).length === 0)
    .map(game => ({ game, date: dates(game).filter((date): date is string => date !== null).sort()[0] }))
    .sort((a, b) => (a.date ?? '9999').localeCompare(b.date ?? '9999'))
    .map(item => item.game)
}

export function selectRankedGames(items: readonly Game[], asOf = today()): Game[] {
  return items.filter(game => releasedDates(game, asOf).length > 0 && game.playerRating !== null && game.ratingCount > 0)
    .sort((a, b) => (b.playerRating ?? 0) - (a.playerRating ?? 0) || a.title.localeCompare(b.title, 'en') || a.id.localeCompare(b.id, 'en'))
}
