import { useLocation } from 'react-router-dom'
import { navigation } from '../../app/navigation'
import type { NavigationGroup } from '../../app/navigation'
import { DesignLink } from './DesignLink'

export function Navigation({ label, onNavigate, items = navigation }: { label: string; onNavigate?: () => void; items?: readonly NavigationGroup[] }) {
  const { pathname } = useLocation()
  const isActive = (to: string) => to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`)
  return <nav className="navigation" aria-label={label}>
    {items.map(group => <div className="navigation-group" role="group" aria-label={group.label} key={group.label}>
      <span className="navigation-group-label" aria-hidden="true">{group.label}</span>
      <div className="navigation-links">
        {group.links.map(link => <DesignLink
          key={link.to}
          to={link.to}
          aria-current={isActive(link.to) ? 'page' : undefined}
          onClick={onNavigate}
        >{link.label}</DesignLink>)}
      </div>
    </div>)}
  </nav>
}
