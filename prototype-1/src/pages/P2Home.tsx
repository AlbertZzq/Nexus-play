import { Link } from 'react-router-dom'
import { LocalImage } from '../components/common/LocalImage'
import { P2PopularShowcase } from '../components/games/P2PopularShowcase'
import { P2Rankings } from '../components/games/P2Rankings'
import { mostReviewedRating } from '../utils/p2Rankings'
import { compactCount, p2Games, p2Genres } from '../data/p2Catalog'
import type { Platform } from '../data/types'
import '../styles/ratings-design.css'
import '../styles/p2-home-storefront.css'

const platforms: readonly Platform[] = ['PC', 'PlayStation', 'Xbox', 'Nintendo']
const modes = ['Single-player', 'Multiplayer'] as const
const featuredGame = p2Games.find(game => game.id === 'elden-ring')!

export function P2Home() {
  const popular = [...p2Games].sort((a, b) => (mostReviewedRating(b)?.count ?? 0) - (mostReviewedRating(a)?.count ?? 0) || a.title.localeCompare(b.title, 'en')).slice(0, 6)
  const gameCount = p2Games.length
  const genreCounts = p2Genres.map(genre => ({ genre, count: p2Games.filter(game => game.genres.includes(genre)).length }))
  const totalReviews = p2Games.reduce((sum, game) => sum + (mostReviewedRating(game)?.count ?? 0), 0)
  const quickGenres = [...genreCounts].sort((a, b) => b.count - a.count || a.genre.localeCompare(b.genre, 'en')).slice(0, 8)

  return <div className="p2-home">
    <section className="p2-home-hero" aria-label="Featured game">
      <LocalImage media={featuredGame.screenshots[0]} loading="eager" fallbackAlt={`Artwork unavailable for ${featuredGame.title}`} />
      <div className="p2-feature-copy">
        <p className="eyebrow">Featured game</p>
        <h1>{featuredGame.title}</h1>
        <p className="p2-feature-description">{featuredGame.description}</p>
        <Link className="p2-feature-cta" to={`/games/${featuredGame.slug}`}>View game <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <div className="p2-home-meta">
      <p className="p2-home-stat">{gameCount} games · {compactCount(totalReviews)} player ratings</p>
      <details className="p2-methodology">
        <summary>How these numbers are counted</summary>
        <p>Each game contributes only its most-reviewed external source, never a sum of sources. Review counts are not unique players or live player numbers.</p>
      </details>
    </div>

    <section className="p2-home-section" aria-labelledby="p2-popular-heading">
      <div className="p2-section-heading">
        <h2 id="p2-popular-heading">Popular with players</h2>
        <Link to="/games">Browse all {gameCount} games <span aria-hidden="true">↗</span></Link>
      </div>
      <p className="p2-section-note">Ordered by the largest single-source player-review count; score is not used for this order.</p>
      <P2PopularShowcase games={popular} />
    </section>

    <P2Rankings />

    <nav className="p2-quick-filters" aria-label="Quick filters">
      <div className="p2-quick-group"><span>Genres</span>{quickGenres.map(({ genre, count }) => <Link key={genre} to={`/games?genre=${encodeURIComponent(genre)}`}>{genre} <small>{count}</small></Link>)}</div>
      <div className="p2-quick-group"><span>Platforms</span>{platforms.map(platform => <Link key={platform} to={`/games?platform=${encodeURIComponent(platform)}`}>{platform} <small>{p2Games.filter(game => game.platforms.includes(platform)).length}</small></Link>)}</div>
      <div className="p2-quick-group"><span>Mode</span>{modes.map(mode => <Link key={mode} to={`/games?mode=${encodeURIComponent(mode)}`}>{mode} <small>{p2Games.filter(game => game.modes.includes(mode)).length}</small></Link>)}</div>
    </nav>

    <section className="p2-home-section" aria-labelledby="p2-genres-heading">
      <div className="p2-section-heading"><h2 id="p2-genres-heading">Explore by genre</h2></div>
      <p className="p2-section-note">Every game has one primary genre for display and several searchable genres. Counts overlap, so they do not add up to {gameCount}.</p>
      <div className="p2-genre-grid">{genreCounts.map(({ genre, count }) => <Link key={genre} className="p2-genre-card" to={`/games?genre=${encodeURIComponent(genre)}`}>
        <span className="p2-genre-name">{genre}</span>
        <span className="p2-genre-count">{count} {count === 1 ? 'game' : 'games'}</span>
        <span className="p2-genre-arrow" aria-hidden="true">↗</span>
      </Link>)}</div>
    </section>
  </div>
}
