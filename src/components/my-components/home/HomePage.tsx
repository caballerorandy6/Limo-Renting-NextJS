import Hero from "@/components/my-components/home/Hero";
import WhatWeOffer from "@/components/my-components/home/WhatWeOffer";
import AboutOurCompany from "@/components/my-components/home/AboutOurCompany";
import FeaturedVehicles from "@/components/my-components/home/FeaturedVehicles";
import WhyChooseUs from "@/components/my-components/home/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <section
        id="home-page"
        className="min-h-screen relative flex justify-center items-center overflow-hidden bg-black"
      >
        <video
          className="absolute top-0 left-0 object-cover w-full h-full opacity-30"
          src="/limo.webm"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          crossOrigin="anonymous"
        />
        <Hero />
      </section>
      <WhatWeOffer />
      <AboutOurCompany />
      <FeaturedVehicles />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
