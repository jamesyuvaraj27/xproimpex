# xproimpex — Website Implementation Plan

**Document type:** Implementation plan (planning only — no code)
**Prepared for:** xproimpex — Import Export & DGFT Consultants
**Domain:** www.xproimpex.com
**Build type:** Static informational website (no database, no CMS, no auth, no backend)
**Version:** 1.0
**Status:** Awaiting client sign-off on Section 2 (Content Gaps) and Section 5.1 (Architecture Decision)

---

## Table of Contents

1. Project Overview
2. Content Gaps — Items Requiring Client Input
3. Business Goals
4. Scope
5. Site Architecture
6. Information Architecture
7. User Journey
8. Design Strategy
9. Design System
10. Page Structure
11. Section-by-Section Breakdown
12. Service Architecture
13. Responsive Strategy
14. SEO Structure Plan
15. Performance Plan
16. Accessibility Plan
17. Image Requirements
18. Asset Requirements
19. Development Phases
20. Implementation Roadmap
21. Final Build Checklist

---

# 1. Project Overview

## 1.1 Business Identity

| Field | Value |
|---|---|
| Company name | xproimpex |
| Domain | www.xproimpex.com |
| Business category | Import Export Consultants · DGFT Consultants · Trade Compliance Consultants |
| Experience | 18 Years |
| Locations | Chennai, Coimbatore |
| Service coverage | All Over India |
| Working hours | Monday – Saturday, 9:00 AM – 8:00 PM |

## 1.2 Contact Data (canonical — single source of truth)

All contact values below appear in multiple places across the site (header, hero, service CTAs, CTA section, footer). They must be stored once in a single site-configuration data file and referenced everywhere else. Never hardcode a phone number twice.

| Channel | Value | Link behaviour |
|---|---|---|
| Phone 1 | 9962637076 | `tel:` link |
| Phone 2 | 9841450111 | `tel:` link |
| WhatsApp | +91 9962637076 | `wa.me` deep link, opens in new tab |
| Email | xproimpex14@gmail.com | `mailto:` link |
| Instagram | nalinimanickkam_15 | External profile link, new tab |
| LinkedIn | https://www.linkedin.com/in/senthamizh-selvi-b8140630a | External profile link, new tab |
| Map | https://maps.app.goo.gl/1DfQbR5188uWMRxP9 | Embedded map + "Open in Google Maps" link |

**Chennai Office**
9/1, Koil St, Choolaimedu, Chennai – 600094

**Coimbatore Office**
No.7, Rice Mill Road, Kuniamuthur, Coimbatore – 641008

## 1.3 Technology Direction

| Layer | Decision |
|---|---|
| Framework | React + Vite + TypeScript |
| Styling | Tailwind CSS |
| Component primitives | shadcn/ui (accordion, sheet/drawer for mobile nav, button) |
| Build output | Fully static — pre-rendered HTML, no runtime data fetching |
| Hosting | Vercel (static deployment) |
| Backend | None. No API routes, no server functions, no database |
| Forms | None (see 4.3) |
| Analytics | Deferred — decision required (see Section 2) |

---

# 2. Content Gaps — Items Requiring Client Input

The following items were referenced in the brief but no content was supplied. Per project rules, no content has been invented. Each item below is blocked until the client provides copy or a decision.

| # | Item | Location | Status |
|---|---|---|---|
| 1 | Welcome section body copy | Home § Welcome | **Content not provided by client.** Only the heading ("Welcome to xproimpex") and subheading ("Import & Export Consultants") were supplied. |
| 2 | About Us — "Our Story" body copy | Home § About Us | **Content not provided by client.** Heading, subheading, experience figure, specialization list and trust indicators were supplied; the narrative paragraph was not. |
| 3 | Vision statement text | Home § Our Vision | **Content not provided by client.** The brief instructs "Include exact supplied vision information" but no vision text was supplied. |
| 4 | FAQ 1 answer — "What is IEC registration?" | Home § FAQ | **Content not provided by client.** |
| 5 | FAQ 2 answer — "Do you provide DGFT services in Kerala?" | Home § FAQ | **Content not provided by client.** |
| 6 | FAQ 3 answer — "How long does IEC registration take?" | Home § FAQ | **Content not provided by client.** |
| 7 | Hero image | Home § Hero | **Content not provided by client.** Asset required. |
| 8 | 14 × service images | Home § Services | **Content not provided by client.** Assets required. |
| 9 | About / Why Choose Us supporting image | Home § About, § Why Choose Us | **Content not provided by client.** Asset required. |
| 10 | Favicon / brand mark file | Global | **Content not provided by client.** Company name is used instead of a logo per brief; a favicon asset is still required. |
| 11 | Footer credit line — "Designed by: Our service" | Footer | Ambiguous. The exact credit text and destination URL must be confirmed by the client. |
| 12 | Meta description / SEO copy | All | **Content not provided by client.** Structure is planned in Section 14; copy must be client-authored. |
| 13 | Google Maps embed reference for **each** office | Home § Location | Only one map short-link was supplied. Short links cannot be embedded directly. Full embed reference (or Place ID) is required for Chennai and for Coimbatore. |
| 14 | Instagram profile URL | Footer | Handle supplied; full URL to be confirmed by client before linking. |
| 15 | Analytics preference | Global | Decision required: no analytics, or a cookie-free analytics tool. Affects whether a cookie/privacy notice is needed. |
| 16 | Services list mismatch | Home § Services | The "Our Services" list names 12 services. The detailed brief supplies 14 (adds **EPC / RCMC Registration** and **Digital Signature Certificate**). Client must confirm which set the services grid displays. This plan assumes **14** and flags it. |

> **Handling in build:** Any unsupplied text block is rendered as a clearly-marked placeholder in the staging build reading `Content not provided by client.` These placeholders are tracked in a single content file so the client can fill them in one pass. **No section ships to production containing a placeholder** — either content arrives, or the section is removed with client approval.

---

# 3. Business Goals

## 3.1 Primary Goal

Convert a visitor with an import/export compliance need into a **phone call or WhatsApp message** within the same session. There is no form, no lead database and no funnel — the site's only measurable conversion is an outbound contact action.

## 3.2 Supporting Goals

| Goal | How the site serves it |
|---|---|
| Establish credibility | 18+ years experience, two physical offices with full addresses, All-India coverage, working hours, named professional identity via LinkedIn |
| Communicate service breadth | One consultancy → complete Import-Export, DGFT & Trade Compliance solutions, expressed as a full visible service inventory rather than a shortened teaser list |
| Answer the qualifying question fast | A visitor arrives searching for one specific licence (IEC, EPCG, RoDTEP, AEO). They must reach that specific service block in under two interactions |
| Local discoverability | Chennai and Coimbatore presence expressed with structured location data for local search |
| Reduce time-wasting enquiries | Working hours, coverage area and service scope stated plainly and early |

## 3.3 Explicit Non-Goals

- Not a lead-capture platform (no forms, no CRM)
- Not a content marketing site (no blog, no articles)
- Not a self-service portal (no application tracking, no logins)
- Not an e-commerce or payment surface

---

# 4. Scope

## 4.1 In Scope

- One static website, one primary page (Home), with all sections listed in the brief
- 14 service content blocks with anchor-linked navigation
- Fully responsive layout (mobile-first)
- Click-to-call, click-to-WhatsApp, click-to-email interactions
- Embedded map(s) for the location section
- On-page SEO structure, structured data, sitemap, robots directives
- Accessibility to WCAG 2.1 AA (with the WCAG 2.2 AA additions listed in Section 16)
- Deployment, custom-domain configuration, README and handover document

## 4.2 Out of Scope

Per Critical Rule #4 the following are explicitly excluded and must not be introduced during build:

Database · Admin panel · CMS · Login / user accounts · Dashboard · Authentication · Payment gateway · Booking system · Backend APIs · Blog · Testimonials · Team pages · Portfolio · Client logos · Awards · Statistics not supplied by the client · AI-generated marketing copy

## 4.3 Contact Form — Deliberate Exclusion

A contact form requires a server or a third-party endpoint. Rule #4 prohibits backend APIs. Therefore **no contact form is planned.** All enquiry actions resolve to `tel:`, `wa.me`, or `mailto:`.

This is the correct choice for the audience regardless of the rule: small-business owners in Chennai and Coimbatore on mobile convert far better on a tap-to-call than on a form.

If the client later requires a form, that is a scope change and needs a separate decision — it would introduce a third-party form endpoint and a privacy notice.

## 4.4 Content Authority

All business copy is client-authored. The build team writes zero business content. The only text the build team authors is functional interface text — navigation labels, button labels, image alt attributes, and accessibility labels — all derived directly from client-supplied service titles and submitted for approval.

---

# 5. Site Architecture

## 5.1 Architecture Decision — Single Page vs Service Pages

The brief lists **Home Page only** under "Website Structure" and Final Restrictions state "Do not add pages not listed." However, each service specifies a "CTA / Internal service link," which normally implies a service detail page.

Two options are documented. The build proceeds on **Option A** unless the client instructs otherwise.

### Option A — Single-page architecture *(recommended, default)*

All 14 services render in full on the Home page as detailed content blocks. The "internal service link" resolves to an in-page anchor from the compact service grid to the corresponding detailed block.

- Complies with "do not add pages not listed"
- Zero navigation dead-ends; nothing is more than one tap away
- Matches how the audience actually browses on mobile — scroll, not click-through
- Trade-off: a long page. Mitigated by anchor navigation, lazy-loaded images, and a sticky service jump bar (see 11.4)
- Trade-off at scale: 14 services is the practical ceiling for this pattern. Beyond ~18 services this architecture would need to be split

### Option B — Home + 14 service detail pages *(requires explicit client approval)*

Home carries a compact service grid; each card links to a dedicated route. Better for per-service SEO targeting and shorter pages. Adds 14 pages not listed in the brief, plus breadcrumb navigation and 14 sets of meta tags — all of which need client-authored copy that does not currently exist.

