import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b border-rule-500', className)}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          // Section 11.9 — real button, full row, >= 48px tall, state exposed.
          'type-h4 group flex min-h-12 w-full items-center justify-between gap-4 py-4 text-left text-brine-700 transition-colors hover:text-brine-500',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          aria-hidden="true"
          width={20}
          height={20}
          strokeWidth={1.5}
          className="shrink-0 text-stamp-600 transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_180ms_ease-out] data-[state=open]:animate-[accordion-down_180ms_ease-out] motion-reduce:animate-none"
      {...props}
    >
      <div className={cn('type-body measure pb-6 text-ink-900', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
