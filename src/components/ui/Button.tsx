import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

/**
 * Section 9.6 — min height 48px, min touch area 48x48, 8px minimum gap between
 * adjacent targets. Borders, not shadows.
 */
const button = cva(
  'type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-brine-700 text-paper-0 hover:bg-brine-500',
        whatsapp:
          'border border-rule-500 bg-paper-0 text-ink-900 hover:border-brine-500 hover:bg-brine-100',
        secondary:
          'border border-brine-700 bg-transparent text-brine-700 hover:bg-brine-100',
        tertiary:
          'min-h-0 border-0 bg-transparent p-0 text-brine-700 underline underline-offset-4 hover:text-brine-500',
        onDark:
          'border border-paper-0/40 bg-transparent text-paper-0 hover:border-paper-0 hover:bg-paper-0/10',
      },
      full: { true: 'w-full', false: '' },
    },
    defaultVariants: { variant: 'primary', full: false },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof button>

export function Button({ className, variant, full, ...props }: ButtonProps) {
  return <button className={cn(button({ variant, full }), className)} {...props} />
}

export function ButtonLink({ className, variant, full, ...props }: LinkProps) {
  return <a className={cn(button({ variant, full }), className)} {...props} />
}
