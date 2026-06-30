import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Stack', href: '/#skills' },
  { label: 'Content', href: '/#content' },
  { label: 'Contact', href: '/#contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/nabeelscode', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nabeelimrann/', icon: 'in' },
  { label: 'Instagram', href: 'https://instagram.com/nabeelscode', icon: '◎' },
  { label: 'YouTube', href: 'https://youtube.com/@nabeelscode', icon: '▶' },
]

export function Footer() {
  return (
    <footer className="footer-root relative z-10">
      <style>{`
        .footer-root {
          border-top: 1px solid var(--border-2);
          background: var(--bg-card);
        }
        .footer-nav-link {
          color: var(--ink-5);
          font-size: 0.875rem;
          transition: color 0.15s;
          text-decoration: none;
        }
        .footer-nav-link:hover { color: var(--ink); }
        .footer-social {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: var(--r-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          font-family: var(--font-mono);
          background: var(--bg-sunken);
          color: var(--ink-4);
          transition: all 0.15s;
          text-decoration: none;
        }
        .footer-social:hover {
          background: var(--ink);
          color: #fff;
        }
      `}</style>

      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-lg font-bold" style={{ color: 'var(--ink)' }}>
                Nabeel
              </span>
              <span className="text-lg font-light" style={{ color: 'var(--ink-5)' }}>
                {' '}Imran
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-5)' }}>
              AI Engineer · Intelligent Automation · GenAI Systems
            </p>
            <p className="text-sm" style={{ color: 'var(--ink-6)' }}>
              &ldquo;Production systems enterprises depend on.&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--ink-6)', fontFamily: 'var(--font-mono)' }}
            >
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map(link => (
                <Link key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--ink-6)', fontFamily: 'var(--font-mono)' }}
            >
              Connect
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="footer-social"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm" style={{ color: 'var(--ink-5)' }}>
              i.nabeel7@outlook.com
            </p>
          </div>
        </div>

        <div
          className="pt-6 sm:pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ borderTop: '1px solid var(--border-2)' }}
        >
          <p className="text-xs sm:text-sm" style={{ color: 'var(--ink-6)' }}>
            © {new Date().getFullYear()} Nabeel Imran · All rights reserved
          </p>
          <p className="text-xs sm:text-sm" style={{ color: 'var(--ink-6)' }}>
            Islamabad, Pakistan · Available for remote work globally
          </p>
        </div>
      </div>
    </footer>
  )
}
