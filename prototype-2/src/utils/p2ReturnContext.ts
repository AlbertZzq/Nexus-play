import { guidesForGame, p2Games, p2Guides } from '../data/p2Catalog'
import { parseGamesQuery } from './p2GamesQuery'

const storageKey = 'p2:return-scroll'
const maxAge = 30 * 60 * 1000
const maxRecords = 40
interface ScrollRecord { gameSlug: string; returnTo: string; scrollY: number; savedAt: number }

export function safeGamesReturnTo(value: string | null | undefined): string {
  if (!value || !/^\/games(?:\?|$)/.test(value) || /[\\#]/.test(value)) return '/games'
  try {
    decodeURIComponent(value)
    const url = new URL(value, window.location.origin)
    if (url.pathname !== '/games') return '/games'
    const { canonical } = parseGamesQuery(url.searchParams)
    return `/games${canonical.size ? `?${canonical.toString()}` : ''}`
  } catch {
    return '/games'
  }
}

export function safeGuidesReturnTo(value: string | null | undefined): string {
  if (!value || !/^\/guides(?:\?|$)/.test(value) || /[\\#]/.test(value)) return '/guides'
  try {
    decodeURIComponent(value)
    const url = new URL(value, window.location.origin)
    if (url.pathname !== '/guides') return '/guides'
    const params = url.searchParams
    const q = (params.get('q') ?? '').trim()
    const game = p2Games.find(item => item.id === params.get('game'))?.id ?? ''
    const type = p2Guides.some(guide => guide.type === params.get('type')) ? params.get('type')! : ''
    const games = p2Games.filter(item => (!q || item.title.toLowerCase().includes(q.toLowerCase()))
      && (!game || item.id === game)
      && guidesForGame(item.id).some(guide => !type || guide.type === type))
    const pageCount = Math.max(1, Math.ceil(games.length / 6))
    const rawPage = params.get('page')
    const parsedPage = rawPage && /^[1-9]\d*$/.test(rawPage) ? Number(rawPage) : 1
    const page = Number.isSafeInteger(parsedPage) ? Math.min(parsedPage, pageCount) : 1
    const canonical = new URLSearchParams()
    for (const [key] of params) {
      if (canonical.has(key)) continue
      if (key === 'q' && q) canonical.set(key, q)
      if (key === 'game' && game) canonical.set(key, game)
      if (key === 'type' && type) canonical.set(key, type)
      if (key === 'page' && page > 1) canonical.set(key, String(page))
    }
    return `/guides${canonical.size ? `?${canonical.toString()}` : ''}`
  } catch {
    return '/guides'
  }
}

export function safeP2ReturnTo(value: string | null | undefined): string {
  if (value && /^\/guides(?:\?|$)/.test(value) && !/[\\#]/.test(value)) {
    try {
      decodeURIComponent(value)
      return safeGuidesReturnTo(value)
    } catch {
      return '/games'
    }
  }
  return safeGamesReturnTo(value)
}

function canonicalKey(value: string) {
  const url = new URL(safeP2ReturnTo(value), window.location.origin)
  url.searchParams.sort()
  return `${url.pathname}${url.search}`
}

function readRecords(): ScrollRecord[] {
  try {
    const parsed: unknown = JSON.parse(sessionStorage.getItem(storageKey) ?? '[]')
    if (!Array.isArray(parsed)) return []
    const now = Date.now()
    return parsed.filter((record): record is ScrollRecord => record !== null && typeof record === 'object'
      && typeof record.gameSlug === 'string' && typeof record.returnTo === 'string'
      && Number.isFinite(record.scrollY) && record.scrollY >= 0
      && Number.isFinite(record.savedAt) && record.savedAt > 0 && now >= record.savedAt && now - record.savedAt <= maxAge
      && canonicalKey(record.returnTo) === record.returnTo).slice(-maxRecords)
  } catch {
    return []
  }
}

export function rememberP2Return(gameSlug: string, returnTo: string, scrollY: number) {
  if (!gameSlug || !Number.isFinite(scrollY) || scrollY < 0) return
  try {
    const key = canonicalKey(returnTo)
    const records = readRecords().filter(record => record.gameSlug !== gameSlug || record.returnTo !== key)
    records.push({ gameSlug, returnTo: key, scrollY, savedAt: Date.now() })
    sessionStorage.setItem(storageKey, JSON.stringify(records.slice(-maxRecords)))
  } catch {
    // URL context still works when storage is unavailable.
  }
}

export function readP2Return(gameSlug: string, returnTo: string): number | undefined {
  const key = canonicalKey(returnTo)
  return readRecords().find(record => record.gameSlug === gameSlug && record.returnTo === key)?.scrollY
}

export function rememberGamesReturn(gameSlug: string, returnTo: string, scrollY: number) {
  rememberP2Return(gameSlug, safeGamesReturnTo(returnTo), scrollY)
}

export function readGamesReturn(gameSlug: string, returnTo: string): number | undefined {
  return readP2Return(gameSlug, safeGamesReturnTo(returnTo))
}
