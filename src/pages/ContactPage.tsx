import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const isEmailJsConfigured = Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey)

export function ContactPage() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isEmailJsConfigured) {
      setStatus(`Email form is not configured yet. Please email ${portfolioData.email} directly.`)
      return
    }

    setStatus('Sending...')
    emailjs.sendForm(emailJsServiceId, emailJsTemplateId, event.currentTarget, emailJsPublicKey)
      .then(() => setStatus('Message sent successfully.'))
      .catch(() => setStatus('Unable to send message right now. Please email directly.'))
  }

  return (
    <section className="section" id="contact">
      <div className="container stack-on-mobile" style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: '0.9fr 1.1fr' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem' }}>
          <h2 style={{ marginTop: 0 }}>Contact</h2>
          <p className="muted">Open to frontend, web development, and software engineering opportunities.</p>
          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            <p><strong>Email:</strong> <a className="hover-link" href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></p>
            <p><strong>Phone:</strong> <a className="hover-link" href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}>{portfolioData.phone}</a></p>
            <p><strong>Location:</strong> {portfolioData.location}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
              <a className="hover-icon" href={portfolioData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
              <a className="hover-icon" href={portfolioData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            </div>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass" style={{ padding: '1.4rem', borderRadius: '1.35rem', display: 'grid', gap: '0.9rem' }} onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" required style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid rgba(148,163,184,0.2)', background: 'rgba(15,23,42,0.8)', color: '#fff' }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid rgba(148,163,184,0.2)', background: 'rgba(15,23,42,0.8)', color: '#fff' }} />
          <input name="subject" placeholder="Subject" required style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid rgba(148,163,184,0.2)', background: 'rgba(15,23,42,0.8)', color: '#fff' }} />
          <textarea name="message" rows={5} placeholder="Message" required style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid rgba(148,163,184,0.2)', background: 'rgba(15,23,42,0.8)', color: '#fff' }} />
          <button type="submit" style={{ padding: '0.9rem 1.1rem', borderRadius: '999px', border: 'none', background: 'linear-gradient(90deg, #3b82f6, #38bdf8)', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', width: 'fit-content' }}>
            <FiSend /> Send Message
          </button>
          {!isEmailJsConfigured ? (
            <p className="muted">Form delivery requires EmailJS setup. Your email link above works in the meantime.</p>
          ) : null}
          {status ? <p className="muted">{status}</p> : null}
        </motion.form>
      </div>
    </section>
  )
}
