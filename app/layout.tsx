import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Doni master',
  description: 'JS master doni',
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ ...poppins.style, backgroundColor: '#0D1117' }} className="min-h-screen">{children}</body>
    </html>
  )
}
