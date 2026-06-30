'use client'

import { motion } from 'framer-motion'
import { Compass, GitBranch, Rocket, FileCheck } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    Icon: Compass,
    title: 'Discover & Scope',
    description: 'We start with a Loom walkthrough of your current process. I document the bottlenecks, map data flows, and write a clear scope with deliverables you can actually evaluate.',
    deliverables: ['Written project brief', 'Loom walkthrough', 'Tech evaluation memo'],
  },
  {
    number: '02',
    Icon: GitBranch,
    title: 'Architect & Validate',
    description: 'I design the system on paper before touching code. Flowcharts, edge cases, retry logic, and a tool comparison — all written down before sprint one.',
    deliverables: ['System flowchart', 'Tool comparison doc', 'Working PoC'],
  },
  {
    number: '03',
    Icon: Rocket,
    title: 'Build in Production',
    description: 'No staging-only demos. Every checkpoint runs against real data, with audit logs, error handling, and observability baked in. You get weekly Loom updates.',
    deliverables: ['Weekly Loom updates', 'Async Slack/email channel', 'Audit-ready logs'],
  },
  {
    number: '04',
    Icon: FileCheck,
    title: 'Handoff & Document',
    description: 'I write the runbook your ops team will use after I leave. Tutorials, recovery playbooks, and 30 days of async support so your team owns it confidently.',
    deliverables: ['Runbook & playbooks', 'Team training Loom', '30-day async support'],
  },
]

export function Process() {
  return (
    <SectionWrapper id="process" alt>
      <SectionHeader
        eyebrow="How I Work"
        title="A clear path from idea to production"
        subtitle="Documented every step. No surprises, no disappearing acts."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {steps.map((step, i) => {
          const Icon = step.Icon
          return (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              custom={i + 2}
              className="card p-6 sm:p-7 group hover:shadow-[var(--shadow-md)] transition-shadow"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--blue)', boxShadow: 'var(--shadow-blue)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-semibold" style={{ color: 'var(--ink-4)' }}>
                    STEP {step.number}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed mb-5" style={{ color: 'var(--ink-3)' }}>
                {step.description}
              </p>

              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
                  You get
                </p>
                <ul className="space-y-1.5">
                  {step.deliverables.map(d => (
                    <li key={d} className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: 'var(--ink-3)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--blue)' }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
