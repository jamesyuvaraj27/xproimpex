import { Menu } from 'lucide-react'
import { lazy, Suspense, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '@/data/site'
import { useActiveSection } from '@/lib/useActiveSection'
import { cn } from '@/lib/cn'

const MobileDrawer = lazy(async () => {
  const mod = await import('./MobileDrawer')
  return { default: mod.MobileDrawer }
})

const sectionIds = nav
  .filter((n) => n.href.includes('#'))
  .map((n) => n.href.split('#')[1] as string)

export function Header() {
  const [open, setOpen] = useState(false)
  const [drawerReady, setDrawerReady] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) requestAnimationFrame(() => toggleRef.current?.focus())
  }
  const active = useActiveSection(sectionIds)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/') {
      if (href === '/') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '/')
        return
      }
      if (href.includes('#')) {
        const id = href.split('#')[1]
        if (id) {
          const el = document.getElementById(id)
          if (el) {
            e.preventDefault()
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            window.history.pushState(null, '', `/#${id}`)
          }
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-rule-500 bg-paper-0/95 backdrop-blur-md transition-shadow">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="font-display text-[22px] font-bold lowercase tracking-tight text-brine-700 transition-colors hover:text-stamp-600"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const hashId = item.href.includes('#') ? item.href.split('#')[1] : undefined
              let isActive = false

              if (location.pathname === '/') {
                if (item.href === '/') {
                  isActive = active === 'home'
                } else if (hashId) {
                  isActive = active === hashId
                }
              } else if (location.pathname.startsWith('/services')) {
                isActive = item.href === '/#services'
              }

              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'type-button relative inline-block py-2 text-[15px] font-semibold transition-all duration-200',
                      isActive
                        ? 'font-bold text-stamp-600 after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:rounded-full after:bg-stamp-600'
                        : 'text-ink-900 hover:text-brine-700',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center lg:hidden">
          <button
            ref={toggleRef}
            type="button"
            onClick={() => {
              setDrawerReady(true)
              setOpen(true)
            }}
            onPointerEnter={() => setDrawerReady(true)}
            onFocus={() => setDrawerReady(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-md border border-rule-500 bg-paper-50 text-ink-900 transition-colors hover:bg-brine-100"
          >
            <Menu width={22} height={22} strokeWidth={1.75} aria-hidden="true" />
          </button>

          {drawerReady ? (
            <Suspense fallback={null}>
              <MobileDrawer open={open} onOpenChange={handleOpenChange} />
            </Suspense>
          ) : null}
        </div>
      </div>
    </header>
  )
}
