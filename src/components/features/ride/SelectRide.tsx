"use client";

//Store
import { useRideInfoStore } from "@/stores/rideInfoStore";

//Custom Components
import { Separator } from "@/components/ui/separator";
import Heading3 from "@/components/shared/ui-common/Heading3";

//Libs
import { dateModified } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TripMap from "./TripMap";

const SelectRide = () => {
  const { ride } = useRideInfoStore();

  return (
    <div className="w-full bg-gray-100 py-6 sm:py-8 md:py-12">
      <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <Heading3>Your Ride Details</Heading3>

        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full items-stretch">
          <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white mt-4 sm:mt-6">
            {ride && (
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                {/* Outbound Trip */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pb-4">
                    <h4 className="text-base sm:text-lg md:text-xl font-mono font-bold text-red-500">
                      Outbound Trip
                    </h4>
                    <Link href="/reservations">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-500 hover:text-white font-sans hover:bg-blue-600 transition-colors border border-blue-500 hover:border-blue-600 text-xs sm:text-sm w-full sm:w-auto"
                      >
                        🔍 New Search
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6">
                    {/* Location Details */}
                    <div className="flex-1 space-y-2 sm:space-y-3">
                      <div className="bg-gray-50 p-2 sm:p-3 rounded-md">
                        <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                          Pick Up Location:
                        </p>
                        <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words">
                          {ride.pickUpLocation}
                        </p>
                      </div>

                      <div className="bg-gray-50 p-2 sm:p-3 rounded-md">
                        <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                          Stops:
                        </p>
                        {ride.stops.length ? (
                          <ul className="list-disc list-inside space-y-1">
                            {ride.stops?.map((stop, index) => (
                              <li
                                key={index}
                                className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words"
                              >
                                {stop}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[10px] xs:text-xs sm:text-sm font-mono text-red-500">
                            No stops requested
                          </p>
                        )}
                      </div>

                      <div className="bg-gray-50 p-2 sm:p-3 rounded-md">
                        <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                          Drop Off Location:
                        </p>
                        <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words">
                          {ride.dropOffLocation}
                        </p>
                      </div>
                    </div>

                    {/* Separator - Hidden on mobile */}
                    <Separator
                      orientation="vertical"
                      className="hidden lg:block h-auto border-gray-300"
                    />

                    {/* Date & Time Details */}
                    <div className="flex-1 space-y-2 sm:space-y-3 lg:max-w-xs">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-md">
                        <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                          Date & Time:
                        </p>
                        <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words">
                          {`${ride.pickUpTime} on ${dateModified(
                            ride.dateOfService
                          )}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between trips */}
                <Separator
                  orientation="horizontal"
                  className="my-6 border-gray-300"
                />

                {/* Return Trip */}
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-mono font-bold text-red-500 mb-3 sm:mb-4">
                    Return Trip
                  </h4>

                  {ride.roundTrip ? (
                    <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6">
                      {/* Location Details */}
                      <div className="flex-1 space-y-2 sm:space-y-3">
                        <div className="bg-gray-50 p-2 sm:p-3 rounded-md">
                          <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                            Pick Up Location:
                          </p>
                          <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words">
                            {ride.dropOffLocation}
                          </p>
                        </div>

                        <div className="bg-gray-50 p-2 sm:p-3 rounded-md">
                          <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                            Drop Off Location:
                          </p>
                          <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words">
                            {ride.pickUpLocation}
                          </p>
                        </div>
                      </div>

                      {/* Separator - Hidden on mobile */}
                      <Separator
                        orientation="vertical"
                        className="hidden lg:block h-auto border-gray-300"
                      />

                      {/* Date & Time Details */}
                      <div className="flex-1 space-y-2 sm:space-y-3 lg:max-w-xs">
                        <div className="bg-blue-50 p-2 sm:p-3 rounded-md">
                          <p className="text-[10px] xs:text-xs sm:text-sm font-mono font-bold text-gray-900 uppercase mb-1">
                            Date & Time:
                          </p>
                          <p className="text-xs sm:text-sm md:text-base font-sans text-gray-700 break-words">
                            {`${ride.returnTime} on ${
                              ride.returnDate
                                ? dateModified(ride.returnDate)
                                : "N/A"
                            }`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3 sm:p-4">
                      <p className="text-xs sm:text-sm md:text-base font-mono text-red-600 text-center">
                        Round trip not requested for this ride
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <TripMap />
        </div>
      </div>
    </div>
  );
};

export default SelectRide;
