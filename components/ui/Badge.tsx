import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'green' | 'blue' | 'purple' | 'orange'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants: Record<string, React.CSSProperties> = {
    default: { background: 'var(--bg-alt)', color: 'var(--ink-3)', borderColor: 'var(--border)' },
    green:   { background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' },
    blue:    { background: 'var(--blue-tint)', color: 'var(--blue)', borderColor: 'var(--blue-mid)' },
    purple:  { background: '#f5f3ff', color: '#7c3aed', borderColor: '#ddd6fe' },
    orange:  { background: '#fff7ed', color: '#c2410c', borderColor: '#fed7aa' },
  }

  return (
    <span
      className={cn('badge', className)}
      style={variants[variant]}
    >
      {children}
    </span>
  )
}
