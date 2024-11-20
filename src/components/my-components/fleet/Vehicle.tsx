import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FeaturedVehiclesCardProps } from "@/lib/interfaces";

const Vehicle = ({
  carousel,
  title,
  carIcon,
  exterior,
  color1,
  carSeatIcon,
  interior,
  color2,
  minibarIcon,
  features,
  featuresObject,
}: FeaturedVehiclesCardProps) => {
  return (
    <Card key={title} className="bg-white w-3/12 shadow-md">
      <CardHeader>
        <div className="flex justify-center">{carousel}</div>
        <CardTitle className="font-sans text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center gap-2 font-sans mb-2">
            <span>{carIcon}</span>
            <span className=" font-semibold">{`${exterior}:`}</span>
            <span>{color1}</span>
          </div>
          <div className="flex items-center gap-2 font-sans mb-2">
            <span>{carSeatIcon}</span>
            <span className=" font-semibold">{`${interior}:`}</span>
            <span>{color2}</span>
          </div>
          <div className="flex items-center gap-2 font-sans">
            <span>{minibarIcon}</span>
            <span className=" font-semibold">{`${features}:`}</span>
            <span>{featuresObject}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Vehicle;
