'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { SkillChip } from '@/components/ui/SkillChip'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/lib/projects'

const statusVariant = (s: string): 'green' | 'blue' | 'purple' => {
  if (s === 'live') return 'green'
  if (s === 'shipped') return 'blue'
  return 'purple'
}

const statusLabel = (s: string) => {
  if (s === 'live') return '🟢 Live in Production'
  if (s === 'shipped') return '✓ Shipped'
  return '✓ Personal Tool'
}

export function Projects() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <SectionWrapper id="projects" className="bg-[var(--bg-secondary)]">
      <SectionHeader
        eyebrow="Work"
        title="Production Systems, Not Portfolios"
        subtitle="Every project here is live, tested, and running for real clients."
      />

      {/* Featured project */}
      <motion.div
        variants={fadeUpVariants}
        custom={3}
        className="relative rounded-2xl overflow-hidden border border-[var(--border-accent)] mb-8 sm:mb-10 group"
        style={{
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
          boxShadow: '0 0 60px rgba(59,130,246,0.08)',
        }}
      >
        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            <Badge variant="green">{statusLabel(featured.status)}</Badge>
            <Badge variant="blue">Enterprise</Badge>
            <span className="text-xs text-[var(--text-muted)] font-mono">Featured Project</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 leading-tight">
            {featured.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            The most complex automation system I&apos;ve built. A multi-country enterprise RPA platform
            for Veremark (UK) — replacing hours of manual compliance work with fully automated, audit-ready pipelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 sm:mb-8">
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                4 Live Production Bots
              </p>
              <ul className="space-y-2">
                {[
                  'Australian Federal Police (AFP) Check',
                  'Philippines Criminal Record Check',
                  'UK Directorship Verification',
                  'Employment Check Automation',
                ].map((bot) => (
                  <li
                    key={bot}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>{bot}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Key Achievements
              </p>
              <ul className="space-y-2">
                {featured.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--accent-primary)] flex-shrink-0">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {featured.tech.map((t) => (
                <SkillChip key={t}>{t}</SkillChip>
              ))}
            </div>
            <Link
              href={`/projects/${featured.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-bright)] transition-colors flex-shrink-0"
            >
              View Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {rest.map((project, i) => (
          <motion.div
            key={project.slug}
            variants={fadeUpVariants}
            custom={i + 4}
            className="glass-card p-5 sm:p-6 group flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge variant={statusVariant(project.status)}>
                {statusLabel(project.status)}
              </Badge>
              <Badge>{project.category}</Badge>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-bright)] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.slice(0, 4).map((t) => (
                <SkillChip key={t}>{t}</SkillChip>
              ))}
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

      {/* CTA */}
      <motion.div variants={fadeUpVariants} custom={10} className="text-center mt-10 sm:mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
        >
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  )
}
