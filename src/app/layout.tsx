import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maximus Lewis',
  description: 'Portfolio and Blog for Maximus Lewis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Providers>
          <NavBar />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
