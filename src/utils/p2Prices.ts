import type { P2Discount } from '../data/p2Catalog'

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

export function isCurrentP2Offer(discount: P2Discount, today = new Date().toISOString().slice(0, 10)) {
  if (discount.status !== 'active' || !validDate(today) || !validDate(discount.date) || !validDate(discount.verifiedOn)) return false
  if (discount.date > today || discount.verifiedOn > today) return false
  if (discount.endDate) return validDate(discount.endDate) && discount.endDate >= today
  return discount.verifiedOn === today
}
