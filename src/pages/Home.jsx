import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import HeroCarousel from '../components/HeroCarousel'
import { PHONE_DISPLAY, WA_URL, SERVICES, TRUST_ITEMS, ICON_MAP } from '../data/constants'
import { 
  FaFileUpload, FaCheckCircle, FaShoppingCart, FaMapMarkerAlt, 
  FaPhoneAlt, FaClock, FaUpload, FaWhatsapp, FaStar, FaUsers,
  FaAward, FaCertificate, FaHandHolding, FaHome
} from 'react-icons/fa'

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Health Plus Pharmacy",
  "telephone": "+917380930902",
  "url": "https://healthpluspharmacy.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gate No. 6, Behind Medanta Hospital, Lodi Plaza",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 08:00-22:00"
}

const STEPS = [
  { 
    num: '1', 
    color: 'bg-green-600', 
    title: 'Upload Prescription', 
    desc: 'Upload online or send via WhatsApp. Our team reviews it immediately.',
    icon: <FaFileUpload className="w-6 h-6" />
  },
  { 
    num: '2', 
    color: 'bg-emerald-600',     
    title: 'Confirm & Pay',       
    desc: 'We confirm availability & price. Pay via UPI, cash on delivery or bank transfer.',
    icon: <FaCheckCircle className="w-6 h-6" />
  },
  { 
    num: '3', 
    color: 'bg-teal-600',    
    title: 'Delivered to You',    
    desc: 'Free delivery to your doorstep with real-time WhatsApp updates.',
    icon: <FaShoppingCart className="w-6 h-6" />
  },
]

