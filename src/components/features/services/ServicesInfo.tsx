//Custom Components
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";

//Shadcn Components
import { Card, CardContent } from "@/components/ui/card";

const ServicesInfo = () => {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Left Section - Headings */}
          <div className="w-full lg:w-5/12 flex-shrink-0 space-y-3">
            <Heading>What We Offer</Heading>
            <Heading3>Our 5-Star Services</Heading3>
          </div>

          {/* Right Section - Description Card */}
          <Card className="w-full lg:w-7/12 shadow-lg border-gray-200">
            <CardContent className="p-6 md:p-8">
              <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed tracking-wide">
                At American Transportation, our 5-star chauffeured car services in
                Miami are synonymous with luxury, reliability, and personalized
                attention. From our meticulously maintained fleet to our professional
                chauffeurs, we go above and beyond to exceed our clients&apos;
                expectations at every turn. Experience the epitome of luxury
                chauffeured transportation with American Transportation&apos;s
                unparalleled 5-star car services in Miami, Florida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
