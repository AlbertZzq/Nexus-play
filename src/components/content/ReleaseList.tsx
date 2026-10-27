import { games } from '../../data/games'
import type { Game, Release } from '../../data/types'
import { formatDate } from '../../utils/format'
import { LocalImage } from '../common/LocalImage'
import { DesignLink } from '../navigation/DesignLink'

export function ReleaseList({ items, catalog = games, showImages = false }: { items: readonly Release[]; catalog?: readonly Game[]; showImages?: boolean }) {
  return <ol className="release-list">{items.map(release => {
    const game = catalog.find(game => game.id === release.gameId)!
    return <li key={release.id} className={`release-row${showImages ? ' release-row-with-image' : ''}`}>
      {showImages && <DesignLink className="release-row-art" to={`/games/${game.slug}`} aria-label={`View ${game.title}`} tabIndex={-1}><LocalImage media={game.cover} /></DesignLink>}
      <span className="release-day" aria-hidden="true">{release.date.slice(8)}</span>
      <div className="release-content"><h3><DesignLink to={`/games/${game.slug}`}>{game.title}</DesignLink></h3><p>{release.platforms.join(' · ')}</p><p>{game.genres.join(' · ')}</p></div>
      <time dateTime={release.date}>{formatDate(release.date)}</time>
    </li>
  })}</ol>
}
