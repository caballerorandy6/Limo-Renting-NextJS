import { Vehicle } from "./vehicles";
import { Service } from "./services";

export type BookingStatus = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";

export type BookingApiResponse = {
  id: string;
  bookingNumber: string;

  // Customer Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Trip Details
  pickUpLocation: string;
  dropOffLocation: string;
  stops: string[];
  dateOfService: string;
  pickUpTime: string;

  // Round Trip
  roundTrip: boolean;
  returnDate: string | null;
  returnTime: string | null;

  // Service Details
  typeOfService: string;
  passengers: number;

  // Add-ons
  childSeat: boolean;
  meetGreet: boolean;
  champagne: boolean;
  addOnsTotal: number;

  // Pricing & Distance
  distance: number | null;
  duration: number | null;
  totalPrice: number;

  // Special Instructions
  specialInstructions: string | null;

  // Status
  status: BookingStatus;

  // Relations
  vehicle: Vehicle;
  service: Service | null;

  // Timestamps
  createdAt: string;
  updatedAt: string;
};
