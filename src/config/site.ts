/**
 * Site configuration for American Transportation & Limo Services
 *
 * This file contains all the site-wide configuration including:
 * - Base URL and site name
 * - Contact information
 * - Default SEO settings
 * - Social media links
 * - Business information
 */

export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  siteName: "American Transportation & Limo Services",
  description:
    "Top-Rated Car Services in Miami. Affordable and reliable limo services for all occasions. Enjoy luxurious & comfortable rides with our professional chauffeurs.",
  defaultOgImg: "/og-default.jpg",

  // Contact Information (Generic values for educational purposes)
  contact: {
    phone: "(555) 123-4567",
    tollFree: "(800) 555-0123",
    email: "info@example.com",
  },

  // Business Address
  address: {
    streetAddress: "",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "",
    addressCountry: "US",
  },

  // Social Media
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },

  // SEO Keywords
  keywords: [
    "Miami limo service",
    "luxury car service Miami",
    "Miami airport transportation",
    "wedding limousine Miami",
    "corporate limo service",
    "party bus rental Miami",
    "chauffeur service Miami",
    "luxury transportation Miami",
    "Miami car service",
    "MIA airport limo",
  ],

  // Business Information
  business: {
    name: "American Transportation & Limo Services",
    legalName: "American Transportation & Limo Services",
    founded: "2000",
    areaServed: "Miami-Dade County, FL",
  },
};

/**
 * Service-specific metadata for dynamic pages
 */
export const servicesMetadata = {
  weddings: {
    title: "Wedding Limousine Service Miami | Luxury Wedding Transportation",
    description:
      "Premium wedding limousine services in Miami. Classic Rolls-Royce, luxury limos, and party buses for your special day. Professional chauffeurs for wedding transportation.",
    keywords: [
      "wedding limo Miami",
      "wedding car service",
      "Miami wedding transportation",
      "Rolls Royce rental Miami",
      "wedding shuttle service",
    ],
    ogImg: "/og-weddings.jpg",
  },
  "corporate-services": {
    title: "Corporate Limo Service Miami | Executive Transportation",
    description:
      "Professional corporate limousine and car service in Miami. Airport transfers, business meetings, and corporate events. Reliable executive transportation.",
    keywords: [
      "corporate limo Miami",
      "executive car service",
      "business transportation",
      "corporate airport transfer",
      "Miami business limo",
    ],
    ogImg: "/og-corporate.jpg",
  },
  "party-bus-rentals": {
    title: "Party Bus Rental Miami | Luxury Party Bus Service",
    description:
      "Rent a party bus in Miami for up to 30 passengers. Perfect for nightlife, celebrations, and special events. Equipped with music, WiFi, and beverages.",
    keywords: [
      "party bus Miami",
      "Miami party bus rental",
      "30 passenger party bus",
      "nightlife transportation",
      "Miami party bus service",
    ],
    ogImg: "/og-party-bus.jpg",
  },
  "bachelorette-parties": {
    title: "Bachelor & Bachelorette Party Limo Miami | Party Transportation",
    description:
      "Premium limo and party bus service for bachelor and bachelorette parties in Miami. Luxury vehicles for 3-30 passengers. Make your last night out memorable.",
    keywords: [
      "bachelor party Miami",
      "bachelorette party limo",
      "Miami party transportation",
      "bachelor party bus",
      "Miami nightlife limo",
    ],
    ogImg: "/og-bachelorette.jpg",
  },
  "nights-on-the-town": {
    title: "Night on the Town Limo Service Miami | VIP Transportation",
    description:
      "Luxury limo service for nights out in Miami. Explore the vibrant nightlife in style with professional chauffeurs and premium vehicles.",
    keywords: [
      "Miami nightlife limo",
      "night out transportation",
      "VIP car service Miami",
      "Miami bar hopping limo",
      "nightclub transportation",
    ],
    ogImg: "/og-nightlife.jpg",
  },
  "airport-transfers": {
    title: "Miami Airport Transportation | MIA Limo & Car Service",
    description:
      "Premium Miami International Airport (MIA) transportation service. 24/7 airport limo service with professional chauffeurs. Luxury airport transfers.",
    keywords: [
      "MIA airport limo",
      "Miami airport transportation",
      "Miami airport car service",
      "MIA airport transfer",
      "Miami International Airport limo",
    ],
    ogImg: "/og-airport.jpg",
  },
  "global-services": {
    title: "Global Transportation Services | Worldwide Luxury Car Service",
    description:
      "Global luxury transportation services with American Transportation. Reliable car service wherever your journey takes you worldwide.",
    keywords: [
      "global car service",
      "international limo service",
      "worldwide transportation",
      "global luxury transportation",
    ],
    ogImg: "/og-global.jpg",
  },
  "travel-planning": {
    title: "Travel Planning Services Miami | Luxury Travel Coordination",
    description:
      "Comprehensive travel planning services in Miami. Expert itinerary management, accommodation bookings, and luxury transportation coordination.",
    keywords: [
      "Miami travel planning",
      "luxury travel coordination",
      "travel itinerary Miami",
      "Miami concierge service",
    ],
    ogImg: "/og-travel.jpg",
  },
  "event-planning": {
    title: "Event Planning & Transportation Miami | Corporate & Private Events",
    description:
      "Professional event planning and transportation services in Miami. Perfect for corporate conferences, weddings, and special celebrations.",
    keywords: [
      "Miami event planning",
      "event transportation Miami",
      "corporate event limo",
      "wedding transportation planning",
    ],
    ogImg: "/og-events.jpg",
  },
  "sporting-events": {
    title: "Miami Sports Event Transportation | Heat, Dolphins, Marlins Games",
    description:
      "Luxury transportation for Miami sporting events. Limo service to Heat games, Dolphins matches, and Marlins baseball. VIP game day experience.",
    keywords: [
      "Miami Heat limo",
      "Dolphins game transportation",
      "Marlins game car service",
      "Miami sports event limo",
    ],
    ogImg: "/og-sports.jpg",
  },
  "tours-sight-seeing": {
    title: "Miami Tours & Sightseeing | Luxury City Tours",
    description:
      "Guided Miami tours and sightseeing services. Explore South Beach, Art Deco District, Little Havana, and Wynwood in luxury comfort.",
    keywords: [
      "Miami tours",
      "Miami sightseeing",
      "South Beach tour",
      "Miami city tours",
      "luxury Miami tours",
    ],
    ogImg: "/og-tours.jpg",
  },
};
