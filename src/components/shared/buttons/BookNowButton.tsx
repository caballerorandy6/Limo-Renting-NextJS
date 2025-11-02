"use client";

import { useRouter } from "next/navigation";

//Shadcn Components
import { Button } from "@/components/ui/button";

//Custom Components
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";

//Interfaces
import { ButtonProps } from "@/types/buttons";

interface BookNowButtonProps extends ButtonProps {
  variant?: "default" | "navbar";
}

const BookNowButton = ({ children, icon, variant = "default" }: BookNowButtonProps) => {
  const router = useRouter();

  // Navbar variant - smaller and more compact
  if (variant === "navbar") {
    return (
      <Button
        className="bg-red-600 hover:bg-red-700 text-white font-mono font-semibold rounded-md px-4 py-2 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-600/50"
        onClick={() => router.push("/reservations")}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Button>
    );
  }

  // Default variant - larger for page sections
  return (
    <Button
      className="bg-red-600 hover:bg-white text-white hover:text-red-600 transition-all duration-200 text-xl font-sans font-bold rounded-br-2xl p-8"
      onClick={() => router.push("/reservations")}
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Button>
  );
};

export default BookNowButton;
