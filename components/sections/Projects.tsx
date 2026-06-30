'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { projects } from '@/lib/projects'

const statusMeta = (s: string) => {
  if (s === 'live')     return { label: 'Live', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' }
  if (s === 'shipped')  return { label: 'Shipped', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' }
  return                       { label: 'Personal', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' }
}

export function Projects() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <SectionWrapper id="projects" alt>
      <SectionHeader
        eyebrow="Work"
        title="Production Systems, Not Portfolios"
        subtitle="Every project here is live, tested, and running for real clients."
      />

      {/* Featured */}
      <motion.div
        variants={fadeUpVariants}
        custom={3}
        className="mb-8 sm:mb-10 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--blue-tint) 0%, #F5F3FF 100%)',
          border: '1px solid var(--blue-mid)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span
              className="badge"
              style={{ background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live in Production
            </span>
            <span className="badge" style={{ background: 'var(--blue-tint)', color: 'var(--blue)', borderColor: 'var(--blue-mid)' }}>
              Enterprise
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--ink-4)' }}>Featured Project</span>
          </div>

          <h3
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}
          >
            {featured.title}
          </h3>
          <p className="text-sm sm:text-base mb-8 max-w-3xl leading-relaxed" style={{ color: 'var(--ink-3)' }}>
            The most complex automation system I&apos;ve built. A multi-country enterprise RPA platform
            for Veremark (UK) — replacing hours of manual compliance work with fully automated, audit-ready pipelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
                4 Live Production Bots
              </p>
              <ul className="space-y-2">
                {[
                  'Australian Federal Police (AFP) Check',
                  'Philippines Criminal Record Check',
                  'UK Directorship Verification',
                  'Employment Check Automation',
                ].map(bot => (
                  <li key={bot} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-3)' }}>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {bot}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
                Key Achievements
              </p>
              <ul className="space-y-2">
                {featured.achievements.map(a => (
                  <li key={a} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-3)' }}>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--blue)' }} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {featured.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <Link
              href={`/projects/${featured.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors flex-shrink-0"
              style={{ color: 'var(--blue)', fontFamily: 'var(--font-heading)' }}
            >
              View Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {rest.map((project, i) => {
          const meta = statusMeta(project.status)
          return (
            <motion.div
              key={project.slug}
              variants={fadeUpVariants}
              custom={i + 4}
              className="card p-5 sm:p-6 flex flex-col group"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="badge" style={{ background: meta.bg, color: meta.color, borderColor: meta.border }}>
                  {meta.label}
                </span>
                <span className="badge" style={{ background: 'var(--bg-alt)', color: 'var(--ink-3)', borderColor: 'var(--border)' }}>
                  {project.category}
                </span>
              </div>

              <h3
                className="text-base sm:text-lg mb-2 leading-snug transition-colors"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}
              >
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--ink-3)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-semibold flex items-center gap-1 transition-colors"
                  style={{ color: 'var(--blue)', fontFamily: 'var(--font-heading)' }}
                >
                  Details <ArrowRight className="w-3 h-3" />
                </Link>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1 transition-colors"
                    style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-heading)' }}
                  >
                    Live <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div variants={fadeUpVariants} custom={10} className="text-center mt-10 sm:mt-12">
        <Link href="/projects" className="btn-outline">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  )
}
