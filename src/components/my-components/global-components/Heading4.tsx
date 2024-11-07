import CarIcon from "@/components/my-components/icons/CarIcon";
import { Heading4Props } from "@/lib/interfaces";

const Heading4 = ({ children }: Heading4Props) => {
  return (
    <span className="font-mono font-bold text-xl text-white uppercase text-center">
      {children}
    </span>
  );
};

export default Heading4;
