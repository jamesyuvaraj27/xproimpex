import { BadgeCheck, ShieldCheck, Users } from 'lucide-react'
import { about } from '@/data/content'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'

const trustIcons = [BadgeCheck, Users, ShieldCheck]

export function About() {
  return (
    <Section id="about" tone="paper" labelledBy="about-heading">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-8 aspect-[3/2] w-full overflow-hidden rounded-lg border border-rule-500 shadow-sm">
            <img
              src="/images/about-meeting.jpg"
              alt="The xproimpex advisory team reviewing a client's export documentation"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>

          <SectionHeading id="about-heading" subheading={about.subheading} subheadingPosition="below">
            {about.h2}
          </SectionHeading>
          {about.body ? <p className="type-body measure text-ink-900">{about.body}</p> : null}
        </div>

        <div>
          <p className="tabular text-[56px] leading-none font-bold text-stamp-600 lg:text-[72px]">
            {about.experience}
          </p>

          <ul className="mt-8 border-t border-rule-500">
            {about.specializations.map((item) => (
              <li key={item} className="type-body border-b border-rule-500 py-2.5 text-ink-900">
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-8 space-y-3">
            {about.trustIndicators.map((item, i) => {
              const TrustIcon = trustIcons[i] ?? BadgeCheck
              return (
                <li key={item} className="flex items-start gap-3">
                  <TrustIcon
                    width={20}
                    height={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-stamp-600"
                  />
                  <span className="type-body text-ink-900">{item}</span>
                </li>
              )
            })}
          </ul>

          {about.buttonHref ? (
            <ButtonLink href={about.buttonHref} variant="secondary" className="mt-8">
              {about.buttonLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
