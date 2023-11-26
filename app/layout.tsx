import type { Metadata } from 'next'
import 'modern-normalize/modern-normalize.css';
import './globals.css'


export const metadata: Metadata = {
  title: 'Ukraine weather interactive map',
  description: 'Ukraine Ukraine weather interactive map 2024',
}

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
