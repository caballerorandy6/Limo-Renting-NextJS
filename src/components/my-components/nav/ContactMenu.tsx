import Link from "next/link";

//Custom Components
import PhoneRingIcon from "@/components/my-components/icons/PhoneRingIcon";
import EmailIcon from "@/components/my-components/icons/EmailIcon";

//Interfaces
import { ContactLink } from "@/components/my-components/nav/interfaces";

const contactLinks: ContactLink[] = [
  {
    id: "phone",
    icon: <PhoneRingIcon />,
    name: "+1 (305) 885-5002",
    href: "tel: +1358855002",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    name: "info@americanlimofl.com",
    href: "mailto:info@americanlimofl.com",
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
