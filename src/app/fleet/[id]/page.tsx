import { Metadata } from "next";
import { getVehicleById, getVehicles } from "@/actions/vehicles";
import VehicleDetail from "@/components/features/fleet/VehicleDetail";

interface VehicleDetailPageProps {
  params: Promise<{ id: string }>;
}

// Enable ISR - pages will be generated on-demand and cached
export const dynamicParams = true;
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  try {
    const vehicles = await getVehicles();
    return vehicles.map((vehicle) => ({
      id: vehicle.id,
    }));
  } catch (error) {
    console.warn("Failed to fetch vehicles for static params, will use ISR:", error);
    // Return empty array - pages will be generated on-demand via ISR
    return [];
  }
}

export async function generateMetadata({
  params,
}: VehicleDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const vehicle = await getVehicleById(id);

  return {
    title: `${vehicle.name} - Limo Rental Fleet`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.name} - Limo Rental`,
      description: vehicle.description,
      images: vehicle.images.map((img) => ({
        url: img,
        alt: vehicle.name,
      })),
    },
  };
}

const VehicleDetailPage = async ({ params }: VehicleDetailPageProps) => {
  const { id } = await params;
  const vehicle = await getVehicleById(id);

  return <VehicleDetail vehicle={vehicle} />;
};

export default VehicleDetailPage;
