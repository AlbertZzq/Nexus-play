import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { FormEvent, MouseEvent } from 'react'
import { Outlet, useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import { p1Navigation } from '../app/navigation'
import { useDesign } from '../app/DesignProvider'
import { DesignLink } from '../components/navigation/DesignLink'
import { Navigation } from '../components/navigation/Navigation'
import { SidebarLayout } from './SidebarLayout'
import { TopNavigationLayout } from './TopNavigationLayout'
import '../styles/p1-polish.css'

function GameSearch() {
  const location = useLocation()
  const navigate = useNavigate()
  const searchPath = '/games'
  const query = location.pathname === searchPath ? new URLSearchParams(location.search).get('q') ?? '' : ''
  const [draft, setDraft] = useState(query)
  const [previousQuery, setPreviousQuery] = useState(query)
  if (query !== previousQuery) {
    setPreviousQuery(query)
    setDraft(query)
  }

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (draft.trim()) params.set('q', draft.trim())
    void navigate({ pathname: searchPath, search: params.size ? `?${params.toString()}` : '' })
  }

  return <form className="global-search" role="search" onSubmit={search}>
    <label htmlFor="game-search">Search game titles</label>
    <div className="search-controls">
      <input id="game-search" type="search" placeholder="Find your next game…" value={draft} onChange={event => setDraft(event.target.value)} />
      <button type="submit" aria-label="Search games">Search</button>
    </div>
  </form>
}

export function AppShell() {
  const { design } = useDesign()
  const location = useLocation()
  const [openAt, setOpenAt] = useState<string | null>(null)
  const isOpen = openAt === location.key
  const shell = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  const main = useRef<HTMLElement>(null)
  const previousLocation = useRef<typeof location | null>(null)
  const navigationType = useNavigationType()
  const hideHeaderSearch = design === '2' && (location.pathname === '/games' || location.pathname === '/guides')

  useLayoutEffect(() => {
    if (design !== '1' || !header.current || !shell.current) return
    const measure = () => shell.current?.style.setProperty('--p1-header-height', `${header.current!.getBoundingClientRect().height}px`)
    measure()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(header.current)
    return () => observer.disconnect()
  }, [design])

  useLayoutEffect(() => {
    const previous = previousLocation.current
    previousLocation.current = location
    const changedPage = previous !== null && previous.pathname !== location.pathname
    const changedHash = previous?.hash !== location.hash
    // Resolve initial fragments; keep native POP restoration and query interactions.
    if (previous && (navigationType === 'POP' || (!changedPage && !changedHash))) return
    const anchor = location.hash ? document.getElementById(location.hash.slice(1)) : null
    if (anchor) anchor.scrollIntoView()
    else if (changedPage) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if ((changedPage || anchor === main.current) && document.activeElement !== menuButton.current) {
      main.current?.focus({ preventScroll: true })
    }
  }, [location, navigationType])

  useEffect(() => {
    if (!isOpen) return
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenAt(null)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  function closeNavigation() {
    setOpenAt(null)
    menuButton.current?.focus()
  }

  // On the home page the brand is already the current destination, so it returns to the top instead of a no-op.
  function onBrandClick(event: MouseEvent<HTMLAnchorElement>) {
    if (location.pathname !== '/') return
    event.preventDefault()
    window.scrollTo({ top: 0, left: 0, behavior: design === '1' ? 'smooth' : 'auto' })
  }

  return <div className="app-shell" data-design={design} ref={shell}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="app-header" ref={header}>
      <DesignLink to="/" className="brand header-brand" aria-label="NexusPlay home" onClick={onBrandClick}><span className="brand-mark" aria-hidden="true">N</span>NexusPlay</DesignLink>
      {design === '1' && <TopNavigationLayout />}
      {!hideHeaderSearch && <GameSearch />}
      <button
        className="menu-button"
        type="button"
        ref={menuButton}
        aria-label="Open navigation"
        aria-expanded={isOpen}
        aria-controls="compact-navigation"
        onClick={() => isOpen ? closeNavigation() : setOpenAt(location.key)}
      >Menu</button>
    </header>
    {design === '2' && <SidebarLayout />}
    <div id="compact-navigation" className="compact-navigation" ref={menu} hidden={!isOpen}>
      {isOpen && <Navigation label="Compact navigation" onNavigate={closeNavigation} items={design === '1' ? p1Navigation : undefined} />}
    </div>
    <div className="content-region">
      <main id="main-content" tabIndex={-1} ref={main}><Outlet /></main>
      <footer className="prototype-note">{design === '1' ? 'Student prototype · Sources shown with each item' : 'Class prototype · External player ratings · Canada / CAD prices'}</footer>
    </div>
  </div>
}
