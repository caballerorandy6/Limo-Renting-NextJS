//Custom Component
import CarIcon from "@/components/my-components/icons/CarIcon";

//Interfaces
import { ButtonProps } from "@/components/my-components/buttons/interfaces";

const Heading = ({ children, icon }: ButtonProps) => {
  return (
    <div className="flex gap-4">
      {icon ? icon : <CarIcon />}
      <span className="font-mono font-bold text-xl">{children}</span>
    </div>
  );
};

export default Heading;
