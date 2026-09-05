# xproimpex — handover

## Editing the site

Every word and every phone number lives in three files under `src/data/`:

- `site.ts` — contact details, offices, hours, navigation labels
- `content.ts` — the copy for each section, and `gaps[]`, the list of what is still missing
- `services.ts` — the 14 services

Change a phone number in `site.ts` and it changes in the header, hero, all 14 service
blocks, the CTA band, the footer and the mobile bar at once. It is never written twice.

After any edit: `npm run verify` then `npm run build`. Push to the connected branch and
Vercel deploys. Every commit also gets a preview URL for review before it goes live.

## Architecture, briefly

One HTML page. Fourteen service sections, each with a permanent anchor
(`/#iec-registration`, `/#rodtep`, …) that can be linked directly from Google Business
Profile posts and WhatsApp. `dist/anchors.txt` is the full list, written on every build.

The page is pre-rendered: all text is in the HTML before JavaScript runs, so search
engines and slow phones both get the full content immediately.

Structured data (`Organization`, one `ProfessionalService` per office) is generated
from `site.ts` — keep it identical to the Google Business Profile listing, or local
ranking suffers. FAQ structured data is emitted only once all three answers exist;
marking up empty answers would be invalid.

## Honest limits

- **Beyond ~18 services** the single page becomes hostile to scroll and to weight.
  At that point split into service detail pages (plan Option B): the service block
  component and its data model already support it — it needs routes and per-page meta.
- **A blog or case studies cannot be absorbed** by a single static page. That needs a
  content source and a build-time content pipeline.
- **Enquiries are not measurable.** `tel:` and `wa.me` taps cannot be counted without
  analytics event tracking. This is a deliberate trade-off for a cookie-free site, not
  an oversight. If the client later wants numbers, a cookie-free analytics script under
  5 KB is the only addition permitted by the performance budget.
- **The map is click-to-load.** It is the only third party on the page and the only
  thing that sets a cookie, so it does not load until the visitor asks for it. The
  "Open in Google Maps" link always works regardless.
- **No form means no spam and no data to protect** — and no record of who enquired.
  Adding a form later means a third-party endpoint and a privacy notice.

## Before launch

1. Fill every `null` in `src/data/` — `CLIENT-CONTENT-CHECKLIST.md` is the client-facing list
2. `npm run build:staging` and confirm zero red placeholder markers remain
3. `npm run verify`
4. Lighthouse on **mobile** throttling, not desktop — target ≥ 90 performance
5. Tap every phone number, WhatsApp link, email link and anchor on a real phone
6. Check the addresses, phone numbers and hours match Google Business Profile character for character
7. Point the domain at Vercel, force HTTPS, redirect the apex to `www` (or the reverse — pick one and be consistent)
8. Verify in Google Search Console and submit `/sitemap.xml`
