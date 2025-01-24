import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

//Interfaces
import { PartnersTestimonialsImagesProps } from "@/components/my-components/home/interfaces";

//Arrays
export const marqueeTestimonialsArray: PartnersTestimonialsImagesProps[] = [
  {
    src: "/testimonials/testimonials1.webp",
    alt: "Florida Limousine Association",
    href: "https://www.floridalimousine.com/",
  },
  {
    src: "/testimonials/testimonials2.webp",
    alt: "National Limousine Association",
    href: "https://www.limo.org/",
  },
  {
    src: "/testimonials/testimonials3.webp",
    alt: "Better Bussiness Bureau",
    href: "https://www.bbb.org/search",
  },
  {
    src: "/testimonials/testimonials4.webp",
    alt: "National Association of Wedding Professionals",
    href: "https://www.nawp.com/",
  },
  {
    src: "/testimonials/testimonials5.webp",
    alt: "MPI Academy",
    href: "https://www.mpi.org/",
  },
  {
    src: "/testimonials/testimonials6.webp",
    alt: "Greater Miami and Miami Beach",
    href: "https://www.miamiandbeaches.com/",
  },
];

const MarqueeTestimonials = () => {
  return (
    <Marquee pauseOnHover={true}>
      <div className="flex justify-between items-center gap-16">
        {marqueeTestimonialsArray.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            target="_blank"
            className={`${
              index === marqueeTestimonialsArray.length - 1 && "mr-20"
            } transition-all duration-300 ease-in-out transform hover:scale-110 p-8`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1000}
              height={200}
              priority={false}
              className="object-cover h-auto w-40"
            />
          </Link>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeTestimonials;
