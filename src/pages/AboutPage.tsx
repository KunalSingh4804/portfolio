import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'

export function AboutPage() {
  return (
    <section className="section" id="about">
      <SectionTitle eyebrow="About" title="Building reliable, user-focused web applications" description="B.Tech IT graduate with hands-on experience in frontend development, REST APIs, and database-driven solutions." />
      <div className="container stack-on-mobile" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1.15fr 0.85fr' }}>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem' }}>
          <h3 style={{ marginTop: 0 }}>Professional Summary</h3>
          <p className="muted">{portfolioData.about.summary}</p>
          <p className="muted" style={{ marginTop: '1rem' }}>{portfolioData.about.objective}</p>
          <ul style={{ color: '#cbd5e1', paddingLeft: '1.2rem', display: 'grid', gap: '0.6rem', marginTop: '1rem' }}>
            {portfolioData.about.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem' }}>
          <h3 style={{ marginTop: 0 }}>Quick Facts</h3>
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {portfolioData.about.facts.map((fact) => (
              <div key={fact.label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(148,163,184,0.15)', paddingBottom: '0.5rem' }}>
                <span className="muted">{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
