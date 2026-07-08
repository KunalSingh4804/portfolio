interface SectionTitleProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="container" style={{ marginBottom: '2rem' }}>
      <p style={{ color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{eyebrow}</p>
      <h2 className="sectionTitle">{title}</h2>
      <p className="muted">{description}</p>
    </div>
  )
}
