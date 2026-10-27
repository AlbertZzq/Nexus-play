import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { LocalImage } from '../components/common/LocalImage'
import { P2PricePanel } from '../components/games/P2PricePanel'
import { PageHeader } from '../components/common/PageHeader'
import { formatRating, guidesForGame, p2BySlug, type P2Game } from '../data/p2Catalog'
import type { Platform } from '../data/types'
import { formatDate } from '../utils/format'
import { readP2Return, safeP2ReturnTo } from '../utils/p2ReturnContext'
import '../styles/ratings-design.css'
import '../styles/p2-prices.css'

export function P2GameDetails() {
  const { slug } = useParams()
  const location = useLocation()
  const routeState = location.state as { fromGames?: string; scrollY?: number } | null
  const rawReturnTo = new URLSearchParams(location.search).get('returnTo')
  const backTo = rawReturnTo !== null ? safeP2ReturnTo(rawReturnTo) : safeP2ReturnTo(routeState?.fromGames)
  const game = slug ? p2BySlug.get(slug) : undefined
  const restoreScroll = backTo.startsWith('/guides') ? (game ? readP2Return(game.id, backTo) : undefined) : typeof routeState?.scrollY === 'number' ? routeState.scrollY : game ? readP2Return(game.id, backTo) : undefined
  const backLabel = backTo.startsWith('/guides') ? 'Guides' : 'Games'

  if (!game) return <div className="p2-detail-page">
    <PageHeader title="Game not found" description="This game is not in the Prototype 2 catalogue." />
    <Link className="button-link" to={backTo}>Back to {backLabel}</Link>
  </div>

  return <P2GameDetailView key={game.id} game={game} backTo={backTo} backLabel={backLabel} restoreScroll={restoreScroll} />
}

