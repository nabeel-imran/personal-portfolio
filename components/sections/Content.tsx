'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const platforms = [
  {
    name: 'YouTube',
    handle: '@nabeelscode',
    icon: '▶',
    iconColor: '#FF0000',
    bg: 'rgba(255,0,0,0.06)',
    border: 'rgba(255,0,0,0.18)',
    description: 'In-depth tutorials, full courses, and workflow walkthroughs. Learn to build AI automation systems from production code.',
    cta: 'Subscribe',
    href: 'https://youtube.com/@nabeelscode',
  },
  {
    name: 'Instagram',
    handle: '@nabeelscode',
    icon: '◎',
    iconColor: '#E1306C',
    bg: 'rgba(225,48,108,0.06)',
    border: 'rgba(225,48,108,0.18)',
    description: 'Daily AI content, behind-the-scenes automations, and engineering content that hits different.',
    cta: 'Follow',
    href: 'https://instagram.com/nabeelscode',
  },
  {
    name: 'TikTok',
    handle: '@nabeelscode',
    icon: '♫',
    iconColor: '#69C9D0',
    bg: 'rgba(105,201,208,0.06)',
    border: 'rgba(105,201,208,0.18)',
    description: 'Short-form AI tutorials and automation demos. 30 seconds to learn something new.',
    cta: 'Follow',
    href: '#',
  },
  {
    name: 'LinkedIn',
    handle: 'Nabeel Imran',
    icon: 'in',
    iconColor: '#0A66C2',
    bg: 'rgba(10,102,194,0.06)',
    border: 'rgba(10,102,194,0.18)',
    description: 'AI engineering insights, case studies, and thoughts on the automation landscape.',
    cta: 'Connect',
    href: 'https://www.linkedin.com/in/nabeelimrann/',
  },
]

const contentTypes = [
  'Long-form engineering breakdowns of production AI systems',
  'Behind-the-scenes: real n8n and automation workflows from client work',
  'Architecture deep-dives on LLMs, RAG pipelines, and AI agents',
  'Short-form automation demos and system walkthroughs',
]

export function Content() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <SectionWrapper id="content" alt>
      <SectionHeader
        eyebrow="Content"
        title="Technical Content — AI Engineering"
        subtitle="Real systems. Real code. No abstraction layers between you and production."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12 sm:mb-16">
        {/* Brand statement */}
        <motion.div variants={fadeUpVariants} custom={3} className="space-y-6">
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--ink-2)' }}>
            I document what I actually ship. Every tutorial is pulled from a live client engagement —
            AI automations, n8n workflows, GenAI integrations, full-stack AI products.
            Explained by an engineer who has them running in production, not a content creator
            who read the docs last Tuesday.
          </p>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
              Content I create
            </p>
            {contentTypes.map((type, i) => (
              <div key={i} className="flex items-start gap-3" style={{ color: 'var(--ink-2)' }}>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--blue)' }} />
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
              className="card p-5 group relative overflow-hidden block transition-all duration-200"
              style={{ borderRadius: 'var(--r-lg)', borderColor: p.border }}
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
                    style={{ background: p.bg, color: p.iconColor, border: `1px solid ${p.border}` }}
                  >
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>{p.name}</p>
                    <p className="text-xs truncate" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>{p.handle}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed mb-3 flex-1" style={{ color: 'var(--ink-3)' }}>
                  {p.description}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: p.iconColor }}>
                  {p.cta} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <motion.div
        variants={fadeUpVariants}
        custom={8}
        className="card p-6 sm:p-8 lg:p-10 text-center"
        style={{ borderRadius: 'var(--r-xl)', background: 'linear-gradient(135deg, var(--bg-alt) 0%, var(--blue-tint) 100%)' }}
      >
        <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>
          Get AI automation workflows delivered weekly
        </h3>
        <p className="text-sm mb-5 sm:mb-6" style={{ color: 'var(--ink-4)' }}>
          Real n8n flows, real automation recipes. No spam.
        </p>
        {subscribed ? (
          <p className="text-emerald-600 font-semibold text-sm">
            ✓ You&apos;re subscribed! Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
              style={{
                border: '1px solid var(--border-2)',
                background: 'var(--bg)',
                color: 'var(--ink)',
              }}
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </SectionWrapper>
  )
}
