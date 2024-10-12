import { Button } from "../ui/button";
import ArrowRightIcon from "./ArrowRightIcon";
import FormQuote from "./FormQuote";

const HeroContent = () => {
  return (
    <div className="flex justify-center items-center gap-10 relative z-20 font-sans">
      <div className="w-6/12">
        <h1 className={`text-7xl text-white mb-6`}>
          Highest Rated <span className="text-red-500">Miami</span> Limo Service
        </h1>
        <p className="text-white mb-6">
          Our chauffeurs are 100% certified and have years of experience
          offering Miami limousine & local car services with an emphasis on
          hospitality and professionalism.
        </p>
        <div className="flex items-center gap-28 font-mono">
          <Button className="bg-red-500 hover:bg-white text-white hover:text-red-500 text-xl font-bold rounded-br-2xl p-8">
            Discover More
            <ArrowRightIcon />
          </Button>
          <Button className="bg-white hover:bg-red-500 text-red-500 hover:text-white text-xl font-bold rounded-br-2xl p-8">
            Book Now <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="w-5/12">
        <FormQuote />
      </div>
    </div>
  );
};

export default HeroContent;
