import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  /** Section 12.3 — tint bands are applied selectively, never as constant alternation. */
  tone?: 'paper' | 'white' | 'tint' | 'dark'
  labelledBy?: string
}

const tones = {
  paper: 'bg-paper-50 text-ink-900',
  white: 'bg-paper-0 text-ink-900',
  tint: 'bg-brine-100 text-ink-900',
  dark: 'bg-brine-700 text-paper-0',
} as const

export function Section({ id, children, className, tone = 'paper', labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('section-y', tones[tone], className)}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}

/**
 * Section 8.3 — no tracked-out ALL-CAPS eyebrow labels, no coloured single word.
 * Context comes from the heading itself; the accent rule marks the section start.
 */
export function SectionHeading({
  id,
  children,
  subheading,
  subheadingPosition = 'above',
  tone = 'light',
  as: As = 'h2',
}: {
  id?: string
  children: ReactNode
  subheading?: string
  /** Why Choose Us puts its label above the H2; About puts "Our Story" below it. */
  subheadingPosition?: 'above' | 'below'
  tone?: 'light' | 'dark'
  as?: 'h2' | 'h3'
}) {
  const sub = subheading ? (
    <p className={cn('type-small', tone === 'dark' ? 'text-brine-100' : 'text-ink-600')}>
      {subheading}
    </p>
  ) : null
  return (
    <div className="mb-8 lg:mb-10">
      <span
        aria-hidden="true"
        className={cn('mb-5 block h-0.5 w-12', tone === 'dark' ? 'bg-stamp-100' : 'bg-stamp-600')}
      />
      {subheadingPosition === 'above' ? <div className="mb-2">{sub}</div> : null}
      <As id={id} className={cn('type-h2', tone === 'dark' && 'text-paper-0')}>
        {children}
      </As>
      {subheadingPosition === 'below' ? <div className="mt-2">{sub}</div> : null}
    </div>
  )
}
