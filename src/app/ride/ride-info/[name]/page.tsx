import { Metadata } from "next";
import RideInfoContent from "@/components/features/ride/RideInfoContent";

type Params = Promise<{ name: string }>;

/**
 * Generate Metadata for Ride Info Page
 * SEO optimized for vehicle confirmation pages
 */
export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const vehicleName = decodeURIComponent(params.name);

  return {
    title: `Confirm ${vehicleName} Booking | Premium Limousine Service`,
    description: `Review and confirm your ${vehicleName} booking details. Check pricing, add special requests, and complete your luxury limousine reservation.`,
    keywords: [
      "limousine booking confirmation",
      vehicleName,
      "luxury car rental",
      "ride confirmation",
      "airport transfer booking",
      "chauffeur service",
    ],
    openGraph: {
      title: `Confirm Your ${vehicleName} Booking`,
      description: `Complete your luxury limousine booking for the ${vehicleName}. Review trip details and confirm your reservation.`,
      type: "website",
      siteName: "Premium Limousine Service",
    },
    twitter: {
      card: "summary_large_image",
      title: `Confirm ${vehicleName} Booking`,
      description: `Complete your luxury limousine reservation`,
    },
  };
}

/**
 * RideInfo Page - Server Component
 *
 * Esta página es un Server Component puro que:
 * 1. Genera metadata dinámica SEO-optimizada
 * 2. Extrae el vehicleName de los parámetros de la URL
 * 3. Renderiza el Client Component RideInfoContent
 *
 * El Client Component maneja:
 * - Estado de add-ons y special instructions
 * - Guardado de datos en el store (vehicleName, vehiclePrice, addOns, etc.)
 * - Validación y redirección
 * - Todas las interacciones del usuario
 */
const RideInfoPage = async (props: { params: Params }) => {
  const params = await props.params;

  // Decode the vehicle name from URL
  const vehicleName = decodeURIComponent(params.name);

  return <RideInfoContent vehicleName={vehicleName} />;
};

export default RideInfoPage;
