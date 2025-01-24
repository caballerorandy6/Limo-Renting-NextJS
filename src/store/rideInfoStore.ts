import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormData } from "@/components/my-components/form/interfaces";

export interface RideState {
  ride: FormData;
  setRide: (ride: Partial<FormData>) => void;
  distance: number;
  setDistance: (distance: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
}

export const useRideInfoStore = create<RideState>()(
  persist(
    (set) => ({
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
      setRide: (ride: Partial<FormData>) =>
        set((state) => ({
          ride: { ...state.ride, ...ride },
        })),
      distance: 0,
      setDistance: (distance: number) =>
        set((state) => ({ ...state, distance })),
      duration: 0,
      setDuration: (duration: number) =>
        set((state) => ({ ...state, duration })),
    }),
    {
      name: "ride-info-store", // Clave para persistencia en localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
