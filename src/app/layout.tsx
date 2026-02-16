import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Nabeel Imran - AI Software Engineer | Python, React, Machine Learning',
  description: 'Portfolio of Nabeel Imran - Expert AI Software Engineer specializing in Python, React, Node.js, Machine Learning, Automation, and Cloud Solutions. 5+ years experience with 50+ successful projects.',
  keywords: ['Nabeel Imran', 'AI Software Engineer', 'AI Developer', 'Machine Learning Engineer', 'Python Developer', 'React Developer', 'Node.js', 'Automation Expert', 'Portfolio'],
  authors: [{ name: 'Nabeel Imran' }],
  openGraph: {
    title: 'Nabeel Imran - AI Software Engineer',
    description: 'Expert AI Software Engineer specializing in Python, React, ML, and Cloud Solutions',
    url: 'https://nabeelscode.com',
    siteName: 'Nabeel Imran Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nabeel Imran - AI Software Engineer',
    description: 'Expert AI Software Engineer specializing in Python, React, ML, and Cloud Solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${roboto.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  )
}
