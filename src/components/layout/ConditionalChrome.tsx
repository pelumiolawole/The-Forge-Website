'use client'
import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/landing/navigation/Navigation'
import { Footer } from '@/components/landing/navigation/Footer'

const MINIMAL_PATHS = ['/h2']

export function ConditionalNav() {
  const pathname = usePathname()
  if (MINIMAL_PATHS.includes(pathname)) return null
  return <Navigation />
}

export function ConditionalFooter() {
  const pathname = usePathname()
  if (MINIMAL_PATHS.includes(pathname)) return null
  return <Footer />
}
