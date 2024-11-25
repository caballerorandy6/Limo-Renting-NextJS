"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "react-day-picker";

const RideInfoButton = ({ children }: ButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className="w-full text-center mx-auto whitespace-normal bg-blue-500 hover:bg-blue-600 transition-colors text-white font-mono font-bold rounded p-8"
      onClick={() => router.push("/ride/ride-info")}
    >
      {children}
    </Button>
  );
};

export default RideInfoButton;
