export interface FeaturedVehiclesCardProps {
  imagesCarousel: React.ReactNode;
  title: string;
  carIcon: React.ReactNode;
  exterior: string;
  color1: string;
  carSeatIcon: React.ReactNode;
  interior: string;
  color2: string;
  minibarIcon: React.ReactNode;
  features: string;
  featuresObject: string;
}

export interface VehicleApiResponse {
  id: string;
  name: string;
  quantityPassengers: number;
  quantityBaggage: number;
  description: string;
  pricePerHour: string;
  pricePerMile: string;
  images: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
