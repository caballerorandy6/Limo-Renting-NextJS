import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormData } from "@/types/forms";

export interface RideState {
  ride: FormData;
  setRide: (ride: Partial<FormData>) => void;
  clearRide: () => void;
  distance: number;
  setDistance: (distance: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  // Vehicle info
  vehicleName: string;
  setVehicleName: (vehicleName: string) => void;
  vehiclePrice: number;
  setVehiclePrice: (vehiclePrice: number) => void;
  vehicleImage: string;
  setVehicleImage: (vehicleImage: string) => void;
  // Booking info
  addOns: {
    childSeat: boolean;
    meetGreet: boolean;
    champagne: boolean;
  };
  setAddOns: (addOns: {
    childSeat: boolean;
    meetGreet: boolean;
    champagne: boolean;
  }) => void;
  addOnsTotal: number;
  setAddOnsTotal: (addOnsTotal: number) => void;
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
  specialInstructions: string;
  setSpecialInstructions: (specialInstructions: string) => void;
  // Hydration state
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
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
        tripTypeId: "",
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
      clearRide: () =>
        set(() => ({
          ride: {
            rideId: "",
            pickUpLocation: "",
            stops: [],
            dropOffLocation: "",
            dateOfService: new Date(),
            pickUpTime: "",
            tripTypeId: "",
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
          distance: 0,
          duration: 0,
          vehicleName: "",
          vehiclePrice: 0,
          vehicleImage: "",
          addOns: {
            childSeat: false,
            meetGreet: false,
            champagne: false,
          },
          addOnsTotal: 0,
          totalPrice: 0,
          specialInstructions: "",
        })),
      distance: 0,
      setDistance: (distance: number) =>
        set((state) => ({ ...state, distance })),
      duration: 0,
      setDuration: (duration: number) =>
        set((state) => ({ ...state, duration })),
      // Vehicle info
      vehicleName: "",
      setVehicleName: (vehicleName: string) =>
        set((state) => ({ ...state, vehicleName })),
      vehiclePrice: 0,
      setVehiclePrice: (vehiclePrice: number) =>
        set((state) => ({ ...state, vehiclePrice })),
      vehicleImage: "",
      setVehicleImage: (vehicleImage: string) =>
        set((state) => ({ ...state, vehicleImage })),
      // Booking info
      addOns: {
        childSeat: false,
        meetGreet: false,
        champagne: false,
      },
      setAddOns: (addOns) => set((state) => ({ ...state, addOns })),
      addOnsTotal: 0,
      setAddOnsTotal: (addOnsTotal: number) =>
        set((state) => ({ ...state, addOnsTotal })),
      totalPrice: 0,
      setTotalPrice: (totalPrice: number) =>
        set((state) => ({ ...state, totalPrice })),
      specialInstructions: "",
      setSpecialInstructions: (specialInstructions: string) =>
        set((state) => ({ ...state, specialInstructions })),
      // Hydration state
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: "ride-info-store",
      storage: createJSONStorage(() => localStorage),
      skipHydration: false,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
