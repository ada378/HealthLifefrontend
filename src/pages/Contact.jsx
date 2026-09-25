import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa'
import { WA_URL, PHONE_DISPLAY, ADDRESS, TIMINGS } from '../data/constants'

const SCHEMA = {
  "@context":"https://schema.org","@type":"Pharmacy",
  "name":"Health Plus Pharmacy","telephone":"+917380930902",
  "address":{"@type":"PostalAddress","streetAddress":"Gate No. 6, Behind Medanta Hospital, Lodi Plaza",
  "addressLocality":"Lucknow","addressRegion":"Uttar Pradesh","addressCountry":"IN"}
}

function EnquiryForm() {
  const { register, handleSubmit, reset, formState:{errors} } = useForm()
  const [status, setStatus] = useState(null)
  const onSubmit = async () => {
    setStatus('loading')
    await new Promise(r=>setTimeout(r,1500))
    setStatus('success'); reset()
  }
  if (status==='success') return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
      <div className="text-4xl mb-3">✅</div>
      <h4 className="font-head font-bold text-green-700 text-lg mb-2">Enquiry Receive Ho Gayi!</h4>
      <p className="text-green-700/80 text-sm mb-4">30 minutes ke andar WhatsApp/call par contact karenge.</p>
      <button onClick={()=>setStatus(null)} className="btn btn-primary text-sm py-2">Send Another</button>
    </div>
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Name <span className="text-red-500">*</span></label>
          <input className={`form-input ${errors.name?'border-red-400':''}`} placeholder="Aapka naam"
            {...register('name',{required:'Naam zaroori hai.',minLength:{value:2,message:'Naam bahut chhota.'}})} />
          {errors.name && <p className="field-error">{errors.name.message}</p>}
        </div>
        <div>
          <label className="form-label">Phone <span className="text-red-500">*</span></label>
          <input className={`form-input ${errors.phone?'border-red-400':''}`} placeholder="10-digit number" type="tel"
            {...register('phone',{required:'Phone zaroori hai.',pattern:{value:/^[6-9]\d{9}$/,message:'Sahi number daalen.'}})} />
          {errors.phone && <p className="field-error">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="form-label">Medicine Name(s) <span className="text-red-500">*</span></label>
        <input className={`form-input ${errors.medicine?'border-red-400':''}`} placeholder="e.g. Metformin 500mg, Paracetamol"
          {...register('medicine',{required:'Medicine ka naam daalen.',minLength:{value:2,message:'Naam bahut chhota.'}})} />
        {errors.medicine && <p className="field-error">{errors.medicine.message}</p>}
      </div>
      <div>
        <label className="form-label">Message <span className="text-text-muted font-normal text-xs">(optional)</span></label>
        <textarea className="form-input resize-none h-20" placeholder="Koi extra information..."
          {...register('message')} />
      </div>
      <button type="submit" disabled={status==='loading'}
        className="btn btn-primary justify-center py-3 disabled:opacity-60">
        {status==='loading'?'⏳ Bhej rahe hain...':'💬 Enquiry Bhejein'}
      </button>
    </form>
  )
}

