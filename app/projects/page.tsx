'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { SkillChip } from '@/components/ui/SkillChip'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/lib/projects'

const categories = ['All', 'AI Automation', 'GenAI', 'Full-Stack', 'Tools']

const statusLabel = (s: string) => {
  if (s === 'live') return '🟢 Live'
  if (s === 'shipped') return '✓ Shipped'
  return '✓ Personal'
}

const statusVariant = (s: string): 'green' | 'blue' | 'purple' => {
  if (s === 'live') return 'green'
  if (s === 'shipped') return 'blue'
  return 'purple'
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <p className="font-mono text-xs sm:text-sm text-[var(--accent-primary)] mb-3 uppercase tracking-wider">
            Work
          </p>
          <h1 className="mb-4">All Projects</h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl">
            Every project here is live, tested, or actively used. No toy projects, no tutorial clones.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]'
                  : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5 sm:p-6 group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Badge variant={statusVariant(project.status)}>
                    {statusLabel(project.status)}
                  </Badge>
                  <Badge>{project.category}</Badge>
                </div>

                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-bright)] transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((t) => (
                    <SkillChip key={t}>{t}</SkillChip>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs text-[var(--text-muted)] px-2 py-1">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-medium text-[var(--accent-primary)] hover:text-[var(--accent-bright)] flex items-center gap-1 transition-colors"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-secondary)] flex items-center gap-1 transition-colors"
                    >
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
