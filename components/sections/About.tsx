'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, CheckCircle, Play } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import Link from 'next/link'

const values = [
  'I document everything. Flowcharts, Loom walkthroughs, written weekly updates.',
  'I communicate proactively. No surprises, no disappearing acts.',
  'I evaluate tools honestly. Written analysis, real recommendations.',
  'I think in systems, not features. Production from day one.',
]

const indexRows = [
  { num: '01', label: 'Live RPA Bots', value: '4 in production' },
  { num: '02', label: 'Onboarding Automation', value: '45min → 2min' },
  { num: '03', label: 'Approach', value: 'Systems, not features' },
  { num: '04', label: 'Efficiency Score', value: '95 / 100' },
]

export function About() {
  return (
    <SectionWrapper id="about" alt>
      <SectionHeader eyebrow="About" title="The Engineer Behind the Automation" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">

        {/* Text */}
        <div className="md:col-span-7 space-y-7">
          <motion.blockquote
            variants={fadeUpVariants}
            custom={3}
            className="text-lg sm:text-xl font-medium leading-relaxed pl-5 sm:pl-6"
            style={{
              color: 'var(--ink)',
              borderLeft: '4px solid var(--blue)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            &ldquo;I&apos;m Nabeel Imran — an AI Engineer based in Islamabad, Pakistan,
            building the kind of intelligent systems that operations teams depend on
            every single day.&rdquo;
          </motion.blockquote>

          <motion.div
            variants={fadeUpVariants}
            custom={4}
            className="space-y-4 text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--ink-3)' }}
          >
            <p>
              At Peersol, I work directly with{' '}
              <strong style={{ color: 'var(--ink-2)', fontWeight: 600 }}>Veremark</strong> — a UK-based global
              enterprise background screening company — as their staff-augmented AI Engineer. I&apos;ve
              shipped 4 live RPA bots that their operations teams use daily, a rule-based decisioning
              engine for UK Directorship verification, and an automated package creation system that cut
              client onboarding from 45 minutes to under 2 minutes.
            </p>
            <p>
              Before Veremark, I built{' '}
              <strong style={{ color: 'var(--ink-2)', fontWeight: 600 }}>RankGuide</strong> from scratch —
              a live AI SaaS product — plus content automation pipelines, GenAI video generation systems,
              and intelligent job-scraping workflows that I actually use myself.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={5}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
              What I bring to every engagement
            </p>
            <ul className="space-y-2.5">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base" style={{ color: 'var(--ink-3)' }}>
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--blue)' }} />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p variants={fadeUpVariants} custom={6} className="text-sm sm:text-base" style={{ color: 'var(--ink-3)' }}>
            Beyond client work, I publish technical content on YouTube, Instagram, and LinkedIn —
            sharing the real workflows, system designs, and engineering decisions behind production AI systems.
            No theory-only content. Everything I teach, I&apos;ve shipped.
          </motion.p>

          {/* CTA cards */}
          <motion.div variants={fadeUpVariants} custom={7} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="card p-5 group block cursor-pointer"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4" style={{ color: 'var(--blue)' }} />
                <span className="font-semibold text-sm" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
                  Need an AI Engineer?
                </span>
              </div>
              <p className="text-sm" style={{ color: 'var(--ink-3)' }}>Let&apos;s talk about your project</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: 'var(--blue)' }}>
                Get in touch <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <a
              href="https://youtube.com/@nabeelscode"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 group block"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-4 h-4" style={{ color: 'var(--blue)' }} />
                <span className="font-semibold text-sm" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
                  Learn on YouTube
                </span>
              </div>
              <p className="text-sm" style={{ color: 'var(--ink-3)' }}>Production AI tutorials from real projects</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: 'var(--blue)' }}>
                Subscribe <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Art composition — no photo, pure doodle energy */}
        <motion.div
          variants={fadeUpVariants}
          custom={3}
          className="md:col-span-5 md:sticky md:top-24"
        >
          {/* Editorial index table */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: 'var(--ink-4)' }}>
              At a glance
            </p>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {indexRows.map((row, i) => (
                <motion.div
                  key={row.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                  className="group flex items-baseline gap-4 py-5 cursor-default transition-colors"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <span className="font-mono text-[11px]" style={{ color: 'var(--blue)' }}>{row.num}</span>
                  <span className="text-sm flex-1" style={{ color: 'var(--ink-3)' }}>{row.label}</span>
                  <span
                    className="font-bold text-base sm:text-lg text-right transition-transform duration-300 group-hover:-translate-x-1"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
                  >
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Name block + geometric art */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="mt-8 relative"
            >
              <p
                className="font-extrabold uppercase leading-none"
                style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                Nabeel <span className="stroke-text">Imran</span>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] mt-2" style={{ color: 'var(--blue)' }}>
                AI Engineer · Islamabad, Pakistan
              </p>
            </motion.div>
          </div>

          {/* Info chips */}
          <div className="mt-6 space-y-2.5">
            {[
              { Icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan (UTC+5)' },
              { Icon: null, label: 'Status', value: 'Available for select projects', green: true },
              { Icon: Briefcase, label: 'Currently at', value: 'Peersol → Veremark (UK)' },
            ].map((item, i) => (
              <div key={i} className="card px-4 py-3 flex items-center gap-3" style={{ borderRadius: 'var(--r)' }}>
                {item.green ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
                ) : item.Icon ? (
                  <item.Icon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--blue)' }} />
                ) : null}
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>{item.label}</p>
                  <p className="text-sm font-medium truncate" style={{ color: item.green ? '#16a34a' : 'var(--ink-2)' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
