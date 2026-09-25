import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'
import { PHONE_DISPLAY, ADDRESS, TIMINGS, WA_URL } from '../data/constants'

const QUICK_LINKS = [
  { to: '/',                    label: 'Home' },
  { to: '/about',               label: 'About Us' },
  { to: '/services',            label: 'Services' },
  { to: '/free-home-delivery',  label: 'Free Delivery' },
  { to: '/upload-prescription', label: 'Upload Prescription' },
  { to: '/contact',             label: 'Contact Us' },
]

const SERVICE_LINKS = [
  { to: '/services#medicines',   label: 'Medicines' },
  { to: '/services#delivery',    label: 'Home Delivery' },
  { to: '/services#injection',   label: 'Injection Visit' },
  { to: '/services#dressing',    label: 'Dressing Services' },
  { to: '/services#equipment',   label: 'Equipment Rental' },
  { to: '/contact#refill',       label: 'Refill Reminder' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white/80" role="contentinfo">
      <div className="container-hp pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-4 no-underline mb-6">
              <img 
                src="/logo.jpeg" 
                alt="Health Plus Pharmacy Logo" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
              />
              <div className="leading-tight">
                <div className="font-head font-bold text-white text-xl leading-none">
                  Health <span className="text-green-400">Plus</span>
                </div>
                <div className="font-head font-medium text-green-400 text-[11px] tracking-[2px] uppercase">Pharmacy</div>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Professional healthcare services with genuine medicines, free home delivery, and expert medical care.
              Your trusted pharmacy near Medanta Hospital, Lucknow.
            </p>
            <div className="flex gap-3">
              <a href={`${WA_URL}?text=Hello`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="WhatsApp">
                <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.486z"/>
                </svg>
              </a>
              <a href="tel:+917380930902"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="Call">
                <svg className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:info@healthpluspharmacy.in"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="Email">
                <svg className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.703a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-head font-semibold mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-head font-semibold mb-6 tracking-wide">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-head font-semibold mb-6 tracking-wide">Contact Info</h4>
            <div className="flex flex-col gap-4 text-white/70">
              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5 text-green-400" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="w-5 h-5 text-green-400" />
                <a href="tel:+917380930902" className="text-white/70 hover:text-white transition-colors">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex gap-3 items-center">
                <FaClock className="w-5 h-5 text-green-400" />
                <span>{TIMINGS}</span>
              </div>
            </div>
            <a
              href={`${WA_URL}?text=Hello%20Health%20Plus%20Pharmacy`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.486z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center py-6 gap-3 text-sm text-white/50">
          <span>© 2026 Health Plus Pharmacy. All rights reserved - Web Tech illusion</span>
        </div>
      </div>
    </footer>
  )
}
