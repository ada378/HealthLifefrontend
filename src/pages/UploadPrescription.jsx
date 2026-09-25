import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { WA_URL } from '../data/constants'

export default function UploadPrescription() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [file, setFile] = useState(null)
  const [fileError, setFileError] = useState('')
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef()

  const ALLOWED = ['image/jpeg','image/png','application/pdf']
  const MAX_MB  = 5

  function handleFile(f) {
    setFileError('')
    if (!ALLOWED.includes(f.type)) { setFileError('Sirf JPG, PNG ya PDF allowed hai.'); setFile(null); return }
    if (f.size > MAX_MB * 1024 * 1024) { setFileError(`File 5 MB se badi hai.`); setFile(null); return }
    setFile(f)
  }

  const onDrop = e => {
    e.preventDefault(); setDragOver(false)
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0])
  }

  const onSubmit = async (data) => {
    if (!file) { setFileError('Prescription file select karein.'); return }
    setStatus('loading')
    // Simulate API — replace with: fetch('/api/prescriptions', { method:'POST', body: formData })
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    reset(); setFile(null)
  }

  return (
    <>
      <SEO title="Upload Prescription" path="/upload-prescription"
        description="Upload your prescription to Health Plus Pharmacy Lucknow for safe, free home delivery of genuine medicines. Call +91 73809 30902." />
      <PageHero breadcrumb="Upload Prescription" title="Upload Your Prescription"
        subtitle="Upload your prescription securely and we'll deliver your genuine medicines free to your door." />

      <section className="section">
        <div className="container-hp">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-head font-bold text-green-700 text-xl mb-2">Prescription Submit Ho Gayi!</h3>
                  <p className="text-green-700/80 text-sm leading-relaxed mb-6">Hum jald hi aapko WhatsApp ya call par contact karenge. Aapka order confirm ho jayega.</p>
                  <button onClick={() => setStatus(null)} className="btn btn-primary">📋 Submit Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white border border-border-hp rounded-3xl p-8 shadow-soft">
                  <h3 className="font-head font-bold text-blue-dark text-xl mb-6">Prescription Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="form-label">Full Name <span className="text-red-500">*</span></label>
                      <input className={`form-input ${errors.name ? 'border-red-400' : ''}`} placeholder="Aapka poora naam"
                        {...register('name',{ required:'Naam daalna zaroori hai.', minLength:{value:2,message:'Naam bahut chhota hai.'} })} />
                      {errors.name && <p className="field-error">{errors.name.message}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="form-label">Phone / WhatsApp <span className="text-red-500">*</span></label>
                      <input className={`form-input ${errors.phone ? 'border-red-400' : ''}`} placeholder="10-digit mobile number" type="tel"
                        {...register('phone',{ required:'Phone number daalna zaroori hai.', pattern:{value:/^[6-9]\d{9}$/,message:'Sahi 10 digit number daalen.'} })} />
                      {errors.phone && <p className="field-error">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mt-5">
                    <label className="form-label">Delivery Address <span className="text-red-500">*</span></label>
                    <textarea className={`form-input resize-none h-24 ${errors.address ? 'border-red-400' : ''}`}
                      placeholder="Poora delivery address (ghar, mohalla, city)"
                      {...register('address',{ required:'Address daalna zaroori hai.', minLength:{value:10,message:'Thoda detail mein address daalen.'} })} />
                    {errors.address && <p className="field-error">{errors.address.message}</p>}
                  </div>

                  {/* Notes */}
                  <div className="mt-5">
                    <label className="form-label">Additional Notes <span className="text-text-muted font-normal text-xs">(optional)</span></label>
                    <textarea className="form-input resize-none h-20" placeholder="Koi special instruction ya medicine ki zaroorat..."
                      {...register('notes',{ maxLength:{value:500,message:'500 characters se zyada nahi.'} })} />
                    {errors.notes && <p className="field-error">{errors.notes.message}</p>}
                  </div>

                  {/* File Upload */}
                  <div className="mt-5">
                    <label className="form-label">Prescription File <span className="text-red-500">*</span></label>
                    <div
                      className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                        dragOver ? 'border-blue-primary bg-blue-primary/5' : 'border-border-hp bg-bg-soft hover:border-blue-primary hover:bg-blue-primary/5'
                      }`}
                      onClick={() => inputRef.current.click()}
                      onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={onDrop}
                      role="button" aria-label="Upload prescription file"
                    >
                      <div className="text-4xl mb-3">📎</div>
                      {file ? (
                        <p className="text-green-hp font-semibold text-sm">✅ {file.name} ({(file.size/1024/1024).toFixed(2)} MB)</p>
                      ) : (
                        <>
                          <p className="text-brand-text font-semibold text-sm">Click karein ya file drag karein</p>
                          <p className="text-text-muted text-xs mt-1">JPG, PNG, PDF · Max 5 MB</p>
                        </>
                      )}
                    </div>
                    <input ref={inputRef} type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf"
                      onChange={e => e.target.files[0] && handleFile(e.target.files[0])} />
                    {fileError && <p className="field-error">{fileError}</p>}
                  </div>

                  {/* Consent */}
                  <div className="mt-5 flex items-start gap-3">
                    <input type="checkbox" id="consent" className="mt-1 w-4 h-4 accent-blue-primary flex-shrink-0"
                      {...register('consent',{ required:'Consent dena zaroori hai.' })} />
                    <label htmlFor="consent" className="text-sm text-text-muted leading-relaxed cursor-pointer">
                      Main apni prescription Health Plus Pharmacy ke saath share karne ki anumati deta/deti hoon. Mujhe pata hai ki ye information sirf medicine delivery ke liye use hogi.
                    </label>
                  </div>
                  {errors.consent && <p className="field-error">{errors.consent.message}</p>}

                  <button type="submit" disabled={status === 'loading'}
                    className="btn btn-primary w-full justify-center mt-8 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? '⏳ Submit ho rahi hai...' : '📤 Prescription Submit Karein'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              <div className="bg-blue-dark rounded-2xl p-6 text-white">
                <h4 className="font-head font-bold text-lg mb-4">Prefer WhatsApp?</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-4">Seedha prescription photo WhatsApp kar sakte hain — hum 30 min mein respond karenge.</p>
                <a href={`${WA_URL}?text=Hello%2C%20prescription%20bhejna%20hai`} target="_blank" rel="noopener noreferrer"
                  className="btn btn-green w-full justify-center">💬 WhatsApp Karein</a>
              </div>

              <div className="bg-bg-soft border border-border-hp rounded-2xl p-6">
                <h4 className="font-head font-bold text-blue-dark text-base mb-4">📋 Process</h4>
                <ol className="flex flex-col gap-3">
                  {['Prescription upload karein','Hum review karein & confirm karein','Medicine pack karein','Free delivery aapke ghar tak'].map((s,i)=>(
                    <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="w-5 h-5 rounded-full bg-blue-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-amber-800 text-sm leading-relaxed">
                  🔒 <strong>Privacy:</strong> Aapki prescription completely private hai. Sirf authorized staff hi dekhega. Hum PDPA guidelines follow karte hain.
                </p>
              </div>

              <div className="bg-white border border-border-hp rounded-2xl p-5">
                <h4 className="font-head font-bold text-blue-dark text-sm mb-3">Contact</h4>
                <a href="tel:+917380930902" className="flex items-center gap-2 text-sm text-text-muted hover:text-blue-primary transition-colors mb-2">📞 +91 73809 30902</a>
                <p className="text-xs text-text-muted">⏰ Mon–Sun: 8 AM – 10 PM</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
