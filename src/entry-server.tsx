import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from '@/App'
import { seo, structuredData } from '@/data/seo'
import { site } from '@/data/site'
import { services } from '@/data/services'

/** Used by scripts/prerender.mjs to emit static HTML at build time, one call per route. */
export function render(path: string = '/'): string {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
  )
}

export function head(path: string = '/'): {
  title: string
  description: string
  canonical: string
  jsonLd: string
} {
  const match = /^\/services\/([^/]+)$/.exec(path)
  const service = match ? services.find((s) => s.id === match[1]) : undefined

  if (service) {
    return {
      title: `${service.title} — ${site.name}`,
      description: service.overview ?? seo.description,
      canonical: `${site.url}${path}`,
      jsonLd: structuredData(),
    }
  }

  return {
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    jsonLd: structuredData(),
  }
}

/** Every service now has its own static route/URL. */
export function serviceRoutes(): { id: string; path: string }[] {
  return services.map((s) => ({ id: s.id, path: `/services/${s.id}` }))
}

export function sitemap(): string {
  const today = new Date().toISOString().slice(0, 10)
  const urls = [seo.canonical, ...services.map((s) => `${site.url}/services/${s.id}`)]
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u === seo.canonical ? '1.0' : '0.8'}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`
}

export function robots(): string {
  return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`
}

/** Anchor/route inventory, written to dist for the handover document. */
export function anchors(): string[] {
  return [
    '#home',
    '#welcome',
    '#services',
    '#about',
    '#vision',
    '#why-choose-us',
    '#faq',
    '#locations',
    '#contact',
    ...services.map((s) => `/services/${s.id}`),
  ]
}
