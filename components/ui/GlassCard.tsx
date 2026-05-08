'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef } from 'react'

interface GlassCardProps extends ComponentPropsWithoutRef<'div'> {
  hover?: boolean
  gradient?: boolean
  children: React.ReactNode
}

export function GlassCard({ hover = true, gradient = false, className, children, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'glass-card p-6 relative overflow-hidden',
        gradient && 'bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]',
        className
      )}
      {...(props as ComponentPropsWithoutRef<typeof motion.div>)}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-subtle)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      {children}
    </motion.div>
  )
}
