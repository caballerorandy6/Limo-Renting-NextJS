import Link from "next/link";
import PhoneRingIcon from "./PhoneRingIcon";
import EmailIcon from "./EmailIcon";

interface ContactLink {
  id: string;
  icon: JSX.Element;
  name: string;
  href: string;
}

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
    name: "mailto:info@americanlimofl.com",
    href: "mailto:info@americanlimofl.com",
  },
];

const ContactMenu = () => {
  return (
    <ul className="flex justify-center items-center gap-8 mt-10 font-bold">
      {contactLinks.map((link) => (
        <li
          key={link.id}
          className=" text-white hover:text-red-500 transition-colors"
        >
          <Link href={link.href} className="flex gap-2 items-center">
            {link.icon}
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactMenu;
