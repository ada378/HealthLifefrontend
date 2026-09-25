import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUpload, FaWhatsapp, FaPhoneAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HERO_IMAGES, PHONE_DISPLAY, WA_URL } from '../data/constants'
import hero1 from '../assets/hero1.avif'
import hero2 from '../assets/hero2.avif'
import herosectionmednata from '../assets/herosectionmednata.avif'

const heroImages = [
  {
    id: 1,
    src: hero1,
    alt: 'Health Plus Pharmacy - Quality Healthcare',
    title: 'Quality Healthcare Services',
    subtitle: 'Trusted by families across Lucknow'
  },
  {
    id: 2, 
    src: hero2,
    alt: 'Health Plus Pharmacy - Home Delivery',
    title: 'Free Home Delivery',
    subtitle: 'Medicines delivered right to your doorstep'
  },
  {
    id: 3,
    src: herosectionmednata, 
    alt: 'Health Plus Pharmacy - Near Medanta Hospital',
    title: 'Located Near Medanta Hospital',
    subtitle: 'Behind Medanta Hospital, Lodi Plaza'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative overflow-hidden h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] max-h-[900px]">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-neutral-900/80" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container-hp">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full py-16 sm:py-20">
                  {/* Left Content */}
                  <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                    
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-head font-bold text-white leading-tight mb-4 sm:mb-6">
                      Your Health,<br />
                      <span className="text-green-400">Our Priority</span>
                    </h1>
                    
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-head font-semibold mb-4 sm:mb-6 text-green-300 leading-tight">
                      {image.title}
                    </h2>
                    
                    <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0">
                      Professional healthcare services with genuine medicines, free home delivery, and expert medical care — delivered right to your doorstep in Lucknow.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                      <Link 
                        to="/upload-prescription" 
                        className="btn bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                      >
                        <FaUpload className="w-4 h-4 sm:w-5 sm:h-5" />
                        Upload Prescription
                      </Link>
                      <a 
                        href={`${WA_URL}?text=Hello%20Health%20Plus%20Pharmacy`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                      >
                        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                        WhatsApp Us
                      </a>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
                      <a 
                        href="tel:+917380930902" 
                        className="flex items-center gap-2 text-white/70 hover:text-white no-underline transition-colors"
                      >
                        <FaPhoneAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
                      </a>
                      <span className="hidden sm:inline text-white/30">|</span>
                      <div className="flex items-center gap-2">
                        <FaClock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">Open 8 AM – 10 PM Daily</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Stats Cards */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:justify-self-end mt-8 lg:mt-0">
                    {[
                      { 
                        icon: <FaUpload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                        value: '100%', 
                        label: 'Genuine Medicines' 
                      },
                      { 
                        icon: <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                        value: 'FREE', 
                        label: 'Home Delivery' 
                      },
                      { 
                        icon: <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                        value: 'At Home', 
                        label: 'Injection Visit' 
                      },
                      { 
                        icon: <FaClock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
                        value: 'Daily', 
                        label: 'Care Services' 
                      },
                    ].map((stat, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white/10 backdrop-blur border border-white/15 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
                      >
                        <div className="text-green-400 mb-2 sm:mb-3 flex justify-center">{stat.icon}</div>
                        <div className="font-head font-bold text-white text-sm sm:text-base lg:text-lg mb-1">{stat.value}</div>
                        <div className="text-white/70 text-xs sm:text-sm leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-green-500 w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}