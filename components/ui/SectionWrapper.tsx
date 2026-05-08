'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export function SectionWrapper({
  id,
  className,
  children,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('section-padding relative z-10', className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={cn(!fullWidth && 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}
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
    <div className={cn('mb-10 sm:mb-12 lg:mb-16', center && 'text-center')}>
      {eyebrow && (
        <motion.p
          variants={fadeUpVariants}
          custom={0}
          className="font-mono text-xs sm:text-sm text-[var(--accent-primary)] mb-3 tracking-wider uppercase"
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
          className={cn(
            'mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl',
            center && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
