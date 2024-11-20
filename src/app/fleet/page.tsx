import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";
import FleetInfo from "@/components/my-components/fleet/FleetInfo";
import Vehicles from "@/components/my-components/fleet/Vehicles";

const Fleet = () => {
  return (
    <section id="fleet" className="mb-16">
      <LimoImageMenu />
      <FleetInfo />
      <Vehicles />
    </section>
  );
};

export default Fleet;
