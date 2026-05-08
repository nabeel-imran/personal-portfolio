'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Stack' },
  { href: '#content', label: 'Content' },
  { href: '#faq', label: 'FAQ' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'process', 'experience', 'skills', 'content', 'faq', 'contact']
    // Cache element references — re-querying every scroll was a hot path
    let sectionEls: { id: string; el: HTMLElement }[] = []
    const refreshEls = () => {
      sectionEls = sectionIds
        .map((id) => ({ id, el: document.getElementById(id)! }))
        .filter((s) => s.el)
    }
    refreshEls()

    let ticking = false
    let lastScrolled = scrolled
    let lastProgress = progress
    let lastActive = activeSection

    const update = () => {
      ticking = false
      const y = window.scrollY
      const isScrolled = y > 20
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled
        setScrolled(isScrolled)
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0
      // Round to nearest int to avoid sub-pixel React re-renders
      const pInt = Math.round(p)
      if (pInt !== lastProgress) {
        lastProgress = pInt
        setProgress(pInt)
      }

      let current = 'hero'
      for (const { id, el } of sectionEls) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id
          break
        }
      }
      if (current !== lastActive) {
        lastActive = current
        setActiveSection(current)
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', refreshEls, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', refreshEls)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setMobileOpen(false)
      }
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || mobileOpen
            ? 'backdrop-blur-[20px] border-b border-[var(--border-subtle)] shadow-[var(--shadow-card)]'
            : 'bg-transparent'
        )}
        style={
          scrolled || mobileOpen
            ? { backgroundColor: 'color-mix(in srgb, var(--bg-primary) 78%, transparent)' }
            : undefined
        }
      >
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-transparent">
          <div
            className="h-full transition-[width] duration-150 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, transparent, var(--accent-primary), #8b5cf6)',
              boxShadow: '0 0 10px var(--accent-glow)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with avatar */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 -ml-1 px-1 py-2 flex-shrink-0"
              aria-label="Nabeel's Code home"
            >
              <span className="relative w-8 h-8 rounded-lg overflow-hidden border border-[var(--border-accent)] flex-shrink-0 shadow-[0_0_10px_var(--accent-glow)] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/nabeel.jpg"
                  alt="Nabeel"
                  fill
                  sizes="32px"
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[var(--bg-primary)]" />
              </span>
              <span className="hidden sm:flex items-center gap-1 leading-none">
                <span className="font-mono text-sm font-bold text-[var(--text-primary)]">Nabeel&apos;s</span>
                <span className="font-mono text-sm font-bold text-[var(--accent-primary)] group-hover:text-[var(--accent-bright)] transition-colors">
                  Code
                </span>
              </span>
            </Link>

            {/* Desktop nav with active indicator */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 px-1 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-md">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'relative px-3 lg:px-4 py-1.5 text-xs lg:text-sm rounded-full transition-colors duration-200',
                      isActive
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                )
              })}
            </div>

            {/* CTA + theme toggle + hamburger */}
            <div className="flex items-center gap-2">
              <ThemeToggle size="sm" className="hidden sm:inline-flex" />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 group relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  boxShadow: '0 4px 20px rgba(59,130,246,0.35)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Me</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <ThemeToggle size="sm" className="sm:hidden" />

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-3 -mr-2"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'var(--bg-overlay)', backdropFilter: 'blur(24px)' }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 sm:gap-8 px-6 py-20">
              {/* Avatar at top of mobile menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 }}
                className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--border-accent)] shadow-[0_0_30px_var(--accent-glow)]"
              >
                <Image
                  src="/images/nabeel.jpg"
                  alt="Nabeel"
                  fill
                  sizes="80px"
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base min-w-[220px] justify-center"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  boxShadow: '0 8px 30px rgba(59,130,246,0.4)',
                }}
              >
                <Sparkles className="w-4 h-4" />
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Theme switch in mobile drawer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-2 flex items-center gap-3 text-sm text-[var(--text-muted)]"
              >
                <span>Theme</span>
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
