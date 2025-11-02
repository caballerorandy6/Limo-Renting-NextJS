"use server";

import { VehicleApiResponse } from "@/types/fleet";
import { revalidatePath } from "next/cache";

export async function getVehicles(): Promise<VehicleApiResponse[]> {
  try {
    const vehicles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`,
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

export async function getVehicleById(id: string): Promise<VehicleApiResponse> {
  try {
    const vehicle = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/${id}`,
      {
        next: { revalidate: 3600 }, // Revalidate every 1 hour
      }
    );

    if (!vehicle.ok) {
      throw new Error("Failed to fetch vehicle by ID");
    }

    return vehicle.json();
  } catch (error) {
    console.error("Error fetching vehicle by ID:", error);
    throw error;
  }
}

export async function createVehicle(
  data: FormData, token: string
): Promise<VehicleApiResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create vehicle");
  }

  const result = await response.json();
  revalidatePath("/admin/vehicles");
  return result;
}
