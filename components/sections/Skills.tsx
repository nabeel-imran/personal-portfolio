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

      {/* Animated logo wall */}
      <motion.div variants={fadeUpVariants} custom={3} className="mb-14 sm:mb-20">
        <StackMarquee />
      </motion.div>

      {/* Categorized icon grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((cat, i) => {
          const items = stack.filter((s) => s.category === cat.key)
          return (
            <motion.div
              key={cat.key}
              variants={fadeUpVariants}
              custom={i + 4}
              className="glass-card p-5 sm:p-6 group hover:border-[var(--border-accent)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-subtle)]">
                <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                  {cat.label}
                </h3>
                <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {items.map((tool) => {
                  const Icon = tool.Icon
                  return (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--bg-tertiary)] transition-all duration-200 cursor-default"
                    >
                      <Icon
                        className="w-4 h-4 flex-shrink-0 transition-colors duration-200"
                        style={{ color: tool.color }}
                      />
                      <span className="text-xs text-[var(--text-secondary)] truncate">
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

      {/* Footer note */}
      <motion.p
        variants={fadeUpVariants}
        custom={categories.length + 4}
        className="text-center text-sm text-[var(--text-muted)] mt-8 sm:mt-10 max-w-2xl mx-auto"
      >
        Don&apos;t see your stack? Nabeel is a senior engineer who picks up modern tools fast —
        the stack rarely matters as much as how the system is architected.
      </motion.p>
    </SectionWrapper>
  )
}

// Re-export types for any external callers
export type { StackCategory }
