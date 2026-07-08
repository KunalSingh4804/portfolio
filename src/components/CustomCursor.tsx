import { useEffect, useState } from 'react'
import styles from './CustomCursor.module.css'

function isCustomCursorSupported() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false

  const coarsePointer = window.matchMedia('(pointer: coarse)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return !coarsePointer && !reducedMotion
}

export function CustomCursor() {
  const [enabled] = useState(isCustomCursorSupported)
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-active')

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    const updateHover = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      setHovering(Boolean(target.closest('a, button, input, textarea, select, label, [data-hover]')))
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', updateHover)
    document.addEventListener('mouseleave', hide)
    document.documentElement.addEventListener('mouseenter', show)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', updateHover)
      document.removeEventListener('mouseleave', hide)
      document.documentElement.removeEventListener('mouseenter', show)
    }
  }, [enabled])

  if (!enabled) return null

  const transform = `translate3d(${position.x}px, ${position.y}px, 0)`

  return (
    <>
      <div className={`${styles.dot} ${visible ? styles.visible : ''} ${hovering ? styles.hover : ''}`} style={{ transform }} aria-hidden="true" />
      <div className={`${styles.ring} ${visible ? styles.visible : ''} ${hovering ? styles.hover : ''}`} style={{ transform }} aria-hidden="true" />
    </>
  )
}
