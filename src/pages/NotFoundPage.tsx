import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center' }}>
      <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ marginTop: 0 }}>404</h1>
        <p className="muted">The page you are looking for does not exist.</p>
        <Link className="hover-outline" to="/" style={{ marginTop: '1rem', padding: '0.75rem 1.1rem', borderRadius: '999px', display: 'inline-flex', border: '1px solid rgba(56,189,248,0.35)' }}>
          Back to Home
        </Link>
      </div>
    </section>
  )
}
