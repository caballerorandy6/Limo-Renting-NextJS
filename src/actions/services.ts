"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _count: {
    bookings: number;
  };
}

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

/**
 * Fetch all active services - WITH CACHE (for public pages)
 * Uses Next.js cache with 1 hour revalidation
 */
export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_URL}/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.warn(`Failed to fetch services: ${response.statusText}`);
      return [];
    }

    const services: Service[] = await response.json();
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

/**
 * Fetch all services - NO CACHE (for admin panel)
 * Always returns fresh data
 */
export async function getServicesAdmin(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_URL}/services/admin/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // No cache - always fresh
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }

    const services: Service[] = await response.json();
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

/**
 * Fetch all active trip types - WITH CACHE (for public pages)
 * Uses Next.js cache with 1 hour revalidation
 */
export async function getTripTypes(): Promise<TripType[]> {
  try {
    const response = await fetch(`${API_URL}/trip-types`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
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
 * Fetch all trip types - NO CACHE (for admin panel)
 * Always returns fresh data
 */
export async function getTripTypesAdmin(): Promise<TripType[]> {
  try {
    const response = await fetch(`${API_URL}/trip-types/admin/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // No cache - always fresh
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch trip types: ${response.statusText}`);
    }

    const tripTypes: TripType[] = await response.json();
    return tripTypes;
  } catch (error) {
    console.error("Error fetching trip types:", error);
    return [];
  }
}
