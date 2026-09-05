import { Route, Routes } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { ScrollToHash } from '@/lib/ScrollToHash'
import { HomePage } from '@/pages/HomePage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'

/** Shared shell — wrapped in BrowserRouter (client) or StaticRouter (SSR). */
export function App() {
  return (
    <>
      <a
        href="#main"
        className="type-button sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-brine-700 focus:px-4 focus:py-3 focus:text-paper-0"
      >
        Skip to main content
      </a>

      <Header />
      <ScrollToHash />

      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
