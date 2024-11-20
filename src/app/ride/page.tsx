import GetVehicles from "@/components/my-components/ride/GetVehicles";
import SelectRide from "@/components/my-components/ride/SelectRide";

const Ride = () => {
  return (
    <div className="bg-gray-50">
      <SelectRide />
      <GetVehicles />
    </div>
  );
};

export default Ride;
