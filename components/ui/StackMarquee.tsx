'use client'

import { stack } from '@/lib/stack'
import type { StackItem } from '@/lib/stack'

// Split into 3 visually balanced rows
const groupSize = Math.ceil(stack.length / 3)
const rows: StackItem[][] = [
  stack.slice(0, groupSize),
  stack.slice(groupSize, groupSize * 2),
  stack.slice(groupSize * 2),
]

interface RowProps {
  items: StackItem[]
  reverse?: boolean
  speed?: number
}

function StackRow({ items, reverse = false, speed = 50 }: RowProps) {
  // Triple the array so the loop is seamless on wide screens
  const tripled = [...items, ...items, ...items]

  return (
    <div className="marquee-container py-1">
      <div
        className="flex gap-3 sm:gap-4"
        style={{
          width: 'max-content',
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {tripled.map((tool, i) => {
          const Icon = tool.Icon
          return (
            <div
              key={`${tool.name}-${i}`}
              className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-glass)] whitespace-nowrap text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                // Set per-card hover accent via CSS variable so we don't pay for any JS-driven hover
                ['--brand' as string]: tool.color,
              }}
            >
              {/* Glow on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200 blur-md"
                style={{ background: tool.color }}
              />
              <Icon
                className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0 transition-colors duration-200"
                style={{ color: tool.color }}
              />
              <span className="relative">{tool.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function StackMarquee() {
  return (
    <div
      className="space-y-3 sm:space-y-4 -mx-4 sm:-mx-6 lg:-mx-8"
      // Pause on hover (CSS-only, no JS handlers)
      onMouseEnter={(e) => {
        const tracks = e.currentTarget.querySelectorAll<HTMLElement>('[style*="animation"]')
        tracks.forEach((t) => (t.style.animationPlayState = 'paused'))
      }}
      onMouseLeave={(e) => {
        const tracks = e.currentTarget.querySelectorAll<HTMLElement>('[style*="animation"]')
        tracks.forEach((t) => (t.style.animationPlayState = 'running'))
      }}
    >
      <StackRow items={rows[0]} speed={55} />
      <StackRow items={rows[1]} reverse speed={45} />
      <StackRow items={rows[2]} speed={50} />
    </div>
  )
}