> **Decision required from client.** Everything downstream in this document is written for Option A, with Option B deltas noted where they matter.

## 5.2 Route Map (Option A)

| Route | Purpose | Indexable |
|---|---|---|
| `/` | Home — all sections | Yes |
| `/404` | Not-found fallback | No |
| `/sitemap.xml` | Sitemap | n/a |
| `/robots.txt` | Crawl directives | n/a |

No other routes. No dynamic routes. No query-parameter state.

## 5.3 Anchor Map

Stable, human-readable anchor IDs. These become part of the site's public URL surface (shareable and linkable from Google Business Profile posts and WhatsApp), so they must not change after launch.

| Anchor | Section |
|---|---|
| `#home` | Hero |
| `#welcome` | Welcome |
| `#services` | Services overview |
| `#iec-registration` | Service 1 |
| `#aeo-certification` | Service 2 |
| `#dgft-consulting` | Service 3 |
| `#icegate-registration` | Service 4 |
| `#epc-rcmc-registration` | Service 5 |
| `#digital-signature-certificate` | Service 6 |
| `#epcg-scheme` | Service 7 |
| `#iso-certification` | Service 8 |
| `#certificate-of-origin` | Service 9 |
| `#advance-authorisation` | Service 10 |
| `#export-house-certification` | Service 11 |
| `#rosctl` | Service 12 |
| `#fssai-certification` | Service 13 |
| `#rodtep` | Service 14 |
| `#about` | About Us |
| `#vision` | Our Vision |
| `#why-choose-us` | Why Choose Us |
| `#faq` | FAQ |
| `#locations` | Location |
| `#contact` | CTA section |

---

# 6. Information Architecture

## 6.1 Content Hierarchy

```
xproimpex (site)
│
├── IDENTITY LAYER          who this is, what they do, where they are
│   ├── Hero                category + coverage + tagline + call action
│   ├── Welcome             company introduction
│   └── About Us            18+ years, specializations, trust indicators
│
├── CAPABILITY LAYER        what can be done for the visitor
│   ├── Services overview   positioning statement + inventory of 14
│   └── Service blocks ×14  overview → covers → benefits → suitability → CTA
│
├── PERSUASION LAYER        why this consultancy
│   ├── Vision
│   └── Why Choose Us       7 differentiators
│
├── RESOLUTION LAYER        remove the last objection, then convert
│   ├── FAQ                 3 questions
│   ├── Locations           2 offices + All-India coverage + map
│   └── CTA                 3 entry points
│
└── PERSISTENT LAYER        available from anywhere
    ├── Header              wordmark + nav + call action
    ├── Mobile action bar   call + WhatsApp
    └── Footer              full contact, hours, both addresses, socials
```

## 6.2 Content Priority by Viewport

Priority determines what appears above the fold and what order sections stack on mobile.

| Priority | Mobile (first screen) | Desktop (first screen) |
|---|---|---|
| 1 | Heading — service category + coverage | Heading |
| 2 | Tagline | Tagline |
| 3 | Call button | Call button + WhatsApp button |
| 4 | WhatsApp button | Hero image |
| 5 | (Hero image below the fold) | Locations + coverage line |

The phone number is a first-class content element on mobile, not a decoration. It appears in the header, in the hero, and in the persistent bottom action bar.

## 6.3 Navigation Taxonomy

Primary navigation carries **six** items maximum. The full 14-service inventory is not exposed in the header — that would overload the nav and harm discoverability. Services are reached via one nav item that scrolls to the grid.

| Nav item | Target |
|---|---|
| Home | `#home` |
| Services | `#services` |
| About | `#about` |
| Why Us | `#why-choose-us` |
| FAQ | `#faq` |
| Contact | `#contact` |

Plus one persistent call action, styled as a button, sitting outside the nav list.

---

# 7. User Journey

## 7.1 Primary Persona — Specific-Licence Seeker

A manufacturer or exporter searching for one named thing: "EPCG consultant Chennai," "RoDTEP claim help," "IEC registration."

| Step | Visitor state | Site response | Success signal |
|---|---|---|---|
| 1 | Lands on Home, often mid-page from a search result anchor | Section is self-contained: title, overview, benefits, CTA all visible without scrolling back up | Visitor does not bounce within 5s |
| 2 | Confirms this consultancy handles that specific scheme | Service block names the scheme explicitly in an H3 | Visitor reads the covers/benefits list |
| 3 | Checks legitimacy | Sticky header shows company name; 18+ years and two office addresses are one scroll away | Visitor scrolls to About or Locations |
| 4 | Decides to contact | Per-service CTA is adjacent to the content just read; persistent action bar is always present on mobile | Tap on `tel:` or `wa.me` |

**Design consequence:** every service block must be independently complete. A visitor may never see the hero.

## 7.2 Secondary Persona — Comparison Browser

A new exporter who does not yet know which licence they need.

| Step | Site response |
|---|---|
| 1 | Hero states the category and All-India coverage plainly |
| 2 | Services overview presents the full inventory of 14 at once — the breadth *is* the pitch |
| 3 | Positioning line ("One consultancy → Complete Import-Export, DGFT & Trade Compliance Solutions") frames the breadth |
| 4 | Why Choose Us answers "why not the consultant down the road" |
| 5 | FAQ removes the last uncertainty |
| 6 | CTA section offers three labelled entry points |

## 7.3 Tertiary Persona — Local Verifier

Someone who already has the phone number and is checking the business is real before calling.

Needs, in order: office addresses → working hours → map → named person (LinkedIn). All four are in the Locations section and Footer. This journey must work with **zero scrolling past the footer** — meaning the footer is a content destination, not an afterthought.

## 7.4 Journey Anti-Patterns to Avoid

- Requiring the visitor to return to the top to find contact details
- Hiding phone numbers behind an icon with no visible number on desktop
- Accordions that collapse service content the visitor arrived to read via a search anchor
- A hero image that pushes the call action below the fold on a 360 px viewport

---

# 8. Design Strategy

## 8.1 Reference Handling

The reference site (maxproexim.com) is used **only** to understand what this industry's audience expects to find — service inventories, licence terminology, an offices-and-hours block. Nothing is copied: not layout, not palette, not type, not section rhythm. The visual direction below is derived from the subject matter, not from the reference.

## 8.2 Design Concept — "Clearance"

The visual language is drawn from the physical world of trade compliance: manifests, ruled ledgers, customs stamps, port and dock signage, harbour water. Not from generic corporate-consultancy stock aesthetics, and not from the current default look of AI-generated business sites.

Three ideas carry the design:

**1. The ruled document.**
Trade compliance runs on structured paper. Section boundaries and list structures are expressed with fine horizontal rules and disciplined left alignment rather than with a wall of identical drop-shadowed cards. Content that is genuinely tabular (office details, working hours, licence types) is set as ruled rows, because that is what it is.

**2. The stamp.**
A single violet accent — the colour of a government office rubber stamp — is the only saturated colour in the system. It is used sparingly and always to mean "verified / active / this one": the active nav indicator, the accent rule under a section heading, the trust indicators, the "18+ Years" mark. It never appears as decoration.

**3. Harbour depth.**
The primary brand colour is a deep harbour teal — maritime without being a literal shipping cliché, and distinctly not the corporate-blue default that every competitor in this sector uses.

## 8.3 What This Design Deliberately Avoids

These are current defaults that would make the site read as templated. Each is excluded by decision:

| Avoided | Why |
|---|---|
| Warm cream background with terracotta accent | The most common AI-generated design signature |
| Near-black canvas with one acid accent | Wrong register for a compliance consultancy; harms readability for an older mobile audience |
| Every content block as an identical rounded card with the same soft grey shadow | Flattens hierarchy; 14 identical service cards would be indistinguishable |
| Tracked-out ALL-CAPS eyebrow labels above every heading | Template chrome. Section context comes from the heading itself |
| Meta strings joined with middle dots | Same reason |
| Arrow glyphs appended to every link and button label | Buttons state the action; the action is the label |
| Fade-and-slide-up entrance animation on every section | Reads as generated; also fights the anchor-jump navigation this site depends on |
| One word of the heading coloured or italicised for emphasis | Default trick, adds nothing |
| Numbered markers (01 / 02 / 03) on non-sequential content | Services are not a sequence. Numbering is permitted **only** on Why Choose Us, where the client supplied an explicit numbered list |
| Stock imagery of handshakes, globes, or generic shipping containers | Requested asset guidance is in Section 17 |

## 8.4 Where Boldness Is Spent

One element carries the design's boldness: **the hero type lockup.** The heading is set large, tight and left-aligned against a hairline rule with the coverage and locations stacked beneath it in a small ruled block that reads like a manifest header. Everything else in the design — cards, lists, sections — stays quiet and disciplined.

This is the single memorable moment. No other section competes with it.

## 8.5 Tone

Professional, factual, unembellished. The client's own copy is already written in a measured compliance-advisory register ("subject to applicable rules," "where applicable"). The visual design matches that register: precise, legible, unexcited. Nothing in the design should promise more than the copy does.

---

# 9. Design System

## 9.1 Colour Strategy

A colour **system** is proposed. No branding content, logo, or brand copy is generated.

### Core palette

| Token | Value | Role |
|---|---|---|
| `color.ink.900` | `#08222B` | Primary text, footer canvas |
| `color.ink.600` | `#3D555E` | Secondary text, captions |
| `color.brine.700` | `#125563` | Primary brand — headings, primary buttons, links |
| `color.brine.500` | `#1B7182` | Hover / active state of primary |
| `color.brine.100` | `#DCE9EA` | Tinted section fills, quiet surfaces |
| `color.stamp.600` | `#6A3F8F` | Accent — active indicators, section accent rules, trust marks |
| `color.stamp.100` | `#EDE6F5` | Accent tint (used at most twice per page) |
| `color.paper.50` | `#F4F6F3` | Page canvas — cool neutral, not cream |
| `color.paper.0` | `#FFFFFF` | Elevated surfaces, cards |
| `color.rule.300` | `#C9D2CF` | Hairlines, dividers, table rules, card borders |

