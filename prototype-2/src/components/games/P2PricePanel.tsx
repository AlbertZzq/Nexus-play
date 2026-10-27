import type { ReactNode } from 'react'
import { formatCad, type P2Game } from '../../data/p2Catalog'
import { isCurrentP2Offer } from '../../utils/p2Prices'

type Props = { game: P2Game; selectedPlatform: string; platformLinks: ReactNode }

function sourceLink(url: string, store: string, history = false) {
  if (!url) return null
  const label = history && url.includes('/history/') ? 'Price history source' : url.includes('itad.link') ? `View ${store} source (ITAD redirect)` : `View on ${store}`
  return <a href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>
}

export function P2PricePanel({ game, selectedPlatform, platformLinks }: Props) {
  const regular = game.basePrices.filter(price => price.platform === selectedPlatform)
  const snapshots = (game.currentPrices ?? []).filter(price => price.platform === selectedPlatform)
  const promotions = game.discounts.filter(discount => discount.platform === selectedPlatform)
  const datedOffers = promotions.filter(discount => isCurrentP2Offer(discount) && discount.offerUrl)
  const low = game.historicalLow?.platform === selectedPlatform ? game.historicalLow : null
  const hasMainPrice = datedOffers.length > 0 || snapshots.length > 0 || regular.length > 0
  const hasStoreLink = datedOffers.some(offer => offer.offerUrl) || snapshots.some(price => price.url) || regular.some(price => price.url)
  const stores = [...new Set([...regular, ...snapshots].map(price => price.store))]
  const promotionStores = [...new Set(promotions.map(promotion => promotion.store))]

  return <aside className="p2-price-rail p2-price-panel" id="p2-prices" tabIndex={-1} aria-labelledby="p2-price-heading">
    <p className="eyebrow">Canada · CAD · {selectedPlatform}</p>
    <h2 id="p2-price-heading">Prices</h2>
    <nav className="p2-price-platforms" aria-label="Price platform"><span>Prices for</span>{platformLinks}</nav>
    <p className="p2-price-caveat">Dated Canadian dollar records, not live prices.{hasStoreLink ? ' Confirm availability and the current amount at the store.' : ''}</p>

    {datedOffers.map(offer => <article className="p2-price-record p2-price-featured" key={`offer-${offer.store}-${offer.date}-${offer.finalCents}`}>
      <h3>Promotional price observed</h3>
      <p className="p2-price-amount">{formatCad(offer.finalCents)}</p>
      <p>{offer.store} · {offer.device} · {offer.edition}</p>
      <p>Canada · CAD · Recorded {offer.date} · Checked {offer.verifiedOn}</p>
      <p>Was {formatCad(offer.originalCents)} · {offer.cut}% off when checked · End date {offer.endDate ?? 'unknown'}</p>
      {sourceLink(offer.offerUrl!, offer.store)}
    </article>)}

    {snapshots.map(price => <article className="p2-price-record p2-price-featured" key={`snapshot-${price.store}-${price.edition}-${price.device}`}>
      <h3>Store price snapshot</h3>
      <p className="p2-price-amount">{price.cents === 0 ? 'Free to play' : formatCad(price.cents)}</p>
      <p>{price.store} · {price.device} · {price.edition}</p>
      <p>Canada · CAD · Observed {price.checkedOn} · {price.source}</p>
      {sourceLink(price.url, price.store)}
    </article>)}

    {regular.length > 0 && <section className="p2-price-regular" aria-label="Regular price records">
      <h3>Regular price records</h3>
      <p>Recorded standard prices; these are not confirmed current purchase prices.</p>
      <div className="p2-price-records">{regular.map(price => <article className="p2-price-record" key={`regular-${price.store}-${price.edition}-${price.device}`}>
        <p className="p2-price-amount">{price.cents === 0 ? 'Free to play' : formatCad(price.cents)}</p>
        <p>{price.device} · {price.store} · {price.edition}</p>
        <p>Canada · CAD · regular price record</p>
        <p>Source: {price.source} · Checked {price.checkedOn}</p>
        {sourceLink(price.url, price.store)}
      </article>)}</div>
    </section>}

    {!hasMainPrice && (low ? <article className="p2-price-record">
      <h3>Historical low only</h3>
      <p className="p2-price-amount">{formatCad(low.cents)}</p>
      <p>{low.store} · {low.edition} · Recorded {low.date}</p>
      <p>No reliable current or regular price record for {selectedPlatform}.</p>
      {sourceLink(low.url, low.store, true)}
    </article> : <p className="p2-price-unavailable">No verified price record for {selectedPlatform}.</p>)}

    <details className="p2-price-details">
      <summary>Price data details</summary>
      <div className="p2-price-detail-body">
        <section aria-label="Historical low">
          <h3>Historical low</h3>
          {low ? <p>{formatCad(low.cents)} · {low.store} · {low.edition} · Recorded {low.date} · {sourceLink(low.url, low.store, true)}</p> : <p>No historical low recorded for {selectedPlatform}.</p>}
        </section>
        <section aria-label="Recorded promotions">
          <h3>Recorded promotions</h3>
          {promotions.length ? <ol>{promotions.map(promotion => <li key={`${promotion.store}-${promotion.date}-${promotion.finalCents}`}>
            <p>{isCurrentP2Offer(promotion) ? 'Within recorded offer dates' : 'Past or unverified promotion'} · {promotion.store} · {formatCad(promotion.finalCents)} · Was {formatCad(promotion.originalCents)} · {promotion.cut}% off</p>
            <p>{promotion.device} · {promotion.edition} · Observed {promotion.date} · End date {promotion.endDate ?? 'unknown'} · Checked {promotion.verifiedOn}</p>
            <p>{promotion.statusBasis} {sourceLink(promotion.url, promotion.store, true)}</p>
          </li>)}</ol> : <p>No promotions recorded for {selectedPlatform}.</p>}
        </section>
        <section aria-label="Price coverage">
          <h3>Coverage</h3>
          <p>Stores with price records: {stores.length ? stores.join(', ') : 'none'}. Promotion sources: {promotionStores.length ? promotionStores.join(', ') : 'none'}.</p>
          <p>Canada/CAD only. Manually checked records are incomplete and may have changed. Each record uses its own source date.</p>
        </section>
      </div>
    </details>
  </aside>
}
