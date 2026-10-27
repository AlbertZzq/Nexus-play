import type { Game, Platform, ReleaseEvent } from '../data/types'
export type ReleaseFilters = { platform: Platform | ''; month: string }
export type ReleaseEntry = { game: Game; events: ReleaseEvent[] }
export function releaseWindow(now: Date) {
  const shift = (months: number) => {
    const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + months, 1))
    const last = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate()
    date.setUTCDate(Math.min(now.getUTCDate(), last))
    return date.toISOString().slice(0, 10)
  }
  return { start: shift(-2), today: shift(0), end: shift(3) }
}
export function selectReleaseEntries(games: readonly Game[], section: 'recent' | 'upcoming', now: Date, filters: ReleaseFilters = { platform: '', month: '' }): ReleaseEntry[] {
  const { start, today, end } = releaseWindow(now)
  return games.flatMap(game => {
    const events = (game.releaseInfo?.events ?? []).filter(event => event.date !== null
      && (section === 'recent' ? event.date >= start && event.date <= today : event.date > today && event.date <= end)
      && (!filters.platform || event.platforms.includes(filters.platform))
      && (!filters.month || event.date.startsWith(filters.month)))
    return events.length ? [{ game, events }] : []
  }).sort((a, b) => {
    const aDate = a.events.map(event => event.date!).sort()[section === 'recent' ? a.events.length - 1 : 0]
    const bDate = b.events.map(event => event.date!).sort()[section === 'recent' ? b.events.length - 1 : 0]
    return (section === 'recent' ? bDate.localeCompare(aDate) : aDate.localeCompare(bDate)) || a.game.title.localeCompare(b.game.title)
  })
}