function RefillForm() {
  const { register, handleSubmit, reset, formState:{errors} } = useForm()
  const [status, setStatus] = useState(null)
  const onSubmit = async () => {
    setStatus('loading')
    await new Promise(r=>setTimeout(r,1500))
    setStatus('success'); reset()
  }
  if (status==='success') return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
      <div className="text-4xl mb-3">🔔</div>
      <h4 className="font-head font-bold text-green-700 text-lg mb-2">Reminder Set Ho Gayi!</h4>
      <p className="text-green-700/80 text-sm">Hum aapko remind karenge jab medicines khatam honewali hongi.</p>
    </div>
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Name <span className="text-red-500">*</span></label>
          <input className={`form-input ${errors.name?'border-red-400':''}`} placeholder="Aapka naam"
            {...register('name',{required:'Naam zaroori hai.'})} />
          {errors.name && <p className="field-error">{errors.name.message}</p>}
        </div>
        <div>
          <label className="form-label">Phone <span className="text-red-500">*</span></label>
          <input className={`form-input ${errors.phone?'border-red-400':''}`} placeholder="10-digit number" type="tel"
            {...register('phone',{required:'Phone zaroori hai.',pattern:{value:/^[6-9]\d{9}$/,message:'Sahi number daalen.'}})} />
          {errors.phone && <p className="field-error">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="form-label">Medicine Name <span className="text-red-500">*</span></label>
        <input className={`form-input ${errors.medicine?'border-red-400':''}`} placeholder="Medicine ka naam"
          {...register('medicine',{required:'Medicine naam zaroori hai.'})} />
        {errors.medicine && <p className="field-error">{errors.medicine.message}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Refill Frequency</label>
          <select className="form-input" {...register('frequency')}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="custom">Custom Days</option>
          </select>
        </div>
        <div>
          <label className="form-label">Preferred Reminder Time</label>
          <input className="form-input" type="time" defaultValue="09:00" {...register('time')} />
        </div>
      </div>
      <button type="submit" disabled={status==='loading'}
        className="btn btn-green justify-center py-3 disabled:opacity-60">
        {status==='loading'?'⏳ Setting...':'🔔 Reminder Set Karein'}
      </button>
    </form>
  )
}

export default function Contact() {
  const [tab, setTab] = useState('enquiry')
  return (
    <>
      <SEO title="Contact Us" path="/contact" description="Contact Health Plus Pharmacy Lucknow. Call +91 73809 30902, WhatsApp or visit Gate No. 6, Behind Medanta Hospital, Lodi Plaza, Lucknow." schema={SCHEMA} />
      <PageHero breadcrumb="Contact Us" title="Contact Us" subtitle="WhatsApp, call, or visit us — we're here to help every day from 8 AM to 10 PM." />

      <section className="section">
        <div className="container-hp">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { icon: <FaMapMarkerAlt className="w-6 h-6 text-green-600" />, t: 'Address', body: ADDRESS },
              { icon: <FaPhoneAlt className="w-6 h-6 text-green-600" />, t: 'Phone / WhatsApp', body: PHONE_DISPLAY, href: 'tel:+917380930902' },
              { icon: <FaClock className="w-6 h-6 text-green-600" />, t: 'Timings', body: TIMINGS },
              { icon: <FaWhatsapp className="w-6 h-6 text-green-600" />, t: 'WhatsApp Chat', body: 'Tap to chat instantly', href: `${WA_URL}?text=Hello%20Health%20Plus%20Pharmacy` },
            ].map(c => (
              <div key={c.t} className="bg-white border border-neutral-200 rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300">
                <div className="flex justify-center mb-4">{c.icon}</div>
                <h4 className="font-head font-bold text-neutral-900 text-sm mb-2">{c.t}</h4>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-neutral-600 text-sm hover:text-green-600 transition-colors">{c.body}</a>
                  : <p className="text-neutral-600 text-sm leading-relaxed">{c.body}</p>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Forms */}
            <div id="refill">
              <div className="flex gap-2 mb-6 bg-bg-soft rounded-xl p-1">
                {[['enquiry','💬 Medicine Enquiry'],['refill','🔔 Refill Reminder']].map(([k,l])=>(
                  <button key={k} onClick={()=>setTab(k)}
                    className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${tab===k?'bg-white shadow-soft text-blue-dark':'text-text-muted hover:text-blue-dark'}`}>
                    {l}
                  </button>
                ))}
              </div>
              <div className="bg-white border border-border-hp rounded-2xl p-7 shadow-soft">
                {tab==='enquiry' ? <EnquiryForm /> : <RefillForm />}
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="font-head font-bold text-blue-dark text-xl mb-4">Find Us on Map</h3>
              <div className="rounded-3xl overflow-hidden shadow-card border border-border-hp mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8!2d80.9516!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sMedanta%20-%20The%20Medicity%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                  width="100%" height="340" style={{border:0}} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Health Plus Pharmacy Location" />
              </div>
              <a href="https://maps.google.com/?q=Gate+No+6+Behind+Medanta+Hospital+Lodi+Plaza+Lucknow"
                target="_blank" rel="noopener noreferrer" className="btn bg-green-600 hover:bg-green-700 text-white w-full justify-center flex items-center gap-2">
                <FaDirections className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
