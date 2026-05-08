'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const testimonials = [
  {
    quote: '3 Background Checks Live on our Axiom Automation. Good work Nabeel.',
    name: 'Furqan',
    role: 'Technical Lead',
    company: 'Peersol Consulting',
    badge: 'Verified',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  {
    quote: 'This is mind blowing! The package automation is exactly what we needed.',
    name: 'Olive Rose Aborot',
    role: 'Product Operations',
    company: 'Veremark',
    badge: 'Client',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  {
    quote:
      'Nabeel thinks in systems, not features. Every delivery comes with documentation, a Loom walkthrough, and zero surprises.',
    name: 'Project Stakeholder',
    role: 'Senior Operations',
    company: 'Enterprise Client',
    badge: 'Verified',
    badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  },
]

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        eyebrow="Social Proof"
        title="What Clients & Colleagues Say"
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUpVariants}
            custom={i + 3}
            className="glass-card p-6 flex flex-col"
          >
            <Quote className="w-8 h-8 text-[var(--accent-primary)] opacity-30 mb-4 flex-shrink-0" />

            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-[var(--text-primary)] text-sm leading-relaxed flex-1 mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[var(--accent-primary)] flex-shrink-0"
                style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)' }}
              >
                {t.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  {t.role} · {t.company}
                </p>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border font-medium flex-shrink-0 self-start ${t.badgeColor}`}
              >
                {t.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
