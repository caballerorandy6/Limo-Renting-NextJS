//Custom Component
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";

//Shadcn Components
import { Card, CardContent } from "@/components/ui/card";

const FleetInfo = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Side - Headings */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <Heading>Our Fleet</Heading>
          <Heading3>Discover Our Luxury Fleet</Heading3>
        </div>

        {/* Right Side - Description Card */}
        <Card className="w-full lg:w-7/12 shadow-lg border-gray-200">
          <CardContent className="p-6 md:p-8">
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed">
              Our diverse fleet at American Transportation offers a range of
              luxurious vehicles to suit every occasion and preference, from sleek
              sedans to spacious party buses. Rest assured, each vehicle is
              meticulously maintained to ensure safety, comfort, and style
              throughout your journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FleetInfo;
