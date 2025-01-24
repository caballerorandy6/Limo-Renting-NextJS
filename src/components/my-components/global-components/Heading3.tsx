//Interfaces
import { HeadingProps } from "@/components/my-components/global-components/interfaces";

const Heading3 = ({ children }: HeadingProps) => {
  return (
    <h1 className="text-3xl lg:text-4xl font-sans font-bold my-2 w-full">
      {children}
    </h1>
  );
};

export default Heading3;
