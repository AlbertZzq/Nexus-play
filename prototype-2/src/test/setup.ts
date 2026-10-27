import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// jsdom has no viewport scrolling; real scroll behavior is checked in Chrome.
vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
Element.prototype.scrollIntoView = vi.fn()

afterEach(() => {
  cleanup()
  vi.unstubAllEnvs()
})
