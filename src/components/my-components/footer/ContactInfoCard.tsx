import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PhoneRingIcon from "../icons/PhoneRingIcon";
import EmailIcon from "../icons/EmailIcon";
import LocationFooterIcon from "../icons/LocationFooterIcon";
import { ContactInfoCardProps } from "@/lib/interfaces";

const contactInfoCardPropsArray: ContactInfoCardProps[] = [
  {
    phoneNumberTitle: "Phone Number",
    phoneIcon: <PhoneRingIcon />,
    hrefPhone: "tel:305-123-4567",
    phoneNumber: "305-123-4567",
    emailTitle: "Email Address",
    emailIcon: <EmailIcon />,
    hrefEmail: "mailto:info@americanlimofl.com",
    email: "info@americanlimofl.com",
    locationTitle: "Location",
    locationFooterIcon: <LocationFooterIcon />,
    hrefLocation:
      "https://www.google.com/maps/place/American+Transportation+%26+Limo+services/@25.803889,-80.316523,16z/data=!4m6!3m5!1s0x88d9b98a0881a333:0xba4c0c3bc1955235!8m2!3d25.8038893!4d-80.3165231!16s%2Fg%2F11btyv_lkk?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    location: "3319 NW 74th Ave. Miami, FL 33122",
  },
];

const ContactInfoCard = () => {
  const {
    phoneNumberTitle,
    phoneIcon,
    hrefPhone,
    phoneNumber,
    emailTitle,
    emailIcon,
    hrefEmail,
    email,
    locationTitle,
    locationFooterIcon,
    hrefLocation,
    location,
  } = contactInfoCardPropsArray[0];

  return (
    <Card className="border-none p-4 flex flex-col w-full">
      <CardContent className="text-center flex flex-col justify-center items-center">
        <div className="mb-4">
          <h3 className="text-white font-sans font-bold">{phoneNumberTitle}</h3>
          <div className="flex gap-2">
            {phoneIcon}
            <Link
              href={hrefPhone}
              target="_blank"
              className="text-white font-sans text-sm"
            >
              {phoneNumber}
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-white font-sans font-bold">{emailTitle}</h3>
          <div className="flex gap-2">
            {emailIcon}
            <Link
              href={hrefEmail}
              target="_blank"
              className="text-white font-sans text-sm"
            >
              {email}
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-white font-sans font-bold">{locationTitle}</h3>
          <div className="flex gap-2">
            {locationFooterIcon}
            <Link
              href={hrefLocation}
              target="_blank"
              className="text-white font-sans text-sm"
            >
              {location}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
