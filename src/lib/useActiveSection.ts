import { useEffect, useState } from 'react'

/**
 * Section 11.1 — the active nav item is indicated by accent colour PLUS a weight
 * change PLUS an underline rule. Colour is never the sole carrier of meaning.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const headerOffset = 140

      if (scrollY < 120) {
        setActive('home')
        return
      }

      let currentSection = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
          if (scrollY >= top - 20) {
            currentSection = id
          }
        }
      }

      setActive(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])

  return active
}

/** Returns true once the visitor has scrolled past the given element id. */
export function useScrolledPast(id: string): boolean {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const onScroll = () => {
      setPast(el.getBoundingClientRect().bottom < 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [id])

  return past
}
