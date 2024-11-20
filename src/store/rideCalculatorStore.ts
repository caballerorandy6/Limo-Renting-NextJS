import { create } from "zustand";

import { RideProps } from "@/lib/interfaces";

export const useRideCalculatorStore = create<RideProps>(() => ({
  milesCost: (milesQuantity: number, pricePerMile: number) =>
    milesQuantity * pricePerMile,
  hoursCost: (hoursQuantity: number, pricePerHour: number) =>
    hoursQuantity * pricePerHour,
  calculateTotalCost: (milesCost: number, hoursCost: number) =>
    milesCost + hoursCost,
}));
