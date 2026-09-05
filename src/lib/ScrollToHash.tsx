import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Handles cross-page hash navigation: a Link like `/#services` clicked from
 * the service detail page changes route to `/`; once the home sections are
 * mounted, this scrolls to the target instead of leaving the visitor at the top.
 */
export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        const frame = requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        )
        return () => cancelAnimationFrame(frame)
      }
      return
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return null
}
