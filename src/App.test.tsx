import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the home page at the root route', () => {
    window.history.pushState({}, '', '/')
    render(<App />)
    expect(screen.getByRole('heading', { name: /Kunal Singh/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /View Portfolio/i })).toBeTruthy()
  })

  it('renders the portfolio page at /portfolio', () => {
    window.history.pushState({}, '', '/portfolio')
    render(<App />)
    expect(screen.getByRole('heading', { name: /Trevo Innovations/i })).toBeTruthy()
    expect(screen.getByRole('heading', { name: /TravelNex Solutions/i })).toBeTruthy()
  })

  it('renders the achievements page at /achievements', () => {
    window.history.pushState({}, '', '/achievements')
    render(<App />)
    expect(screen.getByRole('heading', { name: /Leadership & Achievements/i })).toBeTruthy()
    expect(screen.getByRole('heading', { level: 3, name: /^Certifications$/i })).toBeTruthy()
  })
})
