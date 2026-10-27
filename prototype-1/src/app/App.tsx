import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell'
import { Discover } from '../pages/Discover'
import { ReleaseHome } from '../pages/ReleaseHome'
import { GameDetails } from '../pages/GameDetails'
import { P1News } from '../pages/P1News'
import { P1Guides } from '../pages/P1Guides'
import { GuideDetail } from '../pages/GuideDetail'
import { P1ReleaseCalendar } from '../pages/P1ReleaseCalendar'
import { NotFound } from '../pages/NotFound'
import { DesignProvider } from './DesignProvider'
import { GamesRedirect } from './GamesRedirect'

// eslint-disable-next-line react-refresh/only-export-components
export const appRoutes: RouteObject[] = [{
  element: <DesignProvider><AppShell /></DesignProvider>,
  children: [
    { index: true, element: <ReleaseHome /> },
    { path: '/games', element: <Discover mode="games" /> },
    { path: '/games/:slug', element: <GameDetails /> },
    { path: '/discover', element: <GamesRedirect /> },
    { path: '/platforms', element: <GamesRedirect /> },
    { path: '/deals', element: <GamesRedirect /> },
    { path: '/news', element: <P1News /> },
    { path: '/calendar', element: <P1ReleaseCalendar /> },
    { path: '/reviews', element: <Navigate to="/" replace /> },
    { path: '/guides', element: <P1Guides /> },
    { path: '/guides/:guideId', element: <GuideDetail /> },
    { path: '*', element: <NotFound /> },
  ],
}]

export function App() {
  return useRoutes(appRoutes)
}
