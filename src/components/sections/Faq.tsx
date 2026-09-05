import { useEffect, useState } from 'react'
import { faqs } from '@/data/content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ContentGap } from '@/components/ui/ContentGap'

/**
 * Section 11.9 — exactly three FAQs, none added. First item open by default so
 * the pattern is self-evident. Each item is anchor-addressable and opens if
 * linked directly.
 */
export function Faq() {
  const [value, setValue] = useState<string>(faqs[0]?.id ?? '')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && faqs.some((f) => f.id === hash)) setValue(hash)
  }, [])

  return (
    <Section id="faq" tone="paper" labelledBy="faq-heading">
      <SectionHeading id="faq-heading">Frequently asked questions</SectionHeading>

      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
        className="measure border-t border-rule-500"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} id={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer ?? <ContentGap what={`FAQ answer — ${faq.question}`} />}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
