import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Content', href: '/#content' },
  { label: 'Contact', href: '/#contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/nabeelscode', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nabeelimrann/', icon: 'in' },
  { label: 'Instagram', href: 'https://instagram.com/nabeelscode', icon: '◎' },
  { label: 'YouTube', href: '#', icon: '▶' },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="font-mono text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                Nabeel&apos;s
              </span>
              <span className="font-mono text-lg sm:text-xl font-bold text-[var(--accent-primary)]">
                Code
              </span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              AI Engineering &amp; Intelligent Automation
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-2 italic">
              &ldquo;Building systems that run while you sleep.&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 text-xs font-bold font-mono"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border-subtle)] pt-6 sm:pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Nabeel Imran · Nabeel&apos;s Code
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Islamabad, Pakistan · Available for remote work globally
          </p>
        </div>
      </div>
    </footer>
  )
}
