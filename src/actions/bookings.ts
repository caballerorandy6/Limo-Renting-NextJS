"use server";

import { BookingApiResponse } from "@/types/bookings";
import { createBookingSchema } from "@/lib/zod";
import { z } from "zod";

type CreateBookingFormData = z.infer<typeof createBookingSchema>;

// Fetch all bookings for admin dashboard
export const getAllBookingsAdmin = async (
  token: string
): Promise<BookingApiResponse[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
      {
        cache: "no-store", // Always fetch fresh data for admin
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch bookings: ${response.statusText}`);
      return [];
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return []; // Return empty array instead of throwing
  }
};

// Create a new booking
export const createBooking = async (data: CreateBookingFormData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(
        `Failed to create booking: ${response.status} - ${errorText}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

// Get booking by ID
export const getBookingById = async (
  id: string,
  token: string
): Promise<BookingApiResponse | null> => {
  try {
    const booking = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!booking.ok) {
      console.warn(`Failed to fetch booking: ${booking.status}`);
      return null;
    }

    return booking.json();
  } catch (error) {
    console.error("Error fetching booking:", error);
    return null; // Return null instead of throwing
  }
};

// Delete booking by ID
export const deleteBookingById = async (
  id: string,
  token: string
): Promise<void> => {
  try {
    const deletedBooking = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!deletedBooking.ok) {
      throw new Error(`Failed to delete booking: ${deletedBooking.status}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

//Update booking by ID
export const updateBookingById = async (
  id: string,
  data: Partial<CreateBookingFormData>,
  token: string
): Promise<BookingApiResponse> => {
  try {
    const updatedBooking = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!updatedBooking.ok) {
      throw new Error(`Failed to update booking: ${updatedBooking.status}`);
    }

    return updatedBooking.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
