import { Instagram, Linkedin } from 'lucide-react'
import { social } from '@/data/site'
import { cn } from '@/lib/cn'

/** Icon-only social links — no handle text, no visible URL. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {social.instagram.href ? (
        <li>
          <a
            href={social.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`xproimpex on ${social.instagram.label}`}
            className="inline-flex size-10 items-center justify-center rounded-full border border-paper-50/25 text-paper-50 transition-colors hover:border-stamp-500 hover:text-stamp-500"
          >
            <Instagram width={18} height={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </li>
      ) : null}
      <li>
        <a
          href={social.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`xproimpex on ${social.linkedin.label}`}
          className="inline-flex size-10 items-center justify-center rounded-full border border-paper-50/25 text-paper-50 transition-colors hover:border-stamp-500 hover:text-stamp-500"
        >
          <Linkedin width={18} height={18} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </li>
    </ul>
  )
}
