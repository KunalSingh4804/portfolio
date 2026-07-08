import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'

export function AchievementsPage() {
  return (
    <section className="section" id="achievements">
      <SectionTitle
        eyebrow="Achievements"
        title="Leadership, certifications, and milestones"
        description="Recognition, professional certifications, and key moments from my academic and professional journey."
      />
      <div className="container" style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem' }}>
          <h3 style={{ marginTop: 0 }}>Leadership & Achievements</h3>
          {portfolioData.leadership.map((item) => (
            <div key={`${item.role}-${item.organization}`} style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#38bdf8', marginBottom: '0.2rem' }}>{item.period}</p>
              <h4 style={{ margin: 0 }}>
                {item.role} ·{' '}
                {'website' in item && item.website ? (
                  <a href={item.website} target="_blank" rel="noreferrer">{item.organization}</a>
                ) : (
                  item.organization
                )}
              </h4>
              <ul style={{ color: '#cbd5e1', paddingLeft: '1.2rem', marginTop: '0.6rem' }}>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem' }}>
          <h3 style={{ marginTop: 0 }}>Certifications</h3>
          {portfolioData.certifications.map((item) => (
            <div key={item.title} style={{ marginBottom: '1rem' }}>
              {'date' in item && item.date ? (
                <p style={{ color: '#38bdf8', marginBottom: '0.2rem', fontSize: '0.9rem' }}>{item.date}</p>
              ) : null}
              <h4 style={{ margin: 0 }}>{item.title}</h4>
              <p className="muted" style={{ marginTop: '0.35rem', marginBottom: '0.35rem' }}>{item.provider}</p>
              <p style={{ margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.9rem' }}>
                <a href={item.link} target="_blank" rel="noreferrer">Verify on Coursera</a>
                {'certificatePdf' in item && item.certificatePdf ? (
                  <a href={item.certificatePdf} target="_blank" rel="noreferrer">View certificate</a>
                ) : null}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem' }}>
          <h3 style={{ marginTop: 0 }}>Timeline</h3>
          {portfolioData.timeline.map((item) => (
            <div key={`${item.year}-${item.title}`} style={{ borderLeft: '2px solid rgba(56,189,248,0.35)', paddingLeft: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.2rem' }}>{item.year}</p>
              <p>{item.title}</p>
              <p className="muted">{item.type}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
