"use client";

import { useRouter } from "next/navigation";

//Shadcn Components
import { Button } from "@/components/ui/button";

//Interfaces
import { ButtonProps } from "@/types/buttons";

interface RideInfoButtonProps extends ButtonProps {
  vehicleName: string;
}

const RideInfoButton = ({ children, vehicleName }: RideInfoButtonProps) => {
  const router = useRouter();

  // Encode vehicle name for URL (handles spaces and special characters)
  const encodedName = encodeURIComponent(vehicleName);

  return (
    <Button
      className="w-full text-center mx-auto whitespace-normal bg-blue-500 hover:bg-blue-600 transition-colors text-white font-mono font-bold rounded p-8"
      onClick={() => router.push(`/ride/ride-info/${encodedName}`)}
    >
      {children}
    </Button>
  );
};

export default RideInfoButton;
