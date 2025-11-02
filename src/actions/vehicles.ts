"use server";

import { VehicleApiResponse } from "@/types/fleet";

export async function getVehicles(): Promise<VehicleApiResponse[]> {
  try {
    const vehicles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`,
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
    )

    if(!vehicle.ok){
      throw new Error("Failed to fetch vehicle by ID");
    }

    return vehicle.json();
  } catch (error) {
    console.error("Error fetching vehicle by ID:", error);
    throw error;
  }
}
