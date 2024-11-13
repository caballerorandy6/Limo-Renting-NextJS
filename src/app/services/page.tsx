import Heading from "@/components/my-components/global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";
import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";
import { Card, CardContent } from "@/components/ui/card";
import Services from "@/components/my-components/services/Services";

const AllServices = () => {
  return (
    <section id="services" className="pb-20 w-full">
      <LimoImageMenu />
      <div className="w-8/12 mx-auto flex justify-between mt-16">
        <div className="w-6/12">
          <Heading>What We Offer</Heading>
          <Heading3>Our 5-Star Services</Heading3>
        </div>
        <Card className="w-6/12 p-4 shadow-md font-sans">
          <CardContent>
            At American Transportation, our 5-star chauffeured car services in
            Miami are synonymous with luxury, reliability, and personalized
            attention. From our meticulously maintained fleet to our
            professional chauffeurs, we go above and beyond to exceed our
            clients&apos; expectations at every turn. Experience the epitome of
            luxury chauffeured transportation with American
            Transportation&apos;s unparalleled 5-star car services in Miami,
            Florida.
          </CardContent>
        </Card>
      </div>
      <Services />
    </section>
  );
};

export default AllServices;
