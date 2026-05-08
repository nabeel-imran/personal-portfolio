'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { sendContactEmail, type ContactFormData } from '@/lib/contact'
import { cn } from '@/lib/utils'
import { WhatsAppCTA, WhatsAppIcon, WHATSAPP_URL } from '@/components/ui/FloatingActions'

const projectTypes = [
  'AI Automation',
  'GenAI Development',
  'Full-Stack AI',
  'Consulting',
  'Content Collaboration',
  'Other',
]

const budgets = ['<$1K', '$1K–$5K', '$5K–$15K', '$15K+', "Let's discuss"]

const helpWith = [
  'AI Automation & RPA Systems',
  'GenAI Product Development',
  'Full-Stack AI Applications',
  'Enterprise Integration Projects',
  'Technical Architecture Consulting',
  'AI Content System Design',
]

const inputBase =
  'w-full px-4 py-2.5 rounded-lg border bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none transition-colors'
const inputNormal = 'border-[var(--border-subtle)] focus:border-[var(--accent-primary)]'
const inputError = 'border-red-400/60 focus:border-red-400'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    const result = await sendContactEmail(data)
    if (result.success) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong.')
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-[var(--bg-secondary)]">
      <SectionHeader
        eyebrow="Contact"
        title="Let's Build Something"
        subtitle="Have a project? A problem that needs an AI solution? Let's talk."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left — Info */}
        <motion.div variants={fadeUpVariants} custom={3} className="space-y-6 sm:space-y-8">
          {/* Availability */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-sm text-emerald-400 font-medium">
              Available for select projects
            </span>
          </div>

          {/* Contact methods */}
          <div className="space-y-3 sm:space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-lg border border-[#25D366]/20 hover:border-[#25D366]/50 bg-[#25D366]/5 transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.12)' }}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">WhatsApp · Fastest</p>
                <p className="text-sm text-[var(--text-primary)] group-hover:text-[#25D366] transition-colors truncate">
                  +92 323 9960094
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>

            <a
              href="mailto:i.nabeel7@outlook.com"
              className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--border-accent)] bg-[var(--bg-glass)] transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Email</p>
                <p className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                  i.nabeel7@outlook.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/nabeelimrann/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--border-accent)] bg-[var(--bg-glass)] transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">LinkedIn</p>
                <p className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                  linkedin.com/in/nabeelimrann
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-glass)]">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Location</p>
                <p className="text-sm text-[var(--text-primary)]">Islamabad, Pakistan (UTC+5)</p>
                <p className="text-xs text-[var(--text-muted)]">Available for remote work globally</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-glass)]">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Response Time</p>
                <p className="text-sm text-[var(--text-primary)]">Usually within 2 hours</p>
                <p className="text-xs text-[var(--text-muted)]">during PKT business hours</p>
              </div>
            </div>
          </div>

          {/* Help with */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              What I can help with
            </p>
            <ul className="space-y-2">
              {helpWith.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-primary)] flex-shrink-0">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <WhatsAppCTA variant="solid" label="WhatsApp Now" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
            >
              Book 30-min Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div variants={fadeUpVariants} custom={4}>
          <div className="glass-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 sm:py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-bright)] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[var(--text-muted)] mb-1.5"
                      >
                        Name <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        {...register('name', { required: 'Name is required' })}
                        className={cn(inputBase, errors.name ? inputError : inputNormal)}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[var(--text-muted)] mb-1.5"
                      >
                        Email <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: 'Valid email required',
                          },
                        })}
                        className={cn(inputBase, errors.email ? inputError : inputNormal)}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-medium text-[var(--text-muted)] mb-1.5"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      {...register('company')}
                      className={cn(inputBase, inputNormal)}
                      placeholder="Acme Inc. (optional)"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-type"
                        className="block text-xs font-medium text-[var(--text-muted)] mb-1.5"
                      >
                        Project Type <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <select
                        id="contact-type"
                        {...register('projectType', { required: true })}
                        className={cn(inputBase, inputNormal, 'appearance-none cursor-pointer')}
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-medium text-[var(--text-muted)] mb-1.5"
                      >
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        {...register('budget')}
                        className={cn(inputBase, inputNormal, 'appearance-none cursor-pointer')}
                      >
                        <option value="">Budget range...</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[var(--text-muted)] mb-1.5"
                    >
                      Message <span className="text-[var(--accent-primary)]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 20, message: 'At least 20 characters' },
                      })}
                      rows={5}
                      className={cn(
                        inputBase,
                        errors.message ? inputError : inputNormal,
                        'resize-none'
                      )}
                      placeholder="Tell me about your project, what you're trying to automate, or what problem you're solving..."
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-primary)] text-white font-medium text-sm hover:bg-[var(--accent-bright)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
