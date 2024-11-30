import Image from "next/image";
import Link from "next/link";
import BookNowButton from "@/components/my-components/buttons/BookNowButton";

const BookUsAbout = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-600 to-gray-800 w-full h-[50vh] relative flex justify-center items-center">
      <Image
        src="/aboutOurCompany/aboutOurCompany3.webp"
        alt="About Our Company 3"
        width={1000}
        height={1000}
        className="object-cover w-full h-full relative mix-blend-overlay bg-gradient-to-tr from-gray-600 to-gray-800"
      />
      <div className="absolute top-[12vh] md:w-8/12 w-10/12">
        <div className="flex flex-col items-center text-center mx-auto">
          <h3 className="text-white font-bold text-2xl lg:3xl font-sans">
            Book Us For Your Next Event
          </h3>
          <Link
            href="tel:3058855002"
            className="text-red-500 md:text-4xl lg:text-5xl xl:text-7xl font-bold mt-4 font-sans"
          >
            (305) 885-5002
          </Link>
          <p className="font-semibold text-white font-sans my-4 tracking-wide leading-relaxed">
            Maintain optimal business competitive products grow strategic and
            technically sound human capital distributed.
          </p>
          <div>
            <BookNowButton>Book a Ride</BookNowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookUsAbout;
