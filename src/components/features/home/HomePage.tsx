//Custom Components
import Hero from "@/components/features/home/Hero";
import { Service, TripType } from "@/actions/services";

interface HomePageProps {
  services: Service[];
  tripTypes: TripType[];
}

const HomePage = ({ services, tripTypes }: HomePageProps) => {
  return (
    <section
      id="home-page"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-30"
          autoPlay
          muted
          loop
          preload="metadata"
          playsInline
          crossOrigin="anonymous"
        >
          <source src="/hero/hero-video.webm" type="video/webm" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <Hero services={services} tripTypes={tripTypes} />
      </div>
    </section>
  );
};

export default HomePage;
