import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import { projects, getProjectBySlug } from '@/lib/projects'
import { SkillChip } from '@/components/ui/SkillChip'
import { Badge } from '@/components/ui/Badge'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
  }
}

const statusLabel = (s: string) => {
  if (s === 'live') return '🟢 Live in Production'
  if (s === 'shipped') return '✓ Shipped'
  return '✓ Personal Tool'
}

const statusVariant = (s: string): 'green' | 'blue' | 'purple' => {
  if (s === 'live') return 'green'
  if (s === 'shipped') return 'blue'
  return 'purple'
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[currentIndex + 1] || projects[0]

  const isVeremark = slug === 'veremark-automation'

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant={statusVariant(project.status)}>{statusLabel(project.status)}</Badge>
            <Badge>{project.category}</Badge>
            {project.featured && <Badge variant="purple">Featured</Badge>}
          </div>
          <h1 className="mb-5 sm:mb-6 leading-tight">{project.title}</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="glass-card p-6 mb-10">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <SkillChip key={t}>{t}</SkillChip>
            ))}
          </div>
        </div>

        {/* Veremark — full case study */}
        {isVeremark && (
          <>
            {/* Problem */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <span className="text-[var(--accent-primary)] font-mono text-lg">01</span>
                The Problem
              </h2>
              <div className="glass-card p-6 space-y-4 text-[var(--text-secondary)]">
                <p>
                  Veremark&apos;s operations team was manually processing background screening checks across multiple countries. 
                  Each check required navigating government portals, copying data, verifying against records, and 
                  updating Monday.com — taking <strong className="text-[var(--text-primary)]">45+ minutes per client package</strong>.
                </p>
                <p>
                  Additionally, the UK Directorship verification process required cross-referencing multiple 
                  name variants and making judgment calls — work that was completely manual and error-prone.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400 font-mono">45+ min</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">per client package (before)</div>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400 font-mono">100% manual</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">every screening check</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <span className="text-[var(--accent-primary)] font-mono text-lg">02</span>
                The Solution
              </h2>
              <div className="glass-card p-6 space-y-4 text-[var(--text-secondary)]">
                <p>
                  I built a multi-country enterprise RPA platform using <strong className="text-[var(--text-primary)]">Axiom.ai</strong> for browser automation, 
                  <strong className="text-[var(--text-primary)]"> n8n</strong> for workflow orchestration, <strong className="text-[var(--text-primary)]">Monday.com GraphQL API</strong> for data sync, 
                  and <strong className="text-[var(--text-primary)]">LLM Integration</strong> for intelligent decisioning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {[
                    '🇦🇺 Australian Federal Police (AFP) Check Bot',
                    '🇵🇭 Philippines Criminal Record Check Bot',
                    '🇬🇧 UK Directorship Verification Bot',
                    '💼 Employment Check Automation Bot',
                  ].map((bot) => (
                    <div key={bot} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-[var(--text-primary)]">{bot}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process timeline */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <span className="text-[var(--accent-primary)] font-mono text-lg">03</span>
                Build Process
              </h2>
              <div className="space-y-4">
                {[
                  { phase: 'Discovery', desc: 'Mapped existing manual processes, documented edge cases, identified automation opportunities.' },
                  { phase: 'Architecture', desc: 'Designed n8n workflow structure, Axiom.ai bot flows, and Monday.com data models.' },
                  { phase: 'AFP & Phil. Bots', desc: 'Built and tested first two country check bots with error handling and retry logic.' },
                  { phase: 'Decisioning Engine', desc: 'Implemented 6-variant name-logic algorithm for UK Directorship checks. 95/100 efficiency score.' },
                  { phase: 'Package Automation', desc: 'Built the package creation system. 45 min → 2 min. Ops team loved it.' },
                  { phase: 'Audit & Benchmarking', desc: 'Added audit-log engine and benchmarking system for operations reporting.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center text-xs font-mono text-[var(--accent-primary)] flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < 5 && <div className="w-px flex-1 bg-[var(--border-subtle)] mt-2" />}
                    </div>
                    <div className="pb-6">
                      <p className="font-semibold text-[var(--text-primary)] text-sm">{step.phase}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <span className="text-[var(--accent-primary)] font-mono text-lg">04</span>
                Outcomes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { before: '45+ min', after: '< 2 min', label: 'Package Creation' },
                  { before: '0%', after: '100%', label: 'Automated Checks' },
                  { before: 'Manual', after: '95/100', label: 'Decisioning Score' },
                  { before: '0', after: '4', label: 'Production Bots' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-4 text-center">
                    <div className="text-xs text-[var(--text-muted)] line-through mb-1">{stat.before}</div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">{stat.after}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Achievements (non-Veremark projects) */}
        {!isVeremark && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Key Achievements
            </h2>
            <ul className="space-y-3">
              {project.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-[var(--border-subtle)]">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-primary)] text-white font-medium text-sm hover:bg-[var(--accent-bright)] transition-all"
            >
              View Live <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all"
          >
            Discuss a Similar Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Next project */}
        <div className="mt-16 pt-10 border-t border-[var(--border-subtle)]">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">Next Project</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between p-6 glass-card"
          >
            <div>
              <p className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-bright)] transition-colors">
                {nextProject.title}
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-1">{nextProject.category}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors group-hover:translate-x-1 transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
