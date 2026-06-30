'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { WhatsAppCTA } from '@/components/ui/FloatingActions'
import { EASE } from '@/components/ui/SectionWrapper'

const stats = [
  { value: 4, suffix: '+', label: 'Years of AI Engineering' },
  { value: 4, suffix: '', label: 'Live Production Systems' },
  { value: 45, suffix: 'min', label: 'Saved Per Client Onboarding' },
  { value: 95, suffix: '/100', label: 'Efficiency Score' },
]

const trustLogos = ['Veremark', 'Peersol', 'n8n', 'Make.com', 'LangChain', 'Axiom.ai']

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle dot grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none grid-bg opacity-60" />
      {/* Soft gradient accent */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: 'var(--grad-hero)' }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Left: Headline + CTA ── */}
          <div className="lg:col-span-7">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                Available for select projects
              </span>
            </motion.div>

            {/* Display headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07, ease: EASE }}
              className="mb-6"
              style={{ color: 'var(--ink)', lineHeight: 1.04 }}
            >
              I Build<br />
              AI Systems<br />
              That Actually<br />
              <span style={{ color: 'var(--ink-6)', fontWeight: 300 }}>Ship.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: EASE }}
              className="text-base sm:text-lg mb-8 max-w-lg"
              style={{ color: 'var(--ink-5)', lineHeight: 1.68 }}
            >
              AI Engineer delivering Intelligent Automation, LLM Integration, and
              full-stack AI infrastructure — built to enterprise-grade reliability standards.{' '}
              <span style={{ color: 'var(--ink-3)', fontWeight: 600 }}>
                Four years. Four live production systems. Real results.
              </span>
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <button onClick={() => scrollTo('contact')} className="btn-primary">
                Hire Me <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-outline">
                View Work
              </button>
              <a href="/cv/Nabeel_Imran_CV.pdf" download="Nabeel_Imran_CV.pdf" className="btn-outline">
                <Download className="w-4 h-4" /> CV
              </a>
              <WhatsAppCTA variant="solid" label="WhatsApp" />
            </motion.div>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'var(--ink-6)' }}>
                <MapPin className="w-3.5 h-3.5" />
                Islamabad, Pakistan · UTC+5
              </span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span className="text-sm" style={{ color: 'var(--ink-5)' }}>
                Currently at <strong style={{ color: 'var(--ink-3)', fontWeight: 600 }}>Peersol → Veremark (UK)</strong>
              </span>
            </motion.div>
          </div>

          {/* ── Right: Stat cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="card p-6 sm:p-7">
                <p className="stat-num">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Trust strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-16 pt-8"
          style={{ borderTop: '1px solid var(--border-2)' }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--ink-6)', fontFamily: 'var(--font-mono)' }}
          >
            Trusted by
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustLogos.map(logo => (
              <span key={logo} className="text-sm font-medium" style={{ color: 'var(--ink-5)' }}>
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
