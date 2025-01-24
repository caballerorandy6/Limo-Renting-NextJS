import Image from "next/image";

// Custom Components
import Heading from "@/components/my-components/global-components/Heading";
import CheckIcon from "@/components/my-components/icons/CheckIcon";

// Interfaces
import { AboutListProps } from "@/components/my-components/about/interfaces";

// Data
const whyChooseAboutArray: AboutListProps[] = [
  { title: "30+ Years of Experience", icon: <CheckIcon /> },
  { title: "500+ 5-Star Reviews", icon: <CheckIcon /> },
  { title: "Experienced Local Chauffeurs", icon: <CheckIcon /> },
];

const WhyChooseUpAbout = () => {
  return (
    <div className="flex justify-center mx-auto gap-20 w-10/12 my-16">
      <div className="w-10/12 lg:w-7/12">
        <Heading>Why Choose Us</Heading>
        <p className="font-sans tracking-wide leading-relaxed my-4">
          Because we recognize that chauffeurs take on many roles, we insist on
          100 percent certification for anyone who wishes to drive with us.
          However, working as a chauffeur for American Transportation requires
          far more than a good driving record. It also demands exceptional
          customer service skills. Our company only hires friendly, outgoing,
          talented drivers who want to make a difference in someone’s day and
          event. We consider our chauffeurs to be logistical planning experts as
          much as drivers.
        </p>
        <div className="flex flex-col gap-4 text-gray-400">
          {whyChooseAboutArray.map((item) => (
            <div
              key={item.title}
              className="flex gap-2 items-center tracking-wide leading-relaxed"
            >
              {item.icon}
              <span className="font-sans tracking-wide">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex w-5/12">
        <Image
          src="/aboutOurCompany/aboutOurCompany4.webp"
          alt="About Our Company 4"
          width={1000}
          height={1000}
          className="w-fulls h-[40vh] object-cover"
        />
      </div>
    </div>
  );
};

export default WhyChooseUpAbout;
