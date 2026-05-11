import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CurrencyProvider } from '@/lib/CurrencyContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tralvana | Your World Starts Here',
  description: 'Flights, hotels, tours and experiences worldwide. Africa, Caribbean, Europe, Americas and beyond.',
  keywords: 'flights, hotels, travel, Caribbean, Africa, Europe, car hire, tours, travel packages',
  openGraph: {
    title: 'Tralvana | Your World Starts Here',
    description: 'Book flights, hotels, tours and experiences worldwide.',
    siteName: 'Tralvana',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0F" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Tralvana v1.2 - CSS rebuild trigger */}
        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  )
}
