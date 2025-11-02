import Link from "next/link";

//Custom Components
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import YelpIcon from "@/components/shared/icons/YelpIcon";
import YoutubeIcon from "@/components/shared/icons/YoutubeIcon";

//Interfaces
import { SocialLink } from "@/types/nav";

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    icon: <InstagramIcon />,
    name: "Instagram",
    href: "https://www.instagram.com/americantransportation.mia/",
  },
  {
    id: "facebook",
    icon: <FacebookIcon />,
    name: "Facebook",
    href: "https://www.facebook.com/americantransportation.mia/",
  },
  {
    id: "yelp",
    icon: <YelpIcon />,
    name: "Yelp",
    href: "https://www.yelp.com/biz/american-transportation-and-limo-services-miami",
  },
  {
    id: "youtube",
    icon: <YoutubeIcon />,
    name: "Youtube",
    href: "https://www.youtube.com/@americantransportationlimo2780",
  },
];

const SocialMenu = () => {
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMenu;
