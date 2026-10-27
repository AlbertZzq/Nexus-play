import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { P2Game } from '../../data/p2Catalog'
import { LocalImage } from '../common/LocalImage'

export function P2PopularShowcase({ games }: { games: readonly P2Game[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotationReset, setRotationReset] = useState(0)
  const [paused, setPaused] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)
  const [hovered, setHovered] = useState(false)
  const [keyboardFocused, setKeyboardFocused] = useState(false)
  const pointerFocus = useRef(false)
  const game = games[activeIndex]

  useEffect(() => {
    if (paused || hovered || keyboardFocused || games.length < 2) return
    const timer = window.setTimeout(() => setActiveIndex(index => (index + 1) % games.length), 6000)
    return () => window.clearTimeout(timer)
  }, [activeIndex, rotationReset, paused, hovered, keyboardFocused, games.length])

  return <div className="p2-popular-showcase" role="group" aria-label="Popular game showcase"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onPointerDownCapture={() => { pointerFocus.current = true; setKeyboardFocused(false) }}
    onPointerUpCapture={() => { pointerFocus.current = false }}
    onKeyDownCapture={() => { pointerFocus.current = false; setKeyboardFocused(true) }}
    onFocusCapture={() => { if (!pointerFocus.current) setKeyboardFocused(true) }}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false) }}
  >
    <article className="p2-popular-stage" aria-label={game.title}>
      <LocalImage className="p2-popular-artwork" media={game.screenshots[0] ?? game.cover} fallbackAlt={`Artwork unavailable for ${game.title}`} />
      <div className="p2-popular-overlay">
        <h3>{game.title}</h3>
        <p>{game.cardBlurb}</p>
        <Link className="p2-popular-cta" to={`/games/${game.slug}`}>View Game <span aria-hidden="true">↗</span></Link>
      </div>
      <button className="p2-popular-rotation" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}>
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span> {paused ? 'Resume' : 'Pause'}
      </button>
    </article>
    <div className="p2-popular-selector-rail">
      {games.map((choice, index) => <button key={choice.id} className="p2-popular-selector" type="button"
        aria-label={`Show ${choice.title}`} aria-pressed={index === activeIndex}
        onClick={() => { setActiveIndex(index); setRotationReset(value => value + 1) }}>
        <LocalImage media={choice.cover} fallbackAlt={`Artwork unavailable for ${choice.title}`} />
        <span>{choice.title}</span>
      </button>)}
    </div>
  </div>
}

