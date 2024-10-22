import Hero from "@/components/my-components/home/Hero";
import WhatWeOffer from "@/components/my-components/home/WhatWeOffer";

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
    </>
  );
};

export default HomePage;
