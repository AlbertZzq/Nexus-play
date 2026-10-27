import type { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Game } from '../../data/types'
import { LocalImage } from '../common/LocalImage'
import { DesignLink } from '../navigation/DesignLink'
import { P1Review } from '../../pages/P1Review'
import { releaseStatus } from '../../data/p1GameFacts'
import { formatDate } from '../../utils/format'
import { RatingBadge } from './RatingBadge'

export function GameCard({ game, compact = false, interactive = false, p1 = false }: { game: Game; compact?: boolean; interactive?: boolean; p1?: boolean }) {
  const navigate = useNavigate()
  const cover = <LocalImage media={game.cover} className="game-card-cover" />
  function openGame(event: MouseEvent<HTMLElement>) {
    if (!interactive || (event.target as HTMLElement).closest('a, button')) return
    void navigate(`/games/${game.slug}`)
  }
  return <article className={`${compact ? 'game-card game-card-compact' : 'game-card'}${interactive ? ' game-card-interactive' : ''}`} aria-labelledby={`game-title-${game.id}`} onClick={openGame}>
    {interactive ? <DesignLink className="game-card-cover-link" to={`/games/${game.slug}`} aria-label={`View ${game.title}`} tabIndex={-1}>{cover}</DesignLink> : cover}
    <div className="game-card-body">
      <div className="game-card-meta"><span>{game.genres.join(' · ')}</span>{p1 ? <span>{releaseStatus(game)}{game.releaseDate && <> · <time dateTime={game.releaseDate}>{formatDate(game.releaseDate)}</time></>}</span> : game.releaseDate ? <time dateTime={game.releaseDate}>{game.releaseDate.slice(0, 4)}</time> : <span>Release date TBA</span>}</div>
      <h3 id={`game-title-${game.id}`}><DesignLink to={`/games/${game.slug}`}>{game.title}</DesignLink></h3>
      {!compact && !p1 && <p className="game-card-description">{game.description}</p>}
      <p className="game-card-platforms"><span className="eyebrow">Platforms</span>{game.platforms.join(' · ')}</p>
      {p1 ? <P1Review game={game} compact /> : <div className="game-card-scores">
        <RatingBadge score={game.playerRating} />
        <div className="game-card-community"><span>{game.ratingCount.toLocaleString('en-US')} ratings</span>{game.criticScore !== null && <span>Critics {game.criticScore}/100</span>}</div>
      </div>}
    </div>
  </article>
}
