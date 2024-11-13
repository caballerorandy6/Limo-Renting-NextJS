import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { marqueeTestimonialsArray } from "@/lib/utils";

const MarqueeTestimonials = () => {
  return (
    <Marquee pauseOnHover={true}>
      <div className="flex justify-between gap-20">
        {marqueeTestimonialsArray.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            target="_blank"
            className={`${
              index === marqueeTestimonialsArray.length - 1 && "mr-20"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              priority={false}
              className="object-cover w-full h-[10vh]"
            />
          </Link>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeTestimonials;
