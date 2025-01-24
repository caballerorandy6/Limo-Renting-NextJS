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

export interface CheckboxFieldProps {
  name: string;
  label: string;
  control: any;
}

export interface ErrorFormProps {
  children: React.ReactNode;
}

export interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  type: string;
  id: string;
}
