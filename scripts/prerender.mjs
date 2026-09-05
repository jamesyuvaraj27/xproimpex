/**
 * Build-time prerender — fully static, pre-rendered HTML, no runtime data
 * fetching. Renders the home page AND every individual service page to their
 * own static HTML file so each has a real, crawlable URL.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = process.env.DIST_DIR ? path.resolve(process.env.DIST_DIR) : path.join(root, 'dist')

const server = await import(
  pathToFileURL(
    path.join(
      process.env.SSR_DIR ? path.resolve(process.env.SSR_DIR) : path.join(root, 'dist-ssr'),
      'entry-server.js',
    ),
  ).href
)

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

let totalGaps = 0

async function writePage(routePath, outFile) {
  const appHtml = server.render(routePath)
  const head = server.head(routePath)

  const headTags = [
    `<meta name="description" content="${escape(head.description)}" />`,
    `<link rel="canonical" href="${head.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="xproimpex" />`,
    `<meta property="og:title" content="${escape(head.title)}" />`,
    `<meta property="og:description" content="${escape(head.description)}" />`,
    `<meta property="og:url" content="${head.canonical}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<script type="application/ld+json">${head.jsonLd.replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')

  const html = template
    .replace('<!--app-head-->', headTags)
    .replace('<!--app-html-->', appHtml)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(head.title)}</title>`)

  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await fs.writeFile(outFile, html)

  totalGaps += (appHtml.match(/data-content-gap/g) ?? []).length
  return html
}

// Home page — also becomes the 404 document (no separate content exists to serve).
const homeHtml = await writePage('/', path.join(dist, 'index.html'))
await fs.writeFile(path.join(dist, '404.html'), homeHtml)

// One real static page per service.
for (const route of server.serviceRoutes()) {
  await writePage(route.path, path.join(dist, 'services', route.id, 'index.html'))
}

await fs.writeFile(path.join(dist, 'sitemap.xml'), server.sitemap())
await fs.writeFile(path.join(dist, 'robots.txt'), server.robots())
await fs.writeFile(path.join(dist, 'anchors.txt'), server.anchors().join('\n') + '\n')

console.log(
  `prerendered dist/index.html + ${server.serviceRoutes().length} service pages (${(homeHtml.length / 1024).toFixed(1)} kB home)`,
)
console.log(`content gaps rendered across all pages: ${totalGaps} (production builds render none)`)

