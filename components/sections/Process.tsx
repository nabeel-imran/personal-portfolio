'use client'

import { motion } from 'framer-motion'
import { Compass, GitBranch, Rocket, FileCheck } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover & Scope',
    description:
      'We start with a Loom walkthrough of your current process. I document the bottlenecks, map data flows, and write a clear scope with deliverables you can actually evaluate.',
    deliverables: ['Written project brief', 'Loom walkthrough', 'Tech evaluation memo'],
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Architect & Validate',
    description:
      'I design the system on paper before touching code. Flowcharts, edge cases, retry logic, and a tool comparison (n8n vs Make vs custom) — all written down before sprint one.',
    deliverables: ['System flowchart', 'Tool comparison doc', 'Working PoC'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Build in Production',
    description:
      'No staging-only demos. Every checkpoint runs against real data, with audit logs, error handling, and observability baked in. You get weekly Loom updates and a Slack DM channel.',
    deliverables: ['Weekly Loom updates', 'Async Slack/email channel', 'Audit-ready logs'],
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Handoff & Document',
    description:
      'I write the runbook your ops team will use after I leave. Tutorials, recovery playbooks, and 30 days of async support to make sure your team owns it confidently.',
    deliverables: ['Runbook & playbooks', 'Team training Loom', '30-day async support'],
  },
]

export function Process() {
  return (
    <SectionWrapper id="process">
      <SectionHeader
        eyebrow="How I Work"
        title="A clear path from idea to production"
        subtitle="Documented every step. No surprises, no disappearing acts."
      />

      <div className="relative">
        {/* Vertical connector line on desktop */}
        <div
          aria-hidden
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--border-accent) 10%, var(--border-accent) 90%, transparent)',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isRight = i % 2 === 1
            return (
              <motion.div
                key={step.number}
                variants={fadeUpVariants}
                custom={i + 2}
                className={`relative ${isRight ? 'md:mt-24' : ''}`}
              >
                {/* Number badge on connector */}
                <div
                  aria-hidden
                  className={`hidden md:flex absolute top-8 z-10 w-10 h-10 rounded-full items-center justify-center font-mono text-xs font-bold text-white ${
                    isRight ? '-left-12' : '-right-12'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    boxShadow: '0 0 0 4px var(--bg-primary), 0 0 20px var(--accent-glow)',
                    transform: isRight ? 'translateX(-50%)' : 'translateX(50%)',
                  }}
                >
                  {step.number}
                </div>

                <div
                  className="glass-card p-6 sm:p-7 group hover:border-[var(--border-accent)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{
                        background: 'var(--accent-subtle)',
                        border: '1px solid var(--border-accent)',
                      }}
                    >
                      <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[var(--accent-primary)] tracking-wider md:hidden">
                        STEP {step.number}
                      </p>
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2 font-semibold">
                      You get
                    </p>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-secondary)]"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--accent-primary)]" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
