import Image from "next/image";
import Heading2 from "@/components/my-components/global-components/Heading2";
import ClickToCallButton from "@/components/my-components/buttons/ClickToCallButton";
import Link from "next/link";
import WyChooseUsCircles from "./WyChooseUsCircles";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-gradient-to-tr from-slate-900 via-black to-gray-900"
    >
      <div className="w-9/12 mx-auto py-16 flex">
        <div className="w-6/12">
          <Heading2>Why Choose Us</Heading2>
          <h1 className="text-white text-5xl font-sans font-bold my-2">
            What Makes Us Different
          </h1>
          <p className="font-sans text-white">
            At American Transportation & Limo Services, it’s our goal to ensure
            that your limo rental experience provides you with the highest level
            of luxury by offering highly customized service. We strive to always
            exceed your initial expectations. You can see for yourself how well
            we have achieved this goal by reading many five-star reviews of our
            company at Yelp, Google, and Facebook.
          </p>
          <div className="w-full my-4 flex gap-4">
            <div className="border-8 border-gray-500 rounded w-6/12">
              <Image
                src="/whyChooseUs.webp"
                alt="Why Choose Us Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6/12">
              <h3 className="font-mono font-bold text-white text-xl my-4">
                We Have Over 30+ Years of Chauffeur Experience
              </h3>
              <ul className="text-white/80 font-sans list-disc ml-4 text-sm">
                <li>Experienced Local Drivers</li>
                <li className="my-2">Over 1000+ 5-Star Reviews</li>
                <li>Many Convenient Services</li>
              </ul>
            </div>
          </div>
          <div className="w-full my-4 flex gap-4">
            <ClickToCallButton>Click To Call</ClickToCallButton>
            <div>
              <span className="text-white/80 font-sans text-sm flex flex-col">
                Call Us Any Time 24/7
              </span>
              <Link
                href="tel: +1358855002"
                target="_blank"
                className="text-white font-sans font-bold text-3xl"
              >
                (305) 885-5002
              </Link>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <div>
            <WyChooseUsCircles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
