import CarIcon from "@/components/my-components/icons/CarIcon";
import { HeadingProps } from "@/lib/interfaces";

const Heading2 = ({ children, icon }: HeadingProps) => {
  return (
    <>
      <div className="flex gap-4">
        {icon ? icon : <CarIcon />}
        <span className="font-mono font-bold text-xl text-white">
          {children}
        </span>
      </div>
    </>
  );
};

export default Heading2;
