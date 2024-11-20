import Heading from "@/components/my-components/global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";
import { Card, CardContent } from "@/components/ui/card";

const FleetInfo = () => {
  return (
    <div className="w-8/12 mx-auto flex justify-between mt-16">
      <div className="w-6/12">
        <Heading>Our Fleet</Heading>
        <Heading3>Discover Our Luxury Fleet</Heading3>
      </div>
      <Card className="w-6/12 p-4 shadow-md font-sans">
        <CardContent>
          Our diverse fleet at American Transportation offers a range of
          luxurious vehicles to suit every occasion and preference, from sleek
          sedans to spacious party buses. Rest assured, each vehicle is
          meticulously maintained to ensure safety, comfort, and style
          throughout your journey.
        </CardContent>
      </Card>
    </div>
  );
};

export default FleetInfo;