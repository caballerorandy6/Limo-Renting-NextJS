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
