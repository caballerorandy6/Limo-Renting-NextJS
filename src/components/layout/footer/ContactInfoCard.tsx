import Link from "next/link";

//Shadcn Components
import { Card, CardContent } from "@/components/ui/card";

//Custom Components
import PhoneRingIcon from "@/components/shared/icons/PhoneRingIcon";
import EmailIcon from "@/components/shared/icons/EmailIcon";
import LocationFooterIcon from "@/components/shared/icons/LocationFooterIcon";

//Interfaces
import { ContactInfoCardProps } from "@/types/footer";

// Generic values for educational purposes
const contactInfoCardPropsArray: ContactInfoCardProps[] = [
  {
    phoneNumberTitle: "Phone Number",
    phoneIcon: <PhoneRingIcon />,
    hrefPhone: "tel:(555)123-4567",
    phoneNumber: "(555) 123-4567",
    emailTitle: "Email Address",
    emailIcon: <EmailIcon />,
    hrefEmail: "mailto:info@example.com",
    email: "info@example.com",
    locationTitle: "Location",
    locationFooterIcon: <LocationFooterIcon />,
    hrefLocation: "https://www.google.com/maps/place/Miami,+FL",
    location: "123 Main Street, Miami, FL 33101",
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
    <Card className="border-none p-4 flex flex-col">
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