### Semantic tokens

| Token | Value | Role |
|---|---|---|
| `color.success` | `#1E7A4B` | Confirmation states |
| `color.danger` | `#B3261E` | Error states |
| `color.focus` | `#6A3F8F` | Focus ring (accent, for visibility against both teal and paper) |
| `color.whatsapp` | `#25D366` | WhatsApp button only — brand-mandated, never reused |

### Contrast obligations

| Pair | Requirement |
|---|---|
| `ink.900` on `paper.50` | ≥ 4.5:1 — body text |
| `brine.700` on `paper.50` | ≥ 4.5:1 — headings and links |
| `paper.0` on `brine.700` | ≥ 4.5:1 — primary button label |
| `stamp.600` on `paper.0` | ≥ 4.5:1 — accent text |
| `rule.300` against adjacent surface | ≥ 3:1 where the rule carries meaning (table separators, card boundaries); decorative hairlines exempt |
| Focus ring against both adjacent colours | ≥ 3:1 |

Every pair is verified with a contrast checker during build, not assumed. Colour is never the sole carrier of meaning — active nav state uses the accent **plus** a weight change and an underline rule.

### Colour distribution rule

Roughly: 70% paper/white, 20% brine (headings, buttons, footer), 10% ink, and under 3% stamp accent. If the accent appears more than six times on the page, it has stopped meaning anything.

### Dark mode

Not planned. A single light theme. Adding a theme toggle to a static brochure site adds surface area and testing burden with no audience benefit. If requested later it is a scope change.

## 9.2 Typography Strategy

Two families, clearly distinct in role and in skeleton.

| Role | Family | Rationale |
|---|---|---|
| Display / headings / UI labels / numerals | **Archivo** (variable) | A grotesque with slightly condensed proportions and strong tabular figures. Reads like port and dock signage; keeps long licence names ("Advance Authorisation Licence") compact on a 360 px screen. Excellent Latin coverage and weight range |
| Body / long-form | **Source Serif 4** (variable) | A documentation serif. Signals legal/advisory register, gives warmth against the cool palette, and reads comfortably at 17–18 px on mobile |

**Numerals:** phone numbers, PIN codes, ISO standard numbers and the "18+" figure are set in Archivo with **tabular figures** so digits align in the footer's ruled contact rows.

**Alternate pairings** if the client rejects the primary (documented for the decision record, not for mixing):

| Option | Display | Body |
|---|---|---|
| B — more geometric, more modern | Bricolage Grotesque | IBM Plex Sans |
| C — conservative, safest | Manrope | Lora |

Do not mix families across options.

### Type scale

Based on a 1.250 (major third) ratio at desktop, compressed to 1.200 at mobile so headings do not overwhelm a small viewport.

| Token | Mobile | Desktop | Family / weight | Use |
|---|---|---|---|---|
| `type.display` | 34 / 1.1 | 60 / 1.05 | Archivo 700, tracking −0.02em | Hero heading (H1) |
| `type.h2` | 26 / 1.2 | 40 / 1.15 | Archivo 700, tracking −0.015em | Section headings |
| `type.h3` | 20 / 1.25 | 26 / 1.2 | Archivo 600 | Service titles |
| `type.h4` | 17 / 1.3 | 19 / 1.3 | Archivo 600 | Sub-blocks (Covers, Benefits, Suitable For) |
| `type.lead` | 18 / 1.6 | 21 / 1.55 | Source Serif 4 400 | Tagline, section intros |
| `type.body` | 17 / 1.65 | 18 / 1.6 | Source Serif 4 400 | Paragraphs, list items |
| `type.small` | 15 / 1.5 | 15 / 1.5 | Archivo 400 | Captions, footer meta, hours |
| `type.button` | 16 / 1 | 16 / 1 | Archivo 600 | Buttons, nav items |

**Rules**
- Minimum body size 17 px on mobile. The audience skews 35+ and mobile-first; 14 px body text is a failure, not a style
- Line length capped at 68–72 characters for serif body copy
- Sentence case everywhere. No ALL-CAPS labels
- Heading levels are sequential — H1 once, then H2 per section, H3 per service, H4 per sub-block. Never chosen for size
- Text must survive 200% browser zoom and OS text scaling without clipping or overlap

## 9.3 Layout System

### Grid

| Breakpoint | Columns | Gutter | Outer margin | Max content width |
|---|---|---|---|---|
| ≥ 1280 px | 12 | 32 px | auto | 1200 px |
| 1024–1279 px | 12 | 24 px | 48 px | fluid |
| 768–1023 px | 8 | 24 px | 32 px | fluid |
| 640–767 px | 4 | 20 px | 24 px | fluid |
| < 640 px | 4 | 16 px | 20 px | fluid |

Long-form reading columns are capped at **72ch** regardless of container width — no edge-to-edge paragraphs on tablet or desktop.

### Section rhythm

| Token | Mobile | Desktop | Use |
|---|---|---|---|
| `space.section` | 64 px | 112 px | Between major sections |
| `space.block` | 40 px | 64 px | Between sub-blocks within a section |
| `space.stack` | 24 px | 32 px | Between related elements |
| `space.tight` | 12 px | 16 px | Label to value, icon to text |

### Spacing scale

4 px base. Permitted values only: **4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112**. No arbitrary values. Vertical rhythm tiers are used by hierarchy, never picked by eye.

### Radius and elevation

| Token | Value | Use |
|---|---|---|
| `radius.sm` | 4 px | Inputs, tags, small controls |
| `radius.md` | 8 px | Cards, images |
| `radius.lg` | 12 px | Hero image, map container |
| `elevation.0` | none, 1 px `rule.300` border | Default for all cards — the system uses borders, not shadows |
| `elevation.1` | subtle shadow | Reserved for the mobile action bar and the mobile nav drawer only |

**Radius is not uniform across hierarchy** — a large hero image and a small tag do not share a radius. Shadows are used almost nowhere; separation comes from rules and background tint.

## 9.4 Icon Strategy

- **Library:** Lucide (single family, outline only, 1.5 px stroke). Consistent stroke weight within a layer is mandatory
- **No emoji as icons.** Ever
- **No filled/outline mixing** at the same hierarchy level
- **Sizes:** `icon.sm` 16 px, `icon.md` 20 px, `icon.lg` 24 px. Nothing between
- **Service icons:** each of the 14 services gets one icon selected for genuine semantic fit (document, shield-check, ship, file-signature, factory, etc.). If no honest match exists for a service, that service uses the shared default rather than a forced metaphor. Icons support the title — they never replace it
- **Accessibility:** decorative icons beside visible text are hidden from the accessibility tree. Icon-only controls (mobile menu toggle, accordion chevron, social links) carry an accessible name and expose expanded/collapsed state
- **Alignment:** icons align to the text baseline with consistent padding; icon contrast ≥ 3:1 where the icon carries meaning
- **Social icons:** official brand marks for WhatsApp, Instagram and LinkedIn, correct proportions, not recoloured, with visible or accessible text labels

## 9.5 Imagery Strategy

**Direction.** Real, specific, unstaged. Documents, offices, port and cargo infrastructure, warehouse and manufacturing settings relevant to the client's actual customer base (textile, apparel, food processing, engineering goods).

**Excluded:** handshake stock photos, spinning globes, generic blue-toned "business people at a table," AI-generated composites, any image containing readable text that is not the client's own.

**Treatment.** A single consistent processing recipe across all images so 15 unrelated photographs read as one set: slightly reduced saturation, cool tonal bias to sit with the palette, no filters that differ between images. Every image sits inside `radius.md` (services) or `radius.lg` (hero, map).

**Cropping.** Fixed aspect ratios per slot (Section 17) so the space is reserved before load and the layout never shifts.

**Ownership.** All imagery is client-supplied or client-licensed. The build team does not source stock imagery without written approval, and does not generate imagery.

## 9.6 Component Inventory

| Component | Variants | Notes |
|---|---|---|
| Button | Primary (call), Secondary (WhatsApp), Tertiary (text link) | Min height 48 px, min touch area 48×48, 8 px minimum gap between adjacent targets |
| Wordmark | Header, Footer | Company name as type. Lowercase, Archivo 700, tight tracking. Not an image |
| Header | Desktop, Mobile | Sticky. Height 72 px desktop, 60 px mobile |
| Mobile nav | Drawer | Full-height sheet, focus trapped, escape and close affordance, restores focus on close |
| Service card (compact) | Default | Icon + title + one-line label + anchor link. Used in the overview grid |
| Service block (detailed) | Left-image, Right-image (alternating) | Full service content. Used 14 times |
| List — Covers | Ruled | Hairline-separated rows, no bullet glyph |
| List — Benefits | Marked | Check icon + text |
| Accordion | FAQ | One item open at a time permitted; all closed permitted; content anchor-linkable |
| Info row | Ruled | Label + value pair. Used for addresses, hours, phone numbers |
| Map embed | Default | Lazy, with a visible fallback link |
| Mobile action bar | Fixed bottom | Call + WhatsApp. Safe-area aware |
| Footer | Default | Four-region layout |
| Skip link | Default | First focusable element |

---

# 10. Page Structure

## 10.1 Home — Section Order

| # | Section | Anchor | Priority |
|---|---|---|---|
| 0 | Skip link (visually hidden until focused) | — | Accessibility |
| 1 | Header — wordmark, nav, call action | — | Persistent |
| 2 | Hero | `#home` | Critical |
| 3 | Welcome | `#welcome` | High |
| 4 | Services overview — intro + 14-card grid | `#services` | Critical |
| 5 | Service blocks ×14 | per-service | Critical |
| 6 | About Us | `#about` | High |
| 7 | Our Vision | `#vision` | Medium |
| 8 | Why Choose Us | `#why-choose-us` | High |
| 9 | FAQ | `#faq` | Medium |
| 10 | Location | `#locations` | High |
| 11 | CTA | `#contact` | Critical |
| 12 | Footer | — | Persistent |
| 13 | Mobile action bar (mobile only) | — | Persistent |

