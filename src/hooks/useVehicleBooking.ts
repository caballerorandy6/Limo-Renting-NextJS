import { useState, useCallback } from "react";
import { useRideInfoStore } from "@/stores";
import { calculateRoute as calculateRouteAction } from "@/actions";
import type { FormData } from "@/types/forms";

interface UseVehicleBookingReturn {
  isCalculating: boolean;
  distance: number;
  duration: number;
  calculateRoute: (pickup: string, dropoff: string, stops?: string[]) => Promise<void>;
  updateBookingDetails: (details: Partial<FormData>) => void;
  bookingDetails: FormData;
}

/**
 * Custom hook for vehicle booking functionality
 * Handles route calculation, distance/duration, and booking state
 * Uses Server Actions instead of API routes
 *
 * @example
 * const {
 *   isCalculating,
 *   distance,
 *   duration,
 *   calculateRoute,
 *   updateBookingDetails
 * } = useVehicleBooking();
 */
export function useVehicleBooking(): UseVehicleBookingReturn {
  const [isCalculating, setIsCalculating] = useState(false);
  const { ride, setRide, distance, duration, setDistance, setDuration } =
    useRideInfoStore();

  const calculateRoute = useCallback(
    async (pickup: string, dropoff: string, stops: string[] = []) => {
      if (!pickup || !dropoff) {
        return;
      }

      setIsCalculating(true);

      try {
        // Use Server Action instead of API route
        const result = await calculateRouteAction({
          pickUpLocation: pickup,
          dropOffLocation: dropoff,
          stops,
        });

        if (!result.success) {
          throw new Error(result.error || "Failed to calculate route");
        }

        // Update distance and duration in store
        setDistance(result.distance || 0);
        setDuration(result.duration || 0);
      } catch (error) {
        console.error("Error calculating route:", error);
        setDistance(0);
        setDuration(0);
      } finally {
        setIsCalculating(false);
      }
    },
    [setDistance, setDuration]
  );

  const updateBookingDetails = useCallback(
    (details: Partial<FormData>) => {
      setRide(details);
    },
    [setRide]
  );

  return {
    isCalculating,
    distance,
    duration,
    calculateRoute,
    updateBookingDetails,
    bookingDetails: ride,
  };
}
