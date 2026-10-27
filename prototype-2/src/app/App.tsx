import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell'
import { P2Home } from '../pages/P2Home'
import { P2Games } from '../pages/P2Games'
import { P2GameDetails } from '../pages/P2GameDetails'
import { P2Guides } from '../pages/P2Guides'
import { NotFound } from '../pages/NotFound'
import { DesignProvider } from './DesignProvider'
import { GamesRedirect } from './GamesRedirect'

// eslint-disable-next-line react-refresh/only-export-components
export const appRoutes: RouteObject[] = [{
  element: <DesignProvider><AppShell /></DesignProvider>,
  children: [
    { index: true, element: <P2Home /> },
    { path: '/games', element: <P2Games /> },
    { path: '/games/:slug', element: <P2GameDetails /> },
    { path: '/discover', element: <GamesRedirect /> },
    { path: '/platforms', element: <GamesRedirect /> },
    { path: '/deals', element: <GamesRedirect /> },
    { path: '/news', element: <Navigate to="/" replace /> },
    { path: '/calendar', element: <GamesRedirect /> },
    { path: '/reviews', element: <Navigate to="/games" replace /> },
    { path: '/guides', element: <P2Guides /> },
    { path: '/guides/:guideId', element: <Navigate to="/guides" replace /> },
    { path: '*', element: <NotFound /> },
  ],
}]

export function App() {
  return useRoutes(appRoutes)
}