## 10.2 Desktop Wireframe — Overview

```
┌──────────────────────────────────────────────────────────┐
│ xproimpex      Home Services About Why Us FAQ Contact  [Call] │  sticky
├──────────────────────────────────────────────────────────┤
│                                          ┌─────────────┐ │
│  Import Export & DGFT                    │             │ │
│  Consultants in All Over India           │  hero image │ │
│  ────────────────────────                │             │ │
│  Your success story in exports           │             │ │
│  starts with xproimpex                   │             │ │
│                                          │             │ │
│  [ Call 9962637076 ]  [ WhatsApp ]       └─────────────┘ │
│  ──────────────────────────────                          │
│  Chennai · Coimbatore    Mon–Sat 9:00 AM – 8:00 PM       │
├──────────────────────────────────────────────────────────┤
│  Welcome to xproimpex                                     │
│  Import & Export Consultants                              │
│  [ body copy — content not provided by client ]           │
├──────────────────────────────────────────────────────────┤
│  Our Services                                             │
│  [ client intro paragraph, capped at 72ch ]               │
│  One consultancy → Complete solutions                     │
│                                                           │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐   14 compact cards,         │
│  ├────┤ ├────┤ ├────┤ ├────┤   4 across at ≥1280         │
│  └────┘ └────┘ └────┘ └────┘   each anchors to its block │
├──────────────────────────────────────────────────────────┤
│  ┌──────────┐   IEC (Import Export Code) Registration     │
│  │  image   │   Certificate                    ← service 1│
│  └──────────┘   overview / covers / benefits / [ CTA ]    │
│                                                           │
│  AEO Certificate (T1, T2, T3 & LO)   ┌──────────┐  ← s.2  │
│  overview / benefits / [ CTA ]       │  image   │ alternate│
│                                      └──────────┘         │
│  … 12 more, alternating sides …                           │
├──────────────────────────────────────────────────────────┤
│  About Us / Our Story    │  18+ Years                     │
│  [ not provided ]        │  specialization list           │
│                          │  3 trust indicators            │
│                          │  [ Learn More ]                │
├──────────────────────────────────────────────────────────┤
│  Our Vision  — [ content not provided by client ]         │
├──────────────────────────────────────────────────────────┤
│  Why Choose Us                                            │
│  Complete Import Export & DGFT Solutions Under One Roof.  │
│  1 ─────────  2 ─────────  3 ─────────                    │
│  4 ─────────  5 ─────────  6 ─────────   7 ─────────      │
├──────────────────────────────────────────────────────────┤
│  FAQ    ▸ What is IEC registration?                       │
│         ▸ Do you provide DGFT services in Kerala?         │
│         ▸ How long does IEC registration take?            │
├──────────────────────────────────────────────────────────┤
│  Import Export Consultants Serving All Over India         │
│  ┌──────────────┐  Chennai office — address, hours        │
│  │     map      │  Coimbatore office — address, hours     │
│  └──────────────┘  [ Open in Google Maps ]                │
├──────────────────────────────────────────────────────────┤
│  [ IEC Registration Services ] [ DGFT Consultant ]        │
│  [ Contact Import Export Consultant ]                     │
├──────────────────────────────────────────────────────────┤
│  FOOTER  wordmark │ contact │ Chennai │ Coimbatore        │
│          hours · socials · copyright · designed by        │
└──────────────────────────────────────────────────────────┘
```

## 10.3 Mobile Wireframe — Hero and Services

```
┌─────────────────────┐
│ xproimpex        ☰  │ sticky, 60px
├─────────────────────┤
│ Import Export &     │
│ DGFT Consultants    │
│ in All Over India   │
│ ─────────           │
│ Your success story  │
│ in exports starts   │
│ with xproimpex      │
│                     │
│ [ Call 9962637076 ] │ full width, 48px
│ [ WhatsApp        ] │ full width, 48px
│                     │
│ ┌─────────────────┐ │
│ │   hero image    │ │ 4:3, below fold
│ └─────────────────┘ │
│ Chennai             │
│ Coimbatore          │
│ Mon–Sat 9AM–8PM     │
├─────────────────────┤
│ Our Services        │
│ [intro]             │
│ ┌────────┐┌───────┐ │ 2 across ≥400px
│ │  IEC   ││  AEO  │ │ 1 across <400px
│ └────────┘└───────┘ │
│ … 14 total …        │
├─────────────────────┤
│         ⋮           │
├─────────────────────┤
│ [ Call ] [WhatsApp] │ fixed bottom bar
└─────────────────────┘   safe-area padded
```

---

# 11. Section-by-Section Breakdown

> Every content string below is client-supplied and reproduced exactly. No text is rewritten, expanded, shortened or paraphrased.

## 11.1 Header

**Contents**
- Wordmark: `xproimpex` (company name as type — no logo, per brief)
- Nav: Home · Services · About · Why Us · FAQ · Contact
- Call action: `9962637076`

**Behaviour**
- Sticky at all breakpoints. Background is opaque `paper.0` with a bottom hairline — not translucent, so text behind it never bleeds through
- Active section is indicated by accent colour **plus** a weight change **plus** an underline rule — not colour alone
- Anchor jumps apply a scroll offset equal to header height so the target heading is never hidden beneath the sticky bar
- Below 1024 px the nav collapses into a drawer. The call action stays visible in the bar — it does not go into the drawer
- Nav placement and content are identical everywhere. It does not change by scroll position beyond the active indicator

**Accessibility:** the drawer traps focus, closes on Escape, has a visible close control, and returns focus to the toggle. The toggle exposes its expanded state.

## 11.2 Hero — `#home`

**Content (exact)**

| Element | Text |
|---|---|
| H1 | Import Export & DGFT Consultants in All Over India |
| Tagline | Your success story in exports starts with xproimpex |
| Primary CTA | 9962637076 |

**Layout**
- Desktop: asymmetric split — 7 columns text, 5 columns image. Text left-aligned, image bleeds to the right container edge
- Below the tagline: a hairline rule, then a small two-part ruled block — locations stacked, working hours beside them. This reads as a manifest header and is the design's one signature moment
- Mobile: single column. Heading → tagline → call → WhatsApp → image → locations/hours block. The image sits **below** the call actions so conversion is never pushed off-screen

**Visual hierarchy:** H1 at `type.display` is the largest element on the page by a wide margin. Nothing else competes.

**Image placement:** right column desktop, below CTA on mobile. Fixed 4:3 ratio with reserved space. Loaded eagerly with high fetch priority — it is the LCP element on desktop.

**CTA placement:** primary call button first, WhatsApp secondary alongside (desktop) or stacked (mobile). Both ≥ 48 px tall, 8 px minimum gap.

**Motion:** one orchestrated reveal on page load — heading, rule, tagline, actions in sequence, under 500 ms total. This is the **only** non-user-triggered animation on the entire site. Fully disabled under reduced-motion preference.

## 11.3 Welcome — `#welcome`

| Element | Text |
|---|---|
| H2 | Welcome to xproimpex |
| Subheading | Import & Export Consultants |
| Body | **Content not provided by client.** |

**Layout:** centred, narrow measure (max 60ch), generous vertical space, tinted `brine.100` background to separate it from hero and services. Deliberately quiet — this is a breathing section, not a feature section.

**If body copy is not supplied:** the section reduces to heading + subheading only. It must not be padded with generated text.

## 11.4 Services Overview — `#services`

**Content (exact)**

| Element | Text |
|---|---|
| H2 | Our Services |
| Intro | xproimpex provides professional Import-Export, DGFT, Customs, Certification, and Trade Compliance consultancy services to help businesses manage their international trade requirements efficiently. |
| Positioning | One consultancy → Complete Import-Export, DGFT & Trade Compliance Solutions. |

**Card grid**

14 compact cards (pending the client decision noted in Section 2, item 16).

| Breakpoint | Columns |
|---|---|
| ≥ 1280 px | 4 |
| 1024–1279 px | 3 |
| 640–1023 px | 2 |
| < 640 px | 2, dropping to 1 below 400 px |

**Card structure**
```
┌──────────────────────┐
│ ◇ icon               │  icon.md, stamp accent
│                      │
│ Service Title        │  Archivo 600, 2-line max
│                      │
│ short label          │  small, ink.600
│ ────────────         │  hairline
│ View details         │  anchor link
└──────────────────────┘
```

- Cards are equal height per row, bordered with `rule.300`, no shadow
- The whole card is the click target (≥ 48 px tall), with the link text as the accessible name
- Hover changes border colour and background tint only — no transform, no lift, no layout shift
- Card order matches the numbered order in the brief

**Positioning line placement:** directly beneath the grid, set at `type.lead` with an accent rule above it, so it acts as the closing statement on the inventory rather than an intro nobody reads.

**Sticky service jump bar (desktop ≥ 1024 px only):** once the visitor scrolls past the grid into the detailed blocks, a slim horizontal bar of service names becomes available for lateral movement between services. It is keyboard reachable, has a visible current-item state, and is suppressed on mobile where it would consume too much viewport. This is an optional Phase 3 enhancement — the page must be fully usable without it.

## 11.5 Service Blocks ×14 — per-service anchors

See **Section 12** for the full content model, per-service block map, and card/visual specification.

## 11.6 About Us — `#about`

**Content (exact)**

| Element | Text |
|---|---|
| H2 | About Us |
| Subheading | Our Story |
| Story body | **Content not provided by client.** |
| Experience | 18+ Years |
| Specializations | DGFT · Customs · Trade Compliance · Licensing · Export Incentives · Certifications *(rendered as a ruled list, not a dot-joined string)* |
| Trust indicator 1 | 18+ Years Experience |
| Trust indicator 2 | Trusted by Exporters & Importers |
| Trust indicator 3 | 100% DGFT Compliance Support |
| Button | Learn More |

