import { Link } from 'react-router-dom'
import { servicesIntro } from '@/data/content'
import { deriveShortLabel, services } from '@/data/services'
import { Icon } from '@/components/ui/Icon'
import { Section, SectionHeading } from '@/components/ui/Section'

/**
 * 14 compact cards. Each links to its own dedicated page — clicking "View
 * Service" navigates there (no in-page scroll, no new tab).
 */
export function ServicesOverview() {
  return (
    <Section id="services" tone="paper" labelledBy="services-heading" className="services-pattern-bg">
      <SectionHeading id="services-heading">{servicesIntro.h2}</SectionHeading>

      <p className="type-body measure text-ink-900 leading-relaxed">{servicesIntro.intro}</p>

      <ul className="mt-10 grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <li key={service.id} className="h-full">
            <Link
              to={`/services/${service.id}`}
              className="card-hover-effect group flex h-full min-h-36 flex-col justify-between rounded-xl border border-rule-300 bg-paper-0 p-5.5 shadow-sm transition-all hover:border-stamp-500 hover:shadow-md"
            >
              <div>
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-brine-100 text-stamp-600 transition-colors group-hover:bg-stamp-500 group-hover:text-paper-0">
                  <Icon name={service.icon} size="md" />
                </div>
                <h3 className="type-h4 font-bold text-brine-700 transition-colors group-hover:text-stamp-600">
                  {service.title}
                </h3>
                {deriveShortLabel(service.title) ? (
                  <p className="type-small mt-1.5 text-ink-600 line-clamp-2">
                    {deriveShortLabel(service.title)}
                  </p>
                ) : null}
              </div>

              <div className="mt-5 pt-3 border-t border-rule-300 flex items-center justify-between">
                <span className="type-small font-semibold text-stamp-600 group-hover:text-brine-700">
                  View Service
                </span>
                <span className="text-stamp-600 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-xl border border-stamp-500/30 bg-stamp-100/50 p-6 sm:p-8">
        <span aria-hidden="true" className="mb-3 block h-1 w-12 rounded-full bg-stamp-600" />
        <p className="type-lead font-semibold text-brine-700">{servicesIntro.positioning}</p>
      </div>
    </Section>
  )
}
