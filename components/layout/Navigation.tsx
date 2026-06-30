'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

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
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = ['hero','about','projects','process','experience','skills','content','faq','contact']
    let sectionEls: { id: string; el: HTMLElement }[] = []
    const refreshEls = () => {
      sectionEls = sectionIds.map(id => ({ id, el: document.getElementById(id)! })).filter(s => s.el)
    }
    refreshEls()

    let ticking = false
    const update = () => {
      ticking = false
      const y = window.scrollY
      setScrolled(y > 24)
      let current = 'hero'
      for (const { id, el } of sectionEls) {
        const r = el.getBoundingClientRect()
        if (r.top <= 100 && r.bottom >= 100) { current = id; break }
      }
      setActiveSection(current)
    }

    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', refreshEls, { passive: true })
    update()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', refreshEls) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled || mobileOpen
            ? 'rgba(244,244,245,0.92)'
            : 'transparent',
          borderBottom: scrolled || mobileOpen
            ? '1px solid var(--border-2)'
            : 'none',
          backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Nabeel Imran — AI Engineer">
              <div
                className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: '2px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}
              >
                <Image src="/images/nabeel.jpg" alt="Nabeel Imran" fill sizes="32px" className="object-cover" style={{ objectPosition: 'center top' }} />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-[var(--bg)]" />
              </div>
              <span
                className="hidden sm:block text-sm font-semibold"
                style={{ color: 'var(--ink)', letterSpacing: '-0.01em' }}
              >
                Nabeel <span style={{ color: 'var(--ink-5)', fontWeight: 400 }}>Imran</span>
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const active = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    className={cn(
                      'relative px-3.5 py-2 text-sm rounded-full transition-colors duration-150 cursor-pointer',
                      active
                        ? 'font-semibold text-[var(--ink)]'
                        : 'font-medium text-[var(--ink-5)] hover:text-[var(--ink)]'
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'var(--bg-sunken)' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={e => handleNav(e, '#contact')}
                className="hidden sm:inline-flex btn-primary text-sm px-5 py-2"
              >
                Hire Me <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 -mr-1.5 rounded-full transition-colors cursor-pointer"
                style={{ color: 'var(--ink-4)', background: 'var(--bg-sunken)' }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: 'rgba(244,244,245,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-2 px-6 pb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.04 }}
                className="relative w-16 h-16 rounded-full overflow-hidden mb-8"
                style={{ border: '2px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
              >
                <Image src="/images/nabeel.jpg" alt="Nabeel Imran" fill sizes="64px" className="object-cover" style={{ objectPosition: 'center top' }} />
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.045 }}
                  className="text-2xl font-bold cursor-pointer"
                  style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={e => handleNav(e, '#contact')}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                className="btn-primary mt-8 px-10 py-3.5 text-base"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
