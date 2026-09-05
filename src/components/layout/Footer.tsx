import { Link } from 'react-router-dom'
import { email, formatAddress, offices, phones, site, whatsapp, designCredit } from '@/data/site'
import { footer } from '@/data/content'
import { SocialLinks } from '@/components/ui/SocialLinks'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 border-b border-paper-50/15 py-2 last:border-0">
      <span className="type-small text-brine-100">{label}</span>
      <span className="type-small text-right text-paper-50">{children}</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink-900 text-paper-50">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link
              to="/"
              className="font-display text-[24px] font-bold lowercase tracking-tight text-paper-0"
            >
              {site.name}
            </Link>
            <p className="type-small mt-2 text-brine-100">{site.category}</p>
            <p className="type-small mt-4 text-brine-100">{site.hours}</p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <h2 className="type-h4 mb-3 text-paper-0">Contact</h2>
            <div>
              {phones.map((phone) => (
                <Row key={phone.href} label={phone.label}>
                  <a className="tabular underline-offset-4 hover:underline" href={phone.href}>
                    {phone.display}
                  </a>
                </Row>
              ))}
              <Row label="WhatsApp">
                <a
                  className="tabular underline-offset-4 hover:underline"
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsapp.display}
                </a>
              </Row>
              <Row label="Email">
                <a className="underline-offset-4 hover:underline" href={email.href}>
                  {email.display}
                </a>
              </Row>
            </div>
          </div>

          {offices.map((office) => (
            <div key={office.id}>
              <h2 className="type-h4 mb-3 text-paper-0">{office.city}</h2>
              <address className="type-small not-italic text-paper-50">
                {formatAddress(office)}
              </address>
              <a
                className="type-small mt-3 inline-block text-brine-100 underline underline-offset-4 hover:text-paper-0"
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open {office.city} office in Google Maps
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-2.5 border-t border-paper-50/15 pt-8 text-center">
          <p className="type-small text-brine-100">{footer.copyright}</p>

          <a
            href={designCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 type-small text-brine-100/90 transition-colors hover:text-paper-0"
          >
            <span
              aria-hidden="true"
              className="flex size-6 items-center justify-center rounded-full bg-stamp-600 text-[10px] font-bold text-paper-0 transition-colors group-hover:bg-stamp-500"
            >
              J27
            </span>
            <span>{designCredit.text}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
