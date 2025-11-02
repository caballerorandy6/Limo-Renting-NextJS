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
    <ul className="flex items-center gap-4">
      {contactLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            target="_blank"
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors duration-200"
          >
            <span className="text-gray-400">{link.icon}</span>
            <span className="hidden lg:inline">{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactMenu;
