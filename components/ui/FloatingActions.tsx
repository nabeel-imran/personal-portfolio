'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import { BillyChat } from './BillyChat'

const WHATSAPP_NUMBER = '923239960094'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Nabeel — found you via nabeelscode.com. I'd like to discuss a project."
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.2-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface FloatingActionsProps {
  showWhatsApp?: boolean
  showBilly?: boolean
}

export function FloatingActions({
  showWhatsApp = true,
  showBilly = true,
}: FloatingActionsProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Delay mount slightly to keep initial paint snappy
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) return null

  return (
    <>
      <BillyChat open={open} onClose={() => setOpen(false)} />

      {/* WhatsApp — left side */}
      {showWhatsApp && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 220, damping: 18 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Chat with Nabeel on WhatsApp"
          className="group fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[70] flex items-center gap-2 h-12 sm:h-13 pl-3 pr-4 rounded-full text-white font-medium text-sm shadow-xl"
          style={{
            background: '#25D366',
            boxShadow: '0 8px 24px rgba(37,211,102,0.45), 0 0 0 1px rgba(255,255,255,0.1)',
          }}
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ background: '#25D366' }}
          />
          <span className="relative w-8 h-8 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
            <WhatsAppIcon className="w-4 h-4" />
          </span>
          <span className="relative pr-1">WhatsApp</span>
        </motion.a>
      )}

      {/* Billy chat button — right side */}
      {showBilly && (
        <motion.button
          onClick={() => setOpen((v) => !v)}
          initial={{ opacity: 0, scale: 0.5, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.85, type: 'spring', stiffness: 220, damping: 18 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={open ? 'Close Billy chat' : 'Open Billy — Nabeel AI assistant'}
          className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] flex items-center gap-2 h-12 sm:h-13 pl-3 pr-4 rounded-full text-white font-medium text-sm shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            boxShadow: '0 8px 24px rgba(59,130,246,0.45), 0 0 0 1px rgba(255,255,255,0.1)',
          }}
        >
          {!open && (
            <span
              aria-hidden
              className="absolute inset-0 rounded-full animate-ping opacity-25"
              style={{ background: '#3b82f6' }}
            />
          )}
          <span className="relative w-8 h-8 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          <span className="relative pr-1 whitespace-nowrap">
            {open ? 'Close' : 'Talk to Billy'}
          </span>
        </motion.button>
      )}
    </>
  )
}

// Inline WhatsApp button for use in sections (Hero / Contact)
interface WhatsAppCTAProps {
  variant?: 'solid' | 'outline'
  className?: string
  label?: string
}

export function WhatsAppCTA({
  variant = 'solid',
  className = '',
  label = 'WhatsApp',
}: WhatsAppCTAProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 active:scale-[0.98]'
  const styles =
    variant === 'solid'
      ? 'text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.35)]'
      : 'border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[#25D366]/50 hover:bg-[#25D366]/5'

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      style={
        variant === 'solid'
          ? { background: '#25D366' }
          : undefined
      }
    >
      <WhatsAppIcon className="w-4 h-4" />
      {label}
    </a>
  )
}

export { WhatsAppIcon, WHATSAPP_URL }
