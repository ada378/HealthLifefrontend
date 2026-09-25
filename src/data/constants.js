import { 
  FaPills, FaTruck, FaSyringe, FaHeartbeat, 
  FaCubes, FaRedo, FaWheelchair, FaShieldAlt, 
  FaHome, FaStethoscope 
} from 'react-icons/fa'

export const PHONE        = '+917380930902'
export const PHONE_DISPLAY = '+91 73809 30902'
export const WA_URL       = 'https://wa.me/917380930902'
export const WA_HELLO     = `${WA_URL}?text=Hello%20Health%20Plus%20Pharmacy%2C%20I%20need%20help`
export const ADDRESS      = 'Gate No. 6, Behind Medanta Hospital, Lodi Plaza, Lucknow, UP'
export const TIMINGS      = 'Mon – Sun: 8:00 AM – 10:00 PM'
export const DOMAIN       = 'https://healthpluspharmacy.in'

// Hero carousel images
export const HERO_IMAGES = [
  {
    id: 1,
    src: '/src/assets/hero1.avif',
    alt: 'Health Plus Pharmacy - Quality Healthcare',
    title: 'Quality Healthcare Services',
    subtitle: 'Trusted by families across Lucknow'
  },
  {
    id: 2, 
    src: '/src/assets/hero2.avif',
    alt: 'Health Plus Pharmacy - Home Delivery',
    title: 'Free Home Delivery',
    subtitle: 'Medicines delivered right to your doorstep'
  },
  {
    id: 3,
    src: '/src/assets/herosectionmednata.avif', 
    alt: 'Health Plus Pharmacy - Near Medanta Hospital',
    title: 'Located Near Medanta Hospital',
    subtitle: 'Convenient location for all your healthcare needs'
  }
]

// Services with function components to avoid JSX in constants
export const SERVICES = [
  { 
    id: 'medicines',  
    iconName: 'FaPills',
    title: 'Prescription & OTC Medicines',          
    short: 'All genuine prescription and over-the-counter medicines, sourced from verified distributors.' 
  },
  { 
    id: 'delivery',   
    iconName: 'FaTruck',
    title: 'Free Home Delivery',                     
    short: 'Medicines delivered to your doorstep — 100% free, no minimum order.' 
  },
  { 
    id: 'injection',  
    iconName: 'FaSyringe',
    title: 'Injection Visit at Home',                
    short: 'Trained staff visits your home to administer injections safely.' 
  },
  { 
    id: 'dressing',   
    iconName: 'FaHeartbeat',
    title: 'Dressing Services at Home',              
    short: 'Professional wound dressing at your home by experienced staff.' 
  },
  { 
    id: 'consumables',
    iconName: 'FaCubes',
    title: 'Health Products & Consumables',          
    short: 'Gloves, masks, bandages, sanitizers, glucometer strips & more.' 
  },
  { 
    id: 'refill',     
    iconName: 'FaRedo',
    title: 'Medicine Refill Reminder',               
    short: 'Never miss a dose — we remind you before your medicines run out.' 
  },
  { 
    id: 'equipment',  
    iconName: 'FaWheelchair',
    title: 'Medical Equipment Rental & Supply',      
    short: 'Wheelchairs, oxygen concentrators, walkers, hospital beds & more.' 
  },
]

export const TRUST_ITEMS = [
  { 
    iconName: 'FaShieldAlt',
    label: 'Genuine Medicines' 
  },
  { 
    iconName: 'FaTruck',
    label: 'Free Home Delivery' 
  },
  { 
    iconName: 'FaSyringe',
    label: 'Injection Visit' 
  },
  { 
    iconName: 'FaHeartbeat',
    label: 'Care Services' 
  },
  { 
    iconName: 'FaStethoscope',
    label: 'Medical Equipment' 
  },
]

// Icon mapping for dynamic rendering
export const ICON_MAP = {
  FaPills,
  FaTruck, 
  FaSyringe,
  FaHeartbeat,
  FaCubes,
  FaRedo,
  FaWheelchair,
  FaShieldAlt,
  FaHome,
  FaStethoscope
}
