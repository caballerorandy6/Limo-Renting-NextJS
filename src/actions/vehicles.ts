"use server";

import { VehicleApiResponse } from "@/types/fleet";
import { revalidatePath } from "next/cache";
import { vehicleSchema } from "@/lib/zod";
import { z } from "zod";

type VehicleFormData = z.infer<typeof vehicleSchema>;

// Fetch all vehicles for ADMIN (no cache - always fresh)
export async function getVehiclesAdmin(): Promise<VehicleApiResponse[]> {
  try {
    const vehicles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles`,
      {
        cache: "no-store", // Always fetch fresh data for admin
      }
    );

    if (!vehicles.ok) {
      throw new Error("Failed to fetch vehicles");
    }

    return vehicles.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
}

// Fetch all vehicles for PUBLIC (ISR - revalidate every 1 hour)
export async function getVehicles(): Promise<VehicleApiResponse[]> {
  try {
    const vehicles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles`,
      {
        next: { revalidate: 3600 }, // Revalidate every 1 hour
      }
    );

    if (!vehicles.ok) {
      throw new Error("Failed to fetch vehicles");
    }

    return vehicles.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    // Return empty array during build instead of throwing
    return [];
  }
}

// Fetch vehicle by ID
export async function getVehicleById(id: string): Promise<VehicleApiResponse | null> {
  try {
    const vehicle = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/${id}`,
      {
        next: { revalidate: 3600 }, // Revalidate every 1 hour
      }
    );

    if (!vehicle.ok) {
      console.warn("Failed to fetch vehicle by ID");
      return null;
    }

    return vehicle.json();
  } catch (error) {
    console.error("Error fetching vehicle by ID:", error);
    return null;
  }
}

// Create a new vehicle
export async function createVehicle(
  imageUrl: string,
  formData: Omit<VehicleFormData, "image">,
  token: string
): Promise<VehicleApiResponse> {
  // Convert frontend format to backend format
  const payload = {
    name: formData.name,
    quantityPassengers: formData.quantityPassengers,
    quantityBaggage: formData.quantityBaggage,
    description: formData.description,
    pricePerHour: formData.pricePerHour,
    pricePerMile: formData.pricePerMile,
    isActive: formData.isActive,
    images: [imageUrl],
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create vehicle");
  }

  const result = await response.json();

  // Revalidate both admin and fleet pages
  revalidatePath("/admin/vehicles");
  revalidatePath("/fleet");

  return result;
}

//
export async function updateVehicle(
  vehicleId: string,
  imageUrl: string,
  formData: Omit<VehicleFormData, "image">,
  token: string
): Promise<VehicleApiResponse> {
  // Convert frontend format to backend format
  const payload = {
    name: formData.name,
    quantityPassengers: formData.quantityPassengers,
    quantityBaggage: formData.quantityBaggage,
    description: formData.description,
    pricePerHour: formData.pricePerHour,
    pricePerMile: formData.pricePerMile,
    isActive: formData.isActive,
    images: [imageUrl],
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/${vehicleId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update vehicle");
  }

  const result = await response.json();

  // Revalidate both admin and fleet pages
  revalidatePath("/admin/vehicles");
  revalidatePath("/fleet");

  return result;
}

// Delete vehicle
export async function deleteVehicle(
  vehicleId: string,
  token: string
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/${vehicleId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete vehicle");
  }

  // Revalidate both admin and fleet pages
  revalidatePath("/admin/vehicles");
  revalidatePath("/fleet");
}
