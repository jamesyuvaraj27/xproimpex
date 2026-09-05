/**
 * SEO strings — Implementation Plan Section 14.
 *
 * Appendix A compliance: the title is composed from client-supplied strings
 * (company name + H1); the description is the client's own services intro
 * paragraph, reproduced verbatim. No marketing copy is authored here.
 * GAP 12 — client-authored meta description still pending sign-off.
 */
import { formatAddress, email, offices, phones, site, social, whatsapp } from './site'
import { faqs, servicesIntro } from './content'
import { services } from './services'

export const seo = {
  title: `${site.name} — ${'Import Export & DGFT Consultants in All Over India'}`,
  description: servicesIntro.intro,
  canonical: site.url + '/',
  locale: 'en_IN',
} as const

/** Section 14.3 — one Organization node, one LocalBusiness node per office. */
export function structuredData(): string {
  const orgId = `${site.url}/#organization`

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: site.url,
    description: seo.description,
    email: email.display,
    telephone: phones.map((p) => p.href.replace('tel:', '')),
    sameAs: [social.linkedin.href, social.instagram.href].filter(Boolean),
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: services.map((s) => s.title),
  }

  const businesses = offices.map((office) => ({
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#${office.id}`,
    name: `${site.name} — ${office.city}`,
    parentOrganization: { '@id': orgId },
    url: site.url,
    telephone: phones[0]?.href.replace('tel:', ''),
    email: email.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.addressLines.join(', '),
      addressLocality: office.locality,
      addressRegion: office.region,
      postalCode: office.postalCode,
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    hasMap: office.mapLink,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: whatsapp.display,
        url: whatsapp.href,
        areaServed: 'IN',
        availableLanguage: ['en', 'ta'],
      },
    ],
    description: `${formatAddress(office)}. ${site.hours}.`,
  }))

  const graph: unknown[] = [organization, ...businesses]

  /**
   * Section 11.9 / 14.3 — FAQPage markup is emitted ONLY when every answer
   * exists. Marking up empty answers would be invalid structured data.
   */
  if (faqs.every((f) => f.answer)) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
}
