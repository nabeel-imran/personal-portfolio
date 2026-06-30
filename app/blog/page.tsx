import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Rss } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'AI automation tutorials, engineering insights, and behind-the-scenes content from Nabeel\'s Code.',
}

const comingSoon = [
  { title: 'Building Production n8n Workflows: Patterns I Use on Real Client Projects', category: 'n8n', eta: 'Coming soon' },
  { title: 'RAG in Production: What the Tutorials Don\'t Tell You', category: 'GenAI', eta: 'Coming soon' },
  { title: 'Axiom.ai vs Playwright: When to Use Which for RPA', category: 'Automation', eta: 'Coming soon' },
  { title: 'How I Cut Client Onboarding from 45 Minutes to 2 Minutes', category: 'Case Study', eta: 'Coming soon' },
  { title: 'LangChain vs LlamaIndex vs Direct API: My Honest Evaluation', category: 'AI Tools', eta: 'Coming soon' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs sm:text-sm text-[var(--accent-primary)] mb-3 uppercase tracking-wider">
            Blog
          </p>
          <h1 className="mb-4">AI Engineering Insights</h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl">
            Real systems. Real code. No fluff. Content from someone who ships AI automation for a living.
          </p>
        </div>

        {/* Coming soon banner */}
        <div className="glass-card p-6 sm:p-8 mb-10 sm:mb-12 text-center"
          style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
          <div className="w-12 h-12 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center mx-auto mb-4">
            <Rss className="w-5 h-5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Coming Soon</h2>
          <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto mb-6">
            The blog is launching soon. Subscribe to get notified when the first articles drop.
          </p>
          <Link
            href="/#content"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-primary)] text-white font-medium text-sm hover:bg-[var(--accent-bright)] transition-all"
          >
            Subscribe for Updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Planned articles */}
        <div>
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-6">
            Planned Articles
          </p>
          <div className="space-y-4">
            {comingSoon.map((post, i) => (
              <div
                key={i}
                className="glass-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 opacity-70"
              >
                <span
                  className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium border self-start flex-shrink-0"
                  style={{
                    background: 'var(--accent-subtle)',
                    color: 'var(--accent-primary)',
                    borderColor: 'var(--border-accent)',
                  }}
                >
                  {post.category}
                </span>
                <p className="text-sm text-[var(--text-secondary)] flex-1 min-w-0">{post.title}</p>
                <span className="text-[10px] sm:text-xs text-[var(--text-muted)] flex-shrink-0 font-mono">
                  {post.eta}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Meanwhile, watch on YouTube */}
        <div className="mt-16 pt-10 border-t border-[var(--border-subtle)] text-center">
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Meanwhile, watch my AI engineering content on YouTube
          </p>
          <a
            href="https://youtube.com/@nabeelscode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-bright)] transition-colors"
          >
            Watch on YouTube <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
