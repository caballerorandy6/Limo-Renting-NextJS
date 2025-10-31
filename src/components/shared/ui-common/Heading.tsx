//Custom Component
import CarIcon from "@/components/shared/icons/CarIcon";

//Interfaces
import { ButtonProps } from "@/types/buttons";

const Heading = ({ children, icon }: ButtonProps) => {
  return (
    <div className="flex gap-4">
      {icon ? icon : <CarIcon />}
      <h1 className="font-mono font-bold text-xl">{children}</h1>
    </div>
  );
};

export default Heading;
