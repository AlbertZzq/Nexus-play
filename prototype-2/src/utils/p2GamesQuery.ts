import { p2Genres } from '../data/p2Catalog'
import type { Platform } from '../data/types'

export const p2Platforms: readonly Platform[] = ['PC', 'PlayStation', 'Xbox', 'Nintendo']
export const p2Modes = ['Single-player', 'Multiplayer', 'Online co-op', 'Local co-op', 'Local versus', 'Online PvP'] as const

export function parseGamesQuery(params: URLSearchParams) {
  const q = (params.get('q') ?? '').trim()
  const genre = p2Genres.includes(params.get('genre') ?? '') ? params.get('genre')! : ''
  const platform: Platform | '' = p2Platforms.includes(params.get('platform') as Platform) ? params.get('platform') as Platform : ''
  const mode = p2Modes.find(value => value === params.get('mode')) ?? ''
  const sort = params.get('sort') === 'name' ? 'name' : 'reviews'
  const values: Record<string, string> = { q, genre, platform, mode, sort }
  const canonical = new URLSearchParams()
  const ignored: string[] = []
  for (const [key, value] of params) {
    if (!(key in values) || canonical.has(key)) continue
    if (value && (key === 'q' || value === values[key])) canonical.set(key, values[key])
    else if (value) ignored.push(`${key} “${value}”`)
  }
  return { q, genre, platform, mode, sort, canonical, ignored }
}