**Layout**
- Desktop: two columns. Left — H2, "Our Story" subheading, body copy (when supplied). Right — the `18+` figure set large in Archivo tabular numerals with the stamp accent, the specializations as a hairline-ruled list, then the three trust indicators as icon + text rows, then the button
- Mobile: single column, same order

**"Learn More" button target:** with Option A (single page) there is no About detail page for it to link to. Two permitted resolutions, client to pick:
1. Scroll to `#why-choose-us` — the natural continuation of the About narrative
2. Remove the button

**Do not** invent an About page to give the button somewhere to go.

## 11.7 Our Vision — `#vision`

| Element | Text |
|---|---|
| H2 | Our Vision |
| Body | **Content not provided by client.** |

The brief instructs that supplied vision information be included exactly and not expanded — no vision text was supplied.

**Layout when content arrives:** single centred column, max 60ch, `type.lead`, on a `brine.700` dark band with `paper.0` text — the one place on the page where the palette inverts. This makes it a visual pause between the service inventory and the persuasion sections.

**If no content is supplied by launch:** the section is removed entirely, with client approval. A heading with no body must not ship.

## 11.8 Why Choose Us — `#why-choose-us`

**Content (exact)**

| Element | Text |
|---|---|
| Subheading | Why Choose Us |
| H2 | Complete Import Export & DGFT Solutions Under One Roof. |
| 1 | Expert Import Export consultants |
| 2 | End-to-end support |
| 3 | Fast and transparent processing |
| 4 | DGFT licensing expertise |
| 5 | FSSAI/ISO/GST/Trademark support |
| 6 | Trusted by exporters/importers |
| 7 | Personalized guidance for reducing duties and maximizing incentives |

**Layout**
- Desktop: 3 columns × 3 rows, seven filled cells. The two empty cells at the end are left genuinely empty as negative space — the list is not padded to fill a grid
- Tablet: 2 columns
- Mobile: single column stack

**Structure:** each point is an index number in stamp accent + hairline rule + the point text. This is the **only** place numbered markers are used, because the client supplied an explicitly numbered list. Numbers are decorative-adjacent here and are hidden from the accessibility tree; the list is marked up as an ordered list so the sequence is conveyed semantically.

## 11.9 FAQ — `#faq`

**Content (exact questions)**

| # | Question | Answer |
|---|---|---|
| 1 | What is IEC registration? | **Content not provided by client.** |
| 2 | Do you provide DGFT services in Kerala? | **Content not provided by client.** |
| 3 | How long does IEC registration take? | **Content not provided by client.** |

Exactly three FAQs. None added.

**Behaviour**
- Accordion. Default state: first item open, so the pattern is self-evident
- Question is a real button spanning the full row, ≥ 48 px tall, with expanded state exposed
- Chevron rotation is the only motion; it is instant under reduced-motion
- Panels expand without shifting the page above them
- Each item is anchor-addressable and opens automatically if linked directly

**Note:** FAQPage structured data can only be emitted once real answers exist. Marking up empty answers would be invalid. See Section 14.

## 11.10 Location — `#locations`

**Content (exact)**

| Element | Text |
|---|---|
| H2 | Import Export Consultants Serving All Over India |
| Chennai | 9/1, Koil St, Choolaimedu, Chennai – 600094 |
| Coimbatore | No.7, Rice Mill Road, Kuniamuthur, Coimbatore – 641008 |
| Hours | Monday – Saturday, 9:00 AM – 8:00 PM |
| Map | https://maps.app.goo.gl/1DfQbR5188uWMRxP9 |

**Layout**
- Desktop: map on the left (7 columns), two office blocks stacked on the right (5 columns), each as ruled label/value rows — address, phone, hours, directions link
- Mobile: office blocks first, map below. Addresses convert better than a map on a small screen, and the map is the heaviest element on the page

**Map implementation**
- Lazy-loaded, below the fold, with reserved space at a fixed ratio so it causes no layout shift
- The iframe is not loaded until the visitor scrolls near it. A static placeholder with a visible "Open in Google Maps" link is shown first — this link is the accessible, always-working fallback and must be present even if the embed fails
- The iframe carries a descriptive title attribute
- Third-party map embeds set cookies. If the client selects a cookie-free posture (Section 2, item 15), the click-to-load placeholder pattern is mandatory rather than optional

**Open item:** a full embed reference is needed per office (Section 2, item 13). Two offices, two map targets — either two embeds or one embed with a toggle between offices. Client decision.

## 11.11 CTA Section — `#contact`

**Content (exact)** — three entry points, as supplied:

1. IEC Registration Services
2. DGFT Consultant
3. Contact Import Export Consultant

**Layout:** full-width `brine.700` band. Three equal blocks on desktop, stacked on mobile. Each block: label + one action.

| Block | Action |
|---|---|
| IEC Registration Services | Anchors to `#iec-registration` |
| DGFT Consultant | Anchors to `#dgft-consulting` |
| Contact Import Export Consultant | Call `9962637076` |

The phone number is displayed in full, not hidden behind the label — on mobile people want to see the number before tapping it.

Exactly one CTA section. Per Final Restrictions, no additional CTA sections are added anywhere.

## 11.12 Footer

**Content (exact, all supplied items included)**

| Region | Contents |
|---|---|
| Identity | `xproimpex` wordmark; Import Export & DGFT Consultants (category, as supplied) |
| Contact | 9962637076 · 9841450111 · WhatsApp +91 9962637076 · xproimpex14@gmail.com |
| Hours | Monday – Saturday, 9:00 AM – 8:00 PM |
| Chennai | 9/1, Koil St, Choolaimedu, Chennai – 600094 |
| Coimbatore | No.7, Rice Mill Road, Kuniamuthur, Coimbatore – 641008 |
| Social | Instagram: nalinimanickkam_15 · LinkedIn (URL as supplied) |
| Legal | Copyright © xproimpex. All Rights Reserved. |
| Credit | Designed by: *(exact text and link pending — Section 2, item 11)* |

**Layout**
- Desktop: 4 regions across — identity · contact · Chennai · Coimbatore. Social and legal on a hairline-separated bottom row
- Tablet: 2 × 2
- Mobile: single column in the order above

**Treatment:** `ink.900` canvas, `paper.50` text. Contact and address details are set as ruled label/value rows using tabular numerals — the footer is a genuine content destination for the Local Verifier persona (Section 7.3), not a link dump.

**Accessibility:** every phone number is a real `tel:` link with an accessible name that includes which office or line it is. Social links have text labels, not icon-only targets.

## 11.13 Mobile Action Bar (mobile only)

Fixed bottom bar, two targets: **Call** and **WhatsApp**.

- Appears after the visitor scrolls past the hero, so it does not duplicate the hero CTAs on first view
- Respects the device safe area — never sits under the gesture indicator
- The page reserves bottom inset equal to the bar height so the footer's last row is never hidden behind it
- Hidden at ≥ 1024 px, where the sticky header call action serves the same purpose

---

# 12. Service Architecture

## 12.1 Canonical Content Model

The 14 services do not share a uniform content shape — some have "Covers," some "Used For," some "Suitable For," some "Certifications Include." The model below defines every possible block. **Blocks render only when the client supplied that content for that service.** No block is filled to make services look symmetrical.

| Block | Required | Element | Notes |
|---|---|---|---|
| Anchor ID | Yes | — | From Section 5.3, permanent |
| Icon | Yes | `icon.lg` | Semantic fit or shared default |
| Title | Yes | H3 | Exact client title |
| Overview | Yes | Body | Exact client text, single paragraph, ≤ 72ch measure |
| Image | Yes | 3:2 | Client-supplied (Section 17) |
| Covers | Optional | H4 + ruled list | Hairline rows, no bullet glyph |
| Benefits | Optional | H4 + marked list | Check icon + text, two columns on desktop |
| Used For | Optional | H4 + ruled list | Same treatment as Covers |
| Certifications Include | Optional | H4 + ruled list | ISO only |
| Suitable For | Optional | H4 + tag row | Small bordered tags, not cards |
| Process information | Optional | H4 + ordered list | AAL only. Numbering permitted — it is a sequence |
| Documentation info | Optional | H4 + body | COO only |
| CTA | Yes | Button + link | See 12.4 |

## 12.2 Per-Service Block Map

Derived strictly from the supplied brief. `—` means the client supplied no such block for that service.

| # | Service | Anchor | Covers | Benefits | Used For | Suitable For | Other |
|---|---|---|---|---|---|---|---|
| 1 | IEC (Import Export Code) Registration Certificate | `#iec-registration` | ✔ | ✔ | — | — | — |
| 2 | AEO Certificate (T1, T2, T3 & LO) | `#aeo-certification` | — | ✔ | — | — | — |
| 3 | DGFT Consulting & Foreign Trade Advisory Services | `#dgft-consulting` | ✔ | — | — | — | — |
| 4 | ICEGATE Registration & Customs EDI Services | `#icegate-registration` | ✔ | ✔ | — | — | — |
| 5 | Export Promotion Council (EPC) / RCMC Registration | `#epc-rcmc-registration` | ✔ | ✔ | — | — | — |
| 6 | Digital Signature Certificate (DSC) | `#digital-signature-certificate` | — | ✔ | ✔ | — | — |
| 7 | EPCG Scheme Consulting | `#epcg-scheme` | ✔ | ✔ | — | — | — |
| 8 | ISO Certificate Consulting | `#iso-certification` | — | ✔ | — | — | Certifications Include |
| 9 | Certificate of Origin (COO) Services | `#certificate-of-origin` | ✔ | ✔ | — | ✔ | Documentation info |
| 10 | Advance Authorisation Licence (AAL) Services | `#advance-authorisation` | ✔ | ✔ | — | ✔ | Process information |
| 11 | Export House Certification (Status Holder) | `#export-house-certification` | ✔ | ✔ | — | — | — |
| 12 | RoSCTL Consulting | `#rosctl` | ✔ | ✔ | — | — | Primarily Relevant To |
| 13 | FSSAI Certification & Registration (Central / State) | `#fssai-certification` | ✔ | ✔ | — | ✔ | Licence types |
| 14 | RoDTEP Consulting | `#rodtep` | ✔ | ✔ | — | — | — |

