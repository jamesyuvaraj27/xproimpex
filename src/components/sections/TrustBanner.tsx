import { site } from '@/data/site'

/**
 * A single full-width photographic break between the services grid and the
 * About section — real imagery used meaningfully, not decoratively.
 */
export function TrustBanner() {
  return (
    <section aria-hidden="true" className="relative overflow-hidden bg-black">
      <img
        src="/images/hero-port.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="h-[280px] w-full object-cover brightness-50 lg:h-[360px]"
        width={1920}
        height={1280}
      />
      <div className="container-page absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="type-display text-paper-0">{site.experienceYears}+ Years</p>
        <p className="type-lead mt-2 max-w-xl text-paper-0 font-medium">
          Powering compliant, on-time import-export operations for businesses {site.coverage}.
        </p>
      </div>
    </section>
  )
}
