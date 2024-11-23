import { APIProvider } from "@vis.gl/react-google-maps";
import MyMap from "@/components/my-components/global-components/MyMap";

const ContactMap = () => {
  const myApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={myApiKey || ""}>
      <MyMap />
    </APIProvider>
  );
};

export default ContactMap;
