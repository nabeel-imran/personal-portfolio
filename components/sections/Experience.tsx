'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Cpu,
} from 'lucide-react'
import {
  SectionWrapper,
  SectionHeader,
  fadeUpVariants,
} from '@/components/ui/SectionWrapper'

interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
  badge?: string
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'Peersol Consulting',
    badge: 'Staff Augmentation: Veremark (UK)',
    period: 'Aug 2024 — Present',
    location: 'Islamabad, Pakistan',
    current: true,
    bullets: [
      'Engineered & deployed 4 live RPA bots for Veremark enterprise compliance: Australian Federal Police Check, Philippines Criminal Record Check, UK Directorship Verification, and Employment Check — adopted by operations teams of 5–6 personnel per check type.',
      'Designed a Rule-Based Decisioning Engine for UK Directorship verification with 6-variant name logic, cross-referencing Gov.uk and VNET — 95/100 efficiency score with audit-compliant fallback SOP.',
      'Architected and shipped a client-approved POC Package Creation automation: Monday.com GraphQL → Axiom.ai → VNET sync — 45+ minutes → under 2 minutes per onboarding.',
      'Built the Audit-Log Engine and Analytical Benchmarking System enabling Veremark leadership to quantify time-savings vs manual baselines.',
      'Authored a written technology evaluation comparing browser-automation engines and recommended the production stack based on UI stability, reliability, and enterprise audit requirements.',
      'Workday integration specialist: Custom Objects, RAAS-based reporting pipelines, and Studio → custom API migration for HR data.',
    ],
  },
  {
    role: 'IoT & Computer Vision Intern',
    company: 'Zigron',
    period: 'Jul 2022 — Sep 2022',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Built Computer Vision models on production-constrained datasets: object detection, segmentation, and classification using YOLO architectures.',
      'Delivered end-to-end model deployment pipelines — embedding practical ML engineering discipline into model training, validation, and inference optimization.',
    ],
  },
]

const education = {
  degree: 'Bachelor of Engineering — Electronic Engineering',
  institution: 'COMSATS Institute of Information Technology, Islamabad',
  period: '2020 — 2024',
}

const certifications = [
  {
    name: 'IBM AI Engineering Professional Certificate',
    issuer: 'Coursera · IBM',
  },
  {
    name: 'Full Stack Software Developer',
    issuer: 'Coursera · IBM',
  },
  {
    name: 'AI Engineering Bootcamp',
    issuer: 'Udemy',
  },
]

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-[var(--bg-secondary)]">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've shipped"
        subtitle="Staff-augmented at a UK enterprise. Computer vision in industry. Built across the AI stack."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        {/* Timeline — main column */}
        <div className="lg:col-span-8">
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-5 sm:left-6 top-2 bottom-2 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, var(--border-accent), var(--border-subtle) 50%, transparent)',
              }}
            />

            <ul className="space-y-8 sm:space-y-10">
              {experiences.map((exp, i) => (
                <motion.li
                  key={exp.company + i}
                  variants={fadeUpVariants}
                  custom={i + 2}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-2 sm:left-3 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: exp.current
                        ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                        : 'var(--bg-tertiary)',
                      border: exp.current
                        ? '2px solid var(--bg-primary)'
                        : '2px solid var(--border-accent)',
                      boxShadow: exp.current
                        ? '0 0 0 4px var(--bg-secondary), 0 0 20px var(--accent-glow)'
                        : '0 0 0 4px var(--bg-secondary)',
                    }}
                  >
                    <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--text-primary)]" />
                  </span>

                  <article className="glass-card p-5 sm:p-6 group hover:border-[var(--border-accent)] transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-snug">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 border border-emerald-400/30 bg-emerald-400/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[var(--accent-bright)] font-medium">
                      {exp.company}
                      {exp.badge && (
                        <span className="text-[var(--text-muted)] font-normal">
                          {' '}· {exp.badge}
                        </span>
                      )}
                    </p>

                    <p className="text-xs text-[var(--text-muted)] font-mono mt-1.5 mb-4">
                      {exp.period} · {exp.location}
                    </p>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent-primary)] flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education + Certifications side column */}
        <motion.aside
          variants={fadeUpVariants}
          custom={4}
          className="lg:col-span-4 space-y-5 sm:space-y-6 lg:sticky lg:top-24"
        >
          {/* Education */}
          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[var(--border-subtle)]">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <GraduationCap className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Education
              </h3>
            </div>

            <p className="text-sm font-medium text-[var(--text-primary)] leading-snug">
              {education.degree}
            </p>
            <p className="text-xs text-[var(--accent-bright)] mt-1.5">
              {education.institution}
            </p>
            <p className="text-xs text-[var(--text-muted)] font-mono mt-1.5">
              {education.period}
            </p>
          </div>

          {/* Certifications */}
          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[var(--border-subtle)]">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <Award className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Certifications
              </h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm">
                  <p className="text-[var(--text-primary)] leading-snug">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
                    {c.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick stats footer card */}
          <div
            className="rounded-xl p-5 sm:p-6 border border-[var(--border-accent)] relative overflow-hidden"
            style={{ background: 'var(--accent-subtle)' }}
          >
            <Cpu className="absolute -top-2 -right-2 w-20 h-20 text-[var(--accent-primary)] opacity-10" />
            <p className="text-[10px] uppercase tracking-widest text-[var(--accent-bright)] font-semibold mb-2">
              Currently
            </p>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              Shipping production AI for{' '}
              <span className="font-semibold">Veremark UK</span> via Peersol.
              Available for new engagements alongside.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-[var(--accent-primary)] hover:text-[var(--accent-bright)] transition-colors"
            >
              Start a project
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.aside>
      </div>
    </SectionWrapper>
  )
}
