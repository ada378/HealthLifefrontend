import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { WA_URL, PHONE_DISPLAY } from '../data/constants'

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 sm:right-6 bottom-20 sm:bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`${WA_URL}?text=Hello%20Health%20Plus%20Pharmacy%2C%20I%20need%20help`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <FaWhatsapp className="w-7 h-7 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+917380930902"
        className="group relative"
        aria-label="Call us now"
      >
        <div className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <FaPhoneAlt className="w-6 h-6 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call {PHONE_DISPLAY}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </a>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .group:nth-child(1) > div {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  )
}