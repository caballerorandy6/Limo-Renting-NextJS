import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export interface FeaturedVehiclesCardProps {
  imagesCarousel: React.ReactNode;
  title: string;
  carIcon: React.ReactNode;
  exterior: string;
  color1: string;
  carSeatIcon: React.ReactNode;
  interior: string;
  color2: string;
  minibarIcon: React.ReactNode;
  features: string;
  featuresObject: string;
}

const Vehicle = ({
  imagesCarousel,
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
    <Card
      key={title}
      className="w-full h-[50vh] lg:[45vh] xl:h-[50vh] flex flex-col justify-center items-center rounded-none bg-white shadow-md"
    >
      <CardHeader className="flex justify-start items-center w-full">
        <div className="flex justify-center w-full">{imagesCarousel}</div>
        <CardTitle className="font-sans text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="flex flex-col justify-start lg:mb-4">
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
