//Add Stop State Interface
export interface AddStopState {
  stops: string[];
  addStop: () => void;
  removeStop: (index: number) => void;
}

//Form Data Interface
export interface FormData {
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

//Button Props Interface
export interface ButtonProps {
  children: string;
  icon?: JSX.Element;
}

//Heading Props Interface
export interface HeadingProps {
  children: string;
  icon?: React.ReactNode;
}

//Info Layout Props Interface
export interface InfoLayoutProps {
  children: React.ReactNode;
}

//What We Offer Card Props Interface
export interface WhatWeOfferCardProps {
  title: string;
  description: string;
  content: string;
  icon: React.ReactNode;
  buttonName: string;
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
}

//Why Choose Us Circle Props Interface
export interface WhyChooseUsCircleProps {
  numberInfo: string;
  symbol: string;
  title: string;
  info: string;
}

export interface Heading3Props {
  children: string;
}
