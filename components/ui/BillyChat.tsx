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
  content:
    "Hi! I'm Billy 🤖 — Nabeel's AI assistant. Ask me anything about his work, projects, or how he can help with your AI project.",
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

// Browser SpeechRecognition (typed loosely to avoid pulling in DOM-experimental types)
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
  // Keep a ref of the latest messages so async send() never reads stale state
  const messagesRef = useRef<Message[]>(messages)
  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  // Detect Web Speech API support once on mount (client-only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRec
      webkitSpeechRecognition?: new () => SpeechRec
    }
    setMicSupported(!!(w.SpeechRecognition || w.webkitSpeechRecognition))
  }, [])

  const startListening = useCallback(() => {
    if (typeof window === 'undefined' || listening) return
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRec
      webkitSpeechRecognition?: new () => SpeechRec
    }
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition
    if (!Ctor) return
    const rec = new Ctor()
    rec.continuous = false
    rec.interimResults = true
    rec.lang = 'en-US'
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
    rec.onerror = () => {
      setListening(false)
    }
    rec.onend = () => {
      setListening(false)
      recognitionRef.current = null
    }
    recognitionRef.current = rec
    setListening(true)
    rec.start()
  }, [listening])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
      } catch {}
    }
    setListening(false)
  }, [])

  const toggleMic = () => (listening ? stopListening() : startListening())

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || loading) return

      // Compute the next message list synchronously from the ref, then update state
      const next: Message[] = [
        ...messagesRef.current,
        { role: 'user', content: trimmed },
      ]
      messagesRef.current = next
      setMessages(next)
      setInput('')
      setLoading(true)
      setError(null)

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // Drop the static welcome message so Billy isn't confused by its own intro
            messages: next.filter((m, i) => !(i === 0 && m === initialMessage)),
          }),
        })
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data.error || 'Chat failed.')
        }
        const final: Message[] = [...next, { role: 'assistant', content: data.message }]
        messagesRef.current = final
        setMessages(final)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Something went wrong.')
      } finally {
        setLoading(false)
      }
    },
    [loading]
  )

  // Auto-send a seeded prompt when chat opens with one
  const lastAutoSendRef = useRef<string | null>(null)
  useEffect(() => {
    if (open && autoSendOnOpen && autoSendOnOpen !== lastAutoSendRef.current) {
      lastAutoSendRef.current = autoSendOnOpen
      const t = setTimeout(() => send(autoSendOnOpen), 250)
      return () => clearTimeout(t)
    }
    if (!open) {
      lastAutoSendRef.current = null
    }
  }, [open, autoSendOnOpen, send])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const reset = () => {
    setMessages([initialMessage])
    setError(null)
    setInput('')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] sm:hidden"
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-label="Talk to Billy — Nabeel's AI assistant"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            className="fixed z-[90] flex flex-col overflow-hidden rounded-2xl border border-[var(--border-accent)] shadow-2xl
                       inset-x-3 bottom-3 top-16
                       sm:inset-auto sm:right-5 sm:bottom-24 sm:top-auto sm:w-[400px] sm:h-[600px] sm:max-h-[calc(100vh-7rem)]"
            style={{
              background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
              boxShadow:
                '0 0 0 1px rgba(59,130,246,0.2), 0 30px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(59,130,246,0.18)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] flex-shrink-0"
              style={{ background: 'var(--bg-glass-strong)', backdropFilter: 'blur(12px)' }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--gradient-accent)' }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[var(--bg-secondary)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1.5 truncate">
                    Billy
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono text-[var(--accent-primary)]"
                      style={{ background: 'var(--accent-subtle)' }}>
                      AI
                    </span>
                  </p>
                  <p className="text-xs text-[var(--text-muted)] truncate">
                    Nabeel&apos;s AI assistant · online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={reset}
                  aria-label="Restart conversation"
                  className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close chat"
                  className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth"
              style={{ scrollbarWidth: 'thin' }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-[var(--accent-primary)] text-white rounded-br-sm'
                        : 'bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: 'easeInOut',
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <div className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 px-3 py-2 rounded-lg">
                  {error}
                </div>
              )}

              {/* Suggestions — only show when conversation hasn't started */}
              {messages.length === 1 && !loading && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    Try asking
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 text-left"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-[var(--border-subtle)] p-3 flex-shrink-0"
              style={{ background: 'var(--bg-glass-strong)' }}
            >
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
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors disabled:opacity-60"
                  />

                  {micSupported && (
                    <button
                      type="button"
                      onClick={toggleMic}
                      aria-label={listening ? 'Stop listening' : 'Start voice input'}
                      title={listening ? 'Stop listening' : 'Speak — English (en-US)'}
                      className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 active:scale-90 ${
                        listening
                          ? 'text-red-400 bg-red-400/10'
                          : 'text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-subtle)]'
                      }`}
                    >
                      {listening ? (
                        <span className="relative flex">
                          <MicOff className="w-4 h-4" />
                          <span className="absolute inset-0 rounded-full animate-ping bg-red-400/30" />
                        </span>
                      ) : (
                        <Mic className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-bright)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {listening && (
                <p className="text-[10px] text-red-400 mt-2 text-center font-medium tracking-wide">
                  ● Listening… speak now
                </p>
              )}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Floating button to open the chat
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
      className="group relative flex items-center gap-2 pl-3.5 pr-4 h-12 rounded-full text-white font-medium text-sm shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        boxShadow: '0 8px 30px rgba(59,130,246,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
      }}
    >
      {/* Pulse ring */}
      {!open && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: '#3b82f6' }}
        />
      )}

      <span className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
        {open ? <X className="w-4 h-4" /> : <Sparkles className="w-3.5 h-3.5" />}
      </span>
      <span className="relative whitespace-nowrap pr-1">
        {open ? 'Close' : 'Chat with Billy'}
      </span>
    </motion.button>
  )
}

// Default export combining button + chat panel for convenient mounting
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

// Re-export icon for consumers who want a custom button placement
export { MessageCircle }
