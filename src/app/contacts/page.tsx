import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";
import ContactInfo from "@/components/my-components/contact/ContactInfo";
import ContactIFrame from "@/components/my-components/contact/ContactIFrame";

const Contacts = () => {
  return (
    <section id="contact">
      <LimoImageMenu />
      <ContactInfo />
      <ContactIFrame />
    </section>
  );
};

export default Contacts;
