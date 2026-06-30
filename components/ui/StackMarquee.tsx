'use client'

import { stack } from '@/lib/stack'
import type { StackItem } from '@/lib/stack'

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
  const tripled = [...items, ...items, ...items]

  return (
    <div className={`marquee-wrap py-1`}>
      <div
        className={`flex gap-3 sm:gap-4 ${reverse ? 'marquee-track-r' : 'marquee-track'}`}
        style={{ animationDuration: `${speed}s`, willChange: 'transform' }}
      >
        {tripled.map((tool, i) => {
          const Icon = tool.Icon
          return (
            <div
              key={`${tool.name}-${i}`}
              className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl whitespace-nowrap text-sm font-medium flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--ink-3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-2)'
                e.currentTarget.style.color = 'var(--ink)'
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--ink-3)'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <Icon className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" style={{ color: tool.color }} />
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
      onMouseEnter={(e) => {
        const tracks = e.currentTarget.querySelectorAll<HTMLElement>('.marquee-track, .marquee-track-r')
        tracks.forEach((t) => (t.style.animationPlayState = 'paused'))
      }}
      onMouseLeave={(e) => {
        const tracks = e.currentTarget.querySelectorAll<HTMLElement>('.marquee-track, .marquee-track-r')
        tracks.forEach((t) => (t.style.animationPlayState = 'running'))
      }}
    >
      <StackRow items={rows[0]} speed={55} />
      <StackRow items={rows[1]} reverse speed={45} />
      <StackRow items={rows[2]} speed={50} />
    </div>
  )
}
