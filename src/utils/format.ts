import type { Deal } from '../data/types'

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
const date = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

export function discountPercent(deal: Deal): number {
  return deal.originalCents === 0 ? 0 : Math.floor((deal.originalCents - deal.currentCents) * 100 / deal.originalCents)
}

export function formatMoney(cents: number): string {
  return money.format(cents / 100)
}

export function formatDate(iso: string | null): string {
  if (iso === null) return 'Release date TBA'
  return date.format(new Date(`${iso}T00:00:00Z`))
}

export function monthKey(iso: string): string {
  return iso.slice(0, 7)
}
