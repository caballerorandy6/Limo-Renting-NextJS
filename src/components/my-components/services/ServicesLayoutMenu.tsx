import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import OpenFolderIcon from "@/components/my-components/icons/OpenFolderIcon";
import { services } from "@/components/my-components/services/Services";

const ServicesLayoutMenu = () => {
  const ids = services.map((service) => service.id);
  const images = services.map((service) => service.image);

  return (
    <ul>
      {services.map((item) => (
        <li key={item.id}>
          <div className="flex items-center hover:text-blue-500 transition-colors text-gray-500">
            <OpenFolderIcon />
            <Link href={`${item.href}/${item.id}`}>{item.title}</Link>
          </div>

          <Separator className="block border-gray-300 border my-2" />
        </li>
      ))}
    </ul>
  );
};

export default ServicesLayoutMenu;
