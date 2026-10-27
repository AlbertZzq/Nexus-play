import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useDesign } from './DesignProvider'

// Prototype 1 folds the retired Discover, Platforms, Reviews and Deals destinations into their new homes.
// Prototype 2 keeps the original pages, so the redirect only applies to design 1.
export function P1Redirect({ to, children }: { to: string; children: ReactNode }) {
  const { design } = useDesign()
  const location = useLocation()
  if (design !== '1') return <>{children}</>
  return <Navigate replace to={{ pathname: to, search: location.search, hash: location.hash }} />
}
