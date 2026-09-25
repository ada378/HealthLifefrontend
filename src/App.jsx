import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import FloatingButtons from './components/FloatingButtons'

import Home               from './pages/Home'
import About              from './pages/About'
import Services           from './pages/Services'
import FreeHomeDelivery   from './pages/FreeHomeDelivery'
import UploadPrescription from './pages/UploadPrescription'
import Contact            from './pages/Contact'
import NotFound           from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/"                      element={<Home />} />
          <Route path="/about"                 element={<About />} />
          <Route path="/services"              element={<Services />} />
          <Route path="/free-home-delivery"    element={<FreeHomeDelivery />} />
          <Route path="/upload-prescription"   element={<UploadPrescription />} />
          <Route path="/contact"               element={<Contact />} />
          <Route path="*"                      element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <MobileStickyCTA />
    </BrowserRouter>
  )
}
