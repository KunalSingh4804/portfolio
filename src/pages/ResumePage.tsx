import { SectionTitle } from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'

export function ResumePage() {
  return (
    <section className="section" id="resume">
      <SectionTitle eyebrow="Resume" title="Experience and education" description="A concise view of my internships and academic background." />
      <div className="container" style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem' }}>
          <h3 style={{ marginTop: 0 }}>Internship Experience</h3>
          {portfolioData.experience.map((item) => (
            <div key={`${item.role}-${item.company}`} style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#38bdf8', marginBottom: '0.2rem' }}>{item.period}</p>
              <h4 style={{ margin: 0 }}>
                {item.role} ·{' '}
                {'website' in item && item.website ? (
                  <a href={item.website} target="_blank" rel="noreferrer">{item.company}</a>
                ) : (
                  item.company
                )}
              </h4>
              <ul style={{ color: '#cbd5e1', paddingLeft: '1.2rem', marginTop: '0.6rem' }}>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem' }}>
          <h3 style={{ marginTop: 0 }}>Education</h3>
          {portfolioData.education.map((item) => (
            <div key={`${item.degree}-${item.period}`} style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#38bdf8', marginBottom: '0.2rem' }}>{item.period}</p>
              <h4 style={{ margin: 0 }}>{item.degree}</h4>
              <p className="muted" style={{ marginTop: '0.35rem' }}>
                {'website' in item && item.website ? (
                  <a href={item.website} target="_blank" rel="noreferrer">{item.institution}</a>
                ) : (
                  item.institution
                )}
                , {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
