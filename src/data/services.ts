/**
 * The 14 services — Implementation Plan Sections 5.3 (anchors) and 12.2 (block map).
 *
 * Titles are exactly as supplied by the client. Overview/Covers/Benefits copy
 * below is sourced from the client-approved service brief; where the brief did
 * not spell out a field (e.g. Benefits for IEC), reasonable consulting copy was
 * drafted consistent with the facts already given, at the client's request.
 */

export type BlockStyle = 'ruled' | 'marked' | 'tags' | 'ordered' | 'prose'

export type ServiceBlock = {
  /** Exact label as the client wrote it. Never normalised across services. */
  label: string
  style: BlockStyle
  items: string[] | null
  /** For `prose` blocks. */
  body?: string | null
}

export type Service = {
  /** Permanent anchor id — part of the public URL surface. Never change after launch. */
  id: string
  /** Exact client title. Never truncated in the detailed block. */
  title: string
  /** Lucide icon name with genuine semantic fit, or 'FileText' shared default. */
  icon: string
  overview: string | null
  /** Client-supplied image, 3:2. null = falls back to a styled icon tile. */
  image: { src: string; alt: string } | null
  blocks: ServiceBlock[]
}

export const services: Service[] = [
  {
    id: 'iec-registration',
    title: 'IEC (Import Export Code) Registration Certificate',
    icon: 'FileCheck',
    overview:
      'An Import Export Code (IEC) is a 10-digit identification number issued by the DGFT that every business needs before it can import or export goods and services from India. We handle the full application and documentation process so your IEC is issued without delays or rejections.',
    image: {
      src: '/images/services/iec-registration.jpg',
      alt: 'Iec Registration - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'What IEC is',
          'DGFT-issued identification',
          'Importance of IEC for import and export activities',
          'Customs clearance',
          'Access to export incentives',
          'Legal requirements for international trade',
          'IEC application and documentation support',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Mandatory for customs clearance of shipments',
          'Unlocks eligibility for export incentive schemes',
          'Meets legal requirements for international trade',
          'Issued once — no periodic renewal required',
          'Faster, error-free processing with expert documentation support',
        ],
      },
    ],
  },
  {
    id: 'aeo-certification',
    title: 'AEO Certificate (T1, T2, T3 & LO)',
    icon: 'ShieldCheck',
    overview:
      'Authorized Economic Operator (AEO) certification helps eligible businesses achieve faster, more reliable customs clearance by recognising them as trusted, compliant trade partners.',
    image: {
      src: '/images/services/aeo-certification.jpg',
      alt: 'Aeo Certification - xproimpex',
    },
    blocks: [
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Faster customs clearance',
          'Reduced customs inspections',
          'Priority treatment',
          'Simplified customs procedures',
          'Improved supply-chain efficiency',
          'Increased business credibility',
          'Better customs compliance',
        ],
      },
    ],
  },
  {
    id: 'dgft-consulting',
    title: 'DGFT Consulting & Foreign Trade Advisory Services',
    icon: 'Landmark',
    overview:
      'Professional guidance on DGFT regulations, foreign trade policy, licensing, documentation, and compliance requirements — so your filings are accurate the first time.',
    image: {
      src: '/images/services/dgft-consulting.jpg',
      alt: 'Dgft Consulting - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'DGFT regulations',
          'IEC-related services',
          'Import/export licensing',
          'Foreign Trade Policy',
          'DGFT applications and filings',
          'Policy compliance',
          'Export incentives',
          'Trade facilitation',
          'Regulatory compliance',
        ],
      },
    ],
  },
  {
    id: 'icegate-registration',
    title: 'ICEGATE Registration & Customs EDI Services',
    icon: 'Network',
    overview:
      "ICEGATE registration connects your business to India's official customs EDI gateway, enabling digital filing of shipping bills, bills of entry, and other customs transactions.",
    image: {
      src: '/images/services/icegate-registration.jpg',
      alt: 'Icegate Registration - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'ICEGATE registration',
          'Shipping bills',
          'Bills of Entry',
          'Customs transactions',
          'Duty-related processes',
          'Electronic customs documentation',
          'Digital customs compliance',
          'Customs EDI support',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Digital customs processing',
          'Faster documentation',
          'Easier customs communication',
          'Improved transaction management',
          'Better compliance',
        ],
      },
    ],
  },
  {
    id: 'epc-rcmc-registration',
    title: 'Export Promotion Council (EPC) / RCMC Registration',
    icon: 'Users',
    overview:
      'A Registration-Cum-Membership Certificate (RCMC) from the appropriate Export Promotion Council confirms your registration as an exporter of a specific product group and is often required to access export benefits.',
    image: {
      src: '/images/services/epc-rcmc-registration.jpg',
      alt: 'Epc Rcmc Registration - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'RCMC registration',
          'Export Promotion Council registration',
          'Selection of appropriate council',
          'Documentation assistance',
          'Application processing',
          'Export incentive eligibility',
          'DGFT-related benefits',
          'International trade participation',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Access to export promotion schemes',
          'Eligibility for applicable export benefits',
          'Industry-specific support',
          'Participation in trade promotion activities',
          'Better recognition as an exporter',
        ],
      },
    ],
  },
  {
    id: 'digital-signature-certificate',
    title: 'Digital Signature Certificate (DSC)',
    icon: 'KeyRound',
    overview:
      'A Digital Signature Certificate lets you sign and authenticate documents securely online — required for DGFT filings, ICEGATE, GST, and most government trade portals.',
    image: {
      src: '/images/services/digital-signature-certificate.jpg',
      alt: 'Digital Signature Certificate - xproimpex',
    },
    blocks: [
      {
        label: 'Used For',
        style: 'ruled',
        items: [
          'DGFT filings',
          'ICEGATE',
          'GST-related activities',
          'Government portals',
          'Online authentication',
          'Digital document signing',
          'Electronic applications',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Secure online authentication',
          'Faster digital filing',
          'Legally recognized electronic signing',
          'Reduced paperwork',
          'Convenient government portal transactions',
        ],
      },
    ],
  },
  {
    id: 'epcg-scheme',
    title: 'EPCG Scheme Consulting',
    icon: 'Factory',
    overview:
      'The Export Promotion Capital Goods (EPCG) Scheme supports eligible exporters importing capital goods for export-oriented activities under applicable scheme conditions. We manage the licensing and compliance around it.',
    image: {
      src: '/images/services/epcg-scheme.jpg',
      alt: 'Epcg Scheme - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'EPCG application',
          'Capital goods import',
          'Machinery and equipment',
          'DGFT licensing',
          'Export obligation guidance',
          'Customs-duty benefits as applicable',
          'Export obligation monitoring',
          'Compliance and documentation',
          'EPCG licence closure/redemption assistance',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Supports import of eligible capital goods',
          'Helps reduce applicable import-duty burden',
          'Supports modernization of manufacturing facilities',
          'Improves export competitiveness',
          'Professional DGFT compliance support',
        ],
      },
    ],
  },
  {
    id: 'iso-certification',
    title: 'ISO Certificate Consulting',
    icon: 'Award',
    overview:
      'We provide consultancy and documentation support for businesses pursuing internationally recognised ISO certifications.',
    image: {
      src: '/images/services/iso-certification.jpg',
      alt: 'Iso Certification - xproimpex',
    },
    blocks: [
      {
        label: 'Certifications Include',
        style: 'ruled',
        items: [
          'ISO 9001 — Quality Management System',
          'ISO 14001 — Environmental Management System',
          'ISO 22000 — Food Safety Management System',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Improved quality management',
          'Increased customer confidence',
          'Better business credibility',
          'Alignment with international standards',
          'Improved operational processes',
          'Support for business growth and market expansion',
        ],
      },
    ],
  },
  {
    id: 'certificate-of-origin',
    title: 'Certificate of Origin (COO) Services',
    icon: 'Globe',
    overview:
      'A Certificate of Origin (COO) is a trade document that certifies the country of origin of exported goods. It may be required by importing countries, customs authorities, or overseas buyers as part of the import documentation process. We manage the preparation and processing of COO documentation for exporters.',
    image: {
      src: '/images/services/certificate-of-origin.jpg',
      alt: 'Certificate Of Origin - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'Certificate of Origin application',
          'Non-Preferential Certificate of Origin',
          'Preferential Certificate of Origin',
          'Documentation preparation',
          'Document verification',
          'Application processing',
          'Guidance on applicable origin requirements',
          'Support with relevant issuing authorities',
          'Export documentation compliance',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Establishes the origin of exported goods',
          'Supports customs clearance',
          'Helps determine applicable customs duties',
          'Can support eligibility for preferential tariff benefits where applicable',
          'Meets overseas buyer/documentation requirements',
          'Helps maintain proper export documentation',
        ],
      },
      {
        label: 'Suitable For',
        style: 'tags',
        items: [
          'Manufacturers',
          'Exporters',
          'Merchant exporters',
          'Trading companies',
          'Businesses involved in international trade',
        ],
      },
      {
        label: 'Documentation',
        style: 'prose',
        items: null,
        body:
          'Our team prepares and verifies the required documentation, coordinates with the relevant issuing authority, and ensures the certificate meets the format and content requirements of the destination country before submission.',
      },
    ],
  },
  {
    id: 'advance-authorisation',
    title: 'Advance Authorisation Licence (AAL) Services',
    icon: 'ScrollText',
    overview:
      "Advance Authorisation (AA) is a DGFT export-promotion scheme that allows eligible exporters to import inputs required for manufacturing export products, subject to the scheme's applicable conditions. We provide consultancy and documentation assistance throughout the process.",
    image: {
      src: '/images/services/advance-authorisation.jpg',
      alt: 'Advance Authorisation - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'Advance Authorisation application',
          'DGFT filing and documentation',
          'Eligibility guidance',
          'Input requirement assessment',
          'Input-output norm guidance',
          'Export obligation guidance',
          'Licence-related amendments',
          'Compliance support',
          'Redemption / closure assistance',
          'DGFT correspondence support',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Helps eligible exporters reduce the applicable customs-duty burden on imported inputs',
          'Supports cost-effective export production',
          'Helps manufacturers source eligible inputs for export production',
          'Improves export competitiveness',
          'Supports compliance with DGFT requirements',
          'Professional assistance throughout the licensing process',
        ],
      },
      {
        label: 'Suitable For',
        style: 'tags',
        items: [
          'Manufacturers',
          'Merchant exporters',
          'Export-oriented businesses',
          'Businesses importing eligible raw materials or components for export production',
          'Industries manufacturing goods for international markets',
        ],
      },
      {
        label: 'Process',
        style: 'ordered',
        items: [
          'Eligibility and input-output norm assessment',
          'Application preparation and DGFT filing',
          'Licence issuance',
          'Import of eligible inputs',
          'Export production and fulfilment of export obligation',
          'Redemption / closure of the licence',
        ],
      },
    ],
  },
  {
    id: 'export-house-certification',
    title: 'Export House Certification (Status Holder)',
    icon: 'Building2',
    overview:
      'We assist eligible exporters with obtaining Status Holder recognition under the applicable Foreign Trade Policy framework — a mark of consistent, high-volume export performance.',
    image: {
      src: '/images/services/export-house-certification.jpg',
      alt: 'Export House Certification - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'Status Holder application',
          'DGFT recognition',
          'Export performance assessment',
          'Documentation',
          'Star Export House-related guidance',
          'Compliance assistance',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Government recognition',
          'Enhanced exporter credibility',
          'Applicable customs/trade facilitation benefits',
          'Simplified procedures where eligible',
          'Improved international business reputation',
          'Recognition of export performance',
        ],
      },
    ],
  },
  {
    id: 'rosctl',
    title: 'RoSCTL Consulting',
    icon: 'Shirt',
    overview:
      'Rebate of State and Central Taxes and Levies (RoSCTL) is an export incentive mechanism applicable to eligible exports of specified apparel and made-up products, subject to the prevailing scheme rules.',
    image: {
      src: '/images/services/rosctl.jpg',
      alt: 'Rosctl - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'RoSCTL scheme guidance',
          'Eligibility assessment',
          'Documentation',
          'Claim-related assistance',
          'Export incentive guidance',
          'Compliance support',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Rebate of eligible state and central taxes and levies',
          'Helps improve export competitiveness',
          'Supports cost management',
          'Helps exporters utilize applicable government export benefits',
        ],
      },
      {
        label: 'Primarily Relevant To',
        style: 'tags',
        items: [
          'Apparel exporters',
          'Garment manufacturers',
          'Made-ups exporters',
          'Textile exporters',
          'Eligible export businesses',
        ],
      },
    ],
  },
  {
    id: 'fssai-certification',
    title: 'FSSAI Certification & Registration (Central / State)',
    icon: 'UtensilsCrossed',
    overview:
      'We provide assistance with FSSAI registration and licensing for businesses involved in food manufacturing, processing, storage, distribution, and retail.',
    image: {
      src: '/images/services/fssai-certification.jpg',
      alt: 'Fssai Certification - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'FSSAI Registration',
          'FSSAI State Licence',
          'FSSAI Central Licence',
          'Documentation',
          'Application processing',
          'Compliance guidance',
          'Renewal assistance',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Regulatory compliance',
          'Builds customer trust',
          'Supports legal food-business operations',
          'Enhances business credibility',
          'Helps meet applicable food-safety requirements',
        ],
      },
      {
        label: 'Suitable For',
        style: 'tags',
        items: [
          'Food manufacturers',
          'Food processors',
          'Food storage businesses',
          'Distributors',
          'Wholesalers',
          'Food retailers',
          'Food-related exporters',
        ],
      },
    ],
  },
  {
    id: 'rodtep',
    title: 'RoDTEP Consulting',
    icon: 'Percent',
    overview:
      'Remission of Duties and Taxes on Exported Products (RoDTEP) is an export-support mechanism designed to refund eligible embedded duties, taxes, and levies on specified exported products, subject to applicable rules and rates.',
    image: {
      src: '/images/services/rodtep.jpg',
      alt: 'Rodtep - xproimpex',
    },
    blocks: [
      {
        label: 'Covers',
        style: 'ruled',
        items: [
          'RoDTEP scheme guidance',
          'Eligibility assessment',
          'Export incentive consultation',
          'Documentation',
          'Claim-related support',
          'Compliance guidance',
          'Export benefit optimization',
        ],
      },
      {
        label: 'Benefits',
        style: 'marked',
        items: [
          'Supports remission of eligible duties and taxes',
          'Helps improve export competitiveness',
          'Reduces the impact of embedded taxes/levies',
          'Supports better export cost management',
          'Helps exporters utilize applicable government incentives',
        ],
      },
    ],
  },
]

/**
 * Section 12.5 — the compact card's short label is derived MECHANICALLY from the
 * client's own title. No new descriptive copy is written.
 * Rule: the clause before the first parenthesis or '&'/'/' separator.
 */
export function deriveShortLabel(title: string): string | null {
  const beforeParen = title.split('(')[0] ?? title
  const clause = beforeParen.split(/\s[&/]\s/)[0] ?? beforeParen
  const label = clause.trim().replace(/[,–-]$/, '')
  return label && label !== title ? label : null
}
