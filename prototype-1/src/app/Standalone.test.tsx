import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderApp } from '../test/renderApp'

describe('standalone Prototype 1 routes', () => {
  it('renders the editorial home', () => {
    renderApp(['/'])
    expect(screen.getByRole('heading', { level: 1, name: 'Grand Theft Auto VI' })).toBeVisible()
  })

  it('renders the Games route', () => {
    renderApp(['/games'])
    expect(screen.getByRole('heading', { level: 1, name: 'Games' })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Release calendar' })).toBeVisible()
  })

  it('renders a released-game detail', () => {
    renderApp(['/games/elden-ring'])
    expect(screen.getByRole('heading', { level: 1, name: 'Elden Ring' })).toBeVisible()
  })

  it('renders the guide library', () => {
    renderApp(['/guides'])
    expect(screen.getByRole('heading', { level: 1, name: 'Guides' })).toBeVisible()
  })
})
