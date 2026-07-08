import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJsonwebtokens,
  SiLaravel,
  SiMaildotcom,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { SectionTitle } from '../components/SectionTitle'
import styles from './SkillsPage.module.css'

const technicalSkills: { name: string; Icon: IconType; color: string }[] = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel Blade', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'jQuery', Icon: SiJquery, color: '#0769AD' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'REST APIs', Icon: SiSwagger, color: '#85EA2D' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'EmailJS', Icon: SiMaildotcom, color: '#F4E149' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
  { name: 'JWT Authentication', Icon: SiJsonwebtokens, color: '#FFFFFF' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
]

export function SkillsPage() {
  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow="Technical Skills"
        title="Technologies I work with"
        description="A focused set of languages, frameworks, and tools used across my projects and professional work."
      />
      <div className="container">
        <div className={styles.skillsGrid}>
          {technicalSkills.map(({ name, Icon, color }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className={`glass ${styles.skillCard}`}
              data-hover
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon className={styles.icon} style={{ color }} />
              </div>
              <span className={styles.label}>{name}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
