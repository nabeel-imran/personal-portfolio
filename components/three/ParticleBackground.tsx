'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Lightweight particle field.
 *
 * Performance choices:
 *  - Disabled on coarse pointers (mobile/tablet) where it's a clear net negative
 *  - Disabled when prefers-reduced-motion is set
 *  - No global mousemove listener (saved a constant fast-path event)
 *  - Connection check loop runs at half rate (every other frame)
 *  - Animation pauses entirely when canvas is offscreen (IntersectionObserver)
 *  - Animation pauses when tab is hidden (visibilitychange)
 */
export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (typeof window === 'undefined') return

    const isCoarse =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isCoarse || reduceMotion) {
      canvas.style.display = 'none'
      return
    }

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Lower count and tighter connection radius — biggest wins for the inner loop
    const PARTICLE_COUNT = 32
    const CONNECTION_DISTANCE = 110
    const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE
    const SPEED = 0.25

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }))

    let resizeRaf = 0
    const handleResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        dpr = Math.min(window.devicePixelRatio || 1, 1.5)
        width = canvas.offsetWidth
        height = canvas.offsetHeight
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
      })
    }

    window.addEventListener('resize', handleResize, { passive: true })

    let frame = 0
    let running = true
    let visible = true

    const draw = () => {
      if (!running || !visible) return
      frame++

      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        else if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        else if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(96,165,250,0.55)'
        ctx.fill()
      }

      // Connection pass — every other frame is plenty visually and halves cost
      if (frame % 2 === 0) {
        ctx.lineWidth = 0.8
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i]
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distSq = dx * dx + dy * dy
            if (distSq < CONNECTION_DISTANCE_SQ) {
              const dist = Math.sqrt(distSq)
              const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.14
              ctx.strokeStyle = `rgba(59,130,246,${alpha})`
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    // Pause when offscreen
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible = entry.isIntersecting
          if (visible && running) {
            cancelAnimationFrame(animRef.current)
            animRef.current = requestAnimationFrame(draw)
          }
        }
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    // Pause when tab hidden
    const onVisibility = () => {
      running = !document.hidden
      if (running && visible) {
        cancelAnimationFrame(animRef.current)
        animRef.current = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    draw()

    return () => {
      running = false
      cancelAnimationFrame(animRef.current)
      cancelAnimationFrame(resizeRaf)
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
