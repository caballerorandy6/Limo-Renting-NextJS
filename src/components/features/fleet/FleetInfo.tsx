//Custom Component
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";

//Shadcn Components
import { Card, CardContent } from "@/components/ui/card";

const FleetInfo = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Side - Headings */}
        <div className="w-full lg:w-5/12 flex-shrink-0 space-y-3">
          <Heading>Our Fleet</Heading>
          <Heading3>Discover Our Luxury Fleet</Heading3>
        </div>

        {/* Right Side - Description Card */}
        <Card className="w-full lg:w-7/12 shadow-lg border-gray-200">
          <CardContent className="p-6 md:p-8">
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed tracking-wide">
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
