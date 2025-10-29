import { ReactNode } from "react";

export interface ContactEmailProps {
  name: string;
  phone: string;
  email: string;
  message?: string;
  errors?: Record<string, string>;
}

export interface ContactEmailStore {
  contactEmail: ContactEmailProps;
  setContactEmail: (contactEmail: ContactEmailProps) => void;
}

//Contact Info Props Interface
export interface ContactInfoProps {
  phoneIcon: ReactNode;
  phone: string;
  phoneNumber: string;
  toolFreeIcon: ReactNode;
  tollFree: string;
  tollFreeNumber: string;
  faxIcon: ReactNode;
  fax: string;
  faxNumber: string;
  emailIcon: ReactNode;
  email: string;
  emailAddress: string;
  emailReservationsIcon: ReactNode;
  emailReservations: string;
  emailAddressReservations: string;
  locationIcon: ReactNode;
  location: string;
  locationAddress: string;
}
