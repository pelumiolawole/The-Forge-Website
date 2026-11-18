'use client'
import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/landing/navigation/Navigation'
import { Footer } from '@/components/landing/navigation/Footer'

const MINIMAL_PATHS = ['/resources/h2', '/resources/eoygs']

function isMinimalPath(pathname: string | null) {
  if (!pathname) return false
  const normalized = pathname.replace(/\/$/, '')
  return MINIMAL_PATHS.includes(normalized)
}

export function ConditionalNav() {
  const pathname = usePathname()
  if (isMinimalPath(pathname)) return null
  return <Navigation />
}

export function ConditionalFooter() {
  const pathname = usePathname()
  if (isMinimalPath(pathname)) return null
  return <Footer />
}
