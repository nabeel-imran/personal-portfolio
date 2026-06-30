'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { StackMarquee } from '@/components/ui/StackMarquee'
import { stack, categories, type StackCategory } from '@/lib/stack'

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Tools I Ship With"
        subtitle="40+ technologies across AI, automation, full-stack, cloud, and enterprise systems."
      />

      <motion.div variants={fadeUpVariants} custom={3} className="mb-14 sm:mb-20">
        <StackMarquee />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((cat, i) => {
          const items = stack.filter((s) => s.category === cat.key)
          return (
            <motion.div
              key={cat.key}
              variants={fadeUpVariants}
              custom={i + 4}
              className="card p-5 sm:p-6 group hover:shadow-[var(--shadow-md)] transition-all duration-200"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              <div className="flex items-center justify-between mb-4 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
                <h3 className="text-sm sm:text-base font-semibold" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
                  {cat.label}
                </h3>
                <span className="text-[10px] font-semibold tabular-nums" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {items.map((tool) => {
                  const Icon = tool.Icon
                  return (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-150 cursor-default"
                      style={{}}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-alt)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '' }}
                    >
                      <Icon
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: tool.color }}
                      />
                      <span className="text-xs truncate" style={{ color: 'var(--ink-3)' }}>
                        {tool.name}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        variants={fadeUpVariants}
        custom={categories.length + 4}
        className="text-center text-sm mt-8 sm:mt-10 max-w-2xl mx-auto"
        style={{ color: 'var(--ink-4)' }}
      >
        Don&apos;t see your stack? Nabeel is a senior engineer who picks up modern tools fast —
        the stack rarely matters as much as how the system is architected.
      </motion.p>
    </SectionWrapper>
  )
}

export type { StackCategory }
