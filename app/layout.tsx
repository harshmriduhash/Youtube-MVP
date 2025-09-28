import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { VideoProvider } from '@/context/VideoContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YouTube 2.0 MVP',
  description: 'A modern YouTube clone built with Next.js and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  )
}
