# xproimpex — website

Static single-page site for xproimpex (Import Export & DGFT Consultants, Chennai · Coimbatore).
Built to `xproimpex-implementation-plan.md` v1.0, Option A (single-page architecture).

## Stack

React 19 · Vite 6 · TypeScript (strict) · Tailwind CSS v4 · Radix primitives · Lucide icons.
No database, no backend, no CMS, no forms — by design (plan §4.2, §4.3).

Output is pre-rendered static HTML: the build renders the app with `react-dom/server`
and injects the markup, meta tags and JSON-LD into `dist/index.html`, so the page is
complete before any JavaScript runs.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server. Unsupplied client copy shows as red placeholder markers |
| `npm run build` | **Production** build. Placeholders render as nothing |
| `npm run build:staging` | Same build, but placeholders are visible — this is what the client reviews |
| `npm run typecheck` | `tsc --noEmit`, strict |
| `npm run contrast` | Verifies every colour pair in plan §9.1 against its contrast requirement |
| `npm run verify` | typecheck + contrast |
| `npm run preview` | Serve `dist/` locally |

Deploy: Vercel, framework preset **Vite**, build command `npm run build`, output `dist`.
`vercel.json` sets clean URLs and immutable caching on hashed assets.

## Where the content lives

All client copy is in three files. **Components contain no business content.**

| File | Holds |
|---|---|
| `src/data/site.ts` | Phones, WhatsApp, email, offices, hours, social, nav labels. Canonical — every contact value is defined once |
| `src/data/content.ts` | Section copy: hero, welcome, services intro, about, vision, why-choose-us, FAQ, CTA, footer. Also `gaps[]`, the tracked register of everything the client still owes |
| `src/data/services.ts` | The 14 services: titles, anchors, icons, and the per-service block map from plan §12.2 |

A value of `null` means *the client has not supplied that copy*. Nothing is invented to
fill it (plan Appendix A). To fill a gap, replace the `null` with the client's exact text.

Example — filling service 1:

```ts
{
  id: 'iec-registration',
  title: 'IEC (Import Export Code) Registration Certificate',
  icon: 'FileCheck',
  overview: 'PASTE THE CLIENT PARAGRAPH HERE',
  image: { src: '/images/iec.avif', alt: 'PASTE ALT TEXT' },
  blocks: [
    { label: 'Covers', style: 'ruled', items: ['item one', 'item two'] },
    { label: 'Benefits', style: 'marked', items: ['benefit one', 'benefit two'] },
  ],
}
```

Anchor `id`s are permanent — they are public URLs shared from Google Business Profile
and WhatsApp. Do not change them after launch.

## Deviations from the plan, and why

1. **`rule.500` (`#728782`) added to the palette.** The plan's `rule.300` (`#C9D2CF`)
   is 1.54:1 against white — it fails the plan's own ≥3:1 requirement for rules that
   carry meaning (§9.1). Card borders and table separators now use `rule.500`;
   `rule.300` stays for decorative hairlines only. `npm run contrast` proves it.
2. **Two-tone focus ring.** `stamp.600` on `brine.700` is 1.09:1 — the violet ring is
   invisible on the primary button and the CTA band. The ring is now a violet outline
   plus a `paper.0` halo, so one edge always meets 3:1 on any surface.
3. **Icons are an explicit registry**, not a namespace import — importing all of Lucide
   shipped ~1 MB of unused JS and blew the §15.1 budget of 100 KB gzipped.
4. **Fonts ship all Fontsource subsets.** Browsers download only Latin because of
   `unicode-range`, so the runtime cost matches the plan; the extra files sit unused
   in `dist/assets`. A true Latin-only subset needs a manual `pyftsubset` pass.
5. **Favicon is a placeholder** (`public/favicon.svg`) — a generic ruled-document mark,
   not a logo. Replace it when the client supplies a brand mark (gap 10).

## Current bundle

| Asset | Size | Budget (§15.1) |
|---|---|---|
| JS, initial | 90 KB gzipped | < 100 KB |
| JS, drawer chunk | 10 KB gzipped, on demand | — |
| CSS | 6.5 KB gzipped | — |
| Fonts (Latin, 2 variable families) | 86 KB | ≤ 120 KB |

Images are not yet supplied; the page reserves their space at fixed ratios, so adding
them cannot shift the layout.

## What is deliberately absent

Contact form · database · admin panel · login · blog · testimonials · analytics ·
chat widget · dark mode. Each is excluded by the plan, not by omission. Adding any of
them is a scope change.
