"use client";

import { useRideInfoStore } from "@/store/rideInfoStore";
import { Separator } from "@/components/ui/separator";
import { dateModified } from "@/lib/utils";

const SelectRide = () => {
  const { ride } = useRideInfoStore();

  return (
    <div className="mx-auto w-10/12 pt-60 mb-4">
      <div className="border p-8 rounded mx-auto shadow bg-gray-50">
        {ride && (
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="w-8/12">
                <p className="uppercase font-mono pb-2 font-bold">
                  Pick Up Location:{" "}
                  <span className="normal-case font-normal">
                    {ride.pickUpLocation}
                  </span>
                </p>
                <div className="uppercase font-mono pb-2 font-bold">
                  Stops:{" "}
                  <span className="normal-case font-normal">
                    {ride.stops.length ? (
                      <ul>
                        {ride.stops?.map((stop, index) => (
                          <li key={index}>{stop}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="uppercase font-mono text-red-500 mt-2">
                        No stops are requested on this trip.
                      </p>
                    )}
                  </span>
                </div>
                <p className="uppercase font-mono pb-2 font-bold">
                  Drop Of Location:{" "}
                  <span className="normal-case font-normal">
                    {ride.dropOffLocation}
                  </span>
                </p>
              </div>
              <Separator orientation="vertical" className="h-28 mx-4 border" />
              <div className="w-4/12">
                <p className="uppercase font-mono pb-2 font-bold">
                  Date:{" "}
                  <span className="normal-case font-normal">
                    {`${ride.pickUpTime} on ${dateModified(
                      ride.dateOfService
                    )}`}
                  </span>
                </p>
                <p className="uppercase font-mono pb-2 font-bold">
                  Duration: <span className="normal-case font-normal"></span>
                </p>
              </div>
            </div>
            <Separator orientation="horizontal" className="w-full border" />
            <div className="mt-4">
              {ride.roundTrip ? (
                <div className="flex gap-4">
                  <div className="w-8/12">
                    {" "}
                    <p className="uppercase font-mono pb-2 font-bold">
                      Pick Up Location:{" "}
                      <span className="normal-case font-normal">
                        {ride.dropOffLocation}
                      </span>
                    </p>
                    {/* <div className="uppercase font-mono pb-2 font-bold">
                      Stops:{" "}
                      <span className="normal-case">
                        {ride.stops.length ? (
                          <ul className="font-normal">
                            {ride.stops?.map((stop, index) => (
                              <li key={index}>{stop}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="uppercase font-mono text-red-500 mt-2">
                            No stops are requested on this trip.
                          </p>
                        )}
                      </span>
                    </div> */}
                    <p className="uppercase font-mono pb-2 font-bold">
                      Drop Of Location:{" "}
                      <span className="normal-case font-normal">
                        {ride.pickUpLocation}
                      </span>
                    </p>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-28 mx-4 border"
                  />
                  <div className="w-4/12">
                    <p className="uppercase font-mono pb-2 font-bold">
                      Date:{" "}
                      <span className="normal-case font-normal">
                        {`${
                          ride.returnTime
                        } on ${ride.returnDate?.toLocaleDateString("en-US")}`}
                      </span>
                    </p>
                    <p className="uppercase font-mono pb-2 font-bold">
                      Duration:{" "}
                      <span className="normal-case font-normal"></span>
                    </p>
                  </div>
                </div>
              ) : (
                <p className="uppercase font-mono text-red-500">
                  Round trips are not required for this trip.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default SelectRide;
