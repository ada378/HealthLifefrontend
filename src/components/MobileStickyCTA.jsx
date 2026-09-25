import { Link } from 'react-router-dom'

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border-hp px-4 py-3 flex gap-2 shadow-lg">
      <a
        href="tel:+917380930902"
        className="btn btn-primary flex-1 justify-center text-sm py-3"
      >
        📞 Call Now
      </a>
      <Link
        to="/upload-prescription"
        className="btn btn-green flex-1 justify-center text-sm py-3"
      >
        📋 Upload Rx
      </Link>
    </div>
  )
}
