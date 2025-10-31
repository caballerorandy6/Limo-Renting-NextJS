//Interfaces
import { HeadingProps } from "@/types/ui-common";

const Heading3 = ({ children }: HeadingProps) => {
  return (
    <h3 className="text-3xl lg:text-4xl font-sans font-bold my-2 w-full">
      {children}
    </h3>
  );
};

export default Heading3;
