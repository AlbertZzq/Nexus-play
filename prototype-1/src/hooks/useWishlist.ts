import { useState } from 'react'
import { games } from '../data/games'
import type { Game } from '../data/types'

const storageKey = 'nexusplay.wishlist'
let sessionIds = new Set<string>()
let storageAvailable = true

function readWishlist(validIds: ReadonlySet<string>): Set<string> {
  if (!storageAvailable) return sessionIds
  try {
    const raw = localStorage.getItem(storageKey)
    let parsed: unknown
    try {
      parsed = JSON.parse(raw ?? '[]')
    } catch {
      return sessionIds
    }
    if (Array.isArray(parsed)) sessionIds = new Set(parsed.filter((id): id is string => typeof id === 'string' && validIds.has(id)))
  } catch {
    storageAvailable = false
  }
  return sessionIds
}

export function useWishlist(gameId: string, catalog: readonly Game[] = games): { saved: boolean; toggle: () => void } {
  const validIds = new Set(catalog.map(game => game.id))
  const [ids, setIds] = useState(() => readWishlist(validIds))

  function toggle() {
    if (!validIds.has(gameId)) return
    const next = new Set(sessionIds)
    if (next.has(gameId)) next.delete(gameId)
    else next.add(gameId)
    sessionIds = next
    setIds(next)
    if (storageAvailable) {
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]))
      } catch {
        storageAvailable = false
      }
    }
  }

  return { saved: ids.has(gameId), toggle }
}
