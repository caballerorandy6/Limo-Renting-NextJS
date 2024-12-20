import { NextResponse, NextRequest } from "next/server";

interface DistanceMatrixResponse {
  rows: Array<{
    elements: Array<{
      distance: {
        value: number;
      };
      duration: {
        value: number;
      };
    }>;
  }>;
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

export async function POST(req: NextRequest): Promise<Response> {
  const formData = await req.json();
  const { pickUpLocation, stops, dropOffLocation, roundTrip } = formData;

  if (!pickUpLocation || !dropOffLocation) {
    return NextResponse.json(
      { error: "Pick up and drop off locations are required" },
      { status: 400 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${pickUpLocation}&destinations=${dropOffLocation}&waypoints=${stops}&key=${GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Google Maps API" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const row = data.rows[0].elements[0];

    //Get distance and duration from Google Maps API
    let distanceInMiles = row.distance.value * 0.000621371; // Convert meters to miles
    let durationInHours = row.duration.value / 3600; // Convert seconds to hours

    // If round trip, double the distance and duration
    if (roundTrip) {
      distanceInMiles *= 2;
      durationInHours *= 2;
    }

    return NextResponse.json(
      {
        distanceInMiles: distanceInMiles.toFixed(2),
        durationInHours: durationInHours.toFixed(2),
        message: "Ride created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create ride" },
      { status: 500 }
    );
  }
}
