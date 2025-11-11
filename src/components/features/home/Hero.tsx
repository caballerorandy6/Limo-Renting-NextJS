//Custom Components
import BookNowButton from "@/components/shared/buttons/BookNowButton";
import FormQuote from "@/components/shared/forms/FormQuote";
import DiscoverMoreButton from "@/components/shared/buttons/DiscoverMoreButton";
import { Service, TripType } from "@/actions/services";

interface HeroProps {
  services: Service[];
  tripTypes: TripType[];
}

const Hero = ({ services, tripTypes }: HeroProps) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 py-12 md:py-16 lg:py-20">
        {/* Left Section - Hero Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-sans font-bold leading-tight">
            Highest Rated <span className="text-red-500">Miami</span> Limo Service
          </h1>
          <p className="text-base md:text-lg text-white/90 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Our chauffeurs are 100% certified and have years of experience
            offering Miami limousine & local car services with an emphasis on
            hospitality and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 md:gap-6 font-mono pt-2">
            <DiscoverMoreButton>Discover More</DiscoverMoreButton>
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="hidden md:block w-full lg:w-1/2 max-w-lg lg:max-w-none">
          <FormQuote services={services} tripTypes={tripTypes} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
