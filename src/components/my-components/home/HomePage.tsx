import Hero from "@/components/my-components/home/Hero";
import WhatWeOffer from "@/components/my-components/home/WhatWeOffer";
import AboutOurCompany from "@/components/my-components/home/AboutOurCompany";
import FeaturedVehicles from "@/components/my-components/home/FeaturedVehicles";
import WhyChooseUs from "@/components/my-components/home/WhyChooseUs";
import Testimonials from "@/components/my-components/home/Testimonials";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <section
        id="home-page"
        className="min-h-screen relative flex justify-center items-center overflow-hidden bg-black"
      >
        <video
          className="absolute top-0 left-0 object-cover w-full h-full opacity-30"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          crossOrigin="anonymous"
        >
          <source src="/limo.webm" type="video/webm" />
          <source src="/limo1.mp4" type="video/mp4" />
        </video>
        <Hero />
      </section>
      <WhatWeOffer />
      <AboutOurCompany />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
