import { LocalImage } from '../common/LocalImage'
import { DesignLink } from '../navigation/DesignLink'
import { games } from '../../data/games'
import type { Game, Guide } from '../../data/types'
import { formatDate } from '../../utils/format'

export function GuideCard({ guide, catalog = games }: { guide: Guide; catalog?: readonly Game[] }) {
  const game = catalog.find(game => game.id === guide.gameId)!
  return <article className="editorial-card guide-card" aria-labelledby={`${guide.id}-title`}>
    <DesignLink className="guide-card-image-link" to={`/guides/${guide.id}`} aria-label={`Read guide: ${guide.title}`} tabIndex={-1}><LocalImage media={game.cover} className="editorial-card-image" /></DesignLink>
    <div className="editorial-card-content">
      <div className="editorial-meta"><DesignLink to={`/games/${game.slug}`}>{game.title}</DesignLink><span className="editorial-category">{guide.type}</span></div>
      <h3 id={`${guide.id}-title`}><DesignLink to={`/guides/${guide.id}`}>{guide.title}</DesignLink></h3>
      <p className="editorial-summary">{guide.summary}</p>
      <div className="guide-meta"><span>Difficulty: {guide.difficulty}</span><span>Updated <time dateTime={guide.updatedDate}>{formatDate(guide.updatedDate)}</time></span></div>
      <DesignLink className="editorial-read-label" to={`/guides/${guide.id}`}>Read guide <span aria-hidden="true">↗</span></DesignLink>
    </div>
  </article>
}
