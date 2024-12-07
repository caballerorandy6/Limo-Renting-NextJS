import Link from "next/link";
import ContactForm from "@/components/my-components/form/ContactForm";
import Heading3 from "@/components/my-components/global-components/Heading3";
import Phone2Icon from "@/components/my-components/icons/Phone2Icon";
import HeadPhoneIcon from "@/components/my-components/icons/HeadPhoneIcon";
import PrinterIcon from "@/components/my-components/icons/PrinterIcon";
import Email2Icon from "@/components/my-components/icons/Email2Icon";
import AppointmentIcon from "@/components/my-components/icons/AppointmentIcon";
import Location2Icon from "@/components/my-components/icons/Location2Icon";
import { ContactInfoProps } from "@/lib/interfaces";

const contactInfoArray: ContactInfoProps[] = [
  {
    phoneIcon: <Phone2Icon />,
    phone: "Phone",
    phoneNumber: "+1(305) 885-5002",
    toolFreeIcon: <HeadPhoneIcon />,
    tollFree: "Toll Free",
    tollFreeNumber: "+1(877) 377-0347",
    faxIcon: <PrinterIcon />,
    fax: "Fax",
    faxNumber: "+1(305) 885-5002",
    emailIcon: <Email2Icon />,
    email: "Email",
    emailAddress: "info@americanlimofl.com",
    emailReservationsIcon: <AppointmentIcon />,
    emailReservations: "Reservations",
    emailAddressReservations: "reservations@americanlimofl.com",
    locationIcon: <Location2Icon />,
    location: "Location",
    locationAddress: "3319 NW 74th Ave. Miami, FL 33122",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex gap-10 w-8/12 pt-16 mx-auto">
      <div className="w-6/12">
        <Heading3>Contact Info</Heading3>
        {contactInfoArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 font-sans mt-6 border shadow-md rounded p-8"
          >
            <div className="flex items-center gap-4">
              {item.phoneIcon}
              <span>{item.phone}:</span>
              <Link
                href={`tel:${item.phoneNumber}`}
                target="_blank"
                className="font-semibold transition-all duration-100 ease-linear transform hover:scale-105 text-blue-500 hover:text-blue-600 hover:underline"
              >
                {item.phoneNumber}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {item.toolFreeIcon}
              <span>{item.tollFree}:</span>
              <Link
                href={`tel:${item.tollFreeNumber}`}
                target="_blank"
                className="font-semibold transition-all duration-100 ease-linear transform hover:scale-105 text-blue-500 hover:text-blue-600 hover:underline"
              >
                {item.tollFreeNumber}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {item.faxIcon}
              <span>{item.fax}:</span>
              <Link
                href={`fax:${item.faxNumber}`}
                target="_blank"
                passHref
                legacyBehavior
              >
                {item.faxNumber}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {item.emailIcon}
              <span>{item.email}:</span>
              <Link
                href={`mailto:${item.emailAddress}`}
                className="font-semibold transition-all duration-100 ease-linear transform hover:scale-105 text-blue-500 hover:text-blue-600 hover:underline"
              >
                {item.emailAddress}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {item.emailReservationsIcon}
              <span>{item.emailReservations}:</span>
              <Link
                href={`mailto:${item.emailAddressReservations}`}
                className="font-semibold transition-all duration-100 ease-linear transform hover:scale-105 text-blue-500 hover:text-blue-600 hover:underline"
              >
                {item.emailAddressReservations}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {item.locationIcon}
              <span>{item.location}:</span>
              <Link
                href="https://maps.app.goo.gl/ejSP2wDqsKd3dYxj8"
                target="_blank"
                className="font-semibold transition-all duration-100 ease-linear transform hover:scale-105 text-blue-500 hover:text-blue-600 hover:underline"
              >
                {item.locationAddress}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-6/12">
        <Heading3>Have Questions?</Heading3>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactInfo;
