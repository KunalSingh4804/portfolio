import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

export function HomePage() {
  return (
    <section className="section" id="home">
      <div className="container stack-on-mobile" style={{ display: 'grid', gap: '2rem', alignItems: 'center', gridTemplateColumns: '1.1fr 0.9fr' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem' }}>Open to work</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', lineHeight: 1.05, margin: '0.5rem 0 1rem' }}>
            {portfolioData.name}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: 600 }}>{portfolioData.role}</p>
          <p className="muted" style={{ marginTop: '1rem', maxWidth: '620px' }}>{portfolioData.about.summary}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a className="glass hover-button" href={`${import.meta.env.BASE_URL}${portfolioData.resumeUrl}`} target="_blank" rel="noreferrer" style={{ padding: '0.9rem 1.2rem', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              <FiDownload /> Download Resume
            </a>
            <Link className="hover-outline" to="/portfolio" style={{ padding: '0.9rem 1.2rem', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', border: '1px solid rgba(56,189,248,0.35)' }}>
              View Portfolio
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a className="hover-icon" href={portfolioData.github} aria-label="GitHub" target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
            <a className="hover-icon" href={portfolioData.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
            <a className="hover-icon" href={`mailto:${portfolioData.email}`} aria-label="Email"><FiMail size={20} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="glass" style={{ padding: '1.5rem', borderRadius: '2rem' }}>
            <img
              src={`${import.meta.env.BASE_URL}${portfolioData.profileImage}`}
              alt={`Professional portrait of ${portfolioData.name}`}
              style={{ borderRadius: '1.5rem', height: '420px', width: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
