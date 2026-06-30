'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessageCircle } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { WhatsAppCTA } from '@/components/ui/FloatingActions'

const faqs = [
  {
    q: 'How fast can you start?',
    a: "Usually within 3–5 business days for new projects. For urgent work, I can scope and kick off within 24 hours after our first call. I'll always be upfront about my current capacity.",
  },
  {
    q: 'Do you work alone or with a team?',
    a: "Both. I deliver solo for focused 4–8 week projects, and I plug into existing engineering teams (like I do for Veremark via Peersol) for longer engagements. I bring senior collaborators when scope demands it.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Discovery & PoC: 3–7 days. A production RPA bot or AI agent: 2–4 weeks. A full-stack AI SaaS MVP: 6–10 weeks. I always quote a fixed window with milestones, not vague 'we'll see' timelines.",
  },
  {
    q: 'Do you handle ongoing maintenance?',
    a: '30 days of async support is included with every build. After that, I offer optional monthly retainers for monitoring, iteration, and new features — or a clean handover with full documentation.',
  },
  {
    q: 'Can you work in our timezone?',
    a: "I'm in Islamabad (PKT, UTC+5). I overlap comfortably with EU mornings and US East Coast late afternoons. Most async-friendly teams find the schedule actually accelerates delivery — I ship while you sleep.",
  },
  {
    q: 'NDAs, IP, and confidentiality?',
    a: 'Default. I sign mutual NDAs before our first technical call. All client code is private, all credentials live in your vaults (AWS Secrets Manager / your secret store), and I document boundaries before touching production.',
  },
  {
    q: 'What does pricing look like?',
    a: "Project-based for fixed scopes, monthly retainer for ongoing engagements. Hourly only for emergency work. I quote after a 30-min discovery call once I understand the actual problem — no template pricing.",
  },
  {
    q: "Can you ship something custom — not just n8n / Make.com?",
    a: "Absolutely. I build full custom Python/Node services when no-code/low-code can't handle the requirements (latency, custom logic, complex integrations). I pick the right tool, not my favorite one.",
  },
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <SectionWrapper id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions before we talk?"
        subtitle="The things every serious client asks. Direct answers, no fluff."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Accordion */}
        <motion.div variants={fadeUpVariants} custom={2} className="lg:col-span-2 space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  border: `1px solid ${isOpen ? 'var(--blue-border)' : 'var(--border)'}`,
                  background: isOpen ? 'var(--blue-tint)' : 'var(--bg-card)',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span
                    className="text-sm sm:text-base font-semibold leading-snug"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isOpen ? 'var(--blue)' : 'var(--bg-alt)',
                      color: isOpen ? '#fff' : 'var(--ink-3)',
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 text-sm sm:text-[15px] leading-relaxed"
                        style={{ color: 'var(--ink-3)' }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        {/* Side CTA */}
        <motion.div variants={fadeUpVariants} custom={3} className="lg:col-span-1">
          <div
            className="card p-6 sm:p-7 lg:sticky lg:top-24"
            style={{ borderRadius: 'var(--r-xl)' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'var(--blue-tint)', border: '1px solid var(--blue-mid)' }}
            >
              <MessageCircle className="w-5 h-5" style={{ color: 'var(--blue)' }} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>
              Still have questions?
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-3)' }}>
              Ask Billy in the chat below, or reach me directly. I usually reply within 2 hours during PKT business hours.
            </p>

            <div className="space-y-2.5">
              <WhatsAppCTA variant="solid" label="Message on WhatsApp" className="w-full" />
              <a
                href="mailto:i.nabeel7@outlook.com"
                className="btn-outline w-full text-sm"
              >
                Email Nabeel
              </a>
            </div>

            <p className="text-[11px] mt-4 text-center" style={{ color: 'var(--ink-4)' }}>
              Average reply: under 2 hours
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
