//Custom Components
import FleetVideo from "@/components/my-components/fleet/FleetVideo";
import FleetInfo from "@/components/my-components/fleet/FleetInfo";
import Vehicles from "@/components/my-components/fleet/Vehicles";

const Fleet = () => {
  return (
    <section id="fleet" className="mb-16">
      <FleetVideo />
      <FleetInfo />
      <Vehicles />
    </section>
  );
};

export default Fleet;
