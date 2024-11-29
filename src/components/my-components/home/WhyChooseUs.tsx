import Image from "next/image";
import Heading2 from "@/components/my-components/global-components/Heading2";
import ClickToCallButton from "@/components/my-components/buttons/ClickToCallButton";
import Link from "next/link";
import WyChooseUsCircles from "./WyChooseUsCircles";

const WhyChooseUs = () => {
  return (
    <div
      id="why-choose-us"
      className="bg-gradient-to-tr from-slate-900 via-black to-gray-900"
    >
      <div className="w-10/12 mx-auto pt-16 lg:pb-16 flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-6/12">
          <Heading2>Why Choose Us</Heading2>
          <h1 className="text-white text-4xl lg:text-5xl font-sans font-bold my-2">
            What Makes Us Different
          </h1>
          <p className="font-sans text-white my-6 tracking-wide leading-relaxed">
            At American Transportation & Limo Services, it’s our goal to ensure
            that your limo rental experience provides you with the highest level
            of luxury by offering highly customized service. We strive to always
            exceed your initial expectations. You can see for yourself how well
            we have achieved this goal by reading many five-star reviews of our
            company at Yelp, Google, and Facebook.
          </p>
          <div className="w-full my-4 flex flex-col gap-4 text-center md:text-start">
            <div className="border-8 border-gray-500 rounded lg:w-6/12">
              <Image
                src="/whyChooseUs/whyChooseUs.webp"
                alt="Why Choose Us Image"
                width={1000}
                height={1000}
                priority={false}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-6/12">
              <h3 className="font-mono lg:text-start font-bold text-white text-xl my-4 w-full">
                We Have Over 30+ Years of Chauffeur Experience
              </h3>
              <ul className="w-full flex flex-col justify-center text-white/80 font-sans ml-4 tracking-wide leading-relaxed list-none md:list-disc">
                <li>Experienced Local Drivers</li>
                <li className="my-2">Over 1000+ 5-Star Reviews</li>
                <li>Many Convenient Services</li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-8 flex flex-col gap-4">
            <ClickToCallButton>Click To Call</ClickToCallButton>

            <div className="flex flex-col text-center md:text-start">
              <span className="text-white font-mono mb-2">
                Call Us Any Time 24/7
              </span>
              <Link
                href="tel: +13058855002"
                target="_blank"
                className="text-white font-sans font-bold text-xl xl:text-2xl hover:text-red-500 transition-colors"
              >
                (305) 885-5002
              </Link>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <WyChooseUsCircles />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
