import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ctaBlocks } from '@/data/content'
import { primaryPhone } from '@/data/site'

/** Exactly one CTA section on the site. Three entry points, as supplied. */
export function CtaSection() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="contact-banner-bg text-paper-0 py-16 lg:py-24 relative overflow-hidden">
      <div className="container-page relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span
            aria-hidden="true"
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-stamp-500/40 bg-paper-0/10 px-4 py-1.5 type-small text-stamp-500 backdrop-blur-sm"
          >
            Get In Touch
          </span>
          <h2 id="cta-heading" className="type-h2 text-paper-0">
            Start Your Trade Operations Today
          </h2>
          <p className="type-lead mt-3 text-brine-100">
            Reach our DGFT specialists for immediate consulting and fast-track processing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ctaBlocks.map((block) => (
            <div
              key={block.label}
              className="flex flex-col justify-between rounded-xl border border-paper-0/20 bg-black/70 p-6 backdrop-blur-md shadow-xl transition-all hover:border-stamp-500/80 hover:bg-black/85"
            >
              <div>
                <span className="mb-3 block h-1 w-8 rounded-full bg-stamp-500" />
                <p className="type-h3 text-paper-0">{block.label}</p>
              </div>

              <div className="mt-6">
                {block.kind === 'link' && block.target ? (
                  <Link
                    to={block.target}
                    className="btn-interaction type-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-stamp-500/70 bg-black/40 px-5 text-paper-0 shadow-md transition-all hover:border-stamp-500 hover:bg-stamp-500 hover:text-paper-0"
                  >
                    <span>View Service</span>
                    <ArrowRight width={18} height={18} strokeWidth={1.75} aria-hidden="true" />
                    <span className="sr-only"> — {block.label}</span>
                  </Link>
                ) : (
                  <a
                    href={primaryPhone.href}
                    className="btn-interaction type-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-stamp-600 px-5 text-paper-0 shadow-lg transition-all hover:bg-stamp-500"
                  >
                    <Phone width={18} height={18} strokeWidth={1.75} aria-hidden="true" />
                    <span>Call <span className="tabular">{primaryPhone.display}</span></span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
