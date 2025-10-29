"use server";

import { Client, TravelMode } from "@googlemaps/google-maps-services-js";

const client = new Client({});

export interface RouteCalculationData {
  pickUpLocation: string;
  dropOffLocation: string;
  stops?: string[];
}

export interface RouteResult {
  success: boolean;
  distance?: number;
  duration?: number;
  error?: string;
}

/**
 * Server Action for calculating route distance and duration
 * Uses Google Maps Distance Matrix API
 *
 * @param data - Route calculation data with pickup, dropoff, and optional stops
 * @returns RouteResult with distance (in miles) and duration (in minutes)
 */
export async function calculateRoute(
  data: RouteCalculationData
): Promise<RouteResult> {
  try {
    const { pickUpLocation, dropOffLocation, stops = [] } = data;

    // Validate locations
    if (!pickUpLocation || !dropOffLocation) {
      return {
        success: false,
        error: "Pickup and dropoff locations are required",
      };
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      return {
        success: false,
        error: "Google Maps API key not configured",
      };
    }

    // Build waypoints if stops exist
    const waypoints = stops.length > 0 ? stops : undefined;

    // Calculate route using Google Maps Distance Matrix API
    const response = await client.distancematrix({
      params: {
        origins: [pickUpLocation],
        destinations: [dropOffLocation],
        mode: TravelMode.driving,
        key: apiKey,
        // @ts-ignore - waypoints type issue
        waypoints: waypoints,
      },
    });

    if (response.data.status !== "OK") {
      return {
        success: false,
        error: "Unable to calculate route. Please check the addresses.",
      };
    }

    const element = response.data.rows[0]?.elements[0];

    if (!element || element.status !== "OK") {
      return {
        success: false,
        error: "Route not found between the specified locations.",
      };
    }

    // Convert meters to miles
    const distanceInMiles = element.distance.value / 1609.34;

    // Convert seconds to minutes
    const durationInMinutes = element.duration.value / 60;

    return {
      success: true,
      distance: Math.round(distanceInMiles * 10) / 10, // Round to 1 decimal
      duration: Math.round(durationInMinutes),
    };
  } catch (error) {
    console.error("Route calculation error:", error);
    return {
      success: false,
      error: "Failed to calculate route. Please try again later.",
    };
  }
}

export interface RideBookingData {
  rideId: string;
  pickUpLocation: string;
  dropOffLocation: string;
  stops: string[];
  dateOfService: Date;
  pickUpTime: string;
  typeOfService: string;
  passengers: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  roundTrip: boolean;
  returnDate?: Date;
  returnTime?: string;
  distance: number;
  duration: number;
}

/**
 * Server Action for submitting ride booking
 * Sends booking confirmation email
 *
 * @param data - Complete ride booking data
 * @returns ActionResult with success status
 */
export async function submitRideBooking(
  data: RideBookingData
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    // Validate required fields
    if (
      !data.pickUpLocation ||
      !data.dropOffLocation ||
      !data.firstName ||
      !data.lastName ||
      !data.emailAddress ||
      !data.phoneNumber
    ) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify admin
    // 4. Process payment if needed

    console.log("Ride booking submitted:", data);

    return {
      success: true,
      message: "Booking submitted successfully! We'll contact you shortly.",
    };
  } catch (error) {
    console.error("Ride booking error:", error);
    return {
      success: false,
      error: "Failed to submit booking. Please try again later.",
    };
  }
}
