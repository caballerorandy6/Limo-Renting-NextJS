"use client";

import { VehicleApiResponse } from "@/types/fleet";
import { MyCarousel } from "@/components/shared/ui-common/MyCarousel";
import Car2Icon from "@/components/shared/icons/Car2Icon";
import CarSeatIcon from "@/components/shared/icons/CarSeatIcon";
import MinibarIcon from "@/components/shared/icons/MinibarIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface VehicleDetailProps {
  vehicle: VehicleApiResponse;
}

const VehicleDetail = ({ vehicle }: VehicleDetailProps) => {
  return (
    <section className="min-h-screen bg-gray-50 pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/fleet"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-6 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fleet
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="relative bg-gray-100 lg:min-h-[600px]">
              <div className="sticky top-24">
                <MyCarousel images={vehicle.images} />
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sans leading-tight">
                {vehicle.name}
              </h1>

              {/* Status Badge */}
              {vehicle.isActive && (
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    Available
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                {vehicle.description}
              </p>

              {/* Specifications Grid */}
              <div className="space-y-4 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 font-sans">
                  Specifications
                </h2>

                {/* Passengers */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600">
                      <Car2Icon />
                    </span>
                    <span className="font-semibold text-gray-900 font-sans">
                      Passengers
                    </span>
                  </div>
                  <span className="text-lg font-bold text-gray-900 font-sans">
                    {vehicle.quantityPassengers} pax
                  </span>
                </div>

                {/* Baggage */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600">
                      <CarSeatIcon />
                    </span>
                    <span className="font-semibold text-gray-900 font-sans">
                      Baggage Capacity
                    </span>
                  </div>
                  <span className="text-lg font-bold text-gray-900 font-sans">
                    {vehicle.quantityBaggage} bags
                  </span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 font-sans">
                  Pricing
                </h2>

                <div className="space-y-3">
                  {/* Price per Hour */}
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-red-600">
                        <MinibarIcon />
                      </span>
                      <span className="font-semibold text-gray-900 font-sans">
                        Hourly Rate
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-red-600 font-sans">
                      ${vehicle.pricePerHour}/hr
                    </span>
                  </div>

                  {/* Price per Mile */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900 font-sans">
                      Per Mile Rate
                    </span>
                    <span className="text-xl font-bold text-gray-900 font-sans">
                      ${vehicle.pricePerMile}/mile
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reservations" className="flex-1">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 text-lg rounded-lg transition-colors duration-200"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </Link>
                <Link href="/contacts" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold py-6 text-lg rounded-lg transition-colors duration-200"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-sans">
                  <span className="font-semibold">Need help?</span> Contact our team for custom quotes and availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section (Optional) */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">
            Why Choose This Vehicle?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 font-sans">Professional Service</h3>
                <p className="text-sm text-gray-600 font-sans">Experienced chauffeurs and top-tier service</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 font-sans">Luxury Amenities</h3>
                <p className="text-sm text-gray-600 font-sans">Premium features and comfortable interiors</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 font-sans">Flexible Booking</h3>
                <p className="text-sm text-gray-600 font-sans">Hourly rates and custom packages available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetail;
