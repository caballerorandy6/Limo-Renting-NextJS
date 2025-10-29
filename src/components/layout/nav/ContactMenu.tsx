import Link from "next/link";

//Custom Components
import PhoneRingIcon from "@/components/shared/icons/PhoneRingIcon";
import EmailIcon from "@/components/shared/icons/EmailIcon";

//Interfaces
import { ContactLink } from "@/types/nav";

// Generic values for educational purposes
const contactLinks: ContactLink[] = [
  {
    id: "phone",
    icon: <PhoneRingIcon />,
    name: "(555) 123-4567",
    href: "tel:(555)123-4567",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    name: "info@example.com",
    href: "mailto:info@example.com",
  },
];

const ContactMenu = () => {
  return (
    <ul className="flex justify-center items-center gap-8 font-bold">
      {contactLinks.map((link) => (
        <li
          key={link.id}
          className=" text-white hover:text-red-500 transition-colors py-2"
        >
          <Link
            href={link.href}
            target="_blank"
            className="flex gap-2 items-center"
          >
            {link.icon}
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactMenu;
