// src/app/layout.tsx
import './globals.css' 
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Next App API Testing', description: 'Application for testing Next.js API routes', 
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