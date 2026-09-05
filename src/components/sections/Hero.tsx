import { MessageCircle, Phone } from 'lucide-react'
import { hero, welcome } from '@/data/content'
import { offices, primaryPhone, site, whatsapp } from '@/data/site'

/**
 * Home banner — Hero and Welcome merged into a single premium gradient section
 * (per client direction: one banner, no separate stock hero image). The Welcome
 * copy sits on an overlapping ivory card that bridges the dark banner into the
 * rest of the page.
 */
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="hero-banner-bg text-paper-0">
      <div className="container-page pt-16 pb-24 text-center lg:pt-24 lg:pb-32">
        <span
          aria-hidden="true"
          className="animate-glow-subtle mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-stamp-500/60 bg-black/30 px-4.5 py-1.5 type-small font-semibold text-stamp-500 backdrop-blur-sm"
        >
          {site.experienceYears}+ Years · {site.categoryLong}
        </span>

        <h1
          id="hero-heading"
          className="type-display mx-auto max-w-[20ch] text-paper-0 drop-shadow-md"
        >
          {hero.h1}
        </h1>

        <span aria-hidden="true" className="mx-auto mt-6 block h-0.5 w-24 bg-stamp-500 shadow" />

        <p className="type-lead mx-auto mt-6 max-w-[46ch] text-paper-0 drop-shadow-md font-normal">{hero.tagline}</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={primaryPhone.href}
            className="btn-interaction type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-stamp-600 px-7 text-paper-0 shadow-lg hover:bg-stamp-500"
          >
            <Phone width={20} height={20} strokeWidth={1.75} aria-hidden="true" />
            Call <span className="tabular">{primaryPhone.display}</span>
          </a>
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interaction type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-paper-0/60 bg-black/25 px-7 text-paper-0 backdrop-blur-md hover:border-paper-0 hover:bg-paper-0/20"
          >
            <MessageCircle width={20} height={20} strokeWidth={1.75} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-paper-0/15 pt-6">
          <div>
            <dt className="type-small text-brine-100">Offices</dt>
            <dd className="type-small mt-1 text-paper-0">
              {offices.map((o) => o.city).join('  ·  ')}
            </dd>
          </div>
          <div>
            <dt className="type-small text-brine-100">Coverage</dt>
            <dd className="type-small mt-1 text-paper-0">{site.coverage}</dd>
          </div>
          <div>
            <dt className="type-small text-brine-100">Working hours</dt>
            <dd className="tabular type-small mt-1 text-paper-0">{site.hours}</dd>
          </div>
        </div>
      </div>

      {/* Welcome — an overlapping ivory card, no separate stock image. */}
      <div className="container-page relative z-10 -mt-14 pb-16 lg:-mt-20 lg:pb-24">
        <div
          id="welcome"
          aria-labelledby="welcome-heading"
          className="premium-card-shadow mx-auto max-w-4xl rounded-2xl border border-stamp-100 bg-paper-0 px-6 py-10 text-center sm:px-10 lg:px-16 lg:py-14"
        >
          <span aria-hidden="true" className="mx-auto mb-5 block h-0.5 w-12 bg-stamp-600" />
          <h2 id="welcome-heading" className="type-h2 text-brine-700">
            {welcome.h2}
          </h2>
          <p className="type-lead mt-3 text-ink-600">{welcome.subheading}</p>
          {welcome.body ? (
            <p className="type-body measure-narrow mx-auto mt-6 text-ink-900">{welcome.body}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
