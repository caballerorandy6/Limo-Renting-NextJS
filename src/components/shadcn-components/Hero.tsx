import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex justify-center items-center overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 object-cover w-full h-full opacity-30"
        src="/limousine.webm"
        //src="https://cdn.pixabay.com/video/2017/12/29/13598-249252839_large.mp4"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        crossOrigin="anonymous"
      />
      <HeroContent />
    </section>
  );
};

export default Hero;
