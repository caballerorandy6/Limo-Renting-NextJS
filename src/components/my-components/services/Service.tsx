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
}

const Service = ({
  id,
  title,
  description,
  content,
  icon,
  buttonName,
  href,
}: ServiceProps) => {
  return (
    <Card
      key={title}
      className="bg-white w-full sm:w-10/12 md:w-full shadow-md mx-auto"
    >
      <CardHeader className="flex justify-start items-center gap-6">
        <Link href={href}>{icon}</Link>
        <div>
          <CardTitle className="font-sans text-xl">{title}</CardTitle>
          <CardDescription className="font-mono">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="font-sans">{content}</CardContent>
      <CardFooter>
        <ServiceOptionsButton href={`${href}/${id}`}>
          {buttonName}
        </ServiceOptionsButton>
      </CardFooter>
    </Card>
  );
};

export default Service;
