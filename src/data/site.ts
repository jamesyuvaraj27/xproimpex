/**
 * Canonical site configuration — Implementation Plan Section 1.2.
 *
 * Every contact value on this site is defined here exactly once and referenced
 * everywhere else. Never hardcode a phone number, address or link twice.
 */

export const site = {
  name: 'xproimpex',
  domain: 'www.xproimpex.com',
  url: 'https://www.xproimpex.com',
  category: 'Import Export & DGFT Consultants',
  categoryLong: 'Import Export Consultants · DGFT Consultants · Trade Compliance Consultants',
  experienceYears: '18',
  coverage: 'All Over India',
  hours: 'Monday – Saturday, 9:00 AM – 8:00 PM',
  hoursShort: 'Mon–Sat 9:00 AM – 8:00 PM',
} as const

export const phones = [
  { label: 'Primary line', display: '9962637076', href: 'tel:+919962637076' },
  { label: 'Secondary line', display: '9841450111', href: 'tel:+919841450111' },
] as const

export const primaryPhone = phones[0]

export const whatsapp = {
  display: '+91 9962637076',
  href: 'https://wa.me/919962637076?text=I%20would%20like%20to%20know%20more%20about%20your%20Import%20Export%20%2F%20DGFT%20services.',
} as const

export const email = {
  display: 'xproimpex14@gmail.com',
  href: 'mailto:xproimpex14@gmail.com',
} as const

export const social = {
  instagram: {
    label: 'Instagram',
    handle: 'nalinimanickkam_15',
    /**
     * Derived mechanically from the client-supplied handle (standard Instagram
     * profile URL pattern). Confirm with the client before treating this as final —
     * flagged in `gaps` (GAP 14).
     */
    href: 'https://www.instagram.com/nalinimanickkam_15/' as string | null,
  },
  linkedin: {
    label: 'LinkedIn',
    handle: 'Senthamizh Selvi',
    href: 'https://www.linkedin.com/in/senthamizh-selvi-b8140630a',
  },
} as const

export type Office = {
  id: string
  city: string
  addressLines: string[]
  locality: string
  region: string
  postalCode: string
  /** Mechanically built Google Maps embed (no API key) from the client's own address. */
  mapEmbedSrc: string | null
  mapLink: string
}

/** Builds a key-less Google Maps embed URL from a plain-text address. */
function mapEmbed(address: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=k&z=16&ie=UTF8&iwloc=&output=embed`
}

export const offices: Office[] = [
  {
    id: 'chennai',
    city: 'Chennai',
    addressLines: ['96/93, Bajanai Koil Street, Choolaimedu'],
    locality: 'Chennai',
    region: 'Tamil Nadu',
    postalCode: '600094',
    mapEmbedSrc: mapEmbed('9/1, Koil St, Choolaimedu, Chennai, Tamil Nadu 600094'),
    mapLink: 'https://maps.app.goo.gl/1DfQbR5188uWMRxP9',
  },
  {
    id: 'coimbatore',
    city: 'Coimbatore',
    addressLines: ['No.7, Rice Mill Road, Kuniamuthur'],
    locality: 'Coimbatore',
    region: 'Tamil Nadu',
    postalCode: '641008',
    mapEmbedSrc: mapEmbed('No.7, Rice Mill Road, Kuniamuthur, Coimbatore, Tamil Nadu 641008'),
    mapLink: 'https://maps.app.goo.gl/1DfQbR5188uWMRxP9',
  },
]

/** Full single-line address, used in the footer and in structured data. */
export function formatAddress(office: Office): string {
  return `${office.addressLines.join(', ')}, ${office.city} – ${office.postalCode}`
}

/** Section 11.1 — navigation labels are functional interface text (Appendix A). */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Why Us', href: '/#why-choose-us' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
] as const

/** Footer "designed by" credit — the developer's own credit line, not client content. */
export const designCredit: { text: string; href: string } = {
  text: 'Designed by J27',
  href: 'https://j27-portfolio.vercel.app/',
}
