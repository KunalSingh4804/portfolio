import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CustomCursor } from './CustomCursor'
import { portfolioData } from '../data/portfolioData'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/skills', label: 'Skills' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
]

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <CustomCursor />
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav} aria-label="Primary navigation">
            <Link to="/" className={styles.brand} onClick={closeMenu}>
              <img
                src={`${import.meta.env.BASE_URL}${portfolioData.logo}`}
                alt={`${portfolioData.name} — Frontend Developer`}
                className={styles.logoImage}
              />
            </Link>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="primary-nav-links"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
            </button>
            <div id="primary-nav-links" className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className="container">
          <Link to="/">
            <img
              src={`${import.meta.env.BASE_URL}${portfolioData.logo}`}
              alt={`${portfolioData.name} logo`}
              className={styles.footerLogo}
            />
          </Link>
          <p>© 2026 {portfolioData.name}. Built with React, Vite, and Framer Motion.</p>
        </div>
      </footer>
    </>
  )
}
