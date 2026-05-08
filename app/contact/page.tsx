import type { Metadata } from 'next'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Nabeel Imran for AI automation, GenAI development, or full-stack AI project inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  )
}
