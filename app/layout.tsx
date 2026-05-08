import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/ui/FloatingActions'
import { ThemeProvider, themeScript } from '@/components/ui/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nabeelscode.com'
  ),
  title: {
    default: "Nabeel Imran — AI Engineer | Nabeel's Code",
    template: "%s | Nabeel's Code",
  },
  description:
    'AI Engineer specializing in Intelligent Automation, LLM Integration, and Full-Stack AI Products. Building production-grade systems with n8n, Axiom.ai, Make.com, LangChain, and modern LLMs.',
  keywords: [
    'AI Engineer', 'AI Automation', 'n8n', 'Make.com', 'Axiom.ai', 'LangChain', 'RAG',
    'LLM Integration', 'Nabeel Imran', 'nabeelscode', 'Islamabad Pakistan', 'Full Stack AI', 'RPA',
    'Workflow Automation', 'GenAI',
  ],
  authors: [{ name: 'Nabeel Imran', url: 'https://nabeelscode.com' }],
  creator: 'Nabeel Imran',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nabeelscode.com',
    siteName: "Nabeel's Code",
    title: "Nabeel Imran — AI Engineer | Nabeel's Code",
    description: 'Production-grade AI automation, GenAI systems, and full-stack AI products.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabeel Imran — AI Engineer',
    description: 'AI Automation · GenAI Systems · Full-Stack AI',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nabeelscode.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nabeel Imran',
  alternateName: "Nabeel's Code",
  url: 'https://nabeelscode.com',
  image: 'https://nabeelscode.com/nabeel-imran.jpg',
  sameAs: [
    'https://www.linkedin.com/in/nabeelimrann/',
    'https://instagram.com/nabeelscode',
    'https://github.com/nabeelscode',
  ],
  jobTitle: 'AI Engineer',
  worksFor: { '@type': 'Organization', name: 'Peersol Consulting' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  knowsAbout: [
    'AI Automation', 'n8n', 'Make.com', 'LangChain', 'RAG',
    'LLM Integration', 'Full-Stack Development', 'RPA',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* No-flash theme bootstrap — must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  )
}
