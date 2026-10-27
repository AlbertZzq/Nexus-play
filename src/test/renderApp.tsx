import { vi } from 'vitest'
import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { appRoutes } from '../app/App'

export function renderApp(initialEntries: string[], design = '1', initialIndex?: number) {
  vi.stubEnv('MODE', design === '2' ? 'design2' : 'design1')
  const router = createMemoryRouter(appRoutes, { initialEntries, initialIndex })
  return { ...render(<RouterProvider router={router} />), router }
}
