'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  alt?: boolean
}

// Signature easing — fast start, soft landing (used across the whole site)
export const EASE = [0.22, 1, 0.36, 1] as const

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.94, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
}

export function SectionWrapper({ id, className, children, alt }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('section', className)}
      style={{ background: alt ? 'var(--bg-alt)' : 'var(--bg)' }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={cn('mb-10 sm:mb-14', center && 'text-center')}>
      {eyebrow && (
        <motion.p
          variants={fadeUpVariants}
          custom={0}
          className={cn('eyebrow', center && 'justify-center')}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={fadeUpVariants} custom={1}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUpVariants}
          custom={2}
          className={cn('mt-3 text-base sm:text-lg max-w-2xl', center && 'mx-auto')}
          style={{ color: 'var(--ink-3)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
