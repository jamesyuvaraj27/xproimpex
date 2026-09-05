import { Link } from 'react-router-dom'
import { ArrowLeft, Check, MessageCircle, Phone } from 'lucide-react'
import type { Service, ServiceBlock as Block } from '@/data/services'
import { primaryPhone, whatsapp } from '@/data/site'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

function BlockBody({ block }: { block: Block }) {
  if (block.style === 'prose') {
    return block.body ? <p className="type-body measure text-ink-900">{block.body}</p> : null
  }

  if (!block.items || block.items.length === 0) return null

  if (block.style === 'marked') {
    return (
      <ul
        className={cn(
          'grid gap-x-8 gap-y-2',
          block.items.length >= 5 ? 'lg:grid-cols-2' : 'grid-cols-1',
        )}
      >
        {block.items.map((item) => (
          <li key={item} className="type-body flex items-start gap-3 text-ink-900">
            <Check
              width={20}
              height={20}
              strokeWidth={1.5}
              aria-hidden="true"
              className="mt-1 shrink-0 text-success"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.style === 'tags') {
    return (
      <ul className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <li
            key={item}
            className="type-small rounded-sm border border-rule-500 bg-paper-0 px-3 py-1.5 text-ink-900"
          >
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.style === 'ordered') {
    return (
      <ol className="measure border-t border-rule-500">
        {block.items.map((item, i) => (
          <li
            key={item}
            className="type-body flex gap-4 border-b border-rule-500 py-3 text-ink-900"
          >
            <span aria-hidden="true" className="tabular shrink-0 text-stamp-600">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ul className="measure border-t border-rule-500">
      {block.items.map((item) => (
        <li key={item} className="type-body border-b border-rule-500 py-3 text-ink-900">
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Premium icon tile used whenever a service has no client-supplied photograph. */
function IconTile({ icon }: { icon: string }) {
  return (
    <div className="hero-banner-bg flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-lg">
      <Icon name={icon} size="lg" className="size-16 text-stamp-500 sm:size-20" />
    </div>
  )
}

/**
 * A dedicated page for one service — reached only via its own URL, never
 * rendered inline in a list. Back link returns to the services grid on Home.
 */
export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article className="bg-paper-50">
      <div className="container-page py-8 lg:py-10">
        <Link
          to="/#services"
          className="type-button inline-flex items-center gap-2 text-brine-700 underline-offset-4 hover:underline"
        >
          <ArrowLeft width={18} height={18} strokeWidth={1.5} aria-hidden="true" />
          Back to Services
        </Link>
      </div>

      <div className="container-page pb-16 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="aspect-[3/2] w-full overflow-hidden rounded-lg border border-rule-500 bg-paper-0">
              {service.image ? (
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              ) : (
                <IconTile icon={service.icon} />
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-start gap-3">
              <Icon name={service.icon} size="lg" className="mt-1 text-stamp-600" />
              <h1 className="type-h2 text-brine-700">{service.title}</h1>
            </div>
            <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-stamp-600" />

            {service.overview ? (
              <p className="type-lead measure mt-6 text-ink-900">{service.overview}</p>
            ) : null}

            {service.blocks.map((block) => (
              <div key={block.label} className="mt-8">
                <h2 className="type-h4 mb-3 text-brine-700">{block.label}</h2>
                <BlockBody block={block} />
              </div>
            ))}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryPhone.href}
                className="type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-brine-700 px-6 text-paper-0 transition-colors hover:bg-brine-500"
              >
                <Phone width={20} height={20} strokeWidth={1.5} aria-hidden="true" />
                Call <span className="tabular">{primaryPhone.display}</span>
                <span className="sr-only">about {service.title}</span>
              </a>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-rule-500 bg-paper-0 px-6 text-ink-900 transition-colors hover:border-brine-500"
              >
                <MessageCircle width={20} height={20} strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
                <span className="sr-only">about {service.title}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