**Notes**
- Services 1 and 2 in this table follow the client's own numbering from the detailed brief
- Service 12 "Primarily Relevant To" is rendered with the same tag-row treatment as "Suitable For" — the label text stays exactly as the client wrote it
- Service 13 FSSAI licence types (Registration / State Licence / Central Licence) render as a ruled list within Covers, as supplied
- Service 8 ISO certification names are reproduced exactly including the standard numbers

## 12.3 Detailed Service Block — Structure and Visual Hierarchy

```
┌───────────────────────────────────────────────────────────┐
│                                                            │
│  ┌──────────────────┐   ◇  Service Title              (H3)│
│  │                  │   ─────────────────  accent rule     │
│  │   service image  │                                      │
│  │      (3:2)       │   Overview paragraph, exactly as     │
│  │                  │   supplied, capped at 72ch.          │
│  └──────────────────┘                                      │
│                          Covers                        (H4)│
│                          ─────────────────────────         │
│                          item                              │
│                          ─────────────────────────         │
│                          item                              │
│                                                            │
│                          Benefits                      (H4)│
│                          ✓ item          ✓ item            │
│                          ✓ item          ✓ item            │
│                                                            │
│                          [ Call 9962637076 ]  [ WhatsApp ] │
│                                                            │
└───────────────────────────────────────────────────────────┘
              ── hairline section divider ──
```

**Visual hierarchy within a block**
1. Title (H3) — the largest element; a visitor arriving by anchor must confirm in one glance they are in the right place
2. Accent rule — a short stamp-coloured rule directly under the title, the only accent in the block
3. Image — visually weighty but subordinate to the title
4. Overview — body serif, comfortable measure
5. Covers / Benefits / Suitable For — H4 labels at `type.h4`, clearly below the title in weight
6. CTA — visually distinct, always last

**Image placement:** alternates left/right on desktop across consecutive services, creating rhythm across a long page without any block looking different from the others in kind. On mobile the image is always first, then title, then content — the image acts as the section marker while scrolling.

**Content placement:** all text in a single column at ≤ 72ch. Benefits split into two columns at ≥ 1024 px only, and only when there are five or more benefit items.

**Block separation:** hairline rule plus `space.section`. Alternating background tints (`paper.50` / `paper.0`) are applied every third block, not every block — constant alternation creates a zebra effect that reads as noise across 14 items.

**Anti-pattern guard:** 14 identical drop-shadowed cards is exactly the templated look this design avoids. Separation comes from rules, tint bands and image alternation.

## 12.4 CTA Placement per Service

Every service block ends with two actions, always in the same position and always with the same labels:

| Action | Behaviour |
|---|---|
| Call 9962637076 | `tel:` link, primary button |
| WhatsApp | `wa.me` deep link, secondary button, new tab |

**Consistency rule:** the CTA is the last element in every block, at the same position, with the same labels throughout. A visitor who learns the pattern once at service 1 knows where to look at service 14.

**Prefilled WhatsApp text:** technically possible per service. **Not implemented** — the prefilled message would be site-authored content about the client's business, which the content rules exclude. If the client supplies exact per-service message text, it can be added.

**"Apply Now" / "Enquire Now" labels:** the brief uses these words for some services. Because there is no form or application flow, a button labelled "Apply Now" would misrepresent what happens on tap. All CTAs therefore use the honest action labels above. **Client confirmation requested.**

## 12.5 Card vs Block — Which Content Goes Where

| Element | Compact card (overview grid) | Detailed block |
|---|---|---|
| Icon | ✔ | ✔ |
| Title | ✔ (may truncate to 2 lines) | ✔ (full, never truncated) |
| Short label | ✔ (first clause of the client title) | — |
| Overview | — | ✔ |
| Covers / Benefits / etc. | — | ✔ |
| Image | — | ✔ |
| CTA | Anchor link only | Call + WhatsApp |

The short label on the compact card is derived mechanically from the client's own title — no new descriptive copy is written.

---

# 13. Responsive Strategy

## 13.1 Breakpoints

Mobile-first. Indian small-business audiences are roughly 90% mobile; the mobile layout is the design, and desktop is the enhancement.

| Name | Range | Design target |
|---|---|---|
| `xs` | 320–389 px | Small Android. Single column everywhere, service grid drops to 1 across |
| `sm` | 390–639 px | Primary design target. Single column, 2-across service grid |
| `md` | 640–767 px | Large phone / small tablet portrait. 2-across grids |
| `lg` | 768–1023 px | Tablet. 2–3 across, nav still a drawer |
| `xl` | 1024–1279 px | Small laptop. Full nav, 3-across grid, two-column service blocks |
| `2xl` | ≥ 1280 px | Desktop. 4-across grid, 1200 px capped content |

## 13.2 Per-Section Responsive Behaviour

| Section | < 640 px | 640–1023 px | ≥ 1024 px |
|---|---|---|---|
| Header | Wordmark + call icon + menu toggle | Wordmark + call + menu toggle | Full nav + call button |
| Hero | Stacked, image after CTAs | Stacked, image after CTAs | 7/5 split, image right |
| Welcome | Single column | Single column | Centred, 60ch |
| Service grid | 2 across (1 below 400 px) | 2 across | 3–4 across |
| Service block | Image → title → content | Image → title → content | Alternating 5/7 split |
| Benefits list | 1 column | 1 column | 2 columns if ≥ 5 items |
| About | Stacked | Stacked | 2 columns |
| Why Choose Us | 1 column | 2 columns | 3 columns |
| FAQ | Full width accordion | Full width | 8/12 centred |
| Location | Offices → map | Offices → map | Map 7 / offices 5 |
| CTA | 3 stacked blocks | 3 stacked | 3 across |
| Footer | 1 column | 2 × 2 | 4 across |
| Action bar | Visible | Visible | Hidden |

## 13.3 Responsive Rules

- No horizontal scroll at any width from 320 px upward
- Viewport meta set correctly; **user zoom is never disabled**
- Touch targets ≥ 48×48 px on touch devices, with ≥ 8 px between adjacent targets. All pointer targets meet the 24×24 CSS px web minimum
- Horizontal gutters increase with viewport width — the mobile gutter is not reused on desktop
- Long-form paragraphs never run edge to edge on tablet or desktop
- Fixed elements (sticky header, mobile action bar) respect safe areas, and scrollable content carries matching top/bottom insets so nothing is permanently obscured
- Layout is tested on small phone, large phone, tablet portrait and tablet landscape — not inferred from one browser resize
- Images use responsive sources with correct sizing hints so a phone never downloads a desktop-sized image
- Text scaling to 200% must not clip, overlap or break any layout

---

# 14. SEO Structure Plan

> **Structure only.** All meta copy, descriptions and keyword text are client-authored. **Content not provided by client.**

## 14.1 Heading Structure

| Level | Count | Content |
|---|---|---|
| H1 | 1 | Import Export & DGFT Consultants in All Over India |
| H2 | 9 | One per major section (Welcome, Our Services, About Us, Our Vision, Why Choose Us, FAQ, Location, CTA, Footer landmark) |
| H3 | 14 | One per service title |
| H4 | as needed | Covers / Benefits / Used For / Suitable For / Certifications |

No level is skipped. No heading level is chosen for its visual size — size comes from type tokens applied to the semantically correct level.

## 14.2 Meta Tags

| Tag | Source |
|---|---|
| `<title>` | Composed from client-supplied strings only. Proposed pattern: company name + business category + locations. **Final string requires client approval.** |
| Meta description | **Content not provided by client.** |
| Canonical | `https://www.xproimpex.com/` |
| Robots | index, follow |
| Open Graph title / description / image | **Content not provided by client.** OG image asset required |
| Twitter card | Mirrors OG. Same dependency |
| Theme colour | `color.brine.700` |
| Language | `en-IN` |

## 14.3 Structured Data

| Schema | Emitted | Source |
|---|---|---|
| `ProfessionalService` (or `LocalBusiness`) | Yes | Company name, category, URL, phone numbers, email, opening hours (Mo–Sa 09:00–20:00), areaServed: India |
| `PostalAddress` ×2 | Yes | Chennai and Coimbatore addresses exactly as supplied |
| `sameAs` | Yes | Instagram and LinkedIn URLs |
| `ItemList` of services | Yes | The 14 service titles, exactly as supplied |
| `FAQPage` | **Blocked** | Requires real answers. Emitting a FAQPage with empty answers is invalid markup and a search-quality risk. Ships only when answers arrive |
| `BreadcrumbList` | Not applicable | Single-page architecture |

Structured data must reflect only what is visible on the page. No schema field is populated with information that does not appear in the rendered content.

## 14.4 Technical SEO

- `sitemap.xml` listing the single canonical URL
- `robots.txt` allowing full crawl, pointing to the sitemap
- Custom 404 with a link home
- HTTPS enforced, `www` and apex resolving to one canonical host with a 301 from the other (client to confirm which is primary — the brief states `www.xproimpex.com`)
- Trailing-slash behaviour consistent
- All anchor IDs stable and permanent — they will be shared in Google Business Profile posts and WhatsApp messages
- Every image carries a meaningful alt attribute derived from the client's own service title, submitted for approval
- Semantic landmarks: header, nav, main, section, footer, each correctly labelled

## 14.5 Local SEO Notes

The strongest local ranking lever for this business is a well-maintained Google Business Profile for each office, not on-page keywords. The site's job is to be consistent with those profiles:

- NAP (name, address, phone) must match the Google Business Profile listings **character for character**, including "Koil St" and the en-dash in "Chennai – 600094"
- Working hours on site must match the profile hours
- Both office addresses appear as separate structured-data entities

