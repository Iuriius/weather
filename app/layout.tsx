import type { Metadata } from 'next'
import 'modern-normalize/modern-normalize.css';
import './globals.css'
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"


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
      <body className="container vertical">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
