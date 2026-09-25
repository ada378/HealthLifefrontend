import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { WA_URL } from '../data/constants'

export default function About() {
  return (
    <>
      <SEO title="About Us" path="/about"
        description="Learn about Health Plus Pharmacy — Lucknow's trusted pharmacy near Medanta Hospital. Genuine medicines, trained staff, free home delivery & home healthcare services." />
      <PageHero breadcrumb="About Us" title="About Health Plus Pharmacy"
        subtitle="Your trusted pharmacy partner near Medanta Hospital, serving Lucknow with genuine medicines & compassionate care." />

      {/* Story */}
      <section className="section">
        <div className="container-hp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-bg-soft border border-border-hp rounded-3xl min-h-72 flex items-center justify-center flex-col gap-3">
              <span className="text-7xl">🏥</span>
              <p className="text-text-muted text-sm text-center">Health Plus Pharmacy<br />Gate No. 6, Lodi Plaza, Lucknow</p>
            </div>
            <div>
              <span className="badge mb-4 inline-block">Our Story</span>
              <h2 className="section-title">Serving Lucknow with Trust &amp; Genuine Care</h2>
              <p className="text-text-muted mt-4 leading-relaxed">Health Plus Pharmacy was established with a single mission — to make quality healthcare accessible to every family in Lucknow. Located at Gate No. 6, Behind Medanta Hospital, Lodi Plaza, we serve patients before and after hospital visits.</p>
              <p className="text-text-muted mt-3 leading-relaxed">We understand that for elderly, post-surgery, and mobility-impaired patients, visiting a pharmacy can be difficult. That's why we brought the pharmacy to your doorstep — free home delivery, home injection visits, and dressing services.</p>
              <p className="text-text-muted mt-3 leading-relaxed mb-8">Every medicine is sourced from verified pharmaceutical distributors — ensuring 100% genuine medication every time.</p>
              <div className="grid grid-cols-3 gap-4">
                {[['500+','Families Served'],['7','Services'],['100%','Genuine Stock']].map(([n,l])=>(
                  <div key={l} className="bg-bg-soft border border-border-hp rounded-2xl p-4 text-center">
                    <div className="font-head font-black text-blue-primary text-2xl">{n}</div>
                    <div className="text-text-muted text-xs mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-alt">
        <div className="container-hp">
          <div className="text-center mb-4"><span className="badge">Our Mission</span></div>
          <h2 className="section-title text-center">What Drives Us Every Day</h2>
          <p className="section-sub text-center mx-auto mt-2 mb-12">Healthcare should be accessible, affordable, and delivered with compassion.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon:'🎯',t:'Our Mission',d:'To provide genuine medicines and quality home healthcare services to every family in Lucknow — making healthcare accessible, affordable, and convenient.'},
              {icon:'👁️',t:'Our Vision',d:'To become the most trusted healthcare partner for every household in Lucknow — known for genuine medicines, reliable home services, and exceptional care.'},
              {icon:'💎',t:'Our Values',d:'Genuineness, compassion, reliability, and respect for every patient. We treat every customer like family — because their health is our priority.'},
            ].map(c=>(
              <div key={c.t} className="card-hp p-8">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-head font-bold text-blue-dark text-lg mb-3">{c.t}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section">
        <div className="container-hp">
          <div className="rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg,#0A3D91,#0B6FD6)'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 md:p-14 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-head font-black text-white mb-4">Our Genuine Medicine Promise</h2>
                <p className="text-white/80 leading-relaxed mb-6">We stock only 100% genuine medicines sourced from licensed, verified distributors. No expired stock. No substitutes without consultation. Your trust is our most valuable asset.</p>
                <Link to="/upload-prescription" className="btn btn-green">📋 Upload Prescription</Link>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  ['✅','Verified Distributors','All medicines from licensed pharmaceutical companies.'],
                  ['🔒','No Expired Stock','Regular checks ensure medicines are within expiry.'],
                  ['📜','Licensed Pharmacy','Operating under valid drug licence as per Indian regulations.'],
                ].map(([ico,t,d])=>(
                  <div key={t} className="bg-white/10 rounded-2xl p-5 flex gap-4 items-center">
                    <span className="text-3xl">{ico}</span>
                    <div>
                      <strong className="text-white block mb-1">{t}</strong>
                      <span className="text-white/70 text-sm">{d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section section-alt">
        <div className="container-hp">
          <div className="text-center mb-4"><span className="badge">Why Choose Us</span></div>
          <h2 className="section-title text-center">The Health Plus Difference</h2>
          <p className="section-sub text-center mx-auto mt-2 mb-12">What makes us different from every other pharmacy in Lucknow.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['📍','Right Next to Medanta','Gate No. 6, Behind Medanta Hospital — convenient for patients and visitors.'],
              ['🚚','Free Home Delivery','Medicines delivered free — no minimum order, no delivery charges.'],
              ['💬','WhatsApp First','Order, upload prescriptions, or ask questions via WhatsApp in seconds.'],
              ['🏠','Complete Home Healthcare','Injection visits to wound dressing — trained staff comes to your home.'],
              ['🦽','Equipment Rental','Wheelchairs, walkers, oxygen concentrators at affordable prices.'],
              ['🔔','Refill Reminders','We remind you when your regular medicines are about to run out.'],
            ].map(([ico,t,d])=>(
              <div key={t} className="flex items-start gap-4 bg-white border border-border-hp rounded-2xl p-6 shadow-soft">
                <span className="text-3xl flex-shrink-0">{ico}</span>
                <div>
                  <h4 className="font-head font-bold text-blue-dark text-base mb-1">{t}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center" style={{background:'linear-gradient(135deg,#0A3D91,#0B6FD6)'}}>
        <div className="container-hp relative z-10">
          <h2 className="text-3xl md:text-4xl font-head font-black text-white mb-4">Have Questions? We're Here to Help.</h2>
          <p className="text-white/75 text-base mb-8">Contact us on WhatsApp, call, or visit us at Lodi Plaza, Lucknow.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn btn-green">📩 Contact Us</Link>
            <a href={`${WA_URL}?text=Hello`} target="_blank" rel="noopener noreferrer" className="btn btn-white-outline">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