function P2GameDetailView({ game, backTo, backLabel, restoreScroll }: { game: P2Game; backTo: string; backLabel: string; restoreScroll?: number }) {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.hash === '#p2-prices') document.getElementById('p2-prices')?.focus({ preventScroll: true })
  }, [location.hash])
  const guides = guidesForGame(game.id)
  const ratings = [...game.ratings].filter(rating => Number.isFinite(rating.score) && rating.score > 0 && rating.score <= (rating.scale === 'percent' ? 100 : 10)).sort((a, b) => b.count - a.count)
  const topRating = ratings[0]
  const gallery = game.screenshots.length ? [...game.screenshots, game.cover] : [game.cover]
  const [activeSrc, setActiveSrc] = useState(game.screenshots[0]?.src ?? game.cover.src)
  const activeImage = gallery.find(media => media.src === activeSrc) ?? gallery[0]
  const requestedPlatform = new URLSearchParams(location.search).get('platform')
  const fallbackPlatform = game.platforms.includes('PC')
    ? 'PC'
    : game.platforms.find(platform => game.basePrices.some(price => price.platform === platform)) ?? game.platforms[0]
  const selectedPlatform = requestedPlatform || fallbackPlatform

  function platformHref(platform: Platform) {
    const params = new URLSearchParams(location.search)
    params.set('platform', platform)
    return `/games/${game.slug}?${params.toString()}${location.hash}`
  }

  function jumpToPrices(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const region = document.getElementById('p2-prices')
    if (!region) return
    void navigate({ pathname: location.pathname, search: location.search, hash: '#p2-prices' }, { replace: true, state: location.state, preventScrollReset: true })
    requestAnimationFrame(() => {
      window.scrollTo({ top: Math.max(0, window.scrollY + region.getBoundingClientRect().top - 16) })
      region.focus({ preventScroll: true })
    })
  }

  return <div className="p2-detail-page">
    <Link className="p2-back" to={backTo} state={restoreScroll === undefined ? undefined : { restoreScroll }}>← Back to {backLabel}</Link>
    <section className="p2-detail-hero" aria-label="Game overview">
      <div className="p2-detail-media">
        <figure className="p2-detail-main-image"><LocalImage fallbackAlt={`Artwork unavailable for ${game.title}`} media={activeImage} loading="eager" /></figure>
        {gallery.length > 1 && <div className="p2-gallery-thumbs" aria-label="Game images">
          {gallery.map((media, index) => <button
            key={media.src}
            type="button"
            className="p2-gallery-thumb"
            aria-pressed={media.src === activeImage.src}
            aria-label={index === gallery.length - 1 && game.screenshots.length ? 'Show cover art' : `Show screenshot ${index + 1}`}
            onClick={() => setActiveSrc(media.src)}
          ><LocalImage fallbackAlt={`Artwork unavailable for ${game.title}`} media={media} /></button>)}
        </div>}
      </div>
      <div className="p2-detail-intro">
        <p className="eyebrow">{game.primaryGenre} · {game.tags.join(' · ')}</p>
        <h1>{game.title}</h1>
        <p className="p2-detail-description">{game.description}</p>
        {topRating && <div className="p2-hero-rating">
          <strong>{formatRating(topRating)}</strong>
          <div><p>{topRating.source} · {topRating.label}</p><p>{topRating.platform} · {topRating.scale === 'percent' ? 'Positive-review percentage' : 'User score out of 10'}</p><p>{topRating.scope ? `${topRating.scope} · ` : ''}{topRating.countLabel} ratings · Checked {topRating.checkedOn}</p></div>
          <a href="#p2-ratings">All ratings <span aria-hidden="true">↓</span></a>
        </div>}
        <dl className="p2-facts">
          <div><dt>{game.releaseDates?.length ? 'Original release' : 'Released'}</dt><dd><time dateTime={game.releaseDate}>{formatDate(game.releaseDate)}</time></dd></div>
          {game.releaseDates?.map(release => <div key={`${release.platform}-${release.date}`}><dt>{release.platform} release</dt><dd><a href={release.sourceUrl} target="_blank" rel="noopener noreferrer"><time dateTime={release.date}>{formatDate(release.date)}</time></a></dd></div>)}
          <div><dt>Genres</dt><dd>{game.genres.join(' · ')}</dd></div>
          <div><dt>Developer</dt><dd>{game.developer}</dd></div>
          <div><dt>Publisher</dt><dd>{game.publisher}</dd></div>
          <div><dt>Platforms</dt><dd>{game.platformDetails.join(' · ')}</dd></div>
          <div><dt>Play modes</dt><dd>{[...game.modes, ...(game.multiplayer ?? [])].join(' · ')}</dd></div>
        </dl>
        {game.modes.includes('Multiplayer') && <p className="p2-mode-note">Online modes require an internet connection; local co-op is same-device play. Cross-play is not implied.</p>}
      </div>
    </section>

    <nav className="p2-detail-jump" aria-label="On this page">
      <a href="#p2-ratings">Ratings</a>
      <a href="#p2-prices" onClick={jumpToPrices}>Prices</a>
      <a href="#p2-guides">Guides</a>
    </nav>

    <div className="p2-detail-layout">
      <div className="p2-detail-main">
        <section className="p2-detail-section" id="p2-ratings" tabIndex={-1} aria-labelledby="p2-ratings-heading">
          <div className="p2-section-heading"><div><p className="eyebrow">What players say</p><h2 id="p2-ratings-heading">External player ratings</h2></div></div>
          <p className="p2-section-note">Ordered by number of player ratings. Steam is a positive-review percentage; Metacritic is its own 10-point user score. Nothing is averaged into a NexusPlay score.</p>
          <details className="p2-rating-method"><summary>How to read these scores</summary><p>Steam’s percentage is the share of positive reviews, not an average out of 10. Metacritic’s User Score is a 10-point average. The two scales are not converted or combined, and each number belongs only to the platform listed beside it. Sources with no reliable count are not used for ordering.</p></details>
          {ratings.length ? <div className="p2-rating-list">{ratings.map(rating => <article className="p2-rating-row" key={`${rating.source}-${rating.url}`}>
            <div className="p2-rating-score">{formatRating(rating)}</div>
            <div className="p2-rating-copy"><h3>{rating.source}</h3><p>{rating.label} · {rating.platform}{rating.scope ? ` · ${rating.scope}` : ''}</p><p>{rating.approxCount ? `${rating.countLabel} player ratings (approximately)` : `${rating.count.toLocaleString('en-US')} player ratings`} · Checked {rating.checkedOn}</p><a href={rating.url} target="_blank" rel="noopener noreferrer">Original player rating page ↗</a></div>
          </article>)}</div> : <p className="p2-empty">No reliable player ratings found for this game.</p>}
        </section>

      </div>

      <P2PricePanel game={game} selectedPlatform={selectedPlatform} platformLinks={game.platforms.map(platform =>
        <Link key={platform} to={platformHref(platform)} state={location.state} aria-current={platform === selectedPlatform ? 'page' : undefined}>{platform}</Link>
      )} />

      <section className="p2-detail-section p2-detail-guides" id="p2-guides" tabIndex={-1} aria-labelledby="p2-guides-heading">
        <div className="p2-section-heading"><div><p className="eyebrow">Go deeper</p><h2 id="p2-guides-heading">Selected guides for {game.title}</h2></div><Link to={`/guides?game=${game.id}`}>All guides for this game <span aria-hidden="true">↗</span></Link></div>
        {guides.length ? <div className="p2-guide-links">{guides.map(guide => <article key={guide.id}>
          <p className="p2-guide-source">{guide.type} · {guide.source}</p>
          <h3><a href={guide.url} target="_blank" rel="noopener noreferrer">{guide.title} ↗</a></h3>
          <p className="p2-guide-byline">By {guide.author} · {guide.platform} · Checked {guide.checkedOn}</p>
          {guide.versionNote && <p className="p2-guide-version">{guide.versionNote}</p>}
          <p>{guide.summary}</p>
          <p className="p2-guide-selection">{guide.selection}</p>
        </article>)}</div> : <p className="p2-empty">No reliable external guide was found for this game.</p>}
        <a className="p2-guide-browse" href={game.guideHubUrl} target="_blank" rel="noopener noreferrer">Browse more guides (directory) ↗</a>
        <p className="p2-muted">External links only. NexusPlay does not host full guide text or embed videos. Version notes are shown where the source makes a limitation clear.</p>
      </section>
    </div>
  </div>
}
