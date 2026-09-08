import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { nav, site } from '@/data/site'

export function MobileDrawer({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-900/40" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-paper-0 shadow-xl focus:outline-none">
          <div className="flex h-[var(--header-height)] items-center justify-between border-b border-rule-500 px-5">
            <Dialog.Title className="flex items-center gap-2 font-display text-[20px] font-bold lowercase text-brine-700">
              <img
                src="/logo.png"
                alt={site.name}
                className="h-7 w-auto object-contain"
              />
              <span>{site.name}</span>
            </Dialog.Title>
            <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
            <Dialog.Close
              className="inline-flex size-12 items-center justify-center rounded-sm border border-rule-500"
              aria-label="Close menu"
            >
              <X width={24} height={24} strokeWidth={1.5} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <nav aria-label="Primary mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-rule-500 last:border-0">
                  <Link
                    to={item.href}
                    onClick={() => {
                      onOpenChange(false)
                      if (window.location.pathname === '/') {
                        if (item.href === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        } else if (item.href.includes('#')) {
                          const id = item.href.split('#')[1]
                          if (id) {
                            const el = document.getElementById(id)
                            if (el) {
                              setTimeout(() => {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              }, 100)
                            }
                          }
                        }
                      }
                    }}
                    className="type-h4 flex min-h-12 items-center py-3 text-ink-900 transition-colors hover:text-stamp-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
