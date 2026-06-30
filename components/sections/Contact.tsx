'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Clock, ExternalLink, CheckCircle, Loader2, ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeader, fadeUpVariants } from '@/components/ui/SectionWrapper'
import { sendContactEmail, type ContactFormData } from '@/lib/contact'
import { cn } from '@/lib/utils'
import { WhatsAppCTA, WhatsAppIcon, WHATSAPP_URL } from '@/components/ui/FloatingActions'

const projectTypes = ['AI Automation','GenAI Development','Full-Stack AI','Consulting','Content Collaboration','Other']
const budgets = ['<$1K','$1K–$5K','$5K–$15K','$15K+',"Let's discuss"]
const helpWith = [
  'AI Automation & RPA Systems',
  'GenAI Product Development',
  'Full-Stack AI Applications',
  'Enterprise Integration Projects',
  'Technical Architecture Consulting',
  'AI Content System Design',
]

export function Contact() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    const result = await sendContactEmail(data)
    if (result.success) { setStatus('success'); reset() }
    else { setStatus('error'); setErrorMsg(result.error || 'Something went wrong.') }
  }

  const inputCls = cn(
    'w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-150 outline-none',
    'bg-[var(--bg)] text-[var(--ink)] placeholder:text-[var(--ink-4)]',
    'focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-mid)]'
  )
  const inputBorder = (err: boolean) => err ? 'border-red-400' : 'border-[var(--border-2)]'

  return (
    <SectionWrapper id="contact" alt>
      <SectionHeader
        eyebrow="Contact"
        title="Let's Build Something"
        subtitle="Have a project? A problem that needs an AI solution? Let's talk."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* Left */}
        <motion.div variants={fadeUpVariants} custom={3} className="space-y-6">
          {/* Available */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-sm font-semibold text-emerald-700">Available for select projects</span>
          </div>

          {/* Contact methods */}
          <div className="space-y-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-150 group"
              style={{ border: '1px solid rgba(37,211,102,0.25)', background: 'rgba(37,211,102,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,211,102,0.5)'; e.currentTarget.style.background = 'rgba(37,211,102,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)'; e.currentTarget.style.background = 'rgba(37,211,102,0.04)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,211,102,0.12)' }}>
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>WhatsApp · Fastest</p>
                <p className="text-sm font-medium truncate transition-colors" style={{ color: 'var(--ink)' }}>+92 323 9960094</p>
              </div>
              <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: '#25D366' }} />
            </a>

            {[
              { href: 'mailto:i.nabeel7@outlook.com', Icon: Mail, label: 'Email', value: 'i.nabeel7@outlook.com' },
              { href: 'https://www.linkedin.com/in/nabeelimrann/', Icon: ExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/nabeelimrann' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-4 rounded-xl card group transition-all"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue-tint)' }}>
                  <item.Icon className="w-4 h-4" style={{ color: 'var(--blue)' }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>{item.label}</p>
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--ink)' }}>{item.value}</p>
                </div>
              </a>
            ))}

            {[
              { Icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan (UTC+5)', sub: 'Available for remote work globally' },
              { Icon: Clock, label: 'Response Time', value: 'Usually within 2 hours', sub: 'during PKT business hours' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl card">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue-tint)' }}>
                  <item.Icon className="w-4 h-4" style={{ color: 'var(--blue)' }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{item.value}</p>
                  <p className="text-xs" style={{ color: 'var(--ink-4)' }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Help with */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>
              What I can help with
            </p>
            <ul className="space-y-2">
              {helpWith.map(h => (
                <li key={h} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-3)' }}>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--blue)' }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <WhatsAppCTA variant="solid" label="WhatsApp Now" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Book 30-min Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeUpVariants} custom={4}>
          <div className="card p-6 sm:p-8" style={{ borderRadius: 'var(--r-xl)' }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: 'var(--ink-3)' }}>I&apos;ll get back to you within 2 hours.</p>
                  <button onClick={() => setStatus('idle')} className="mt-5 text-sm font-semibold" style={{ color: 'var(--blue)' }}>
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-heading)' }}>
                        Name <span style={{ color: 'var(--blue)' }}>*</span>
                      </label>
                      <input id="contact-name" {...register('name', { required: 'Required' })}
                        className={cn(inputCls, inputBorder(!!errors.name))} placeholder="Your name" />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-heading)' }}>
                        Email <span style={{ color: 'var(--blue)' }}>*</span>
                      </label>
                      <input id="contact-email" type="email" autoComplete="email"
                        {...register('email', { required: 'Required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email' } })}
                        className={cn(inputCls, inputBorder(!!errors.email))} placeholder="you@company.com" />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-heading)' }}>
                      Company / Organization
                    </label>
                    <input id="contact-company" {...register('company')} className={cn(inputCls, 'border-[var(--border-2)]')} placeholder="Acme Inc. (optional)" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-type" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-heading)' }}>
                        Project Type <span style={{ color: 'var(--blue)' }}>*</span>
                      </label>
                      <select id="contact-type" {...register('projectType', { required: true })}
                        className={cn(inputCls, 'border-[var(--border-2)] appearance-none cursor-pointer')}>
                        <option value="">Select type...</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-heading)' }}>
                        Budget Range
                      </label>
                      <select id="contact-budget" {...register('budget')}
                        className={cn(inputCls, 'border-[var(--border-2)] appearance-none cursor-pointer')}>
                        <option value="">Budget range...</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-heading)' }}>
                      Message <span style={{ color: 'var(--blue)' }}>*</span>
                    </label>
                    <textarea id="contact-message" rows={5}
                      {...register('message', { required: 'Required', minLength: { value: 20, message: 'At least 20 characters' } })}
                      className={cn(inputCls, inputBorder(!!errors.message), 'resize-none')}
                      placeholder="Tell me about your project..." />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 px-4 py-2.5 rounded-xl" style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                      {errorMsg}
                    </p>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <ArrowRight className="w-4 h-4" /></>
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
