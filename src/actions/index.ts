/**
 * Centralized Server Actions exports
 * Import actions from here to maintain consistency
 */

export { submitContactForm, getAllContacts, getContactById, updateContactStatus, deleteContact } from "./contacts";
export { calculateRoute, submitRideBooking } from "./ride";
export { getVehicles } from "./vehicles";
export type { ContactFormData, ActionResult, Contact } from "./contacts";
export type {
  RouteCalculationData,
  RouteResult,
  RideBookingData,
} from "./ride";
