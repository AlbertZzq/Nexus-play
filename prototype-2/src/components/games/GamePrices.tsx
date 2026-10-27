import type { PriceQuote } from '../../data/prices'

function amount(cents: number, currency: string) {
  return `${new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100)} ${currency}`
}

export function GamePrices({ quotes }: { quotes: readonly PriceQuote[] }) {
  return <section className="details-section game-prices" aria-labelledby="game-prices-heading">
    <h2 id="game-prices-heading">Prices &amp; history</h2>
    <p className="details-meta">Prices stay separate by platform, store, region and edition. Sample prices are classroom demonstrations, not live offers.</p>
    {quotes.length ? <div className="price-quote-grid">{quotes.map(quote => <article className="price-quote" key={`${quote.platform}-${quote.store}-${quote.region}-${quote.currency}-${quote.edition}`}>
      <h3>{quote.store}</h3>
      <p className="price-context">{quote.platform} · {quote.region} · {quote.edition}</p>
      <p className="price-current">{quote.currentCents === null ? 'Current price unavailable' : `Current price: ${amount(quote.currentCents, quote.currency)}`}</p>
      <p className="details-meta">{quote.provenance === 'demo' ? 'Sample price' : 'Verified price'} · As of <time dateTime={quote.asOf}>{quote.asOf}</time>{quote.sourceUrl && <> · <a href={quote.sourceUrl} target="_blank" rel="noopener noreferrer">Price source</a></>}</p>
      <p className="price-history">{quote.historicalLow ? <>Historical low{(quote.historicalLow.rangeStart || quote.historicalLow.rangeEnd) && ' within recorded range'}: {amount(quote.historicalLow.cents, quote.currency)} | Date: <time dateTime={quote.historicalLow.date}>{quote.historicalLow.date}</time> | Store: {quote.store}</> : 'Historical low data not provided'}</p>
      {quote.historicalLow && <p className="details-meta">{(quote.historicalLow.rangeStart || quote.historicalLow.rangeEnd) && <>Recorded range: {quote.historicalLow.rangeStart ?? 'Start not provided'} to {quote.historicalLow.rangeEnd ?? 'End not provided'} · </>}<a href={quote.historicalLow.sourceUrl} target="_blank" rel="noopener noreferrer">Historical price source</a></p>}
    </article>)}</div> : <div className="price-unavailable"><p>Current price unavailable</p><p>Historical low data not provided</p><p className="details-meta">No store-specific price records provided for this game.</p></div>}
  </section>
}
