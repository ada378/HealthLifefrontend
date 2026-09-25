import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { WA_URL } from '../data/constants'

const SERVICES_DETAIL = [
  {
    id:'medicines', icon:'💊', num:'01', title:'Prescription & OTC Medicines',
    desc:'All prescription and over-the-counter medicines available. 100% genuine stock sourced from verified distributors. No expired or substitute stock.',
    points:['All prescription medicines available','OTC medicines, vitamins & supplements','Health products & consumables (gloves, masks, sanitizers)','Bandages & wound care products','100% genuine — no expired stock'],
    ctaLabel:'📋 Upload Prescription', ctaTo:'/upload-prescription', ctaType:'link',
  },
  {
    id:'delivery', icon:'🚚', num:'02', title:'Free Home Delivery',
    desc:'We deliver medicines directly to your doorstep — completely free of charge. No minimum order. Upload prescription or WhatsApp us to order.',
    points:['100% Free — no delivery charges','Fast delivery across Lucknow','WhatsApp updates from our team','Perfect for elderly, post-surgery patients'],
    ctaLabel:'Learn More →', ctaTo:'/free-home-delivery', ctaType:'link',
  },
  {
    id:'injection', icon:'💉', num:'03', title:'Injection Visit at Home',
    desc:'Trained healthcare staff visits your home to administer injections safely and hygienically. No need to travel to a clinic.',
    points:['Trained & experienced injection staff','Fully sterile, single-use needles & syringes','IV, IM, SC injections available','Ideal for elderly, diabetic & post-surgery patients'],
    ctaLabel:'💬 Book Injection Visit', ctaHref:`${WA_URL}?text=Hello%2C%20I%20need%20injection%20visit%20at%20home`, ctaType:'ext',
  },
  {
    id:'dressing', icon:'🩹', num:'04', title:'Dressing Services at Home',
    desc:'Professional wound dressing at your home by experienced staff. Ideal for post-surgery patients, diabetic wound care, and elderly patients.',
    points:['Post-surgery wound dressing','Diabetic foot & wound care','Trained staff with sterile materials','Scheduled visits as per doctor instructions'],
    ctaLabel:'💬 Book Dressing Visit', ctaHref:`${WA_URL}?text=Hello%2C%20I%20need%20dressing%20service%20at%20home`, ctaType:'ext',
  },
  {
    id:'consumables', icon:'🧤', num:'05', title:'Health Products & Consumables',
    desc:'Full range of health consumables for home care needs — all available for home delivery.',
    points:['Disposable gloves & masks','Hand sanitizers & disinfectants','Bandages & wound dressing materials','Thermometers, glucometers & strips','Catheters, syringes & IV sets'],
    ctaLabel:'💬 Order Now', ctaHref:`${WA_URL}?text=Hello%2C%20I%20need%20health%20consumables`, ctaType:'ext',
  },
  {
    id:'refill', icon:'🔔', num:'06', title:'Medicine Refill Reminder',
    desc:'Never miss a critical dose. Tell us your medicines and frequency — we remind you before they run out via WhatsApp or phone call.',
    points:['Free service — no charges','Weekly or monthly reminders','WhatsApp or call — your choice','Ideal for elderly & chronic patients'],
    ctaLabel:'🔔 Set Reminder', ctaTo:'/contact#refill', ctaType:'link',
  },
  {
    id:'equipment', icon:'🦽', num:'07', title:'Medical Equipment Rental & Supply',
    desc:'High-quality medical equipment available for rent or purchase — delivered to your home.',
    points:['Wheelchairs (standard & foldable)','Oxygen concentrators','Walkers, crutches & canes','BP monitors & pulse oximeters','Hospital beds & nebulizers'],
    ctaLabel:'💬 Enquire About Equipment', ctaHref:`${WA_URL}?text=Hello%2C%20I%20need%20medical%20equipment`, ctaType:'ext',
  },
]

export default function Services() {
  return (
    <>
      <SEO title="Our Services" path="/services"
        description="Health Plus Pharmacy offers genuine medicines, free home delivery, injection visit, dressing services, medical equipment rental & refill reminders in Lucknow." />
      <PageHero breadcrumb="Services" title="Our Healthcare Services"
        subtitle="From genuine medicines to home healthcare — everything you need, delivered with care." />

      <section className="section">
        <div className="container-hp">
          <div className="flex flex-col gap-20">
            {SERVICES_DETAIL.map((s, i) => (
              <div key={s.id} id={s.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge">{s.num}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-head font-black text-blue-dark mb-4">{s.title}</h2>
                  <p className="text-text-muted leading-relaxed mb-6">{s.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {s.points.map(p => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <span className="text-green-hp font-bold mt-0.5">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                  {s.ctaType === 'link'
                    ? <Link to={s.ctaTo} className="btn btn-primary">{s.ctaLabel}</Link>
                    : <a href={s.ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-green">{s.ctaLabel}</a>
                  }
                </div>
                {/* Icon card */}
                <div className="bg-bg-soft border border-border-hp rounded-3xl flex items-center justify-center min-h-64">
                  <span className="text-8xl">{s.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center" style={{background:'linear-gradient(135deg,#0A3D91,#0B6FD6)'}}>
        <div className="container-hp relative z-10">
          <h2 className="text-3xl md:text-4xl font-head font-black text-white mb-4">Ready to Experience Our Services?</h2>
          <p className="text-white/75 text-base mb-10">Upload a prescription, WhatsApp us, or call — we'll take care of the rest.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/upload-prescription" className="btn btn-green">📋 Upload Prescription</Link>
            <a href={`${WA_URL}`} target="_blank" rel="noopener noreferrer" className="btn btn-white-outline">💬 WhatsApp</a>
            <a href="tel:+917380930902" className="btn btn-white-outline">📞 +91 73809 30902</a>
          </div>
        </div>
      </section>
    </>
  )
}
