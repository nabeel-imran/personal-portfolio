'use client'

import { motion } from 'framer-motion'
import { Bot, BrainCircuit, Globe, Link2, Clapperboard, FlaskConical, type LucideIcon } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'

interface Service {
  Icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    Icon: Bot,
    title: 'Intelligent Automation Systems',
    description: 'End-to-end RPA pipelines using Axiom.ai, n8n, and Make.com — with error handling, retry logic, audit trails, and decisioning engines baked in. Built for production, not just demos.',
    tags: ['n8n', 'Make.com', 'Axiom.ai', 'Browser Automation'],
  },
  {
    Icon: BrainCircuit,
    title: 'LLM Integration & GenAI Systems',
    description: 'Custom AI applications powered by frontier LLMs and LangChain — RAG pipelines, AI agents, structured extraction, and streaming chatbot interfaces. Production-grade and eval-tested.',
    tags: ['LLM Integration', 'LangChain', 'RAG', 'Vector DBs'],
  },
  {
    Icon: Globe,
    title: 'Full-Stack AI SaaS Products',
    description: 'Complete web applications with embedded AI — from concept to deployment. Next.js + Node.js + PostgreSQL with AI features that actually enhance the product, not just bolt on.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    Icon: Link2,
    title: 'Enterprise API & Workflow Integration',
    description: 'Connecting complex enterprise systems — Monday.com GraphQL, Workday Custom Objects, Airtable, Notion — into cohesive automated workflows that sync data across platforms without manual intervention.',
    tags: ['Monday.com', 'Workday', 'GraphQL', 'Webhooks'],
  },
  {
    Icon: Clapperboard,
    title: 'AI Content Automation',
    description: 'Automated content factories using n8n, LLM-driven scripting, AI voice, and AI video — from script generation to video creation to scheduling. Built for creators and marketing teams who need scale.',
    tags: ['n8n', 'LLM Scripting', 'AI Voice', 'AI Video'],
  },
  {
    Icon: FlaskConical,
    title: 'AI Architecture & Tech Evaluation',
    description: "Not sure which tool to use? I evaluate, document, and recommend. I've done formal written analyses comparing browser-automation engines, secrets management approaches, and LLM integration patterns.",
    tags: ['Technical Analysis', 'System Design', 'PoC'],
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {services.map((s, i) => {
          const Icon = s.Icon
          return (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              custom={i + 3}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
              className="card p-5 sm:p-6 group flex flex-col cursor-default"
              style={{ borderRadius: 'var(--r-lg)' }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                style={{ background: 'var(--blue-tint)', border: '1px solid var(--blue-mid)' }}
              >
                <Icon className="w-5 h-5" style={{ color: 'var(--blue)' }} />
              </div>

              <h3 className="text-base sm:text-lg mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--ink-3)' }}>
                {s.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
