"use client";

//Custom Components
import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";
import ContactInfo from "@/components/my-components/contact/ContactInfo";
import ContactMap from "@/components/my-components/contact/ContactMap";

const Contacts = () => {
  return (
    <section id="contact">
      <LimoImageMenu />
      <ContactInfo />
      <ContactMap />
    </section>
  );
};

export default Contacts;
