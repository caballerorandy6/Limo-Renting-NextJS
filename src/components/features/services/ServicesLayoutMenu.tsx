import Link from "next/link";

//Shadcn Components
import { Separator } from "@/components/ui/separator";

//Custom Components
import OpenFolderIcon from "@/components/shared/icons/OpenFolderIcon";
import { services } from "@/components/features/services/Services";

const ServicesLayoutMenu = () => {
  // const ids = services.map((service) => service.id);
  // const images = services.map((service) => service.image);

  return (
    <ul className="hidden lg:block w-3/12 lg:4/12 xl:3/12">
      {services.map((item) => (
        <li key={item.id}>
          <div className="flex items-center hover:text-blue-500 transition-colors text-gray-500 px-2">
            <OpenFolderIcon />
            <Link
              href={`${item.href}/${item.id}`}
              className="font-mono font-semibold"
            >
              {item.title}
            </Link>
          </div>

          <Separator className="block border-gray-300 border my-2" />
        </li>
      ))}
    </ul>
  );
};

export default ServicesLayoutMenu;
