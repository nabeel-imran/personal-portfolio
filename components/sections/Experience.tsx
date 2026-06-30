'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award, ExternalLink, Cpu } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

const experiences = [
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
    current: false,
    bullets: [
      'Built Computer Vision models on production-constrained datasets: object detection, segmentation, and classification using YOLO architectures.',
      'Delivered end-to-end model deployment pipelines — embedding practical ML engineering discipline into model training, validation, and inference optimization.',
    ],
  },
]

const certifications = [
  { name: 'IBM AI Engineering Professional Certificate', issuer: 'Coursera · IBM' },
  { name: 'Full Stack Software Developer', issuer: 'Coursera · IBM' },
  { name: 'AI Engineering Bootcamp', issuer: 'Udemy' },
]

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've shipped"
        subtitle="Staff-augmented at a UK enterprise. Computer vision in industry. Built across the AI stack."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Timeline */}
        <div className="lg:col-span-8">
          <div className="relative pl-8 sm:pl-10">
            {/* Vertical rule */}
            <div
              className="absolute left-3 sm:left-4 top-2 bottom-2 w-px"
              style={{ background: 'linear-gradient(to bottom, var(--blue), var(--border) 80%, transparent)' }}
            />

            <ul className="space-y-7 sm:space-y-8">
              {experiences.map((exp, i) => (
                <motion.li key={exp.company + i} variants={fadeUpVariants} custom={i + 2} className="relative">
                  {/* Dot */}
                  <span
                    className="absolute -left-5 sm:-left-6 top-5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: exp.current ? 'var(--blue)' : 'var(--bg-card)',
                      border: `2px solid ${exp.current ? 'var(--blue)' : 'var(--border-2)'}`,
                      boxShadow: exp.current ? 'var(--shadow-blue)' : 'none',
                    }}
                  >
                    <Briefcase className="w-3 h-3" style={{ color: exp.current ? '#fff' : 'var(--ink-4)' }} />
                  </span>

                  <div
                    className="card p-5 sm:p-6"
                    style={{ borderRadius: 'var(--r-lg)' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span
                          className="badge"
                          style={{ background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--blue)', fontFamily: 'var(--font-heading)' }}>
                      {exp.company}
                      {exp.badge && (
                        <span className="font-normal" style={{ color: 'var(--ink-3)' }}> · {exp.badge}</span>
                      )}
                    </p>
                    <p className="text-xs font-mono mb-4" style={{ color: 'var(--ink-4)' }}>
                      {exp.period} · {exp.location}
                    </p>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--ink-3)' }}>
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--blue)' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeUpVariants}
          custom={4}
          className="lg:col-span-4 space-y-4 lg:sticky lg:top-24"
        >
          {/* Certifications */}
          <div className="card p-5 sm:p-6" style={{ borderRadius: 'var(--r-lg)' }}>
            <div className="flex items-center gap-2.5 mb-4 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--blue-tint)' }}>
                <Award className="w-4 h-4" style={{ color: 'var(--blue)' }} />
              </div>
              <h3 className="text-sm font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map(c => (
                <li key={c.name} className="text-sm">
                  <p className="font-medium leading-snug" style={{ color: 'var(--ink)' }}>{c.name}</p>
                  <p className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--ink-4)' }}>{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div
            className="rounded-2xl p-5 sm:p-6 relative overflow-hidden"
            style={{ background: 'var(--blue)', boxShadow: 'var(--shadow-blue)' }}
          >
            <Cpu className="absolute -top-2 -right-2 w-20 h-20 opacity-10 text-white" />
            <p className="text-[10px] uppercase tracking-widest font-semibold text-blue-200 mb-2 font-mono">
              Currently
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              Shipping production AI for <strong className="text-white">Veremark UK</strong> via Peersol.
              Available for new engagements alongside.
            </p>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-white/80 hover:text-white transition-colors"
            >
              Start a project <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.aside>
      </div>
    </SectionWrapper>
  )
}
