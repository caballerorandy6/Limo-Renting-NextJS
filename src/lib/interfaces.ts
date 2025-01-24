//Add Stop State Interface

export interface SelectFieldProps {
  name: string;
  label: string;
  control: any;
  options: string[];
  error: React.ReactNode;
}

//Country Interface
export interface Country {
  name: {
    common: string;
  };
  flag: string;
}

//Country Store Interface
export interface CountryStore {
  countries: Country[];
  fetchCountries: () => Promise<void>;
}

//Round Trip Interface
export interface RoundTrip {
  roundTrip: boolean;
}

//Featured Vehicles Card Props Interface
export interface FeaturedVehiclesCardProps {
  imagesCarousel: string[];
  title: string;
  carIcon: React.ReactNode;
  exterior: string;
  color1: string;
  carSeatIcon: React.ReactNode;
  interior: string;
  color2: string;
  minibarIcon: React.ReactNode;
  features: string;
  featuresObject: string;
}

//Menu Array Interface
export interface MenuArray {
  name: string;
  url: string;
  id: string;
  url2?: string;
}

//Why Choose Us Circle Props Interface
export interface WhyChooseUsCircleProps {
  numberInfo: string;
  symbol: string;
  title: string;
  info: string;
}

//Partners Testimonials Images Props Interface
export interface PartnersTestimonialsImagesProps {
  src: string;
  alt: string;
  href: string;
}

export interface VehicleProps {
  id: number;
  name: string;
  quantityPassengers: string;
  quantityBaggage: string;
  description: string;
  pricePerHour: number;
  pricePerMile: number;
  images: string[];
}

export interface PoiProps {
  key: string;
  location: google.maps.LatLngLiteral;
}
