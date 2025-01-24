"use client";

import Link from "next/link";

// Interfaces
import { ContactEmailProps } from "@/components/my-components/contact/interfaces";

const EmailTemplate: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  phone,
  email,
  message,
}) => {
  return (
    <div>
      <p>{`Message from: ${name}`}</p>
      <p>{`Phone: ${phone}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Message: ${message}`}</p>

      <Link
        className="bg-blue-500 hover:bg-blue-600 text-white transition-colors p-2 rounded-md"
        href="https://limo-renting-next-js.vercel.app/"
      ></Link>
    </div>
  );
};

export default EmailTemplate;
