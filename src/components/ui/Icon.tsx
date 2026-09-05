import {
  Award,
  Building2,
  Factory,
  FileCheck,
  FileText,
  Globe,
  KeyRound,
  Landmark,
  Network,
  Percent,
  ScrollText,
  Shirt,
  ShieldCheck,
  UtensilsCrossed,
  Users,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react'
import { cn } from '@/lib/cn'

/**
 * Section 9.4 — Lucide only, outline only, 1.5px stroke, sizes 16/20/24 and
 * nothing between. Decorative icons are hidden from the accessibility tree.
 *
 * The registry is explicit rather than a namespace import: importing the whole
 * icon set would ship roughly a megabyte of unused JavaScript and blow the
 * Section 15 performance budget.
 */
const registry = {
  Award,
  Building2,
  Factory,
  FileCheck,
  FileText,
  Globe,
  KeyRound,
  Landmark,
  Network,
  Percent,
  ScrollText,
  Shirt,
  ShieldCheck,
  UtensilsCrossed,
  Users,
} satisfies Record<string, LucideIcon>

const sizes = { sm: 16, md: 20, lg: 24 } as const

type Props = Omit<LucideProps, 'size' | 'name'> & {
  name: string
  size?: keyof typeof sizes
  /** Set only when the icon carries meaning no adjacent text conveys. */
  title?: string
}

export function Icon({ name, size = 'md', className, title, ...rest }: Props) {
  // Section 9.4 — a service with no honest icon match falls back to the shared default.
  const Cmp = registry[name as keyof typeof registry] ?? FileText
  return (
    <Cmp
      width={sizes[size]}
      height={sizes[size]}
      strokeWidth={1.5}
      className={cn('shrink-0', className)}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      aria-label={title}
      {...rest}
    />
  )
}
