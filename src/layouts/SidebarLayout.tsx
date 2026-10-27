import type { MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { DesignLink } from '../components/navigation/DesignLink'
import { Navigation } from '../components/navigation/Navigation'

export function SidebarLayout() {
  const location = useLocation()

  function onBrandClick(event: MouseEvent<HTMLAnchorElement>) {
    if (location.pathname !== '/') return
    event.preventDefault()
    window.scrollTo({ top: 0, left: 0 })
  }

  return <aside className="sidebar">
    <DesignLink to="/" className="brand" aria-label="NexusPlay home" onClick={onBrandClick}><span className="brand-mark" aria-hidden="true">N</span>NexusPlay</DesignLink>
    <Navigation label="Primary navigation" />
    <p className="sidebar-note">Your next great game<br />starts here.</p>
  </aside>
}
