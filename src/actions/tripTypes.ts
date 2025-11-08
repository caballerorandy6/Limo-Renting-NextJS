"use server";

import { revalidatePath } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

export interface TripType {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _count: {
    bookings: number;
  };
}

export interface TripTypeFormData {
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
}

/**
 * Fetch all trip types - NO CACHE (for admin panel)
 * Always returns fresh data
 */
export async function getTripTypesAdmin(token: string): Promise<TripType[]> {
  try {
    const response = await fetch(`${API_URL}/trip-types/admin/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // No cache - always fresh
    });

    if (!response.ok) {
      console.warn(`Failed to fetch trip types: ${response.statusText}`);
      return [];
    }

    const tripTypes: TripType[] = await response.json();
    return tripTypes;
  } catch (error) {
    console.error("Error fetching trip types:", error);
    return [];
  }
}

/**
 * Create a new trip type
 */
export async function createTripType(
  data: TripTypeFormData,
  token: string
): Promise<TripType> {
  const response = await fetch(`${API_URL}/trip-types`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create trip type");
  }

  const result = await response.json();

  // Revalidate admin trip types page
  revalidatePath("/admin/trip-types");

  return result;
}

/**
 * Update an existing trip type
 */
export async function updateTripType(
  tripTypeId: string,
  data: TripTypeFormData,
  token: string
): Promise<TripType> {
  const response = await fetch(`${API_URL}/trip-types/${tripTypeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update trip type");
  }

  const result = await response.json();

  // Revalidate admin trip types page
  revalidatePath("/admin/trip-types");

  return result;
}

/**
 * Delete a trip type
 */
export async function deleteTripType(
  tripTypeId: string,
  token: string
): Promise<void> {
  const response = await fetch(`${API_URL}/trip-types/${tripTypeId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete trip type");
  }

  // Revalidate admin trip types page
  revalidatePath("/admin/trip-types");
}

/**
 * Toggle trip type active status
 */
export async function toggleTripTypeStatus(
  tripTypeId: string,
  isActive: boolean,
  token: string
): Promise<TripType> {
  const response = await fetch(`${API_URL}/trip-types/${tripTypeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ isActive }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to toggle trip type status");
  }

  const result = await response.json();

  // Revalidate admin trip types page
  revalidatePath("/admin/trip-types");

  return result;
}
