//Custom Components
import Hero from "@/components/my-components/home/Hero";

const HomePage = () => {
  return (
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
        <source src="/hero/hero-video.mp4" type="video/mp4" />
      </video>
      <Hero />
    </section>
  );
};

export default HomePage;
