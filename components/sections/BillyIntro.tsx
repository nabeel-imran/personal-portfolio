'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Send, Mic, MicOff, ArrowRight } from 'lucide-react'
import { BillyChat } from '@/components/ui/BillyChat'

const quickPrompts = [
  'What does Nabeel do?',
  'Show me his best work',
  'Can he help with n8n?',
  'How fast can he start?',
]

type SpeechRec = {
  continuous: boolean
  interimResults: boolean
  lang: string
  onresult: ((e: { results: ArrayLike<{ 0: { transcript: string }; isFinal: boolean }> }) => void) | null
  onerror: ((e: unknown) => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
}

export function BillyIntro() {
  const [open, setOpen] = useState(false)
  const [seedInput, setSeedInput] = useState('')
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null)
  const [listening, setListening] = useState(false)
  const [micSupported, setMicSupported] = useState(false)
  const recognitionRef = useRef<SpeechRec | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const w = window as unknown as { SpeechRecognition?: new () => SpeechRec; webkitSpeechRecognition?: new () => SpeechRec }
    setMicSupported(!!(w.SpeechRecognition || w.webkitSpeechRecognition))
  }, [])

  const startListening = useCallback(() => {
    if (typeof window === 'undefined' || listening) return
    const w = window as unknown as { SpeechRecognition?: new () => SpeechRec; webkitSpeechRecognition?: new () => SpeechRec }
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition
    if (!Ctor) return
    const rec = new Ctor()
    rec.continuous = false; rec.interimResults = true; rec.lang = 'en-US'
    let finalText = ''
    rec.onresult = (e) => {
      let interim = ''
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i]
        if (r.isFinal) finalText += r[0].transcript
        else interim += r[0].transcript
      }
      setSeedInput((finalText + interim).trim())
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => { setListening(false); recognitionRef.current = null }
    recognitionRef.current = rec; setListening(true); rec.start()
  }, [listening])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) { try { recognitionRef.current.stop() } catch {} }
    setListening(false)
  }, [])

  const launchWith = (text: string) => { setPendingPrompt(text); setOpen(true); setSeedInput('') }
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); if (seedInput.trim()) launchWith(seedInput.trim()) }

  return (
    <>
      <BillyChat open={open} onClose={() => { setOpen(false); setPendingPrompt(null) }} autoSendOnOpen={pendingPrompt} />

      <section id="billy" className="relative section overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
        {/* Subtle grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.4,
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />

        <div className="container relative">
          {/* Online badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'var(--blue-tint)',
                color: 'var(--blue)',
                border: '1px solid var(--blue-mid)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              billy.is_online()
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full opacity-25 blur-2xl"
                style={{ background: 'var(--grad-accent)' }}
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'var(--grad-accent)',
                  boxShadow: 'var(--shadow-blue)',
                }}
              >
                <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white" />
              </motion.div>
            </div>

            <h2 className="mb-3 text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>
              Hi, I&apos;m <span className="gradient-text">Billy</span> — talk to me.
            </h2>
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--ink-3)' }}>
              I&apos;m Nabeel&apos;s AI assistant. Ask me anything about his work, projects,
              process, or how he can help with your AI project — text or voice, your call.
            </p>
          </motion.div>

          {/* Chat box */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-10 sm:mt-12 max-w-2xl mx-auto"
          >
            <div
              className="card overflow-hidden"
              style={{ borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--blue-mid)' }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-alt)' }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#fc5e5a' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#fdbc40' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34c749' }} />
                </div>
                <span className="ml-3 text-[11px] tracking-wide" style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-4)' }}>
                  ~/chat-with-billy
                </span>
              </div>

              <form onSubmit={onSubmit} className="p-4 sm:p-5">
                <div className="relative">
                  <input
                    type="text"
                    value={seedInput}
                    onChange={(e) => setSeedInput(e.target.value)}
                    placeholder={listening ? 'Listening… speak now' : 'Ask Billy anything… e.g. "Can Nabeel automate my onboarding?"'}
                    className="w-full pl-4 pr-28 sm:pr-32 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base outline-none transition-colors"
                    style={{
                      border: '1px solid var(--border-2)',
                      background: 'var(--bg)',
                      color: 'var(--ink)',
                    }}
                    aria-label="Ask Billy anything"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    {micSupported && (
                      <button
                        type="button"
                        onClick={listening ? stopListening : startListening}
                        aria-label={listening ? 'Stop listening' : 'Speak to Billy'}
                        className={`p-2 rounded-lg transition-all duration-200 active:scale-90 ${listening ? 'text-red-400' : ''}`}
                        style={listening ? { background: 'rgba(239,68,68,0.1)' } : { color: 'var(--ink-4)' }}
                      >
                        {listening ? (
                          <span className="relative flex"><MicOff className="w-4 h-4" /><span className="absolute inset-0 rounded-full animate-ping bg-red-400/30" /></span>
                        ) : <Mic className="w-4 h-4" />}
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={!seedInput.trim()}
                      aria-label="Send to Billy"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                      style={{ background: 'var(--grad-accent)' }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Ask</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {quickPrompts.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => launchWith(p)}
                      className="text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{ border: '1px solid var(--border)', color: 'var(--ink-3)' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue-mid)'; e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.background = 'var(--blue-tint)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--ink-3)'; e.currentTarget.style.background = '' }}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--ink-4)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Replies in ~1–2 seconds
                  </div>
                  <button
                    type="button"
                    onClick={() => launchWith('Tell me about your services and how to get started.')}
                    className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: 'var(--blue)' }}
                  >
                    Open full chat <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-xs sm:text-sm mt-8 max-w-xl mx-auto"
            style={{ color: 'var(--ink-4)' }}
          >
            Recruiters &amp; founders — Billy can summarize Nabeel&apos;s entire portfolio,
            stack, and availability in seconds. No login required.
          </motion.p>
        </div>
      </section>
    </>
  )
}
