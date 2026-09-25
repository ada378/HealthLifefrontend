import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" description="Page not found — Health Plus Pharmacy Lucknow." />
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-5">
        <div className="text-center max-w-md">
          <div className="font-head font-black text-[120px] md:text-[160px] text-blue-primary opacity-10 leading-none select-none">
            404
          </div>
          <div className="text-6xl -mt-10 mb-6">🏥</div>
          <h1 className="text-2xl md:text-3xl font-head font-black text-blue-dark mb-3">Page Nahi Mila!</h1>
          <p className="text-text-muted text-base leading-relaxed mb-8">
            Aap jo page dhundh rahe hain wo exist nahi karta ya move ho gaya hai. Home page par wapas jaiye.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="btn btn-primary">🏠 Go to Home</Link>
            <Link to="/contact" className="btn btn-outline">📩 Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
