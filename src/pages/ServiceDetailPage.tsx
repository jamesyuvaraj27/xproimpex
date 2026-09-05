import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'
import { ServiceDetail } from '@/components/sections/ServiceDetail'

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="container-page py-20 text-center lg:py-28">
        <p className="type-h2 text-brine-700">Service not found</p>
        <p className="type-body mx-auto mt-4 max-w-md text-ink-900">
          The service you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          to="/"
          className="type-button mt-8 inline-flex min-h-12 items-center gap-2 rounded-sm bg-brine-700 px-6 text-paper-0 transition-colors hover:bg-brine-500"
        >
          <ArrowLeft width={20} height={20} strokeWidth={1.5} aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    )
  }

  return <ServiceDetail service={service} />
}
