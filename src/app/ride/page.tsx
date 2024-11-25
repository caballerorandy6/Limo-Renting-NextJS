import GetVehicles from "@/components/my-components/ride/GetVehicles";
import SelectRide from "@/components/my-components/ride/SelectRide";
import VehiclesSkeleton from "@/components/my-components/ride/VehiclesSkeleton";
import { Suspense } from "react";

const Ride = () => {
  return (
    <>
      <SelectRide />
      <Suspense fallback={<VehiclesSkeleton />}>
        <GetVehicles />
      </Suspense>
    </>
  );
};

export default Ride;
