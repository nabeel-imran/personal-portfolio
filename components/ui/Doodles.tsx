'use client'

/*
 * Hand-drawn animated doodle library — the site's clipart/art layer.
 * All pieces are decorative (aria-hidden) and tinted via props.
 */

interface DoodleProps {
  className?: string
  color?: string
  size?: number
  style?: React.CSSProperties
}

/* Four-point sparkle star — slow spin */
export function Star({ className = '', color = 'var(--yellow)', size = 36, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" width={size} height={size} className={`doodle-spin ${className}`} style={style}>
      <path
        d="M20 1 C22 12, 28 18, 39 20 C28 22, 22 28, 20 39 C18 28, 12 22, 1 20 C12 18, 18 12, 20 1 Z"
        fill={color} stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round"
      />
    </svg>
  )
}

/* Small twinkle sparkle — pulse */
export function Sparkle({ className = '', color = 'var(--pink)', size = 22, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} className={`doodle-twinkle ${className}`} style={style}>
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill={color} />
    </svg>
  )
}

/* Squiggly underline — draws itself, then wiggles */
export function Squiggle({ className = '', color = 'var(--blue)', size = 140, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 140 16" width={size} height={size * 16 / 140} className={className} style={style} fill="none">
      <path
        className="doodle-draw"
        d="M3 9 C 14 2, 22 14, 33 8 C 44 2, 52 14, 63 8 C 74 2, 82 14, 93 8 C 104 2, 112 14, 123 8 C 130 4, 134 6, 137 8"
        stroke={color} strokeWidth="4" strokeLinecap="round"
      />
    </svg>
  )
}

/* Hand-drawn scribble arrow (curves down-right) */
export function ScribbleArrow({ className = '', color = 'var(--ink)', size = 80, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 80 80" width={size} height={size} className={className} style={style} fill="none">
      <path
        className="doodle-draw"
        d="M8 10 C 40 14, 62 30, 64 62 M64 62 L52 50 M64 62 L72 46"
        stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

/* Rotating dashed ring */
export function DottedRing({ className = '', color = 'var(--violet)', size = 120, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" width={size} height={size} className={`doodle-spin-slow ${className}`} style={style} fill="none">
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="3" strokeDasharray="4 14" strokeLinecap="round" />
    </svg>
  )
}

/* Morphing blob (pure CSS, color via prop) */
export function Blob({ className = '', color = 'var(--lime)', size = 160, style }: DoodleProps) {
  return (
    <div
      aria-hidden
      className={`doodle-blob ${className}`}
      style={{ width: size, height: size, background: color, border: '2.5px solid var(--ink)', ...style }}
    />
  )
}

/* Zigzag bolt */
export function Zigzag({ className = '', color = 'var(--orange)', size = 48, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 48 48" width={size} height={size} className={`doodle-bounce ${className}`} style={style}>
      <path d="M27 2 L10 28 L22 28 L17 46 L38 18 L25 18 L33 2 Z"
        fill={color} stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

/* Flower / asterisk bloom */
export function Flower({ className = '', color = 'var(--pink)', size = 44, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 48 48" width={size} height={size} className={`doodle-spin-slow ${className}`} style={style}>
      {[0, 60, 120].map(r => (
        <ellipse key={r} cx="24" cy="24" rx="22" ry="8" fill={color} stroke="var(--ink)" strokeWidth="2"
          transform={`rotate(${r} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="5" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="2" />
    </svg>
  )
}

/* Smiley sticker */
export function Smiley({ className = '', color = 'var(--yellow)', size = 56, style }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 56 56" width={size} height={size} className={`doodle-bounce ${className}`} style={style}>
      <circle cx="28" cy="28" r="25" fill={color} stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="19" cy="23" r="3" fill="var(--ink)" />
      <circle cx="37" cy="23" r="3" fill="var(--ink)" />
      <path d="M17 34 C 21 41, 35 41, 39 34" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* Rotated sticker label — e.g. "OPEN TO WORK" */
export function Sticker({
  children, rotate = -6, bg = 'var(--yellow)', className = '', style,
}: {
  children: React.ReactNode
  rotate?: number
  bg?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      className={`sticker ${className}`}
      style={{ background: bg, transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </span>
  )
}