Any mismatch between site and profile weakens both. This is a handover-document item.

---

# 15. Performance Plan

## 15.1 Targets

| Metric | Target | Why |
|---|---|---|
| Largest Contentful Paint | < 2.5 s on 4G, mid-range Android | The audience is on mid-tier phones on mobile data |
| Cumulative Layout Shift | < 0.1 | 15 images on one page; unreserved space is the main risk |
| Interaction to Next Paint | < 200 ms | Accordion and nav are the only interactive surfaces |
| Total page weight | < 1.2 MB on first load | Achievable target for a 14-service single page |
| JavaScript shipped | < 100 KB gzipped | It is a static brochure site; there is no reason to exceed this |
| Lighthouse Performance | ≥ 90 mobile | Verified pre-launch on throttled mobile, not desktop |

## 15.2 Image Strategy — the Single Biggest Lever

15 images on one page is the dominant performance risk.

- **Format:** AVIF with WebP fallback. No JPEG or PNG for photographic content
- **Responsive sources:** at least three widths per image with accurate sizing hints
- **Loading:** hero eager with high priority. **All 14 service images lazy-loaded.** The map iframe lazy-loaded and click-to-load
- **Reserved space:** width and height (or aspect ratio) declared on every image. This is non-negotiable — it is the entire CLS budget
- **Compression budget:** hero ≤ 150 KB, service images ≤ 80 KB each after conversion
- **Decoding:** async for below-fold images

## 15.3 Font Strategy

- Two families, variable fonts, self-hosted as WOFF2 — no third-party font CDN request on the critical path
- Subset to Latin + Latin Extended only
- Preload the two weights used above the fold (display heading, body); load the rest normally
- `font-display: swap` with a metric-matched fallback stack so the swap does not shift layout
- Total font payload budget: ≤ 120 KB

## 15.4 Build and Delivery

- Fully static build, pre-rendered HTML. Nothing is fetched at runtime
- Route-level code splitting is irrelevant here (one route); component-level splitting applied only to the map embed and the mobile drawer
- Unused CSS purged at build time
- Long-lived immutable cache headers on hashed assets; short cache on the HTML document
- Brotli compression at the edge (Vercel default)
- Deployment previews on every commit for review before production promotion

## 15.5 Third-Party Budget

| Third party | Status |
|---|---|
| Google Maps embed | Only third party. Lazy, click-to-load |
| Analytics | Pending decision. If added, must be a lightweight cookie-free script under 5 KB |
| Fonts | Self-hosted — not a third party |
| Icons | Bundled SVG, tree-shaken — not a third party |
| Chat widgets, popups, exit-intent | **Excluded.** None will be added |

## 15.6 What Breaks at Scale

Honest limits of this architecture, for the handover document:

- **Beyond ~18 services** the single-page approach degrades — page weight and scroll length become hostile. At that point, split to service detail pages (Option B)
- **If a blog or case studies are ever added**, a single static page cannot absorb them; the site needs a content structure and probably a build-time content source
- **If enquiry volume needs tracking**, `tel:` and `wa.me` taps are not measurable without analytics event tracking. That is a deliberate present trade-off, not an oversight

---

# 16. Accessibility Plan

Target: **WCAG 2.1 Level AA**, plus the WCAG 2.2 AA additions listed below.

## 16.1 Colour and Contrast

- Body text ≥ 4.5:1 against its background; large text ≥ 3:1
- Meaningful icons, control boundaries and focus indicators ≥ 3:1 against adjacent colours
- Colour is never the only carrier of information — the active nav state uses accent colour plus weight plus an underline rule
- Every token pair in Section 9.1 is verified with a checker before launch

## 16.2 Keyboard and Focus

- Visible focus ring, 2–3 px, in `color.focus`, with adequate offset. Focus rings are never removed
- Tab order matches visual order in every layout
- Skip-to-main-content link as the first focusable element
- The sticky header and the mobile action bar must not obscure the focused element — anchor targets and focusable elements carry scroll offsets accounting for both fixed bars
- The mobile drawer traps focus while open, closes on Escape, has a visible close control, and returns focus to the toggle
- No keyboard traps anywhere

## 16.3 Semantics

- Sequential heading hierarchy, no skipped levels
- Landmark regions: header, nav, main, footer, each correctly identified
- The FAQ accordion uses real buttons that expose expanded/collapsed state
- The Why Choose Us list is marked up as an ordered list; its decorative index numbers are hidden from the accessibility tree
- Service benefit and covers lists are marked up as lists
- Decorative icons beside visible text are hidden from the accessibility tree; meaningful standalone icons have text alternatives; icon controls have accessible names

## 16.4 Links and Actions

- `tel:` links have accessible names identifying which line or office they belong to, not bare digits
- External links (WhatsApp, Instagram, LinkedIn, Google Maps) announce that they open in a new tab
- Link text is meaningful out of context — no "click here," no bare arrow glyphs
- Icon-only controls (menu toggle, social links, accordion chevrons) all carry accessible names

## 16.5 Media and Motion

- Every meaningful image has descriptive alt text; purely decorative images have empty alt
- The map iframe has a descriptive title and an always-available text link fallback
- `prefers-reduced-motion` is respected: the hero reveal is disabled, accordion transitions become instant, no parallax or scroll-driven motion exists to disable
- No auto-rotating carousels anywhere on the site. If one were ever added it would require pause/stop controls and would need to stop on focus

## 16.6 Text and Zoom

- Supports 200% browser zoom and OS text scaling with no clipping, overlap or horizontal scroll
- No text baked into images
- Minimum 17 px body on mobile
- Line height ≥ 1.5 for body copy

## 16.7 WCAG 2.2 Additions Explicitly Covered

| Criterion | How it is met |
|---|---|
| Focus Not Obscured (AA) | Scroll offsets and insets for the sticky header and mobile action bar |
| Target Size Minimum (AA) | All pointer targets ≥ 24×24 CSS px; touch targets ≥ 48×48 px |
| Dragging Movements (AA) | No drag interactions exist on the site |
| Consistent Help (A) | Contact actions appear in the same relative position on every screen size — header, per-service CTA, CTA section, footer, action bar |
| Redundant Entry (A) | No forms, so not applicable |
| Accessible Authentication (AA) | No authentication, so not applicable |

## 16.8 Verification

Automated scan (axe or equivalent) plus manual checks: keyboard-only traversal of the entire page, screen-reader pass over the header, service blocks, FAQ and footer, 200% zoom pass, and reduced-motion pass. Automated tools alone are not sufficient sign-off.

---

# 17. Image Requirements

All assets are client-supplied. **Content not provided by client** for every item below.

## 17.1 Asset Specification Table

| # | Slot | Ratio | Delivered size (px) | Max weight after conversion | Loading |
|---|---|---|---|---|---|
| 1 | Hero | 4:3 | 1600 × 1200 | 150 KB | Eager, high priority |
| 2–15 | Service images ×14 | 3:2 | 1200 × 800 | 80 KB each | Lazy |
| 16 | About / Why Choose Us support | 3:2 | 1200 × 800 | 80 KB | Lazy |
| 17 | Open Graph / social share | 1.91:1 | 1200 × 630 | 120 KB | n/a |
| 18 | Favicon | 1:1 | 512 × 512 source | — | n/a |
| 19 | Apple touch icon | 1:1 | 180 × 180 | — | n/a |

## 17.2 Service Image Brief (for the client)

One image per service, in the order listed in Section 12.2. Each should be recognisably related to that specific service — documentation and office work for certification services, cargo/port/warehouse for scheme and clearance services, manufacturing floor for EPCG and Advance Authorisation, food-processing for FSSAI, textile/garment production for RoSCTL.

**Required of every image:**
- Landscape orientation, minimum 1200 px wide
- No readable text or logos belonging to third parties
- No identifiable people without consent
- Client owns the image or holds a licence permitting web use

**Not acceptable:** handshakes, globes, generic "business meeting" stock, AI-generated composites, low-resolution screenshots, images downloaded from search results.

## 17.3 Fallback Policy

If a service image is not supplied, that service block renders with **no image** — full-width text layout with the service icon enlarged as the visual marker. The build team does not substitute stock or generated imagery. This fallback must look intentional, not broken, so it is designed as a real variant rather than a degraded state.

## 17.4 Alt Text

Alt text is drafted from the client's own service title and the image content, then submitted to the client for approval before launch. It is descriptive and specific — never the service title repeated verbatim across all images, and never keyword-stuffed.

---

# 18. Asset Requirements

## 18.1 From the Client — Blocking

| # | Asset | Blocks |
|---|---|---|
| 1 | Welcome section body copy | Welcome section |
| 2 | About Us "Our Story" copy | About section |
| 3 | Vision statement | Vision section |
| 4 | Three FAQ answers | FAQ section + FAQ structured data |
| 5 | 16 images (Section 17) | Hero, all service blocks, About, OG |
| 6 | Meta title and description | SEO |
| 7 | Map embed reference per office | Location section |
| 8 | Footer credit line — exact text and URL | Footer |
| 9 | Instagram profile URL confirmation | Footer |
| 10 | Decision: 12 or 14 services in the grid | Services section |
| 11 | Decision: "Learn More" button target | About section |
| 12 | Decision: CTA labelling ("Apply Now" vs honest labels) | All service CTAs |
| 13 | Decision: analytics posture | Global |

## 18.2 From the Client — Access

| Item | Purpose |
|---|---|
| Domain registrar access, or ability to update DNS records | Point `xproimpex.com` at the host |
| Google Business Profile access (optional) | NAP consistency verification |

**Credential handling:** no client credentials are shared in chat, email or any project document. Access is granted through the registrar's own delegated-access mechanism, or the client applies DNS changes themselves following written instructions. Any password that must be held is stored in a password manager, never in a file in this repository.

## 18.3 Produced by the Build Team

