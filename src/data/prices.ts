import { deals } from './deals'
import type { Platform } from './types'

export const priceStores = ['Steam', 'Epic Games Store', 'GOG', 'Microsoft Store', 'EA', 'Ubisoft', 'Battle.net', 'PlayStation Store', 'Xbox Store', 'Nintendo eShop'] as const
export type PriceStore = typeof priceStores[number]
export interface PriceQuote {
  gameId: string
  platform: Platform
  store: PriceStore
  region: string
  currency: string
  edition: string
  currentCents: number | null
  asOf: string
  provenance: 'demo' | 'verified'
  sourceUrl?: string
  historicalLow: null | { cents: number; date: string; sourceUrl: string; rangeStart?: string; rangeEnd?: string }
}

// Existing classroom offers only. The date describes this demo snapshot, not a live store check.
// Ended sample offers provide store context but no current quote or historical evidence.
export const priceQuotes: readonly PriceQuote[] = deals.flatMap(deal => {
  const store = priceStores.find(name => name === deal.store)
  return store ? [{
    gameId: deal.gameId, platform: deal.platform, store,
    region: 'United States', currency: 'USD', edition: 'Standard Edition',
    currentCents: deal.status === 'Sample active' ? deal.currentCents : null,
    asOf: '2026-10-21', provenance: 'demo' as const, historicalLow: null,
  }] : []
})
