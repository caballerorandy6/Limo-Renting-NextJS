import { OrganizationSchema } from "@/types/seo";

export const siteConfig = {
  name: "American Transportation & Limo Services",
  description:
    "Top-Rated Car Services in Miami. Affordable and reliable limo services for all occasions. Enjoy luxurious & comfortable rides with our professional chauffeurs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  ogImage: "/og-image.jpg",
  locale: "en_US",
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
  author: "American Transportation & Limo Services",
  contact: {
    phone: "305-885-5003",
    tollFree: "877-377-0347",
    email: "info@americantransportation.com",
  },
  address: {
    streetAddress: "",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "",
    addressCountry: "US",
  },
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
};

export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "Customer Service",
    areaServed: "US-FL",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
};

// Servicio-specific SEO data
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
  },
};
