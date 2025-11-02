import { Metadata } from "next";
import { getVehicleById, getVehicles } from "@/actions/vehicles";
import VehicleDetail from "@/components/features/fleet/VehicleDetail";

interface VehicleDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const vehicles = await getVehicles();
  return vehicles.map((vehicle) => ({
    id: vehicle.id,
  }));
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
