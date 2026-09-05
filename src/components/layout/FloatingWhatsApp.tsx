import { MessageCircle } from 'lucide-react'
import { whatsapp } from '@/data/site'

/**
 * The single floating action on the site, every breakpoint, every page.
 * Fixed bottom-right, safe-area aware, always visible (never gated behind scroll).
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${''}xproimpex on WhatsApp — ${whatsapp.display}`}
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <MessageCircle width={28} height={28} strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
