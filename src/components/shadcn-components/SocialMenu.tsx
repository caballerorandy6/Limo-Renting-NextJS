import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import YelpIcon from "./YelpIcon";
import YoutubeIcon from "./YoutubeIcon";

interface SocialLink {
  id: string;
  icon: JSX.Element;
  name: string;
  href: string;
}

const socialLinks: SocialLink[] = [
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
    <ul className="flex justify-center items-center gap-8 mt-10 font-bold">
      {socialLinks.map((link) => (
        <li
          key={link.id}
          className="transition-all duration-300 ease-in-out transform hover:scale-150 text-white"
        >
          <Link
            href={link.href}
            className="text-white hover:text-red-500 transition-colors font-mono dont-semibold"
            target="_blank"
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMenu;
