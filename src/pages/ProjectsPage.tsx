import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SectionTitle } from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'

function getProjectImageSrc(image: string) {
  return image.startsWith('http') ? image : `${import.meta.env.BASE_URL}${image}`
}

export function ProjectsPage() {
  return (
    <section className="section" id="projects">
      <SectionTitle eyebrow="Portfolio" title="Academic and professional project work" description="Web applications built through internships and academic projects." />
      <div className="container" style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {portfolioData.projects.map((project, index) => (
          <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass" data-hover style={{ padding: '1.1rem', borderRadius: '1.35rem', overflow: 'hidden' }} key={project.title}>
            <a className="hover-image" href={project.live} target="_blank" rel="noreferrer" aria-label={`View live site for ${project.title}`}>
              <img
                src={getProjectImageSrc(project.image)}
                alt={`${project.title} preview`}
                style={{
                  height: '180px',
                  width: '100%',
                  objectFit: 'imageFit' in project && project.imageFit === 'contain' ? 'contain' : 'cover',
                  background: 'imageBackground' in project && project.imageBackground ? project.imageBackground : 'transparent',
                  padding: 'imageFit' in project && project.imageFit === 'contain' ? '1rem' : 0,
                  borderRadius: '1rem',
                }}
              />
            </a>
            <div style={{ paddingTop: '1rem' }}>
              <p style={{ color: '#38bdf8', fontWeight: 600 }}>{project.category}</p>
              <h3 style={{ margin: '0.35rem 0' }}>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.9rem' }}>
                {project.tags.map((tag) => <span key={tag} style={{ padding: '0.35rem 0.6rem', borderRadius: '999px', background: 'rgba(59,130,246,0.16)' }}>{tag}</span>)}
              </div>
              {(project.live || ('github' in project && project.github)) ? (
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  {project.live ? (
                    <a className="hover-outline" href={project.live} target="_blank" rel="noreferrer" style={{ padding: '0.55rem 0.9rem', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', border: '1px solid rgba(56,189,248,0.35)' }}>
                      <FiExternalLink /> Live Site
                    </a>
                  ) : null}
                  {'github' in project && project.github ? (
                    <a className="hover-outline" href={project.github} target="_blank" rel="noreferrer" style={{ padding: '0.55rem 0.9rem', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', border: '1px solid rgba(56,189,248,0.35)' }}>
                      <FiGithub /> GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
