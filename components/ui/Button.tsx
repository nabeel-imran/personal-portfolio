'use client'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  href?: string
  external?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon = false,
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]'

  const variants = {
    primary:
      'bg-[var(--accent-primary)] hover:bg-[var(--accent-bright)] text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_var(--accent-glow)] hover:scale-[1.02]',
    secondary:
      'bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] rounded-lg',
    ghost:
      'border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--accent-subtle)]',
    text: 'text-[var(--accent-primary)] hover:text-[var(--accent-bright)] underline-offset-4 hover:underline',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
