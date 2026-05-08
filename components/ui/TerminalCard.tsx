'use client'

import { useEffect, useState } from 'react'

interface CodeLine {
  text: string
  type: 'comment' | 'success' | 'code' | 'blank'
  parts?: { text: string; class: string }[]
}

const codeLines: CodeLine[] = [
  { text: '// n8n workflow → AI → Slack', type: 'comment' },
  {
    text: '',
    type: 'code',
    parts: [
      { text: 'const', class: 'token-const' },
      { text: ' workflow = ', class: 'token-variable' },
      { text: 'await', class: 'token-function' },
      { text: ' n8n.trigger({', class: 'token-variable' },
    ],
  },
  {
    text: '',
    type: 'code',
    parts: [
      { text: '  webhook: ', class: 'token-variable' },
      { text: "'monday.com/update'", class: 'token-string' },
      { text: ',', class: 'token-variable' },
    ],
  },
  {
    text: '',
    type: 'code',
    parts: [
      { text: '  action: ', class: 'token-variable' },
      { text: 'async', class: 'token-function' },
      { text: ' (data) => {', class: 'token-variable' },
    ],
  },
  {
    text: '',
    type: 'code',
    parts: [
      { text: '    const result = ', class: 'token-variable' },
      { text: 'await', class: 'token-function' },
      { text: ' llm.extract(data);', class: 'token-variable' },
    ],
  },
  {
    text: '',
    type: 'code',
    parts: [
      { text: '    ', class: 'token-variable' },
      { text: 'await', class: 'token-function' },
      { text: ' axiom.runBot(', class: 'token-variable' },
      { text: "'veremark-check'", class: 'token-string' },
      { text: ');', class: 'token-variable' },
    ],
  },
  {
    text: '',
    type: 'code',
    parts: [{ text: '    return slack.notify(result);', class: 'token-variable' }],
  },
  { text: '  }', type: 'code', parts: [{ text: '  }', class: 'token-variable' }] },
  { text: '});', type: 'code', parts: [{ text: '});', class: 'token-variable' }] },
  { text: '', type: 'blank' },
  { text: '// ✓ Production. Zero manual input.', type: 'success' },
]

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 130)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="rounded-xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl shadow-black/50 w-full"
      style={{ background: '#0d0f17' }}
    >
      {/* Window controls */}
      <div
        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[var(--border-subtle)]"
        style={{ background: '#13162b' }}
      >
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-[var(--text-muted)] font-mono">
          workflow.js
        </span>
      </div>

      {/* Code */}
      <div className="p-4 sm:p-5 lg:p-6 font-mono text-[11px] sm:text-xs lg:text-sm leading-relaxed sm:leading-7 min-h-[260px] sm:min-h-[280px] overflow-x-auto">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.type === 'comment' && <span className="token-comment">{line.text}</span>}
            {line.type === 'success' && (
              <span style={{ color: '#4ade80' }}>{line.text}</span>
            )}
            {line.type === 'code' &&
              line.parts?.map((part, j) => (
                <span key={j} className={part.class}>
                  {part.text}
                </span>
              ))}
            {line.type === 'blank' && <span>&nbsp;</span>}
          </div>
        ))}
        {visibleLines < codeLines.length && (
          <span className="text-[var(--accent-primary)] blink">█</span>
        )}
        {visibleLines >= codeLines.length && (
          <div className="mt-3 flex items-center gap-2 text-emerald-400 text-[10px] sm:text-xs">
            <span>●</span>
            <span>Running in production · 0 errors</span>
          </div>
        )}
      </div>
    </div>
  )
}
