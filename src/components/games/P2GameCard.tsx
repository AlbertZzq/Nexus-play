import type { MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LocalImage } from '../common/LocalImage'
import { formatRating, primaryRating, type P2Game } from '../../data/p2Catalog'
import { rememberGamesReturn, safeGamesReturnTo } from '../../utils/p2ReturnContext'

function modeLabel(game: P2Game) {
  return [...game.modes, ...(game.multiplayer ?? [])].join(' · ')
}

export function P2GameCard({ game }: { game: P2Game }) {
  const location = useLocation()
  const navigate = useNavigate()
  const backTo = safeGamesReturnTo(location.pathname === '/games' ? `/games${location.search}` : '/games')
  const platformFilter = new URLSearchParams(location.search).get('platform')
  const detailParams = new URLSearchParams()
  if (platformFilter && game.platforms.some(platform => platform === platformFilter)) detailParams.set('platform', platformFilter)
  if (location.pathname === '/games') detailParams.set('returnTo', backTo)
  const detailPath = `/games/${game.slug}${detailParams.size ? `?${detailParams.toString()}` : ''}`
  const rating = primaryRating(game)

  function open(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (location.pathname === '/games') rememberGamesReturn(game.id, backTo, window.scrollY)
    navigate(detailPath, { state: { fromGames: backTo, scrollY: window.scrollY } })
  }
  return <article className="p2-game-card" aria-labelledby={`p2-game-${game.id}`}>
    <Link className="p2-card-cover" to={detailPath} state={{ fromGames: backTo }} onClick={open} aria-label={`View ${game.title}`} tabIndex={-1}>
      <LocalImage media={game.cover} fallbackAlt={`Artwork unavailable for ${game.title}`} />
    </Link>
    <div className="p2-card-body">
      <p className="p2-card-kicker">{game.primaryGenre}<span>{game.tags.slice(0, 2).join(' · ')}</span></p>
      <h3 id={`p2-game-${game.id}`}><Link to={detailPath} state={{ fromGames: backTo }} onClick={open}>{game.title}</Link></h3>
      <p className="p2-card-blurb">{game.cardBlurb}</p>
      <p className="p2-card-platforms">{game.platformDetails.join(' · ')}</p>
      <p className="p2-card-mode">{modeLabel(game)}</p>
      <div className="p2-card-rating">
        {rating ? <><strong>{formatRating(rating)}</strong><span>{rating.source} · {rating.platform} · {rating.label} · {rating.countLabel} ratings</span></> : <span>No reliable player rating</span>}
      </div>
    </div>
  </article>
}
