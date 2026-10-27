import { useState } from 'react'
import { LocalImage } from '../components/common/LocalImage'
import { DesignLink } from '../components/navigation/DesignLink'
import { p1Catalog } from '../data/p1Catalog'
import { p1HeroArt } from '../data/p1HeroArt'
import type { Game, Media, ReleaseEvent } from '../data/types'
import { formatDate } from '../utils/format'
import { selectReleaseEntries } from '../utils/p1Releases'
import { P1Review } from './P1Review'
import { ScreenshotViewer } from './ScreenshotViewer'

// Covers are 460x215 Steam headers, but the artwork area is 840x450. Prefer official high-resolution key art
// where available; layout, order, arrows, pagination and the screenshot viewers are unchanged.
function artwork(game: Game): Media {
 const hero = p1HeroArt[game.id]
 if (hero) return { src: hero, alt: `${game.title} — official key art`, kind: 'official' }
 return game.id === 'zelda-ocarina-of-time' ? game.screenshots[0] : game.cover
}
// Nearest dated event inside the visible window; platforms stay attached to that date rather than implying a simultaneous launch.
function nextRelease(events: ReleaseEvent[]) {
 const dated = events.filter((event): event is ReleaseEvent & { date: string } => event.date !== null)
 const date = dated.map(event => event.date).sort()[0]
 return date ? { date, platforms: [...new Set(dated.filter(event => event.date === date).flatMap(event => event.platforms))] } : null
}
export function FeaturedCarousel({ now }: { now: Date }) {
 const eligible = (game: Game) => game.id !== 'grand-theft-auto-vi' && game.screenshots.length >= 4 && game.screenshots.every(media => media.kind === 'official')
 const recent = selectReleaseEntries(p1Catalog, 'recent', now).filter(({ game }) => eligible(game)).slice(0, 3)
 const entries = [...recent, ...selectReleaseEntries(p1Catalog, 'upcoming', now).filter(({ game }) => eligible(game) && !recent.some(item => item.game.id === game.id))]
 const [index, setIndex] = useState(0)
 const [preview, setPreview] = useState<{ gameId: string; media: Media } | null>(null)
 const [screenshot, setScreenshot] = useState<{ media: Media; trigger: HTMLButtonElement } | null>(null)
 const active = entries.length ? index % entries.length : 0
 const entry = entries[active]
 const select = (next: number) => { setIndex((next + entries.length) % entries.length); setPreview(null) }
 const game = entry?.game
 const isRecent = recent.some(item => item.game.id === game?.id)
 const release = entry && !isRecent ? nextRelease(entry.events) : null
 const platforms = release?.platforms.length ? release.platforms : game?.platforms ?? []
 return <section className="release-spotlight" aria-label="Release spotlight" aria-roledescription="carousel">
  <div className="release-section-heading"><h2>Featured & recommended</h2></div>
  {game ? <>
   <div className="release-featured-stage">
    {entries.length > 1 && <>{([-1, 1] as const).map(direction => <div key={direction} className={`release-side-preview ${direction < 0 ? 'release-side-previous' : 'release-side-next'}`} aria-hidden="true" inert><LocalImage media={artwork(entries[(active + direction + entries.length) % entries.length].game)} /></div>)}</>}
    <div className="release-featured-center">
     <button className="release-featured-arrow release-featured-previous" type="button" aria-label="Previous game" onClick={() => select(active - 1)}>←</button>
     <div className="release-hero">
      <figure className="release-hero-art"><LocalImage media={preview?.gameId === game.id ? preview.media : artwork(game)} /><figcaption>Official game artwork</figcaption></figure>
      <div className="release-hero-info">
       <div className="release-game-heading"><h3>{game.title}</h3></div>
       <P1Review game={game} compact />
       <div className="release-screenshots" aria-label={`${game.title} screenshots`}>
        {game.screenshots.slice(0, 4).map((media, number) => <button type="button" key={media.src} aria-label={`Open screenshot ${number + 1} of ${game.title}`} onMouseEnter={() => setPreview({ gameId: game.id, media })} onMouseLeave={() => setPreview(null)} onFocus={() => setPreview({ gameId: game.id, media })} onBlur={() => setPreview(null)} onClick={event => setScreenshot({ media, trigger: event.currentTarget })}><LocalImage media={media} /><span aria-hidden="true">↗</span></button>)}
       </div>
       <div className="release-featured-tags">{game.genres.map(genre => <span key={genre}>{genre}</span>)}</div>
       <div className="release-featured-availability"><p className="release-state">{isRecent ? 'Available now' : 'Coming soon'}</p><p>{release && <><time dateTime={release.date}>{formatDate(release.date)}</time> · </>}{platforms.join(' · ')}</p></div>
       <div className="release-hero-actions"><DesignLink className="button-link" to={`/games/${game.slug}`}>Explore game ↗</DesignLink>{game.releaseInfo?.trailerUrl && <a className="release-trailer" href={game.releaseInfo.trailerUrl} target="_blank" rel="noopener noreferrer">View trailer on official site ↗</a>}</div>
      </div>
     </div>
     <button className="release-featured-arrow release-featured-next" type="button" aria-label="Next game" onClick={() => select(active + 1)}>→</button>
    </div>
   </div>
   <div className="release-featured-pagination" role="group" aria-label="Choose featured game">{entries.map(({ game: item }, number) => <button key={item.id} type="button" aria-label={`Show featured game: ${item.title}`} aria-current={number === active ? 'true' : undefined} onClick={() => select(number)}><span /></button>)}</div>
   <p className="release-announcement" role="status" aria-live="polite" aria-atomic="true">{game.title}</p>
  </> : <div className="release-empty"><p>No featured releases in this window.</p><DesignLink to="/discover">Explore the full library</DesignLink></div>}
  {screenshot && <ScreenshotViewer media={screenshot.media} trigger={screenshot.trigger} onClose={() => setScreenshot(null)} />}
 </section>
}
