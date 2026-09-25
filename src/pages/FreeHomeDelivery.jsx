import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { WA_URL, PHONE_DISPLAY } from '../data/constants'

const STEPS = [
  {n:'1',icon:'📋',t:'Order Karein',d:'Prescription upload karein, WhatsApp pe photo bhejein, ya call karein.'},
  {n:'2',icon:'✅',t:'Confirm Karein',d:'Hum medicines confirm kar ke price aur delivery time batayenge.'},
  {n:'3',icon:'📦',t:'Pack & Dispatch',d:'Medicines carefully pack ho kar aapke liye dispatch ki jaayegi.'},
  {n:'4',icon:'🚚',t:'Free Delivery',d:'Aapke ghar pe medicines pahunch jaayengi — bilkul free!'},
]

export default function FreeHomeDelivery() {
  return (
    <>
      <SEO title="Free Home Delivery" path="/free-home-delivery"
        description="Get free home delivery of genuine medicines in Lucknow from Health Plus Pharmacy. Upload prescription or WhatsApp +91 73809 30902 to order." />
      <PageHero breadcrumb="Free Home Delivery" title="Free Medicine Home Delivery"
        subtitle="Get genuine medicines delivered to your doorstep — completely free of charge. No minimum order." />

      {/* Features */}
      <section className="section">
        <div className="container-hp">
          <div className="text-center mb-4"><span className="badge">Why Free Delivery?</span></div>
          <h2 className="section-title text-center">Pharmacy Comes to You</h2>
          <p className="section-sub text-center mx-auto mt-2 mb-12">We understand visiting a pharmacy isn't always easy — especially for elderly and post-surgery patients.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon:'🆓',t:'100% Free',d:'Koi delivery charge nahi. Koi minimum order nahi. Bilkul free.'},
              {icon:'⚡',t:'Fast Delivery',d:'Same-day delivery available. WhatsApp karo aur order track karo.'},
              {icon:'💊',t:'Genuine Medicines',d:'Sirf verified distributors se sourced, 100% genuine medicines.'},
              {icon:'🔒',t:'Safe & Secure',d:'Prescription private rakhi jaati hai. PDPA guidelines follow ki jaati hain.'},
            ].map(f=>(
              <div key={f.t} className="card-hp p-7 text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-head font-bold text-blue-dark text-lg mb-2">{f.t}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section section-alt">
        <div className="container-hp">
          <div className="text-center mb-4"><span className="badge">Simple Process</span></div>
          <h2 className="section-title text-center">Order Karna Bahut Aasaan Hai</h2>
          <p className="section-sub text-center mx-auto mt-2 mb-14">4 steps mein medicines order karein — koi app ki zaroorat nahi.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(s=>(
              <div key={s.n} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-primary text-white font-head font-black text-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
                  {s.n}
                </div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-head font-bold text-blue-dark text-lg mb-2">{s.t}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Methods */}
      <section className="section">
        <div className="container-hp">
          <div className="text-center mb-4"><span className="badge">3 Ways to Order</span></div>
          <h2 className="section-title text-center">Order Karne Ka Apna Tarika Chunein</h2>
          <p className="section-sub text-center mx-auto mt-2 mb-12">Jo method aapko easy lage, wahi use karein.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hp p-8 text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-head font-bold text-blue-dark text-xl mb-3">Online Upload</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">Website par prescription upload karein. Sabse secure aur fastest method.</p>
              <Link to="/upload-prescription" className="btn btn-primary w-full justify-center">📋 Upload Now</Link>
            </div>
            <div className="card-hp p-8 text-center border-2 border-green-hp">
              <div className="text-5xl mb-4">💬</div>
              <div className="badge bg-green-hp/10 text-green-hp border-green-hp/30 mb-3">Most Popular</div>
              <h3 className="font-head font-bold text-blue-dark text-xl mb-3">WhatsApp</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">Prescription ki photo WhatsApp pe bhejein. Instant response milegi.</p>
              <a href={`${WA_URL}?text=Hello%2C%20medicines%20order%20karni%20hain`} target="_blank" rel="noopener noreferrer"
                className="btn btn-green w-full justify-center">💬 WhatsApp Now</a>
            </div>
            <div className="card-hp p-8 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-head font-bold text-blue-dark text-xl mb-3">Call Us</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">Seedha call karein — hum prescription details phone pe le lenge.</p>
              <a href="tel:+917380930902" className="btn btn-outline w-full justify-center">📞 {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section section-alt">
        <div className="container-hp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge mb-4 inline-block">Delivery Details</span>
              <h2 className="section-title">Delivery Area & Timings</h2>
              <p className="text-text-muted mt-4 leading-relaxed mb-6">Hum Lucknow ke sabhi major areas mein delivery karte hain. Delivery time aur areas confirm karne ke liye WhatsApp ya call karein.</p>
              <div className="flex flex-col gap-3">
                {[
                  ['📍','Delivery Area','Lucknow ke sabhi major areas (areas confirm karne ke liye call karein)'],
                  ['⏰','Delivery Time','Aaj ka order aaj hi — typically 1-3 ghante mein'],
                  ['💰','Delivery Charge','Bilkul FREE — koi hidden charge nahi'],
                  ['📦','Minimum Order','Koi minimum order nahi — 1 strip bhi deliver karein'],
                  ['💳','Payment','Cash on delivery, UPI, bank transfer — sab accepted'],
                ].map(([ico,t,d])=>(
                  <div key={t} className="flex items-start gap-3 bg-white border border-border-hp rounded-xl p-4">
                    <span className="text-xl flex-shrink-0">{ico}</span>
                    <div>
                      <strong className="text-brand-text text-sm">{t}:</strong>
                      <span className="text-text-muted text-sm ml-1">{d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-dark rounded-3xl p-10 text-white text-center">
              <div className="text-6xl mb-6">🚚</div>
              <h3 className="font-head font-black text-3xl text-white mb-4">FREE Delivery</h3>
              <p className="text-white/80 leading-relaxed mb-8">Koi delivery charge nahi, koi minimum order nahi — genuinely free medicines at your door.</p>
              <div className="flex flex-col gap-3">
                <Link to="/upload-prescription" className="btn btn-green w-full justify-center">📋 Upload Prescription</Link>
                <a href={`${WA_URL}?text=Hello%2C%20free%20delivery%20ke%20baare%20mein%20jaanna%20hai`} target="_blank" rel="noopener noreferrer"
                  className="btn btn-white-outline w-full justify-center">💬 WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center" style={{background:'linear-gradient(135deg,#0A3D91,#0B6FD6)'}}>
        <div className="container-hp relative z-10">
          <h2 className="text-3xl md:text-4xl font-head font-black text-white mb-4">Abhi Order Karein — FREE Delivery!</h2>
          <p className="text-white/75 text-base mb-8">Prescription upload karein ya WhatsApp karein — aaj hi delivery possible hai.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/upload-prescription" className="btn btn-green">📋 Upload Prescription</Link>
            <a href={`${WA_URL}?text=Hello`} target="_blank" rel="noopener noreferrer" className="btn btn-white-outline">💬 WhatsApp</a>
            <a href="tel:+917380930902" className="btn btn-white-outline">📞 {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </>
  )
}
