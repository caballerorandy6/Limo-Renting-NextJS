import Link from "next/link";

//Custom Components
import ContactForm from "@/components/features/contact/ContactForm";
import Heading3 from "@/components/shared/ui-common/Heading3";
import Phone2Icon from "@/components/shared/icons/Phone2Icon";
import HeadPhoneIcon from "@/components/shared/icons/HeadPhoneIcon";
import PrinterIcon from "@/components/shared/icons/PrinterIcon";
import Email2Icon from "@/components/shared/icons/Email2Icon";
import AppointmentIcon from "@/components/shared/icons/AppointmentIcon";
import Location2Icon from "@/components/shared/icons/Location2Icon";

//Interfaces
import { ContactInfoProps } from "@/types/contact";

//Array (Generic values for educational purposes)
const contactInfoArray: ContactInfoProps[] = [
  {
    phoneIcon: <Phone2Icon />,
    phone: "Phone",
    phoneNumber: "(555) 123-4567",
    toolFreeIcon: <HeadPhoneIcon />,
    tollFree: "Toll Free",
    tollFreeNumber: "(800) 555-0123",
    faxIcon: <PrinterIcon />,
    fax: "Fax",
    faxNumber: "(555) 123-4568",
    emailIcon: <Email2Icon />,
    email: "Email",
    emailAddress: "info@example.com",
    emailReservationsIcon: <AppointmentIcon />,
    emailReservations: "Reservations",
    emailAddressReservations: "reservations@example.com",
    locationIcon: <Location2Icon />,
    location: "Location",
    locationAddress: "123 Main Street, Miami, FL 33101",
  },
];

const ContactInfo = () => {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Left Section - Contact Information */}
          <div className="w-full lg:w-1/2 space-y-6">
            <Heading3>Contact Info</Heading3>
            {contactInfoArray.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 md:gap-5 font-sans border border-gray-200 rounded-lg shadow-md p-5 md:p-6 w-full bg-white"
              >
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  <span className="flex-shrink-0">{item.phoneIcon}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-sm md:text-base">{item.phone}: </span>
                    <Link
                      href={`tel:${item.phoneNumber}`}
                      target="_blank"
                      className="font-semibold text-sm md:text-base transition-all duration-200 text-blue-500 hover:text-blue-600 hover:underline"
                    >
                      {item.phoneNumber}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  <span className="flex-shrink-0">{item.toolFreeIcon}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-sm md:text-base">{item.tollFree}: </span>
                    <Link
                      href={`tel:${item.tollFreeNumber}`}
                      target="_blank"
                      className="font-semibold text-sm md:text-base transition-all duration-200 text-blue-500 hover:text-blue-600 hover:underline"
                    >
                      {item.tollFreeNumber}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  <span className="flex-shrink-0">{item.faxIcon}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-sm md:text-base">{item.fax}: </span>
                    <Link
                      href={`fax:${item.faxNumber}`}
                      target="_blank"
                      className="font-semibold text-sm md:text-base transition-all duration-200 text-blue-500 hover:text-blue-600 hover:underline"
                    >
                      {item.faxNumber}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  <span className="flex-shrink-0">{item.emailIcon}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-sm md:text-base">{item.email}: </span>
                    <Link
                      href={`mailto:${item.emailAddress}`}
                      className="font-semibold text-sm md:text-base transition-all duration-200 text-blue-500 hover:text-blue-600 hover:underline break-all"
                    >
                      {item.emailAddress}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  <span className="flex-shrink-0">{item.emailReservationsIcon}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-sm md:text-base">{item.emailReservations}: </span>
                    <Link
                      href={`mailto:${item.emailAddressReservations}`}
                      className="font-semibold text-sm md:text-base transition-all duration-200 text-blue-500 hover:text-blue-600 hover:underline break-all"
                    >
                      {item.emailAddressReservations}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  <span className="flex-shrink-0">{item.locationIcon}</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-sm md:text-base">{item.location}: </span>
                    <Link
                      href="https://maps.app.goo.gl/ejSP2wDqsKd3dYxj8"
                      target="_blank"
                      className="font-semibold text-sm md:text-base transition-all duration-200 text-blue-500 hover:text-blue-600 hover:underline"
                    >
                      {item.locationAddress}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            <Heading3>Have Questions?</Heading3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
