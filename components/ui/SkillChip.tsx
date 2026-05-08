import { cn } from '@/lib/utils'

interface SkillChipProps {
  children: React.ReactNode
  className?: string
}

export function SkillChip({ children, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono',
        'bg-[var(--accent-subtle)] text-[var(--text-code)]',
        'border border-[var(--border-accent)] border-opacity-50',
        'transition-all duration-200 hover:bg-[var(--accent-glow)] hover:border-[var(--border-accent)]',
        className
      )}
    >
      {children}
    </span>
  )
}
