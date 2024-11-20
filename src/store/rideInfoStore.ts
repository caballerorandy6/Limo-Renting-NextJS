import { create } from "zustand";

import { Ride } from "@/lib/interfaces";

export const useRideInfoStore = create<Ride>((set) => ({
  ride: {
    rideId: "",
    pickUpLocation: "",
    stops: [],
    dropOffLocation: "",
    dateOfService: new Date(),
    pickUpTime: "",
    typeOfService: "",
    passengers: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    countries: [],
    messageData: false,
    roundTrip: false,
    returnDate: new Date(),
    returnTime: "",
  },
  setRide: (ride) => set({ ride }),
}));
