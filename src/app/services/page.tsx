import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";
import ServicesInfo from "@/components/my-components/services/ServicesInfo";
import Services from "@/components/my-components/services/Services";

const AllServices = () => {
  return (
    <section id="services" className="pb-20 w-full">
      <LimoImageMenu />
      <ServicesInfo />
      <Services />
    </section>
  );
};

export default AllServices;
