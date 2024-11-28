import CarIcon from "@/components/my-components/icons/CarIcon";
export interface HeadingProps {
  children: string;
  icon?: React.ReactNode;
}

const Heading = ({ children, icon }: HeadingProps) => {
  return (
    <div className="flex gap-4">
      {icon ? icon : <CarIcon />}
      <span className="font-mono font-bold text-xl">{children}</span>
    </div>
  );
};

export default Heading;
