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

export interface CurrentYearProps {
  currentYear: () => number;
}
