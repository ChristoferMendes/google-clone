import { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