export default function Home() {
  return (
    <>
      <SEO
        description="Health Plus Pharmacy near Medanta Hospital, Lucknow. Genuine medicines, free home delivery, injection visit, dressing services & medical equipment rental. Call +91 73809 30902."
        path="/"
        schema={SCHEMA}
      />

      {/* ───────── HERO CAROUSEL ───────── */}
      <HeroCarousel />

      {/* ───────── TRUST STRIP ───────── */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-8 sm:py-12" aria-label="Trust highlights">
        <div className="container-hp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
            {TRUST_ITEMS.map(t => {
              const IconComponent = ICON_MAP[t.iconName]
              return (
                <div key={t.label} className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-soft border border-neutral-200 flex-shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-neutral-800 leading-snug text-center sm:text-left">{t.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="section" aria-labelledby="services-h">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Our Services</span></div>
          <h2 className="section-title text-center" id="services-h">
            Comprehensive Healthcare<br className="hidden md:block" /> 
            <span className="text-green-600">Delivered to You</span>
          </h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">From prescription medicines to professional home healthcare — we bring trusted medical services to your doorstep in Lucknow.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map(s => {
              const IconComponent = ICON_MAP[s.iconName]
              return (
                <div key={s.id} className="card-hp p-6 sm:p-8 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 mb-4 sm:mb-6 group-hover:bg-green-100 transition-colors">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-head font-semibold text-neutral-900 text-lg sm:text-xl mb-2 sm:mb-3 leading-tight">{s.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{s.short}</p>
                  <Link 
                    to="/services" 
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center gap-2 text-sm"
                  >
                    Learn more 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services" className="btn bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="section section-alt" aria-labelledby="testimonials-h">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Testimonials</span></div>
          <h2 className="section-title text-center" id="testimonials-h">
            What Our <span className="text-green-600">Customers Say</span>
          </h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">Real reviews from families who trust Health Plus Pharmacy for their healthcare needs.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mrs. Priya Sharma",
                location: "Lodi Colony, Lucknow", 
                rating: 5,
                text: "Excellent service! They delivered my mother's diabetes medicines right on time. The injection service at home is very professional and safe.",
                service: "Home Delivery & Injection"
              },
              {
                name: "Mr. Rajesh Kumar",
                location: "Near Medanta Hospital",
                rating: 5, 
                text: "Very reliable pharmacy. Always have genuine medicines in stock. The staff is knowledgeable and helpful. Highly recommended!",
                service: "Prescription Medicines"
              },
              {
                name: "Dr. Anjali Verma",
                location: "Gomti Nagar, Lucknow",
                rating: 5,
                text: "As a doctor, I trust Health Plus Pharmacy for my patients. They provide authentic medicines and excellent home care services.",
                service: "Medical Equipment"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card-hp p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-neutral-200 pt-4">
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  <div className="text-xs text-green-600 font-medium mt-1">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="section" aria-labelledby="how-h">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Simple Process</span></div>
          <h2 className="section-title text-center" id="how-h">How Ordering Works</h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">Order medicines in 3 simple steps — no app required, just pure convenience.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(16.7%+32px)] right-[calc(16.7%+32px)] h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 z-0" />
            {STEPS.map(s => (
              <div key={s.num} className="flex flex-col items-center text-center relative z-10">
                <div className={`w-20 h-20 rounded-2xl ${s.color} text-white font-head font-bold text-2xl flex items-center justify-center mb-6 shadow-card relative`}>
                  <div className="absolute inset-0 rounded-2xl bg-white/20 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="relative z-10">{s.num}</span>
                </div>
                <h3 className="font-head font-semibold text-neutral-900 text-xl mb-3">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link to="/upload-prescription" className="btn bg-green-600 hover:bg-green-700 text-white text-base px-8 py-4 flex items-center gap-2">
                <FaUpload className="w-4 h-4" />
                Start Your Order
              </Link>
              <a href={`${WA_URL}?text=Hello%20I%20need%20medicines`} target="_blank" rel="noopener noreferrer" className="btn border-green-600 text-green-600 bg-transparent hover:bg-green-600 hover:text-white text-base px-8 py-4 flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHY CHOOSE US ───────── */}
      <section className="section section-alt" aria-labelledby="why-h">
        <div className="container-hp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase mb-6">Why Choose Us</span>
              <h2 className="section-title" id="why-h">Lucknow's Most Trusted Pharmacy Near Medanta</h2>
              <p className="text-neutral-600 mt-6 mb-10 leading-relaxed text-lg">
                Located at Gate No. 6, Behind Medanta Hospital, Lodi Plaza — serving hundreds of families
                with genuine medicines and compassionate home healthcare.
              </p>
              <ul className="flex flex-col gap-6">
                {[
                  {
                    title: '100% Genuine Medicines', 
                    desc: 'Sourced directly from verified pharmaceutical distributors.',
                    icon: <FaCertificate className="w-5 h-5 text-green-600" />
                  },
                  {
                    title: 'Mobile-First Service', 
                    desc: 'WhatsApp, call, or upload prescription — whatever is easiest.',
                    icon: <FaWhatsapp className="w-5 h-5 text-green-600" />
                  },
                  {
                    title: 'Trained Healthcare Staff', 
                    desc: 'Injection & dressing visits by trained professionals.',
                    icon: <FaUsers className="w-5 h-5 text-green-600" />
                  },
                  {
                    title: 'Private & Secure', 
                    desc: 'Your prescriptions handled with complete confidentiality.',
                    icon: <FaAward className="w-5 h-5 text-green-600" />
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                      <p className="text-neutral-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-10 flex-wrap">
                <Link to="/about" className="btn bg-green-600 hover:bg-green-700 text-white text-base px-8 py-4">About Us</Link>
                <a href="tel:+917380930902" className="btn border-green-600 text-green-600 bg-transparent hover:bg-green-600 hover:text-white text-base px-8 py-4 flex items-center gap-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { n: '500+',    l: 'Happy Families Served', color: 'text-green-600' },
                { n: '7',       l: 'Services Offered', color: 'text-emerald-600' },
                { n: '100%',    l: 'Genuine Stock', color: 'text-green-600' },
                { n: 'FREE',    l: 'Home Delivery', color: 'text-emerald-600' },
                { n: 'Daily',   l: 'Open 7 Days', color: 'text-green-600' },
                { n: '8AM-10PM',l: 'Working Hours', color: 'text-emerald-600' },
              ].map(s => (
                <div key={s.l} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center">
                  <div className={`font-head font-bold text-3xl mb-2 ${s.color}`}>{s.n}</div>
                  <div className="text-neutral-600 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MAP ───────── */}
      <section className="section" aria-labelledby="loc-h">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Find Us</span></div>
          <h2 className="section-title text-center" id="loc-h">Visit Us or Order Online</h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">We're conveniently located behind Medanta Hospital — easy to find, even easier to order from home.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="flex flex-col gap-6">
              {[
                { 
                  icon: <FaMapMarkerAlt className="w-6 h-6 text-green-600" />, 
                  title: 'Address',       
                  body: 'Gate No. 6, Behind Medanta Hospital, Lodi Plaza, Lucknow, UP' 
                },
                { 
                  icon: <FaPhoneAlt className="w-6 h-6 text-green-600" />, 
                  title: 'Phone / WhatsApp',    
                  body: PHONE_DISPLAY, 
                  href: 'tel:+917380930902' 
                },
                { 
                  icon: <FaClock className="w-6 h-6 text-green-600" />, 
                  title: 'Timings',       
                  body: 'Monday – Sunday\n8:00 AM – 10:00 PM' 
                },
              ].map(c => (
                <div key={c.title} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <h4 className="font-head font-semibold text-neutral-900 mb-2">{c.title}</h4>
                      {c.href
                        ? <a href={c.href} className="text-neutral-600 hover:text-green-600 transition-colors">{c.body}</a>
                        : <p className="text-neutral-600 whitespace-pre-line">{c.body}</p>}
                    </div>
                  </div>
                </div>
              ))}
              <a
                href="https://maps.google.com/?q=Gate+No+6+Behind+Medanta+Hospital+Lodi+Plaza+Lucknow"
                target="_blank" rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-700 text-white justify-center text-base px-8 py-4 flex items-center gap-2"
              >
                <FaMapMarkerAlt className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-card border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8!2d80.9516!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sMedanta%20-%20The%20Medicity%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Health Plus Pharmacy Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA BANNER ───────── */}
      <section className="relative overflow-hidden py-24 text-center bg-gradient-to-br from-gray-800/90 via-neutral-800/80 to-slate-900/90">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-neutral-900/90"></div>
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#cta-pattern)" />
            </svg>
          </div>
        </div>
        <div className="container-hp relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-head font-bold text-white mb-6 leading-tight">Need Medicines Delivered Today?</h2>
            <p className="text-white/80 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">Upload your prescription or WhatsApp us — genuine medicines with free delivery to your door in Lucknow.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/upload-prescription" className="btn bg-green-600 hover:bg-green-700 text-white text-base px-8 py-4 flex items-center gap-2">
                <FaUpload className="w-5 h-5" />
                Upload Prescription
              </Link>
              <a href={`${WA_URL}?text=Hello%20I%20need%20medicines`} target="_blank" rel="noopener noreferrer" className="btn border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-base px-8 py-4 flex items-center gap-2">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a href="tel:+917380930902" className="btn border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-base px-8 py-4 flex items-center gap-2">
                <FaPhoneAlt className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FEATURES ───────── */}
      <section className="section">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Why Families Trust Us</span></div>
          <h2 className="section-title text-center">
            More Than Just a Pharmacy<br className="hidden md:block" />
            <span className="text-green-600">Your Healthcare Partner</span>
          </h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">We understand healthcare can be overwhelming. That's why we've made it simple, reliable, and accessible for every family in Lucknow.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <FaCertificate className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Licensed & Certified",
                description: "Fully licensed pharmacy with certified pharmacists. All medicines sourced from authorized distributors with proper storage conditions.",
                highlight: "100% Legal & Safe"
              },
              {
                icon: <FaUsers className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Experienced Team", 
                description: "Our healthcare professionals have 15+ years of experience in serving Lucknow families with compassionate care.",
                highlight: "15+ Years Experience"
              },
              {
                icon: <FaAward className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Community Trust",
                description: "Serving 500+ families monthly. From Medanta Hospital staff to local residents, we're the trusted healthcare choice.",
                highlight: "500+ Happy Families"
              },
              {
                icon: <FaHome className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "At-Home Services",
                description: "Professional injection, dressing, and care services at your home. No need to travel when you're unwell.",
                highlight: "Doorstep Healthcare"
              },
              {
                icon: <FaHandHolding className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Emergency Support",
                description: "Urgent medicine needed? Call us anytime. We provide emergency medicine delivery for critical situations.",
                highlight: "24/7 Emergency"
              },
              {
                icon: <FaPhoneAlt className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Personal Care",
                description: "WhatsApp reminders, dosage guidance, and medicine counseling. We care about your health journey.",
                highlight: "Personal Touch"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-card transition-all duration-300 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 mb-4 sm:mb-6 group-hover:bg-green-100 transition-colors">
                  {feature.icon}
                </div>
                <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-3 sm:mb-4">
                  {feature.highlight}
                </div>
                <h3 className="font-head font-semibold text-neutral-900 text-lg sm:text-xl mb-2 sm:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MEDICINE CATEGORIES ───────── */}
      <section className="section section-alt">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Medicine Categories</span></div>
          <h2 className="section-title text-center">
            Complete Medicine Stock<br className="hidden md:block" />
            <span className="text-green-600">Always Available</span>
          </h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">From common medicines to specialized drugs, we maintain extensive stock to serve all your healthcare needs.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Diabetes Care", icon: "🩺", count: "50+ Brands" },
              { name: "Heart Medicines", icon: "❤️", count: "30+ Options" },
              { name: "Blood Pressure", icon: "🌡️", count: "40+ Types" },
              { name: "Pain Relief", icon: "💊", count: "25+ Medicines" },
              { name: "Antibiotics", icon: "🦠", count: "60+ Varieties" },
              { name: "Vitamins & Supplements", icon: "🌟", count: "100+ Products" },
              { name: "Child Care", icon: "👶", count: "35+ Items" },
              { name: "Women's Health", icon: "🌸", count: "45+ Products" },
              { name: "Skin Care", icon: "🧴", count: "55+ Items" },
              { name: "Eye Care", icon: "👁️", count: "20+ Drops" },
              { name: "Surgical Items", icon: "🏥", count: "200+ Items" },
              { name: "Ayurvedic Medicines", icon: "🌿", count: "80+ Products" }
            ].map((category, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{category.icon}</div>
                <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm mb-1 sm:mb-2 leading-tight">{category.name}</h4>
                <div className="text-xs text-green-600 font-medium">{category.count}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-neutral-600 mb-4 sm:mb-6 text-sm sm:text-base">Can't find what you're looking for? We can source any medicine within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a href={`${WA_URL}?text=Hello%2C%20I%20need%20a%20specific%20medicine`} target="_blank" rel="noopener noreferrer" className="btn bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                Ask for Any Medicine
              </a>
              <Link to="/services" className="btn border-green-600 text-green-600 bg-transparent hover:bg-green-600 hover:text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                View All Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── HEALTH TIPS ───────── */}
      <section className="section">
        <div className="container-hp">
          <div className="text-center mb-6"><span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold px-4 py-1.5 tracking-wide uppercase">Health Tips</span></div>
          <h2 className="section-title text-center">
            Free Health Guidance<br className="hidden md:block" />
            <span className="text-green-600">From Our Experts</span>
          </h2>
          <p className="section-sub text-center mx-auto mt-4 mb-16">Our pharmacists share valuable health tips to help you live better. No charge, just care.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                tip: "Medicine Storage",
                title: "Store medicines in cool, dry places away from sunlight",
                description: "Most medicines lose potency when exposed to heat and humidity. Always check expiry dates before taking any medicine.",
                icon: "🌡️"
              },
              {
                tip: "Dosage Timing", 
                title: "Take medicines at the same time daily for best results",
                description: "Consistent timing helps maintain proper medicine levels in your body. Set phone reminders if needed.",
                icon: "⏰"
              },
              {
                tip: "Antibiotic Care",
                title: "Complete the full antibiotic course, even if you feel better",
                description: "Stopping antibiotics early can lead to resistant infections. Always finish the prescribed course.",
                icon: "💊"
              },
              {
                tip: "Diabetes Management",
                title: "Monitor blood sugar regularly and maintain a medicine diary", 
                description: "Track your readings and medicine timing. Share this data with your doctor for better treatment.",
                icon: "📋"
              },
              {
                tip: "Child Medicines",
                title: "Never give adult medicines to children without doctor's advice",
                description: "Children need different dosages and formulations. Always use pediatric versions of medicines.",
                icon: "👶"
              },
              {
                tip: "Emergency Kit",
                title: "Keep basic first aid medicines at home always",
                description: "Paracetamol, bandages, antiseptic, and ORS should be readily available for emergencies.",
                icon: "🏥"
              }
            ].map((tip, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-card transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">{tip.tip}</div>
                    <h4 className="font-head font-semibold text-neutral-900 text-base sm:text-lg leading-tight">{tip.title}</h4>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-neutral-600 mb-4 sm:mb-6 text-sm sm:text-base px-4 sm:px-0">Need personalized health guidance? Our pharmacists are here to help.</p>
            <a href="tel:+917380930902" className="btn bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 inline-flex">
              <FaPhoneAlt className="w-4 h-4" />
              Talk to Our Pharmacist
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
