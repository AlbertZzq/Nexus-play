import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderApp } from '../test/renderApp'

describe('standalone Prototype 2 routes', () => {
  it('renders the released-game home and library', () => {
    renderApp(['/'])
    expect(screen.getByRole('heading', { level: 1, name: 'Elden Ring' })).toBeVisible()
    renderApp(['/games'])
    expect(screen.getByRole('heading', { level: 1, name: 'Games' })).toBeVisible()
    expect(screen.getByText('36 released games across PC, PlayStation, Xbox and Nintendo.')).toBeVisible()
  })

  it('renders a detail and guide route', () => {
    renderApp(['/games/elden-ring'])
    expect(screen.getByRole('heading', { level: 1, name: 'Elden Ring' })).toBeVisible()
    renderApp(['/guides'])
    expect(screen.getByRole('heading', { level: 1, name: 'Guides' })).toBeVisible()
  })
})
