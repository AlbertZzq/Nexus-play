import { Navigate, useLocation } from 'react-router-dom'

/** Retired catalogue addresses now live in /games; keep supported query and fragment state. */
export function GamesRedirect() {
  const location = useLocation()
  return <Navigate to={{ pathname: '/games', search: location.search, hash: location.hash }} replace />
}
