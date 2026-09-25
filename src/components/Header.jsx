import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaCogs, FaTruck, FaUpload, FaEnvelope } from 'react-icons/fa'

const NAV = [
  { to: '/',                    label: 'Home', icon: <FaHome className="w-4 h-4" /> },
  { to: '/about',               label: 'About Us', icon: <FaInfoCircle className="w-4 h-4" /> },
  { to: '/services',            label: 'Services', icon: <FaCogs className="w-4 h-4" /> },
  { to: '/free-home-delivery',  label: 'Free Delivery', icon: <FaTruck className="w-4 h-4" /> },
  { to: '/upload-prescription', label: 'Upload Rx', icon: <FaUpload className="w-4 h-4" /> },
  { to: '/contact',             label: 'Contact', icon: <FaEnvelope className="w-4 h-4" /> },
]

export default function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  const close = () => setOpen(false)

  const linkClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
      isActive
        ? 'text-white bg-white/20'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`

  return (
    <header
      className={`sticky top-0 z-50 bg-neutral-800 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-neutral-900/95' : 'bg-neutral-800'
      }`}
    >
      <div className="container-hp flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 no-underline" onClick={close} aria-label="Health Plus Pharmacy">
          <img 
            src="/logo.jpeg" 
            alt="Health Plus Pharmacy Logo" 
            className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-white/20"
          />
          <div className="leading-tight">
            <div className="font-head font-bold text-white text-lg md:text-xl lg:text-2xl leading-none">
              Health <span className="text-green-500">Plus</span>
            </div>
            <div className="font-head font-medium text-green-400 text-[10px] md:text-[11px] lg:text-[12px] tracking-[1.5px] md:tracking-[2px] uppercase">
              Pharmacy
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {NAV.map(n => (
            <NavLink key={n.to} to={n.to} className={linkClass} end={n.to === '/'}>
              {n.icon}
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-neutral-900 border-t border-white/10 pb-4 px-5" role="navigation">
          {NAV.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              onClick={close}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium mt-1 transition-all flex items-center gap-3 ${
                  isActive ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {n.icon}
              {n.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
