import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { TrustBanner } from '@/components/sections/TrustBanner'
import { About } from '@/components/sections/About'
import { Vision } from '@/components/sections/Vision'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Faq } from '@/components/sections/Faq'
import { Locations } from '@/components/sections/Locations'
import { CtaSection } from '@/components/sections/CtaSection'

/** Home section order. Individual services now live on their own page/URL. */
export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TrustBanner />
      <About />
      <Vision />
      <WhyChooseUs />
      <Faq />
      <Locations />
      <CtaSection />
    </>
  )
}
