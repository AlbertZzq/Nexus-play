import { LocalImage } from '../common/LocalImage'
import { DesignLink } from '../navigation/DesignLink'
import { games } from '../../data/games'
import type { Deal } from '../../data/types'
import { discountPercent, formatMoney } from '../../utils/format'

export function DealCard({ deal }: { deal: Deal }) {
  const game = games.find(game => game.id === deal.gameId)!
  return <article className="deal-card" aria-labelledby={`${deal.id}-title`}>
    <LocalImage media={game.cover} className="deal-card-image" />
    <div className="deal-card-body">
      <div className="deal-card-meta"><span>{deal.platform}</span><span>{deal.status}</span></div>
      <h3 id={`${deal.id}-title`}><DesignLink to={`/games/${game.slug}`}>{game.title}</DesignLink></h3>
      <p className="deal-card-store">{deal.store}</p>
      <div className="deal-card-prices"><strong>{formatMoney(deal.currentCents)}</strong><del>{formatMoney(deal.originalCents)}</del><span className="deal-discount">{discountPercent(deal)}% off</span></div>
    </div>
  </article>
}
