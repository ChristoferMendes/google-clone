import { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Google Clone NextJS 13',
  description: 'Google clone created with NextJS 13 by Christofer Mendes',
  icons: {
    icon: '/google.png',
  },
} as Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
