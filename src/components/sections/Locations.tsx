import { locations } from '@/data/content'
import { formatAddress, offices, phones, site } from '@/data/site'
import { Section, SectionHeading } from '@/components/ui/Section'

/**
 * Mobile puts offices first, map below. The map is visible immediately —
 * built from the office's own address, no API key, no click-to-load gate.
 */
export function Locations() {
  const embedSrc = offices.find((o) => o.mapEmbedSrc)?.mapEmbedSrc ?? null

  return (
    <Section id="locations" tone="white" labelledBy="locations-heading">
      <SectionHeading id="locations-heading">{locations.h2}</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-rule-500 bg-brine-100 shadow-sm lg:aspect-[4/3]">
            {embedSrc ? (
              <iframe
                title={`Map of xproimpex offices — ${offices.map((o) => o.city).join(' and ')}`}
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
            ) : null}
          </div>
        </div>

        <div className="order-1 space-y-8 lg:order-2 lg:col-span-5">
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="type-h3 mb-3 text-brine-700">{office.city}</h3>
              <dl className="border-t border-rule-500">
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-rule-500 py-3">
                  <dt className="type-small text-ink-600">Address</dt>
                  <dd className="type-small text-right text-ink-900">
                    <address className="not-italic">{formatAddress(office)}</address>
                  </dd>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-rule-500 py-3">
                  <dt className="type-small text-ink-600">Phone</dt>
                  <dd className="type-small text-right">
                    {phones.map((phone, i) => (
                      <span key={phone.href}>
                        {i > 0 ? <span aria-hidden="true" className="text-ink-600"> · </span> : null}
                        <a
                          href={phone.href}
                          className="tabular text-brine-700 underline underline-offset-4"
                        >
                          {phone.display}
                          <span className="sr-only"> — call the {office.city} office</span>
                        </a>
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-rule-500 py-3">
                  <dt className="type-small text-ink-600">Hours</dt>
                  <dd className="tabular type-small text-right text-ink-900">{site.hours}</dd>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-3">
                  <dt className="type-small text-ink-600">Directions</dt>
                  <dd className="type-small text-right">
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brine-700 underline underline-offset-4"
                    >
                      Open in Google Maps
                      <span className="sr-only"> — {office.city} office</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
