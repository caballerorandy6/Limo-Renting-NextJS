"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

//Custom Components
import MyMap from "@/components/features/contact/ContactMyMap";

const ContactMap = () => {
  const myApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={myApiKey || ""}>
      <MyMap />
    </APIProvider>
  );
};

export default ContactMap;
