import BookNowButton from "@/components/my-components/buttons/BookNowButton";
import FormQuote from "@/components/my-components/form/FormQuote";
import DiscoverMoreButton from "@/components/my-components/buttons/DiscoverMoreButton";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 relative w-full lg:w-10/12 over-y-scroll md:mt-60 lg:mt-4">
      <div className="w-11/12 lg:w-6/12 text-center mx-auto">
        <h1 className="text-4xl lg:text-7xl text-white mb-6 font-sans">
          Highest Rated <span className="text-red-500">Miami</span> Limo Service
        </h1>
        <p className="text-white mb-10 font-sans w-11/12 mx-auto">
          Our chauffeurs are 100% certified and have years of experience
          offering Miami limousine & local car services with an emphasis on
          hospitality and professionalism.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-28 font-mono">
          <DiscoverMoreButton>Discover More</DiscoverMoreButton>
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>

      <div className="hidden md:flex w-8/12 lg:w-6/12 lg:mt-60  mb-16">
        <FormQuote />
      </div>
    </div>
  );
};

export default Hero;
