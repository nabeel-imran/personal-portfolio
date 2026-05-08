'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MapPin, Briefcase, CheckCircle, Play } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import Link from 'next/link'

const values = [
  'I document everything. Flowcharts, Loom walkthroughs, written weekly updates.',
  'I communicate proactively. No surprises, no disappearing acts.',
  'I evaluate tools honestly. Written analysis, real recommendations.',
  'I think in systems, not features. Production from day one.',
]

export function About() {
  return (
    <SectionWrapper id="about" className="bg-[var(--bg-secondary)]">
      <SectionHeader eyebrow="About" title="The Engineer Behind the Automation" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 lg:gap-12 items-start">
        {/* Text — wider column */}
        <div className="md:col-span-7 space-y-6">
          <motion.blockquote
            variants={fadeUpVariants}
            custom={3}
            className="text-lg sm:text-xl text-[var(--text-primary)] font-medium leading-relaxed border-l-2 border-[var(--accent-primary)] pl-5 sm:pl-6"
          >
            &ldquo;I&apos;m Nabeel Imran — but you&apos;ll find me online as Nabeel&apos;s Code.
            I&apos;m an AI Engineer based in Islamabad, Pakistan, building the kind of
            systems that make business leaders say &lsquo;this is mind-blowing.&rsquo;&rdquo;
          </motion.blockquote>

          <motion.div
            variants={fadeUpVariants}
            custom={4}
            className="space-y-4 text-[var(--text-secondary)] text-sm sm:text-base"
          >
            <p>
              At Peersol, I work directly with{' '}
              <strong className="text-[var(--text-primary)]">Veremark</strong> — a UK-based global enterprise background
              screening company — as their staff-augmented AI Engineer. I&apos;ve shipped 4 live RPA bots
              that their operations teams use daily, a rule-based decisioning engine for UK Directorship
              verification, and an automated package creation system that cut client onboarding from
              45 minutes to under 2 minutes.
            </p>
            <p>
              Before Veremark, I built <strong className="text-[var(--text-primary)]">RankGuide</strong> from scratch — a live AI SaaS product — plus content
              automation pipelines, GenAI video generation systems, and intelligent job-scraping workflows
              that I actually use myself.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={5}>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              What I bring to every engagement
            </p>
            <ul className="space-y-2.5">
              {values.map((v, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-secondary)]"
                >
                  <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            custom={6}
            className="text-sm sm:text-base text-[var(--text-secondary)]"
          >
            Beyond client work, I create content under <strong className="text-[var(--text-primary)]">Nabeel&apos;s Code</strong> — teaching developers
            how to build AI automation systems, sharing real workflows from real projects, and
            making the world of LLMs and automation accessible without dumbing it down.
          </motion.p>

          {/* CTA cards */}
          <motion.div
            variants={fadeUpVariants}
            custom={7}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4"
          >
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glass-card p-5 group hover:border-[var(--accent-primary)] block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="font-semibold text-[var(--text-primary)] text-sm">Need an AI Engineer?</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                Let&apos;s talk about your project
              </p>
              <div className="flex items-center gap-1 mt-3 text-[var(--accent-primary)] text-xs font-medium">
                Get in touch <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <a
              href="https://youtube.com/@nabeelscode"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 group hover:border-[var(--accent-primary)] block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="font-semibold text-[var(--text-primary)] text-sm">Learn with Nabeel&apos;s Code</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                Subscribe for AI automation tutorials
              </p>
              <div className="flex items-center gap-1 mt-3 text-[var(--accent-primary)] text-xs font-medium">
                Subscribe <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Visual — narrower column, sticky on desktop */}
        <motion.div
          variants={fadeUpVariants}
          custom={3}
          className="md:col-span-5 md:sticky md:top-24"
        >
          {/* Profile photo card */}
          <div className="relative w-full max-w-sm mx-auto md:max-w-none">
            {/* Outer glow */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none"
              style={{ background: 'var(--gradient-accent)' }}
            />

            {/* Photo frame — uses brand-blue backdrop with multiply blend so the white
                studio background of the photo blends into the brand color, giving an
                editorial / duotone feel rather than a passport-style cutout. */}
            <motion.div
              whileHover={{ scale: 1.015, rotate: -0.3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative rounded-2xl overflow-hidden border border-[var(--border-accent)] group"
              style={{
                aspectRatio: '4 / 5',
                background:
                  'radial-gradient(ellipse at top, #2256c6 0%, #0d1840 60%, #080910 100%)',
                boxShadow:
                  '0 0 0 1px rgba(59,130,246,0.18), 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(59,130,246,0.18)',
              }}
            >
              <Image
                src="/images/nabeel.jpg"
                alt="Nabeel Imran — AI Engineer"
                fill
                priority
                sizes="(max-width: 768px) 384px, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: 'center top',
                  // Multiply blends the white studio backdrop with the blue gradient
                  // beneath, while preserving facial detail. Slight contrast/saturation
                  // boost for a polished editorial finish.
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.04) saturate(1.04)',
                }}
              />

              {/* Top vignette — adds depth to the frame */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1/4 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(8,9,16,0.55) 0%, transparent 100%)',
                }}
              />

              {/* Bottom dark gradient for nameplate legibility */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(8,9,16,0.95) 0%, rgba(8,9,16,0.6) 50%, transparent 100%)',
                }}
              />

              {/* Top-right badge */}
              <div
                className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono text-[var(--accent-bright)] border border-[var(--border-accent)] backdrop-blur-md"
                style={{ background: 'rgba(59,130,246,0.18)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI Engineer
              </div>

              {/* Top-left handle */}
              <div
                className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)] backdrop-blur-md"
                style={{ background: 'rgba(13,15,23,0.65)' }}
              >
                @nabeelscode
              </div>

              {/* Bottom name plate */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                <p className="font-bold text-white text-lg sm:text-xl leading-tight">
                  Nabeel Imran
                </p>
                <p className="text-[var(--accent-bright)] text-xs sm:text-sm font-mono mt-1">
                  Building production AI systems
                </p>
              </div>

              {/* Corner accents */}
              <div
                aria-hidden
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--accent-primary)] opacity-60 rounded-tl-2xl"
              />
              <div
                aria-hidden
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--accent-primary)] opacity-60 rounded-br-2xl"
              />
            </motion.div>
          </div>

          {/* Info cards */}
          <div className="mt-4 space-y-3">
            <div className="glass-card p-4 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Location</p>
                <p className="text-sm text-[var(--text-primary)] truncate">Islamabad, Pakistan (UTC+5)</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Status</p>
                <p className="text-sm text-emerald-400 font-medium">Available for select projects</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Currently at</p>
                <p className="text-sm text-[var(--text-primary)] truncate">Peersol → Veremark (UK)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
