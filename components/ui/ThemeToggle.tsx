'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md'
}

export function ThemeToggle({ className = '', size = 'md' }: ThemeToggleProps) {
  const { theme, toggle, mounted } = useTheme()

  const dim = size === 'sm' ? 'w-9 h-9' : 'w-10 h-10'
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-[18px] h-[18px]'

  // While not mounted (SSR), render a placeholder to avoid hydration flicker.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className={`inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-glass)] ${dim} ${className}`}
      />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`relative inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-glass)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 active:scale-95 ${dim} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex"
          >
            <Moon className={`${iconSize} text-[var(--text-secondary)]`} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex"
          >
            <Sun className={`${iconSize} text-amber-400`} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
