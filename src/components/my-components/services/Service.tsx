import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import ServiceOptionsButton from "@/components/my-components/buttons/ServiceOptionsButton";

export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: React.ReactNode;
  buttonName: string;
  href: string;
  image?: string;
  title2?: string;
  title3?: string;
  text1?: string;
  text2?: string;
  serviceAccordion?: React.ReactNode;
}

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
      className="bg-gradient-to-tr from-gray-600 to-gray-800 w-full h-[50vh] lg:h-[45vh] relative flex justify-center items-center rounded-none"
    >
      <Image
        src={image || "/defaultImage/imageNotAvailable.webp"}
        alt={title}
        width={1000}
        height={1000}
        priority={false}
        className="object-cover w-full h-full relative mix-blend-overlay bg-gradient-to-tr from-gray-600 to-gray-800"
      />
      <div className="absolute">
        <CardHeader className="flex justify-start items-center gap-6">
          <div className="flex flex-col items-center">
            <Link href={href}>{icon}</Link>
            <CardTitle className="font-sans text-xl text-white my-2">
              {title}
            </CardTitle>
            <CardDescription className="font-mono text-white">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="font-sans text-white text-center tracking-wide leading-relaxed">
          {content}
        </CardContent>
        <CardFooter>
          <ServiceOptionsButton href={`${href}/${id}`}>
            {buttonName}
          </ServiceOptionsButton>
        </CardFooter>
      </div>
    </Card>
  );
};

export default Service;
