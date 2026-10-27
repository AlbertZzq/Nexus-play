import { useParams } from 'react-router-dom'
import { LocalImage } from '../components/common/LocalImage'
import { PageHeader } from '../components/common/PageHeader'
import { GameGrid } from '../components/games/GameGrid'
import { RatingBadge } from '../components/games/RatingBadge'
import { DesignLink } from '../components/navigation/DesignLink'
import { useDesign } from '../app/DesignProvider'
import { GamePrices } from '../components/games/GamePrices'
import { priceQuotes } from '../data/prices'
import { games } from '../data/games'
import { p1Catalog } from '../data/p1Catalog'
import { p1HeroArt } from '../data/p1HeroArt'
import { P1Review } from './P1Review'
import { p1GuideLibrary } from '../data/p1GuideLibrary'
import { p1Newsroom } from '../data/p1Newsroom'
import { releaseStatus, selectedGameDate, storeLinks } from '../data/p1GameFacts'
import { guides } from '../data/guides'
import { reviews } from '../data/reviews'
import { useWishlist } from '../hooks/useWishlist'
import { formatDate } from '../utils/format'
import '../styles/pages.css'

export function GameDetails() {
  const { slug } = useParams()
  const { design } = useDesign()
  const game = (design === '1' ? p1Catalog : games).find(item => item.slug === slug)
  const { saved, toggle } = useWishlist(game?.id ?? '', design === '1' ? p1Catalog : games)
  const backTo = design === '1' ? '/games' : '/discover'
  const backLabel = design === '1' ? 'Back to Games' : 'Back to Discover'

  if (!game) return <div className="game-details-page">
    <PageHeader title="Game not found" description="This game is not in the prototype library. Explore Discover to find your next game." />
    <DesignLink to={backTo} className="button-link">{backLabel}</DesignLink>
  </div>

  const sourced = design === '1'
  const heroArt = design === '1' ? p1HeroArt[game.id] : undefined
  const relatedNews = design === '1' ? p1Newsroom.filter(story => story.gameIds.includes(game.id)) : []
  const relatedGuides = (design === '1' ? p1GuideLibrary : guides).filter(guide => guide.gameId === game.id)
  const relatedReviews = (design === '1' ? [] : reviews).filter(review => review.gameId === game.id)

  const similar = (design === '1' ? p1Catalog : games)
    .filter(candidate => candidate.id !== game.id)
    .map(candidate => ({ game: candidate, overlap: candidate.genres.filter(genre => game.genres.includes(genre)).length + candidate.platforms.filter(platform => game.platforms.includes(platform)).length }))
    .filter(candidate => candidate.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap || a.game.title.localeCompare(b.game.title, 'en') || a.game.id.localeCompare(b.game.id, 'en'))
    .slice(0, 3)
    .map(candidate => candidate.game)

  const displayedDate = design === '1' ? selectedGameDate(game) : game.releaseDate

  return <div className="game-details-page">
    <DesignLink className="details-back" to={backTo}>{backLabel}</DesignLink>
    <section className="game-overview" aria-label="Game overview">
      <figure className="details-cover">
        <LocalImage media={heroArt ? { src: heroArt, alt: `${game.title} — official key art`, kind: 'official' } : game.cover} />
        <figcaption>{game.cover.kind === 'prototype' ? 'Prototype title illustration' : 'Official game artwork'}</figcaption>
      </figure>
      <div className="game-overview-content">
        <p className="eyebrow">Explore the game</p>
        <PageHeader title={game.title} description={game.description} />
        <dl className="game-facts">
          <div><dt>Genres</dt><dd>{game.genres.join(' · ')}</dd></div>
          <div><dt>Platforms</dt><dd>{game.platforms.join(' · ')}</dd></div>
          <div><dt>Release date</dt><dd>{displayedDate ? <time dateTime={displayedDate}>{formatDate(displayedDate)}</time> : 'Release date TBA'}</dd></div>
          {design === '1' && <div><dt>Release status</dt><dd>{releaseStatus(game)}</dd></div>}
        </dl>
        <div className="details-ratings">{sourced ? <section aria-label="Sourced player reviews"><P1Review game={game} /></section> : <>
          <RatingBadge score={game.playerRating} />
          <div className="details-rating-context"><span>{game.ratingCount.toLocaleString('en-US')} ratings</span>{game.recommendationPercent !== null && <span>{game.recommendationPercent}% recommend</span>}{game.criticScore !== null && <span>Critics {game.criticScore}/100</span>}</div>
        </>} </div>
        <div className="wishlist-controls">
          <button type="button" aria-pressed={saved} onClick={toggle}>{saved ? 'Remove from wishlist' : 'Add to wishlist'}</button>
          <p>Saved on this device when browser storage is available.</p>
        </div>
      </div>
    </section>
    {design === '1' && <section className="details-section" aria-labelledby="official-links-heading">
      <h2 id="official-links-heading">Official stores and release calendar</h2>
      <div className="details-content-list">{storeLinks(game).map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}<DesignLink to="/calendar">View release calendar</DesignLink></div>
    </section>}
    {game.releaseInfo && <section className="details-section" aria-labelledby="verified-release-heading">
      <h2 id="verified-release-heading">Verified release information</h2>
      <p className="details-meta">Dates below retain each publisher or regional storefront's calendar date. {sourced ? 'Each entry includes its source and checked date.' : 'Sources checked on October 21, 2026.'}</p>
      <dl className="game-facts">{game.releaseInfo.events.map((event, index) => <div key={index}>
        <dt>{event.platformLabel}</dt>
        <dd>{event.date ? <time dateTime={event.date}>{formatDate(event.date)}</time> : 'Release date TBA'} · {event.kind} · <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer">Official release source</a> · Checked {event.checkedOn}</dd>
      </div>)}</dl>
      <a href={game.releaseInfo.trailerUrl} target="_blank" rel="noopener noreferrer">{sourced ? 'View trailer on official site' : 'Watch official trailer'}</a>
    </section>}
    <section className="details-section" aria-labelledby="game-media-heading">
      <h2 id="game-media-heading">Game media</h2>
      <div className="details-media-grid">{game.screenshots.map(media => <figure key={media.src}>
        <LocalImage media={media} />
        <figcaption>{media.kind === 'prototype' ? 'Prototype illustration · Not a gameplay screenshot' : 'Official game image'}</figcaption>
      </figure>)}</div>
    </section>
    <div className="details-related-layout">
      <section className="details-section" aria-labelledby="related-guides-heading">
        <h2 id="related-guides-heading">Related guides</h2>
        {relatedGuides.length ? <div className="details-content-list">{relatedGuides.map(guide => design === '1' ? <article className="details-review" key={guide.id}>
          <h3><DesignLink to={`/guides/${guide.id}`}>{guide.title}</DesignLink></h3>
          <p>{guide.summary}</p>
          <p className="details-meta">{guide.type} · {guide.difficulty} · Updated <time dateTime={guide.updatedDate}>{formatDate(guide.updatedDate)}</time></p>
        </article> : <details className="details-guide" key={guide.id}>
          <summary>{guide.title}</summary>
          <div className="details-guide-content">
            <p className="details-meta">{guide.type} · {guide.difficulty} · Updated <time dateTime={guide.updatedDate}>{formatDate(guide.updatedDate)}</time></p>
            <p>{guide.summary}</p>
            {guide.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </details>)}</div> : <p className="details-empty">No related guides in this prototype.</p>}
      </section>
      {design === '2' && <section className="details-section" aria-labelledby="player-reviews-heading">
        <h2 id="player-reviews-heading">Player reviews</h2>
        {relatedReviews.length ? <div className="details-content-list">{relatedReviews.map(review => <article className="details-review" key={review.id}>
          <div className="details-review-heading"><h3>{review.author}</h3><RatingBadge score={review.score} label="Review score" /></div>
          <p>{review.excerpt}</p>
        </article>)}</div> : <p className="details-empty">No player reviews in this prototype.</p>}
      </section>}
    </div>
    {design === '1' && relatedNews.length > 0 && <section className="details-section" aria-labelledby="related-news-heading">
      <h2 id="related-news-heading">Related news and official updates</h2>
      <div className="details-content-list">{relatedNews.map(story => <article className="details-review" key={story.id}><h3><DesignLink to={`/news#${story.id}-title`}>{story.title}</DesignLink></h3><p>{story.summary}</p></article>)}</div>
    </section>}
    {design === '2' && <GamePrices quotes={priceQuotes.filter(quote => quote.gameId === game.id)} />}
    <section className="details-section" aria-labelledby="similar-games-heading">
      <h2 id="similar-games-heading">Similar games</h2>
      <p className="details-meta">More to explore with shared genres or platforms.</p>
      <GameGrid games={similar} p1={design === '1'} />
    </section>
  </div>
}
