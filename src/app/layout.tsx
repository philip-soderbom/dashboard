import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-40% to-emerald-500 to-90% text-slate-800 container mx-auto p-4`}>{children}</body>
    </html>
  )
}