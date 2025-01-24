import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const origins = searchParams.get("origins");
  const destinations = searchParams.get("destinations");
  const stops = searchParams.get("stops");

  if (!origins || !destinations) {
    return NextResponse.json(
      { error: "Faltan los parámetros obligatorios: origen y destino" },
      { status: 400 }
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Clave API no configurada" },
      { status: 500 }
    );
  }

  const waypoints =
    stops && stops.length > 0
      ? `&waypoints=${stops.split(",").map(encodeURIComponent).join("|")}`
      : "";

  try {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
      origins
    )}&destinations=${encodeURIComponent(
      destinations
    )}${waypoints}&units=imperial&key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error en la respuesta de Google API");
    }

    const data = await response.json();
    const element = data.rows[0]?.elements[0];

    if (element.status !== "OK") {
      throw new Error("No se pudo calcular la distancia");
    }

    const distanceMiles = Math.ceil(
      parseFloat((element.distance.value * 0.000621371).toFixed(2))
    );

    const durationHours = Math.ceil(
      parseFloat((element.duration.value / 3600).toFixed(4))
    );

    // const durationMinutes = Math.ceil(
    //   parseFloat((element.duration.value / 60).toFixed(2))
    // );

    return NextResponse.json({
      distance: distanceMiles,
      duration: durationHours,
      //duration: durationMinutes,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error al comunicarse con Google API", details: error.message },
      { status: 500 }
    );
  }
}
