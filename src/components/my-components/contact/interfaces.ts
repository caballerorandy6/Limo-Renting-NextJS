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
