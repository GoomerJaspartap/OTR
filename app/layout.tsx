import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ontario Tech Racing - FSAE Electric Race Car Team',
  description: 'Ontario Tech Racing is a team of passionate engineering and business students who design, manufacture, and market Formula-style electric race cars.',
  keywords: 'FSAE, Formula SAE, electric race car, Ontario Tech, engineering, motorsports',
  authors: [{ name: 'Ontario Tech Racing' }],
  openGraph: {
    title: 'Ontario Tech Racing - FSAE Electric Race Car Team',
    description: 'Student-led FSAE team designing and building electric race cars',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
