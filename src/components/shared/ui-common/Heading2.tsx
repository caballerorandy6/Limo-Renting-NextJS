//Custom Components
import CarIcon from "@/components/shared/icons/CarIcon";

//Interfaces
import { ButtonProps } from "@/types/buttons";

const Heading2 = ({ children, icon }: ButtonProps) => {
  return (
    <>
      <div className="flex gap-4">
        {icon ? icon : <CarIcon />}
        <h2 className="font-mono font-bold text-xl text-white">
          {children}
        </h2>
      </div>
    </>
  );
};

export default Heading2;
