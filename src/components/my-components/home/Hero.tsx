import BookNowButton from "@/components/my-components/buttons/BookNowButton";
import FormQuote from "@/components/my-components/form/FormQuote";
import DiscoverMoreButton from "@/components/my-components/buttons/DiscoverMoreButton";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-10 relative font-sans">
      <div className="w-5/12">
        <h1 className={`text-7xl text-white mb-6`}>
          Highest Rated <span className="text-red-500">Miami</span> Limo Service
        </h1>
        <p className="text-white mb-6">
          Our chauffeurs are 100% certified and have years of experience
          offering Miami limousine & local car services with an emphasis on
          hospitality and professionalism.
        </p>
        <div className="flex items-center gap-28 font-mono">
          <DiscoverMoreButton>Discover More</DiscoverMoreButton>
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>
      <div className="w-3/12">
        <FormQuote />
      </div>
    </div>
  );
};

export default Hero;
