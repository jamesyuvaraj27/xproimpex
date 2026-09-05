import { whyChooseUs } from '@/data/content'
import { Section, SectionHeading } from '@/components/ui/Section'

/**
 * Section 11.8 — the ONLY place numbered markers are used, because the client
 * supplied an explicitly numbered list. Markers are hidden from the
 * accessibility tree; the sequence is carried by the ordered list itself.
 * The two empty grid cells are left genuinely empty — the list is not padded.
 */
export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" tone="white" labelledBy="why-heading">
      <SectionHeading id="why-heading" subheading={whyChooseUs.subheading}>
        {whyChooseUs.h2}
      </SectionHeading>

      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.points.map((point, i) => (
          <li
            key={point}
            className="group rounded-xl border border-rule-300 bg-paper-50 p-6 transition-all hover:border-stamp-500 hover:bg-paper-0 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="tabular inline-flex size-9 items-center justify-center rounded-lg bg-stamp-100 text-[15px] font-bold text-stamp-600 group-hover:bg-stamp-600 group-hover:text-paper-0 transition-colors"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-500/40 group-hover:bg-stamp-600" />
            </div>
            <span aria-hidden="true" className="my-4 block h-px w-full bg-rule-300" />
            <span className="type-body block font-medium text-ink-900 leading-relaxed">{point}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
