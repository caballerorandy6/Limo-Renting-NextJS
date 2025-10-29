"use client";

//Store
import { useRideInfoStore } from "@/stores/rideInfoStore";

//Custom Components
import { Separator } from "@/components/ui/separator";
import Heading3 from "@/components/shared/ui-common/Heading3";

//Libs
import { dateModified } from "@/lib/utils";

const SelectRide = () => {
  const { ride } = useRideInfoStore();

  return (
    <div className="w-full bg-gray-100 py-8 md:py-12">
      <div className="mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <Heading3>Your Ride Details</Heading3>

        <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white mt-6">
          {ride && (
            <div className="p-4 md:p-6 lg:p-8">
              {/* Outbound Trip */}
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-mono font-bold text-red-500 mb-4">
                  Outbound Trip
                </h4>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                  {/* Location Details */}
                  <div className="flex-1 space-y-3">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                        Pick Up Location:
                      </p>
                      <p className="text-sm md:text-base font-sans text-gray-900">
                        {ride.pickUpLocation}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                        Stops:
                      </p>
                      {ride.stops.length ? (
                        <ul className="list-disc list-inside space-y-1">
                          {ride.stops?.map((stop, index) => (
                            <li key={index} className="text-sm md:text-base font-sans text-gray-900">
                              {stop}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs md:text-sm font-mono text-red-500">
                          No stops requested
                        </p>
                      )}
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                        Drop Off Location:
                      </p>
                      <p className="text-sm md:text-base font-sans text-gray-900">
                        {ride.dropOffLocation}
                      </p>
                    </div>
                  </div>

                  {/* Separator - Hidden on mobile */}
                  <Separator orientation="vertical" className="hidden lg:block h-auto border-gray-300" />

                  {/* Date & Time Details */}
                  <div className="flex-1 space-y-3 lg:max-w-xs">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                        Date & Time:
                      </p>
                      <p className="text-sm md:text-base font-sans text-gray-900">
                        {`${ride.pickUpTime} on ${dateModified(ride.dateOfService)}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator between trips */}
              <Separator orientation="horizontal" className="my-6 border-gray-300" />

              {/* Return Trip */}
              <div>
                <h4 className="text-lg md:text-xl font-mono font-bold text-red-500 mb-4">
                  Return Trip
                </h4>

                {ride.roundTrip ? (
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Location Details */}
                    <div className="flex-1 space-y-3">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                          Pick Up Location:
                        </p>
                        <p className="text-sm md:text-base font-sans text-gray-900">
                          {ride.dropOffLocation}
                        </p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                          Drop Off Location:
                        </p>
                        <p className="text-sm md:text-base font-sans text-gray-900">
                          {ride.pickUpLocation}
                        </p>
                      </div>
                    </div>

                    {/* Separator - Hidden on mobile */}
                    <Separator orientation="vertical" className="hidden lg:block h-auto border-gray-300" />

                    {/* Date & Time Details */}
                    <div className="flex-1 space-y-3 lg:max-w-xs">
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-xs md:text-sm font-mono font-bold text-gray-700 uppercase mb-1">
                          Date & Time:
                        </p>
                        <p className="text-sm md:text-base font-sans text-gray-900">
                          {`${ride.returnTime} on ${
                            ride.returnDate ? dateModified(ride.returnDate) : "N/A"
                          }`}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <p className="text-sm md:text-base font-mono text-red-600 text-center">
                      Round trip not requested for this ride
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectRide;
