'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const platforms = [
  {
    name: 'YouTube',
    handle: "Nabeel's Code",
    icon: '▶',
    iconColor: '#FF0000',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.25)',
    description:
      'In-depth tutorials, full courses, and workflow walkthroughs. Learn to build AI automation systems from production code.',
    cta: 'Subscribe',
    href: 'https://youtube.com/@nabeelscode',
  },
  {
    name: 'Instagram',
    handle: '@nabeelscode',
    icon: '◎',
    iconColor: '#E1306C',
    bg: 'rgba(225,48,108,0.08)',
    border: 'rgba(225,48,108,0.25)',
    description:
      'Daily AI content, behind-the-scenes automations, and engineering content that hits different.',
    cta: 'Follow',
    href: 'https://instagram.com/nabeelscode',
  },
  {
    name: 'TikTok',
    handle: '@nabeelscode',
    icon: '♫',
    iconColor: '#69C9D0',
    bg: 'rgba(105,201,208,0.08)',
    border: 'rgba(105,201,208,0.25)',
    description:
      'Short-form AI tutorials and automation demos. 30 seconds to learn something new.',
    cta: 'Follow',
    href: '#',
  },
  {
    name: 'LinkedIn',
    handle: 'Nabeel Imran',
    icon: 'in',
    iconColor: '#0A66C2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.25)',
    description:
      'AI engineering insights, case studies, and thoughts on the automation landscape.',
    cta: 'Connect',
    href: 'https://www.linkedin.com/in/nabeelimrann/',
  },
]

const contentTypes = [
  'Meme-style reels that make AI concepts actually click',
  'Behind-the-scenes: real n8n workflows from real projects',
  'Long-form YouTube tutorials on building production AI systems',
  'Informative deep-dives on LLMs, RAG, and automation architecture',
]

export function Content() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <SectionWrapper id="content" className="bg-[var(--bg-secondary)]">
      <SectionHeader
        eyebrow="Content"
        title="Nabeel's Code — Learning AI Engineering"
        subtitle="Real systems. Real code. No fluff."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12 sm:mb-16">
        {/* Brand statement */}
        <motion.div variants={fadeUpVariants} custom={3} className="space-y-6">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            I share what I actually build — not watered-down tutorials, not vague theory.
            If I built it for a client, I teach it here. AI automations, n8n flows,
            GenAI integrations, full-stack AI products — explained by someone who ships them.
          </p>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">
              Content I create
            </p>
            {contentTypes.map((type, i) => (
              <div key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="text-[var(--accent-primary)] mt-0.5 flex-shrink-0">→</span>
                <span className="text-sm">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUpVariants}
              custom={i + 3}
              className="glass-card p-5 group relative overflow-hidden block"
              style={{ borderColor: p.border }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: p.bg }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold font-mono flex-shrink-0"
                    style={{
                      background: p.bg,
                      color: p.iconColor,
                      border: `1px solid ${p.border}`,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)] truncate">
                      {p.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] font-mono truncate">
                      {p.handle}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed mb-3 flex-1">
                  {p.description}
                </p>
                <div
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: p.iconColor }}
                >
                  {p.cta} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Newsletter strip */}
      <motion.div
        variants={fadeUpVariants}
        custom={8}
        className="glass-card p-6 sm:p-8 lg:p-10 text-center"
        style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2">
          Get AI automation workflows delivered weekly
        </h3>
        <p className="text-sm text-[var(--text-muted)] mb-5 sm:mb-6">
          Real n8n flows, real automation recipes. No spam.
        </p>
        {subscribed ? (
          <p className="text-emerald-400 font-medium text-sm">
            ✓ You&apos;re subscribed! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[var(--accent-primary)] text-white font-medium text-sm hover:bg-[var(--accent-bright)] transition-all hover:shadow-[0_0_15px_var(--accent-glow)] whitespace-nowrap active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </SectionWrapper>
  )
}
