import { vision } from '@/data/content'
import { ContentGap } from '@/components/ui/ContentGap'

const isStaging = import.meta.env.MODE !== 'production'

/**
 * Section 11.7 — the one place the palette inverts. A heading with no body must
 * not ship: with no client copy the whole section is absent from a production
 * build and shows as a tracked gap in staging.
 */
export function Vision() {
  if (!vision.body && !isStaging) return null

  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="vision-banner-bg relative py-24 lg:py-32 text-paper-0 overflow-hidden"
    >
      <div className="container-page relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <span
            aria-hidden="true"
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-stamp-500/60 bg-black/40 px-4.5 py-1.5 type-small font-semibold text-stamp-500 backdrop-blur-sm shadow-md"
          >
            Forward Looking
          </span>
          <h2 id="vision-heading" className="type-h2 text-paper-0 drop-shadow-md">
            {vision.h2}
          </h2>
          <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-16 bg-stamp-500 shadow" />
          {vision.body ? (
            <p className="type-lead mt-8 text-paper-0 italic leading-relaxed text-xl sm:text-2xl drop-shadow-lg font-medium max-w-3xl mx-auto">
              &ldquo;{vision.body}&rdquo;
            </p>
          ) : (
            <ContentGap
              what="Vision statement (gap 3) — section is removed at launch if unfilled"
              className="mt-6 text-left"
            />
          )}
        </div>
      </div>
    </section>
  )
}
