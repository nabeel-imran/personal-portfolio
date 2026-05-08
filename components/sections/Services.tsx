'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { SkillChip } from '@/components/ui/SkillChip'

const services = [
  {
    icon: '🤖',
    title: 'Intelligent Automation Systems',
    description:
      'End-to-end RPA pipelines using Axiom.ai, n8n, and Make.com — with error handling, retry logic, audit trails, and decisioning engines baked in. Built for production, not just demos.',
    tags: ['n8n', 'Make.com', 'Axiom.ai', 'Browser Automation'],
  },
  {
    icon: '🧠',
    title: 'LLM Integration & GenAI Systems',
    description:
      'Custom AI applications powered by frontier LLMs and LangChain — RAG pipelines, AI agents, structured extraction, and streaming chatbot interfaces. Production-grade and eval-tested.',
    tags: ['LLM Integration', 'LangChain', 'RAG', 'Vector DBs', 'Prompt Engineering'],
  },
  {
    icon: '🌐',
    title: 'Full-Stack AI SaaS Products',
    description:
      'Complete web applications with embedded AI — from concept to deployment. Next.js + Node.js + PostgreSQL with AI features that actually enhance the product, not just bolt on.',
    tags: ['React', 'Next.js', 'Node.js', 'FastAPI', 'PostgreSQL'],
  },
  {
    icon: '🔗',
    title: 'Enterprise API & Workflow Integration',
    description:
      'Connecting complex enterprise systems — Monday.com GraphQL, Workday Custom Objects, Airtable, Notion — into cohesive automated workflows that sync data across platforms without manual intervention.',
    tags: ['Monday.com', 'Workday', 'Webhook Pipelines', 'GraphQL'],
  },
  {
    icon: '🎬',
    title: 'AI Content Automation',
    description:
      'Automated content factories using n8n, LLM-driven scripting, AI voice, and AI video — from script generation to video creation to scheduling. Built for creators and marketing teams who need scale.',
    tags: ['LLM Integration', 'AI Voice', 'AI Video', 'n8n'],
  },
  {
    icon: '🏗️',
    title: 'AI Architecture & Tech Evaluation',
    description:
      "Not sure which tool to use? I evaluate, document, and recommend. I've done formal written analyses comparing browser-automation engines, secrets management approaches, and LLM integration patterns.",
    tags: ['Technical Analysis', 'System Design', 'Proof of Concept'],
  },
]

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        eyebrow="Services"
        title="What I Build"
        subtitle="Production-grade systems. Not prototypes."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUpVariants}
            custom={i + 3}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
            className="glass-card p-5 sm:p-6 group relative overflow-hidden flex flex-col cursor-pointer"
          >
            {/* Hover glow */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at top left, var(--accent-subtle), transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <SkillChip key={tag}>{tag}</SkillChip>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
