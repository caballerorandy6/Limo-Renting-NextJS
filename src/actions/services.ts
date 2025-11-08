"use server";

import { revalidatePath } from "next/cache";

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

export interface ServiceFormData {
  title: string;
  slug: string;
  description: string;
  image: string;
  isActive: boolean;
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
 * Always returns fresh data, requires auth token
 */
export async function getServicesAdmin(token: string): Promise<Service[]> {
  try {
    const response = await fetch(`${API_URL}/services/admin/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // No cache - always fresh
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

/**
 * Create a new service
 */
export async function createService(
  data: ServiceFormData,
  token: string
): Promise<Service> {
  const response = await fetch(`${API_URL}/services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create service");
  }

  const result = await response.json();

  // Revalidate admin services page
  revalidatePath("/admin/services");

  return result;
}

/**
 * Update an existing service
 */
export async function updateService(
  serviceId: string,
  data: ServiceFormData,
  token: string
): Promise<Service> {
  const response = await fetch(`${API_URL}/services/${serviceId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update service");
  }

  const result = await response.json();

  // Revalidate admin services page
  revalidatePath("/admin/services");

  return result;
}

/**
 * Delete a service
 */
export async function deleteService(
  serviceId: string,
  token: string
): Promise<void> {
  const response = await fetch(`${API_URL}/services/${serviceId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete service");
  }

  // Revalidate admin services page
  revalidatePath("/admin/services");
}

/**
 * Toggle service active status
 */
export async function toggleServiceStatus(
  serviceId: string,
  isActive: boolean,
  token: string
): Promise<Service> {
  const response = await fetch(`${API_URL}/services/${serviceId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ isActive }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to toggle service status");
  }

  const result = await response.json();

  // Revalidate admin services page
  revalidatePath("/admin/services");

  return result;
}
