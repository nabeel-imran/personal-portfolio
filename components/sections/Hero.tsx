'use client'

import Image from 'next/image'
import { ArrowRight, Download, ExternalLink, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { TerminalCard } from '@/components/ui/TerminalCard'
import { WhatsAppCTA } from '@/components/ui/FloatingActions'

const ParticleBackground = dynamic(
  () => import('@/components/three/ParticleBackground').then((m) => m.ParticleBackground),
  { ssr: false }
)

const words = ['I', 'Build', 'AI', 'Systems', 'That', 'Actually', 'Ship.']

const stats = [
  { value: 4, suffix: '+', label: 'Years Exp', large: false },
  { value: 4, suffix: '', label: 'Live Prod Systems', large: false },
  { value: 45, suffix: 'min→2min', label: 'Time / Automation', large: true },
  { value: 95, suffix: '/100', label: 'Efficiency Score', large: false },
]

const trustLogos = ['Veremark', 'Peersol', 'n8n', 'Make.com', 'LangChain', 'Axiom.ai']

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden grid-bg pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <ParticleBackground />

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-6">
            {/* Avatar + availability pill */}
            <div className="anim-fade-up flex items-center gap-3 mb-5 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[var(--border-accent)] flex-shrink-0 shadow-[0_0_20px_var(--accent-glow)]">
                <Image
                  src="/images/nabeel.jpg"
                  alt="Nabeel Imran"
                  fill
                  sizes="44px"
                  priority
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[var(--bg-primary)]" />
              </div>
              <div className="flex flex-col gap-0.5 leading-tight">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] font-semibold">
                  Nabeel Imran · Islamabad
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Available for select projects
                </span>
              </div>
            </div>

            {/* Eyebrow */}
            <p
              className="anim-fade-up font-mono text-xs sm:text-sm text-[var(--accent-primary)] mb-4 sm:mb-6 tracking-wide break-all"
              style={{ animationDelay: '0.05s' }}
            >
              const engineer = new AI_Engineer();
            </p>

            {/* Headline — word by word with proper spacing */}
            <h1 className="mb-5 sm:mb-6 flex flex-wrap gap-x-3 sm:gap-x-4">
              <span className="sr-only">I Build AI Systems That Actually Ship.</span>
              {words.map((word, i) => (
                <span
                  key={i}
                  aria-hidden
                  className={`anim-fade-up-md inline-block ${
                    word === 'AI' || word === 'Actually' ? 'gradient-text' : ''
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p
              className="anim-fade-up text-base sm:text-lg text-[var(--text-secondary)] mb-8 sm:mb-10 leading-relaxed max-w-xl"
              style={{ animationDelay: '0.75s' }}
            >
              AI Engineer specializing in Intelligent Automation, GenAI Systems, and Full-Stack AI Products.{' '}
              <span className="text-[var(--text-primary)] font-medium">
                I don&apos;t build demos — I build production systems that enterprises depend on.
              </span>
            </p>

            {/* Stats */}
            <div
              className="anim-fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10"
              style={{ animationDelay: '0.9s' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card px-3 py-4 text-center min-h-[88px] flex flex-col justify-center"
                  style={{ borderRadius: '10px' }}
                >
                  <div
                    className={`font-bold text-[var(--text-primary)] font-mono leading-tight ${
                      stat.large ? 'text-base sm:text-lg' : 'text-2xl sm:text-3xl'
                    }`}
                  >
                    {stat.large ? (
                      <>
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </>
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="anim-fade-up flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ animationDelay: '1.0s' }}
            >
              <button
                onClick={() => handleScroll('billy')}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg text-white font-medium text-sm transition-all duration-200 active:scale-[0.98] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  boxShadow: '0 8px 24px rgba(59,130,246,0.35)',
                }}
              >
                <Sparkles className="w-4 h-4" />
                Talk to Billy
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <WhatsAppCTA variant="solid" label="WhatsApp" />
              <a
                href="/cv/Nabeel_Imran_CV.pdf"
                download="Nabeel_Imran_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-bright)] transition-colors font-medium px-2 py-1"
              >
                Book a Call
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <div
            className="anim-fade-scale lg:col-span-6 relative"
            style={{ animationDelay: '0.4s' }}
          >
            <div
              aria-hidden
              className="absolute -inset-3 sm:-inset-4 rounded-2xl opacity-30 blur-xl pointer-events-none"
              style={{ background: 'var(--gradient-accent)' }}
            />
            <div className="relative">
              <TerminalCard />
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="anim-fade-up mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-[var(--border-subtle)]"
          style={{ animationDelay: '1.2s' }}
        >
          <p className="text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-[0.2em] mb-5 sm:mb-6 text-center">
            Trusted by international clients
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-glass)] text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-accent)] transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
