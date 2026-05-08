'use client'

import { motion } from 'framer-motion'
import { Activity, FileText, Globe2, Workflow, ShieldCheck, Zap } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const reasons = [
  {
    icon: Activity,
    title: 'Live in production',
    description:
      "Every project on this site is running for real users today. I don't ship demos — I ship systems your ops team depends on.",
    metric: '4 RPA bots live',
  },
  {
    icon: FileText,
    title: 'Documented obsessively',
    description:
      'Loom walkthroughs, written tool comparisons, flowcharts before code. You can audit, hand off, or onboard a teammate in days, not months.',
    metric: '100% documented',
  },
  {
    icon: Workflow,
    title: 'Senior systems thinking',
    description:
      'Decisioning engines, audit logs, retry logic, observability. I architect for failure modes — not just the happy path.',
    metric: '95/100 efficiency',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-tested',
    description:
      'Currently shipping in production for Veremark (UK enterprise client) via Peersol. NDA-default, secrets-vault native, audit-ready by design.',
    metric: 'UK enterprise live',
  },
  {
    icon: Zap,
    title: 'Fast where it matters',
    description:
      "Replies under 2 hours. Weekly Looms. PoC in 3–7 days. I move fast on communication so you can move fast on decisions.",
    metric: '< 2hr response',
  },
  {
    icon: Globe2,
    title: 'Async-first, global',
    description:
      'Islamabad-based, working with EU and US teams daily. I overlap your morning, ship while you sleep, and arrive with progress every day.',
    metric: 'Remote · 4+ years',
  },
]

export function WhyMe() {
  return (
    <SectionWrapper id="why-me">
      <SectionHeader
        eyebrow="Why Me"
        title="Senior engineer. Production builder. Async-friendly."
        subtitle="What separates this from agency work or junior freelancers."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {reasons.map((reason, i) => {
          const Icon = reason.icon
          return (
            <motion.div
              key={reason.title}
              variants={fadeUpVariants}
              custom={i + 2}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="relative group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-glass)] p-5 sm:p-6 overflow-hidden hover:border-[var(--border-accent)] transition-all duration-300"
            >
              {/* Hover halo */}
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 pointer-events-none"
                style={{ background: 'var(--gradient-accent)' }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'var(--accent-subtle)',
                      border: '1px solid var(--border-accent)',
                    }}
                  >
                    <Icon className="w-4 h-4 text-[var(--accent-primary)]" />
                  </div>
                  <span className="text-[10px] font-mono text-[var(--accent-primary)] tracking-wide px-2 py-1 rounded border border-[var(--border-accent)]"
                    style={{ background: 'var(--accent-subtle)' }}
                  >
                    {reason.metric}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
