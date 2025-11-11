import Image from "next/image";
import Link from "next/link";

//Custom Components
import Heading2 from "@/components/shared/ui-common/Heading2";
import ClickToCallButton from "@/components/shared/buttons/ClickToCallButton";
import WyChooseUsCircles from "@/components/features/home/WyChooseUsCircles";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="w-full bg-gradient-to-tr from-slate-900 via-black to-gray-900 py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Left Section - Content */}
          <div className="w-full xl:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <Heading2>Why Choose Us</Heading2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white leading-tight">
                What Makes Us Different
              </h3>
            </div>

            <p className="text-base md:text-lg font-sans text-white/90 tracking-wide leading-relaxed">
              At American Transportation & Limo Services, it's our goal to ensure
              that your limo rental experience provides you with the highest level
              of luxury by offering highly customized service. We strive to always
              exceed your initial expectations. You can see for yourself how well
              we have achieved this goal by reading many five-star reviews of our
              company at Yelp, Google, and Facebook.
            </p>

            {/* Image and Features */}
            <div className="space-y-6 md:space-y-8">
              <div className="overflow-hidden rounded-lg border-8 border-gray-500">
                <Image
                  src="/whyChooseUs/whyChooseUs.webp"
                  alt="Why Choose Us Image"
                  width={1000}
                  height={1000}
                  priority={false}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-mono font-bold text-white text-center xl:text-left">
                  We Have Over 30+ Years of Chauffeur Experience
                </h4>
                <ul className="space-y-3 text-white/80 font-sans text-base md:text-lg tracking-wide leading-relaxed text-center xl:text-left">
                  <li>Experienced Local Drivers</li>
                  <li>Over 1000+ 5-Star Reviews</li>
                  <li>Many Convenient Services</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 pt-4">
              <div className="flex justify-center xl:justify-start">
                <ClickToCallButton>Click To Call</ClickToCallButton>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 text-center xl:text-left">
                <span className="text-white font-mono text-lg md:text-xl">
                  Call Us Any Time 24/7
                </span>
                <Link
                  href="tel:(555)123-4567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-xl md:text-2xl hover:text-red-500 transition-colors"
                >
                  (555) 123-4567
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Circles (Desktop Only) */}
          <div className="hidden xl:block w-full xl:w-1/2">
            <WyChooseUsCircles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
