import Image from "next/image";
import Link from "next/link";

//Shadcn Components
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

//Custom Components
import ServiceOptionsButton from "@/components/shared/buttons/ServiceOptionsButton";

//Interfaces
import { ServiceProps } from "@/types/services";

const Service = ({
  id,
  title,
  description,
  content,
  icon,
  buttonName,
  href,
  image,
}: ServiceProps) => {
  return (
    <Card
      key={title}
      className="bg-gradient-to-tr from-gray-700 to-gray-900 w-full h-[500px] sm:h-[480px] md:h-[460px] relative flex justify-center items-center rounded-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Background Image */}
      <Image
        src={image || "/defaultImage/imageNotAvailable.webp"}
        alt={title}
        width={1000}
        height={1000}
        priority={false}
        className="object-cover w-full h-full absolute inset-0 rounded-xl transform transition-transform duration-300 group-hover:scale-105"
      />

      {/* Darker Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/50 to-black/60 rounded-xl"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center py-8 px-4 sm:px-6 z-10">
        {/* Icon & Title Section */}
        <div className="flex flex-col items-center space-y-2 mb-4">
          <Link href={href} className="transition-transform duration-200 hover:scale-110">
            {icon}
          </Link>
          <CardTitle className="font-sans text-xl md:text-2xl text-white text-center leading-tight px-2 drop-shadow-lg">
            {title}
          </CardTitle>
          <CardDescription className="font-mono text-xs md:text-sm text-white/90 drop-shadow-md">
            {description}
          </CardDescription>
        </div>

        {/* Content Section with line clamp */}
        <CardContent className="font-sans text-white text-center tracking-wide leading-relaxed text-sm md:text-base p-0 px-3 mb-5 line-clamp-3 max-w-sm drop-shadow-md">
          {content}
        </CardContent>

        {/* Button Section */}
        <div className="mt-auto">
          <ServiceOptionsButton href={`${href}/${id}`}>
            {buttonName}
          </ServiceOptionsButton>
        </div>
      </div>
    </Card>
  );
};

export default Service;
