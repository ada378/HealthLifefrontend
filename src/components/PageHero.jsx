import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-br from-blue-dark to-blue-primary py-14 text-center text-white">
      <div className="container-hp">
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/90">{breadcrumb}</span>
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-head font-black text-white mb-3">{title}</h1>
        {subtitle && <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
