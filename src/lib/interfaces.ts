//Add Stop State Interface
export interface AddStopState {
  stops: string[];
  addStop: () => void;
  removeStop: (index: number) => void;
}

export interface SelectFieldProps {
  name: string;
  label: string;
  control: any;
  options: string[];
  error: React.ReactNode;
}

//Form Data Interface
export interface FormData {
  rideId: string;
  pickUpLocation: string;
  stops: string[];
  dropOffLocation: string;
  dateOfService: Date;
  pickUpTime: string;
  typeOfService: string;
  passengers: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  countries: string[];
  messageData?: boolean;
  roundTrip?: boolean;
  returnDate?: Date;
  returnTime?: string;
}

export interface FormContactData {
  name: string;
  phone: string;
  email: string;
  message?: string;
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

//Info Layout Props Interface
export interface InfoLayoutProps {
  children: React.ReactNode;
}

//Round Trip Interface
export interface RoundTrip {
  roundTrip: boolean;
}

//Featured Vehicles Card Props Interface
export interface FeaturedVehiclesCardProps {
  carousel: React.ReactNode;
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

//Reviews Props Interface
export interface ReviewsProps {
  comment: string;
  stars: JSX.Element;
  name: string;
}

//Partners Testimonials Images Props Interface
export interface PartnersTestimonialsImagesProps {
  src: string;
  alt: string;
  href: string;
}

//Contact Info Card Props Interface
export interface ContactInfoCardProps {
  phoneNumberTitle: string;
  phoneIcon: React.ReactNode;
  hrefPhone: string;
  phoneNumber: string;
  emailTitle: string;
  emailIcon: React.ReactNode;
  hrefEmail: string;
  email: string;
  locationTitle: string;
  locationFooterIcon: React.ReactNode;
  hrefLocation: string;
  location: string;
}

//Contact Info Props Interface
export interface ContactInfoProps {
  phoneIcon: JSX.Element;
  phone: string;
  phoneNumber: string;
  toolFreeIcon: React.ReactNode;
  tollFree: string;
  tollFreeNumber: string;
  faxIcon: React.ReactNode;
  fax: string;
  faxNumber: string;
  emailIcon: React.ReactNode;
  email: string;
  emailAddress: string;
  emailReservationsIcon: React.ReactNode;
  emailReservations: string;
  emailAddressReservations: string;
  locationIcon: React.ReactNode;
  location: string;
  locationAddress: string;
}

//About List Props Interface
export interface AboutListProps {
  title: string;
  icon: React.ReactNode;
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

export interface CarouselProps {
  images: string[];
}

export interface PoiProps {
  key: string;
  location: google.maps.LatLngLiteral;
}
