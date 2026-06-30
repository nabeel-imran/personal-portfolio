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
  },
  {
    quote: 'This is mind blowing! The package automation is exactly what we needed.',
    name: 'Olive Rose Aborot',
    role: 'Product Operations',
    company: 'Veremark',
    badge: 'Client',
  },
  {
    quote: 'Nabeel thinks in systems, not features. Every delivery comes with documentation, a Loom walkthrough, and zero surprises.',
    name: 'Project Stakeholder',
    role: 'Senior Operations',
    company: 'Enterprise Client',
    badge: 'Verified',
  },
]

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" alt>
      <SectionHeader eyebrow="Social Proof" title="What Clients & Colleagues Say" center />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUpVariants}
            custom={i + 3}
            className="card p-6 flex flex-col"
            style={{ borderRadius: 'var(--r-lg)' }}
          >
            <Quote className="w-7 h-7 mb-4 flex-shrink-0" style={{ color: 'var(--blue)', opacity: 0.35 }} />

            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p
              className="text-sm leading-relaxed flex-1 mb-6 italic"
              style={{ color: 'var(--ink-2)' }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: 'var(--blue-tint)',
                  color: 'var(--blue)',
                  border: '1px solid var(--blue-mid)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {t.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: 'var(--ink-4)' }}>{t.role} · {t.company}</p>
              </div>
              <span
                className="badge flex-shrink-0 self-start"
                style={{ background: 'var(--blue-tint)', color: 'var(--blue)', borderColor: 'var(--blue-mid)' }}
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
