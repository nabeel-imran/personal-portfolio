'use client'

import { motion } from 'framer-motion'
import { Activity, FileText, Globe2, Workflow, ShieldCheck, Zap } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const reasons = [
  {
    Icon: Activity,
    title: 'Live in production',
    description: "Every project on this site is running for real users today. I don't ship demos — I ship systems your ops team depends on.",
    metric: '4 RPA bots live',
  },
  {
    Icon: FileText,
    title: 'Documented obsessively',
    description: 'Loom walkthroughs, written tool comparisons, flowcharts before code. You can audit, hand off, or onboard a teammate in days, not months.',
    metric: '100% documented',
  },
  {
    Icon: Workflow,
    title: 'Senior systems thinking',
    description: 'Decisioning engines, audit logs, retry logic, observability. I architect for failure modes — not just the happy path.',
    metric: '95/100 efficiency',
  },
  {
    Icon: ShieldCheck,
    title: 'Enterprise-tested',
    description: 'Currently shipping in production for Veremark (UK enterprise client) via Peersol. NDA-default, secrets-vault native, audit-ready by design.',
    metric: 'UK enterprise live',
  },
  {
    Icon: Zap,
    title: 'Fast where it matters',
    description: "Replies under 2 hours. Weekly Looms. PoC in 3–7 days. I move fast on communication so you can move fast on decisions.",
    metric: '< 2hr response',
  },
  {
    Icon: Globe2,
    title: 'Async-first, global',
    description: 'Islamabad-based, working with EU and US teams daily. I overlap your morning, ship while you sleep, and arrive with progress every day.',
    metric: 'Remote · 4+ years',
  },
]

export function WhyMe() {
  return (
    <SectionWrapper id="why-me" alt>
      <SectionHeader
        eyebrow="Why Me"
        title="Senior engineer. Production builder. Async-friendly."
        subtitle="What separates this from agency work or junior freelancers."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {reasons.map((r, i) => {
          const Icon = r.Icon
          return (
            <motion.div
              key={r.title}
              variants={fadeUpVariants}
              custom={i + 2}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
              className="card p-5 sm:p-6 group cursor-default"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--blue-tint)', border: '1px solid var(--blue-mid)' }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: 'var(--blue)' }} />
                </div>
                <span
                  className="text-[10px] font-mono font-semibold px-2 py-1 rounded"
                  style={{
                    background: 'var(--blue-tint)',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue-mid)',
                  }}
                >
                  {r.metric}
                </span>
              </div>
              <h3 className="text-base sm:text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-3)' }}>
                {r.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
