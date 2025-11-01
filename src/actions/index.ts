/**
 * Centralized Server Actions exports
 * Import actions from here to maintain consistency
 */

export { submitContactForm } from "./contact";
export { calculateRoute, submitRideBooking } from "./ride";
export { getVehicles } from "./vehicles";
export type { ContactFormData, ActionResult } from "./contact";
export type {
  RouteCalculationData,
  RouteResult,
  RideBookingData,
} from "./ride";
