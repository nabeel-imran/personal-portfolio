'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, MessageCircle, Sparkles, RefreshCcw, Mic, MicOff } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const initialMessage: Message = {
  role: 'assistant',
  content: "Hi! I'm Billy 🤖 — Nabeel's AI assistant. Ask me anything about his work, projects, or how he can help with your AI project.",
}

const suggestions = [
  'What does Nabeel do?',
  'Show me his best projects',
  'Can he help with n8n automation?',
  'How do I hire him?',
]

interface BillyChatProps {
  open: boolean
  onClose: () => void
  autoSendOnOpen?: string | null
}

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

export function BillyChat({ open, onClose, autoSendOnOpen }: BillyChatProps) {
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [listening, setListening] = useState(false)
  const [micSupported, setMicSupported] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<SpeechRec | null>(null)
  const messagesRef = useRef<Message[]>(messages)
  useEffect(() => { messagesRef.current = messages }, [messages])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

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
      setInput((finalText + interim).trim())
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => { setListening(false); recognitionRef.current = null }
    recognitionRef.current = rec; setListening(true); rec.start()
  }, [listening])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) { try { recognitionRef.current.stop() } catch {} }
    setListening(false)
  }, [])

  const toggleMic = () => (listening ? stopListening() : startListening())

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    const next: Message[] = [...messagesRef.current, { role: 'user', content: trimmed }]
    messagesRef.current = next
    setMessages(next)
    setInput('')
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.filter((m, i) => !(i === 0 && m === initialMessage)) }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Chat failed.')
      const final: Message[] = [...next, { role: 'assistant', content: data.message }]
      messagesRef.current = final
      setMessages(final)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }, [loading])

  const lastAutoSendRef = useRef<string | null>(null)
  useEffect(() => {
    if (open && autoSendOnOpen && autoSendOnOpen !== lastAutoSendRef.current) {
      lastAutoSendRef.current = autoSendOnOpen
      const t = setTimeout(() => send(autoSendOnOpen), 250)
      return () => clearTimeout(t)
    }
    if (!open) lastAutoSendRef.current = null
  }, [open, autoSendOnOpen, send])

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); send(input) }
  const reset = () => { setMessages([initialMessage]); setError(null); setInput('') }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] sm:hidden"
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-label="Talk to Billy — Nabeel's AI assistant"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            className="fixed z-[90] flex flex-col overflow-hidden rounded-2xl inset-x-3 bottom-3 top-16 sm:inset-auto sm:right-5 sm:bottom-24 sm:top-auto sm:w-[400px] sm:h-[600px] sm:max-h-[calc(100vh-7rem)]"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--blue-mid)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-alt)' }}>
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--grad-accent)' }}>
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold flex items-center gap-1.5 truncate" style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}>
                    Billy
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono" style={{ background: 'var(--blue-tint)', color: 'var(--blue)' }}>AI</span>
                  </p>
                  <p className="text-xs truncate" style={{ color: 'var(--ink-4)' }}>Nabeel&apos;s AI assistant · online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={reset} aria-label="Restart conversation" className="p-2 rounded-lg transition-colors" style={{ color: 'var(--ink-4)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-alt)'; e.currentTarget.style.color = 'var(--ink)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--ink-4)' }}>
                  <RefreshCcw className="w-3.5 h-3.5" />
                </button>
                <button onClick={onClose} aria-label="Close chat" className="p-2 rounded-lg transition-colors" style={{ color: 'var(--ink-4)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-alt)'; e.currentTarget.style.color = 'var(--ink)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--ink-4)' }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                    style={
                      msg.role === 'user'
                        ? { background: 'var(--blue)', color: '#fff', borderBottomRightRadius: '4px' }
                        : { background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--ink)', borderBottomLeftRadius: '4px' }
                    }
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="px-3.5 py-3 rounded-2xl" style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderBottomLeftRadius: '4px' }}>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--blue)' }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <div className="text-xs px-3 py-2 rounded-lg" style={{ color: '#ef4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {error}
                </div>
              )}

              {messages.length === 1 && !loading && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>Try asking</p>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 text-left"
                        style={{ border: '1px solid var(--border)', color: 'var(--ink-3)' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue-mid)'; e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.background = 'var(--blue-tint)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--ink-3)'; e.currentTarget.style.background = '' }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 flex-shrink-0" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-alt)' }}>
              <div className="flex items-end gap-2">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={listening ? 'Listening… speak now' : 'Ask Billy anything…'}
                    disabled={loading}
                    maxLength={500}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl text-sm outline-none transition-colors disabled:opacity-60"
                    style={{ border: '1px solid var(--border-2)', background: 'var(--bg)', color: 'var(--ink)' }}
                  />
                  {micSupported && (
                    <button
                      type="button"
                      onClick={toggleMic}
                      aria-label={listening ? 'Stop listening' : 'Start voice input'}
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 active:scale-90"
                      style={listening ? { color: '#ef4444', background: 'rgba(239,68,68,0.1)' } : { color: 'var(--ink-4)' }}
                    >
                      {listening ? (
                        <span className="relative flex"><MicOff className="w-4 h-4" /><span className="absolute inset-0 rounded-full animate-ping bg-red-400/30" /></span>
                      ) : <Mic className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 flex-shrink-0"
                  style={{ background: 'var(--blue)' }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {listening && (
                <p className="text-[10px] text-red-500 mt-2 text-center font-semibold tracking-wide">● Listening… speak now</p>
              )}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface BillyButtonProps {
  open: boolean
  onClick: () => void
}

export function BillyButton({ open, onClick }: BillyButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={open ? 'Close Billy chat' : 'Open Billy — AI chat assistant'}
      className="group relative flex items-center gap-2 pl-3.5 pr-4 h-12 rounded-full text-white font-semibold text-sm shadow-2xl"
      style={{ background: 'var(--grad-accent)', boxShadow: 'var(--shadow-blue)' }}
    >
      {!open && (
        <span aria-hidden className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: 'var(--blue)' }} />
      )}
      <span className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
        {open ? <X className="w-4 h-4" /> : <Sparkles className="w-3.5 h-3.5" />}
      </span>
      <span className="relative whitespace-nowrap pr-1">{open ? 'Close' : 'Chat with Billy'}</span>
    </motion.button>
  )
}

export default function BillyWidget() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <BillyChat open={open} onClose={() => setOpen(false)} />
      <div className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6 flex items-center gap-2">
        <BillyButton open={open} onClick={() => setOpen((v) => !v)} />
      </div>
    </>
  )
}

export { MessageCircle }
