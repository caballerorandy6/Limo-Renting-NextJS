import Image from "next/image";

// Custom Components
import Heading from "@/components/shared/ui-common/Heading";
import CheckIcon from "@/components/shared/icons/CheckIcon";

// Interfaces
import { AboutListProps } from "@/types/about";

// Data
const whyChooseAboutArray: AboutListProps[] = [
  { title: "30+ Years of Experience", icon: <CheckIcon /> },
  { title: "500+ 5-Star Reviews", icon: <CheckIcon /> },
  { title: "Experienced Local Chauffeurs", icon: <CheckIcon /> },
];

const WhyChooseUpAbout = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Left Section - Content */}
          <div className="w-full lg:w-7/12 space-y-6 md:space-y-8">
            <Heading>Why Choose Us</Heading>

            <p className="text-base md:text-lg font-sans tracking-wide leading-relaxed text-gray-700">
              Because we recognize that chauffeurs take on many roles, we insist on
              100 percent certification for anyone who wishes to drive with us.
              However, working as a chauffeur for American Transportation requires
              far more than a good driving record. It also demands exceptional
              customer service skills. Our company only hires friendly, outgoing,
              talented drivers who want to make a difference in someone's day and
              event. We consider our chauffeurs to be logistical planning experts as
              much as drivers.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-3 md:gap-4 text-gray-600 pt-2">
              {whyChooseAboutArray.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 tracking-wide leading-relaxed"
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="font-sans text-sm md:text-base">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-5/12">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/aboutOurCompany/aboutOurCompany4.webp"
                alt="About Our Company - Why Choose Us"
                width={1000}
                height={1000}
                priority={false}
                className="w-full h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUpAbout;
