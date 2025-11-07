import { Metadata } from "next";
import Link from "next/link";
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

  if (!vehicle) {
    return {
      title: "Vehicle Not Found - Limo Rental Fleet",
      description: "The requested vehicle could not be found.",
    };
  }

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

  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
        <p className="text-gray-600 mb-8">
          The vehicle you are looking for could not be found.
        </p>
        <Link href="/fleet" className="text-blue-600 hover:underline">
          Return to Fleet
        </Link>
      </div>
    );
  }

  return <VehicleDetail vehicle={vehicle} />;
};

export default VehicleDetailPage;
