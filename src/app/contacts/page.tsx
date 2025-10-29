"use client";

//Custom Components
import LimoImageMenu from "@/components/shared/ui-common/LimoImageMenu";
import ContactInfo from "@/components/features/contact/ContactInfo";
import ContactMap from "@/components/features/contact/ContactMap";

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
