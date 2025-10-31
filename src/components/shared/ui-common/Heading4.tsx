//Interfaces
import { HeadingProps } from "@/types/ui-common";

const Heading4 = ({ children }: HeadingProps) => {
  return (
    <h4 className="font-mono font-bold text-xl text-white uppercase text-center">
      {children}
    </h4>
  );
};

export default Heading4;