| Asset | Notes |
|---|---|
| Design tokens (colour, type, spacing, radius) | Per Section 9 |
| Icon set selection and mapping | 14 service icons + UI icons, one family |
| Site configuration data file | Single source of truth for all contact data |
| Content data file | All client copy in one structured file, easy to hand back for edits |
| Self-hosted subset font files | WOFF2, Latin subset |
| Favicon set from the client's source file | Multiple sizes |
| `sitemap.xml`, `robots.txt`, 404 page | Standard |
| README | Setup, build, deploy, content-editing instructions |
| Handover document | Domain, hosting, how to change a phone number, NAP consistency warning, limits of the architecture |

---

# 19. Development Phases

## Phase 0 — Content Lock and Decisions

**Objective:** eliminate every unknown before any building starts.

- Circulate Section 2 (Content Gaps) to the client as a single checklist
- Obtain the Section 5.1 architecture decision (Option A or B)
- Obtain all copy and all images
- Confirm exact company-name spelling and casing for the wordmark
- **Exit criterion:** zero items in Section 2 remain unresolved, or each unresolved item has an agreed fallback (usually: remove the section)

> This phase is the one that determines whether the project ships on time. Building around missing content produces a site full of placeholders that then needs a second rebuild pass.

## Phase 1 — Foundation

- Project scaffold, TypeScript strict mode, Tailwind configured with the token system from Section 9
- Design tokens implemented as the only source of colour, type, spacing and radius values. No raw hex or arbitrary spacing anywhere in components
- Font subsetting and self-hosting
- Site configuration and content data files populated with client copy
- Base layout: header, footer, skip link, landmarks, mobile drawer
- Deploy an empty shell to a preview URL on day one, so the client can see progress from the start
- **Exit criterion:** header and footer complete and accessible; tokens locked; preview URL live

## Phase 2 — Content Sections

- Hero (including the one orchestrated reveal and its reduced-motion variant)
- Welcome
- Services overview grid with all 14 compact cards and working anchors
- The service block component, built once and driven entirely by the content data file
- All 14 service blocks rendered from data
- About, Vision, Why Choose Us, FAQ, Location, CTA
- **Exit criterion:** every section renders real client content at every breakpoint; no hardcoded content in components

## Phase 3 — Refinement

- Image pipeline: conversion, responsive sources, reserved dimensions, lazy loading
- Map embed with click-to-load placeholder and fallback link
- Mobile action bar with safe-area handling
- Optional sticky service jump bar (desktop only)
- Micro-interaction polish: focus states, hover states, accordion behaviour
- **Exit criterion:** performance targets from Section 15 met on a throttled mobile profile

## Phase 4 — Quality Assurance

- Accessibility: automated scan plus the manual passes in Section 16.8
- Cross-browser: Chrome, Safari (iOS included), Firefox, Edge
- Device testing: small Android, large Android, iPhone, tablet portrait and landscape
- Every link, every `tel:`, every `wa.me`, every `mailto:`, every anchor tested by hand
- Content proofread against the original brief, word for word, to confirm nothing was rewritten
- Lighthouse on mobile throttling
- **Exit criterion:** all checklists in Section 21 pass

## Phase 5 — Launch and Handover

- SEO artefacts: meta, structured data, sitemap, robots, canonical
- Domain configuration, HTTPS, canonical host redirect
- Google Search Console verification and sitemap submission
- README and handover document
- NAP consistency check against Google Business Profile
- Client walkthrough
- **Exit criterion:** live on the custom domain, indexed, client can find and edit their own content file

---

# 20. Implementation Roadmap

Working days, sequential. Phase 0 runs before day 1 and its duration depends entirely on the client.

| Day | Focus | Deliverable |
|---|---|---|
| — | Phase 0 — content lock | Signed-off content checklist and architecture decision |
| 1 | Foundation | Scaffold, tokens, fonts, header, footer, live preview URL |
| 2 | Hero, Welcome, Services overview | Top of page complete and responsive |
| 3 | Service block component + all 14 blocks | Full service inventory rendering from data |
| 4 | About, Vision, Why Choose Us, FAQ | Persuasion sections complete |
| 5 | Location, CTA, mobile action bar | Conversion sections complete |
| 6 | Images, performance, map | Performance targets met |
| 7 | Accessibility and cross-device QA | All QA checklists passed |
| 8 | SEO, launch, handover | Live site, README, handover document |

## Dependencies and Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Content gaps unresolved (Section 2) | **High.** Vision and FAQ sections cannot ship; About is a heading with nothing under it | Phase 0 gate. Agreed fallback: remove sections rather than invent copy |
| Images not supplied | **High.** 15 image slots empty | Designed no-image variant (Section 17.3). Never substitute stock |
| Client requests a contact form mid-build | Medium. Contradicts Rule #4, adds a third party and a privacy notice | Handle as a written scope change, not an in-flight addition |
| Client requests service detail pages mid-build | Medium. Adds 14 pages of meta content that does not exist | Decide in Phase 0, not later |
| Map embed reference incomplete | Low. Fallback link still works | Location section ships with the text link; embed added when the reference arrives |
| Google Business Profile NAP mismatch | Medium. Weakens local ranking | Verified in Phase 5, documented in handover |

---

# 21. Final Build Checklist

## 21.1 Content Fidelity

- [ ] Every heading, tagline, service title, service overview, covers item, benefit and FAQ question matches the client brief **word for word**
- [ ] No business content was written, expanded, shortened or paraphrased by the build team
- [ ] No testimonials, statistics, client logos, certifications, awards, team members, case studies, blog posts or industries-served content exists anywhere on the site
- [ ] Every unsupplied content block was either filled by the client or removed with written approval — no placeholder text ships to production
- [ ] Exactly three FAQ items
- [ ] Exactly one CTA section
- [ ] Only the pages listed in the brief exist
- [ ] Contact details on the page match Section 1.2 exactly, including punctuation in addresses

## 21.2 Design System

- [ ] Every colour comes from a token; no raw hex in components
- [ ] Every spacing value is on the 4 px scale; no arbitrary values
- [ ] Two font families only, in their assigned roles
- [ ] Icons from one family, one stroke weight, three permitted sizes
- [ ] No emoji used as icons
- [ ] The stamp accent appears fewer than seven times on the page
- [ ] No section uses a numbered marker except Why Choose Us and the AAL process list
- [ ] No ALL-CAPS eyebrow labels, no dot-joined meta strings, no arrow glyphs in button labels
- [ ] Cards use borders, not uniform drop shadows

## 21.3 Responsive

- [ ] No horizontal scroll from 320 px upward
- [ ] User zoom is not disabled
- [ ] Verified on small phone, large phone, tablet portrait, tablet landscape, laptop, desktop
- [ ] Gutters adapt by breakpoint
- [ ] No edge-to-edge paragraphs on tablet or desktop
- [ ] Mobile action bar respects the safe area and does not obscure the footer
- [ ] Sticky header does not cover anchor targets

## 21.4 Accessibility

- [ ] All text meets 4.5:1; meaningful non-text meets 3:1
- [ ] Visible focus ring on every interactive element; focus is never obscured by fixed bars
- [ ] Skip link present and functional
- [ ] Full keyboard traversal with no traps; tab order matches visual order
- [ ] Heading hierarchy sequential, no skipped levels
- [ ] Landmarks correct
- [ ] Accordion buttons expose expanded state
- [ ] Every meaningful image has approved alt text; decorative images have empty alt
- [ ] Decorative icons hidden from the accessibility tree; icon controls have accessible names
- [ ] Map iframe titled, with a working text fallback link
- [ ] `prefers-reduced-motion` respected
- [ ] 200% zoom passes with no clipping or overlap
- [ ] Touch targets ≥ 48×48 px with ≥ 8 px separation; all pointer targets ≥ 24×24 CSS px
- [ ] Colour is never the sole indicator of state

## 21.5 Performance

- [ ] LCP < 2.5 s on throttled mobile
- [ ] CLS < 0.1
- [ ] Every image has reserved dimensions
- [ ] All service images lazy-loaded; hero eager with priority
- [ ] AVIF/WebP with responsive sources
- [ ] Fonts self-hosted, subset, preloaded where above the fold
- [ ] Map click-to-load
- [ ] JavaScript under 100 KB gzipped
- [ ] Lighthouse mobile Performance ≥ 90

## 21.6 SEO

- [ ] One H1
- [ ] Title and meta description present and client-approved
- [ ] Canonical set; one host resolves, the other 301s
- [ ] ProfessionalService + two PostalAddress + ItemList structured data valid
- [ ] FAQPage schema present **only if** real answers exist
- [ ] `sitemap.xml` and `robots.txt` live
- [ ] Custom 404
- [ ] All anchor IDs match Section 5.3 and are permanent
- [ ] NAP matches the Google Business Profile listings exactly

## 21.7 Functional

- [ ] Both phone numbers dial correctly on a real device
- [ ] WhatsApp link opens a chat with the correct number
- [ ] Email link opens with the correct address
- [ ] Instagram and LinkedIn links resolve to the correct profiles
- [ ] Map opens the correct location
- [ ] Every one of the 14 service anchors scrolls to the correct block with the correct offset
- [ ] Mobile drawer opens, closes, traps focus and restores focus
- [ ] Every FAQ item opens and closes

## 21.8 Delivery

- [ ] Live on the custom domain over HTTPS
- [ ] Conventional commit history
- [ ] No secrets in the repository
- [ ] README covering setup, build, deploy and content editing
- [ ] Handover document covering domain, hosting, how to change contact details, NAP consistency, and the architecture limits in Section 15.6
- [ ] Client walkthrough completed

---

## Appendix A — Content Provenance Rule

Every string rendered on this website originates from one of exactly two sources:

1. **Client-supplied business content** — reproduced verbatim, never edited
2. **Functional interface text** — navigation labels, button labels, alt attributes and accessibility labels, all derived directly from client-supplied strings and submitted for client approval before launch

There is no third source. If a string cannot be traced to one of these two, it does not ship.

---

*End of implementation plan.*
