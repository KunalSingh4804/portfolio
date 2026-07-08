import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'

export function SkillsPage() {
  return (
    <section className="section" id="skills">
      <SectionTitle eyebrow="Skills" title="Technical skills and core competencies" description="Proficient in modern web technologies, databases, and software development fundamentals." />
      <div className="container" style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {portfolioData.skills.map((skill, index) => (
          <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="glass" style={{ padding: '1.25rem', borderRadius: '1.25rem' }} key={skill.title}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>{skill.title}</h3>
              <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
            </div>
            <div style={{ marginTop: '1rem', height: '0.5rem', background: 'rgba(148,163,184,0.15)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: `${skill.level}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #38bdf8)', borderRadius: '999px' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {skill.items.map((item) => (
                <span key={item} style={{ padding: '0.4rem 0.65rem', borderRadius: '999px', background: 'rgba(56, 189, 248, 0.12)', color: '#bae6fd', fontSize: '0.9rem' }}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
