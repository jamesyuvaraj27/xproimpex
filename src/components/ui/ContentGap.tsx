import { cn } from '@/lib/cn'

/**
 * Section 2 — any unsupplied text block renders as a clearly marked placeholder
 * in the staging build. NO SECTION SHIPS TO PRODUCTION CONTAINING A PLACEHOLDER:
 * in a production build these render nothing at all, so a missing block is
 * visible during review and simply absent if it is somehow missed.
 */
const isStaging = import.meta.env.MODE !== 'production'

export function ContentGap({ what, className }: { what: string; className?: string }) {
  if (!isStaging) return null
  return (
    <p
      data-content-gap={what}
      className={cn(
        'type-small rounded-sm border border-dashed border-danger/60 bg-paper-0 px-3 py-2 text-danger',
        className,
      )}
    >
      Content not provided by client — {what}
    </p>
  )
}
