const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex justify-center items-center overflow-hidden"
    >
      <video
        className="absolute top-0 left-0  object-cover w-full h-full opacity-30"
        src="/limo.webm"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        crossOrigin="anonymous"
      />
    </section>
  );
};

export default Hero;
