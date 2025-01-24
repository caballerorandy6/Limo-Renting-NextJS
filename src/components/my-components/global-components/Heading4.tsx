//Interfaces
import { HeadingProps } from "@/components/my-components/global-components/interfaces";

const Heading4 = ({ children }: HeadingProps) => {
  return (
    <span className="font-mono font-bold text-xl text-white uppercase text-center">
      {children}
    </span>
  );
};

export default Heading4;
