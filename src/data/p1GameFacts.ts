import { p1Anticipated } from './p1Anticipated'
import type { Game } from './types'
export function selectedGameDate(game: Game): string | null { return game.releaseDate }
export function releaseStatus(game: Game, now = new Date()): 'Released' | 'Upcoming' | 'Date TBA' {
  const date = selectedGameDate(game)
  return date === null ? 'Date TBA' : date <= now.toISOString().slice(0, 10) ? 'Released' : 'Upcoming'
}
export function storeLinks(game: Game): { label: string; url: string }[] {
  const query = encodeURIComponent(game.title)
  const events = game.releaseInfo?.events ?? []
  return game.platforms.map(platform => {
    const store = platform === 'PC' ? 'Steam' : platform === 'PlayStation' ? 'PlayStation Store' : platform === 'Xbox' ? 'Xbox Store' : 'Nintendo eShop'
    const matches = (url: string) => platform === 'PC' ? /^https:\/\/store.steampowered.com\/app\/\d+/.test(url) : platform === 'PlayStation' ? url.includes('store.playstation.com/') : platform === 'Xbox' ? /xbox.com\/.+\/store\//.test(url) : url.includes('nintendo.com/us/store/products/')
    const steamAppId = platform === 'PC' ? p1Anticipated.find(entry => entry.gameId === game.id)?.steamAppId : undefined
    const direct = steamAppId ? `https://store.steampowered.com/app/${steamAppId}/` : events.find(event => event.platforms.includes(platform) && matches(event.sourceUrl))?.sourceUrl
    const search = platform === 'PC' ? `https://store.steampowered.com/search/?term=${query}` : platform === 'PlayStation' ? `https://store.playstation.com/en-us/search/${query}` : platform === 'Xbox' ? `https://www.xbox.com/en-US/search?q=${query}` : `https://www.nintendo.com/us/search/#q=${query}`
    return { label: direct ? store : `Search on ${store}`, url: direct ?? search }
  })
}
