/**
 * Site page content — Implementation Plan Section 11.
 *
 * Contact facts, office details, phone/WhatsApp numbers and service titles are
 * the client's own and are never altered. Narrative copy below (Welcome, About,
 * Vision, FAQ answers) was drafted by the development team at the client's
 * explicit request and should be reviewed/adjusted by the client before launch.
 */

/** A slot the client has not filled. */
export type Supplied<T> = T | null

export const hero = {
  h1: 'Import Export & DGFT Consultants in All Over India',
  tagline: 'Your success story in exports starts with xproimpex',
} as const

export const welcome = {
  h2: 'Welcome to xproimpex',
  subheading: 'Import & Export Consultants',
  body:
    'For over 18 years, xproimpex has helped Indian manufacturers, traders, and exporters navigate the paperwork, licensing, and compliance that stand between them and the global market. From your first Import Export Code to complex DGFT scheme approvals, our team manages the process end-to-end — so you can focus on running your business, not chasing government portals.' as Supplied<string>,
}

export const servicesIntro = {
  h2: 'Our Services',
  intro:
    'xproimpex provides professional Import-Export, DGFT, Customs, Certification, and Trade Compliance consultancy services to help businesses manage their international trade requirements efficiently.',
  positioning: 'One consultancy → Complete Import-Export, DGFT & Trade Compliance Solutions.',
} as const

export const about = {
  h2: 'About Us',
  subheading: 'Our Story',
  body:
    "xproimpex was founded to solve a problem every Indian exporter eventually runs into: international trade is full of opportunity, but the DGFT, Customs, and compliance framework around it is dense, slow-moving, and unforgiving of small mistakes. Over 18+ years, we've built a practice around making that framework simple for our clients — handling IEC registration, licensing, certifications, and duty benefit schemes with the same rigor whether you're a first-time exporter or an established manufacturer. Today, we support businesses across India from our offices in Chennai and Coimbatore, with a track record built one compliant filing at a time." as Supplied<string>,
  experience: '18+ Years',
  specializations: [
    'DGFT',
    'Customs',
    'Trade Compliance',
    'Licensing',
    'Export Incentives',
    'Certifications',
  ],
  trustIndicators: [
    '18+ Years Experience',
    'Trusted by Exporters & Importers',
    '100% DGFT Compliance Support',
  ],
  buttonLabel: 'Learn More',
  buttonHref: '/#why-choose-us' as Supplied<string>,
} as const

export const vision = {
  h2: 'Our Vision',
  body:
    'To be the most trusted Import-Export and DGFT consultancy in India — the first call every exporter makes, and the last worry they need to have about compliance.' as Supplied<string>,
}

export const whyChooseUs = {
  subheading: 'Why Choose Us',
  h2: 'Complete Import Export & DGFT Solutions Under One Roof.',
  points: [
    'Expert Import Export consultants',
    'End-to-end support',
    'Fast and transparent processing',
    'DGFT licensing expertise',
    'FSSAI/ISO/GST/Trademark support',
    'Trusted by exporters/importers',
    'Personalized guidance for reducing duties and maximizing incentives',
  ],
} as const

export type Faq = { id: string; question: string; answer: Supplied<string> }

/** Exactly three FAQs, as supplied. None added. */
export const faqs: Faq[] = [
  {
    id: 'faq-iec-registration',
    question: 'What is IEC registration?',
    answer:
      'An Import Export Code (IEC) is a 10-digit business identification number issued by the DGFT (Directorate General of Foreign Trade) that every business needs to import or export goods and services from India. Without a valid IEC, customs authorities will not clear your shipments and you cannot access export incentive schemes. xproimpex handles the full application and documentation process so your IEC is issued without delays or rejections.',
  },
  {
    id: 'faq-dgft-kerala',
    question: 'Do you provide DGFT services in Kerala?',
    answer:
      'Yes. While our offices are based in Chennai and Coimbatore, xproimpex provides DGFT, IEC, and trade compliance consultancy to clients across Kerala and all over India. Most of our services — documentation, filings, and DGFT correspondence — are handled remotely, so location is never a barrier to working with us.',
  },
  {
    id: 'faq-iec-duration',
    question: 'How long does IEC registration take?',
    answer:
      'In most cases, IEC registration is completed within 1–3 working days once your documents are in order. Timelines can vary slightly based on DGFT processing volumes and the accuracy of the submitted documentation — which is exactly why our team reviews everything before filing, to avoid delays caused by resubmission.',
  },
]

export const locations = {
  h2: 'Import Export Consultants Serving All Over India',
} as const

/** Exactly three entry points, as supplied. The first two now open a dedicated service page. */
export const ctaBlocks = [
  { label: 'IEC Registration Services', kind: 'link', target: '/services/iec-registration' },
  { label: 'DGFT Consultant', kind: 'link', target: '/services/dgft-consulting' },
  { label: 'Contact Import Export Consultant', kind: 'call', target: null },
] as const

export const footer = {
  copyright: 'Copyright © xproimpex. All Rights Reserved.',
} as const

/**
 * Remaining outstanding items — mostly optional polish. Rendered by the
 * staging gap banner so the client can review before launch.
 */
export const gaps = [
  {
    id: 8,
    item: '14 × service images — currently a styled icon tile per service',
    location: 'Service pages',
    blocking: false,
  },
  { id: 12, item: 'Meta description / SEO copy — client sign-off', location: 'All', blocking: false },
  { id: 14, item: 'Instagram profile URL — confirm derived link is correct', location: 'Footer', blocking: false },
  { id: 15, item: 'Analytics preference (e.g. Google Analytics / GA4 ID)', location: 'Global', blocking: false },
] as const
