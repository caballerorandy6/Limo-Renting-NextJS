"use client";

import Image from "next/image";
import Link from "next/link";

// Shadcn Components
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Custom Components
import Heading2 from "@/components/shared/ui-common/Heading2";
import Heading3 from "@/components/shared/ui-common/Heading3";
import PassengersIcon from "@/components/shared/icons/PassengersIcon";
import BriefcaseIcon from "@/components/shared/icons/BriefcaseIcon";
import LocationIcon from "@/components/shared/icons/LocationIcon";
import EmailIcon from "@/components/shared/icons/EmailIcon";
import PhoneRingIcon from "@/components/shared/icons/PhoneRingIcon";

/**
 * RideQuote Page - Request Quote via Email
 *
 * TODO: Implement the following logic:
 * - Get ride data from store (useRideInfoStore)
 * - Get selected vehicle data
 * - Calculate estimated price range
 * - Handle form submission for quote request
 * - Send quote request email to business
 * - Send confirmation email to customer
 * - Redirect to success/thank you page
 */

const RideQuotePage = () => {
  // TODO: Get data from store
  // const { ride, distance, duration } = useRideInfoStore();
  // const selectedVehicle = ... // Get from store or route params

  // TODO: Calculate estimated pricing
  // const estimatedPrice = calculateEstimatedPrice(distance, duration, vehicle);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 min-h-screen py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Heading2>Request a Quote</Heading2>
          <p className="text-gray-600 font-sans mt-2 max-w-2xl mx-auto">
            We'll send you a detailed quote via email within 2 hours. No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Form - Left Side (3/5) */}
          <div className="lg:col-span-3 space-y-6">

            {/* Quote Request Form */}
            <Card className="border-2 border-blue-300 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="font-mono text-xl">📧 Your Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {/* TODO: Implement form with react-hook-form + zod validation */}
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="font-sans font-semibold">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="mt-1 font-sans"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-sans font-semibold">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="mt-1 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-sans font-semibold flex items-center gap-2">
                      <EmailIcon /> Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="mt-1 font-sans"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send your quote to this email
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-sans font-semibold flex items-center gap-2">
                      <PhoneRingIcon /> Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="mt-1 font-sans"
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredContact" className="font-sans font-semibold">
                      Preferred Contact Method
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 font-sans">
                        <SelectValue placeholder="Select preferred method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency" className="font-sans font-semibold">
                      When do you need a response?
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 font-sans">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="today">Within today</SelectItem>
                        <SelectItem value="24hrs">Within 24 hours</SelectItem>
                        <SelectItem value="week">Within a week</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes" className="font-sans font-semibold">
                      Additional Notes or Questions
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requests, questions about pricing, or additional details..."
                      className="mt-1 min-h-[120px] font-sans"
                    />
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="border-2 border-green-300 shadow-lg bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="font-mono text-lg flex items-center gap-2">
                  ✅ What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-sans font-semibold">Quote Review</p>
                      <p className="text-sm text-gray-600">
                        Our team reviews your trip details and prepares a custom quote
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-sans font-semibold">Email Delivery</p>
                      <p className="text-sm text-gray-600">
                        Detailed quote sent to your email within 2 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-sans font-semibold">Book When Ready</p>
                      <p className="text-sm text-gray-600">
                        Click the link in your email to confirm your booking
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side (2/5) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Trip Summary */}
            <Card className="border-2 border-gray-300 shadow-lg sticky top-24">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="font-mono text-lg">Trip Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {/* TODO: Replace with actual data from store */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">From</p>
                    <p className="font-sans text-sm font-semibold">
                      Miami International Airport
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">To</p>
                    <p className="font-sans text-sm font-semibold">
                      South Beach, Miami, FL
                    </p>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Distance</p>
                      <p className="font-bold text-blue-600">12.5 mi</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Duration</p>
                      <p className="font-bold text-blue-600">~25 min</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Passengers</p>
                      <p className="font-bold text-blue-600">3</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Date</p>
                      <p className="font-bold text-blue-600">Dec 25</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Vehicle */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="font-mono text-lg">Selected Vehicle</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {/* TODO: Replace with actual selected vehicle */}
                <div className="space-y-4">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/fleet/vehicle1.webp"
                      alt="Selected Vehicle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-mono font-bold text-center">Luxury Crossover</h4>
                  <div className="flex justify-center gap-3">
                    <div className="flex items-center gap-1 text-sm">
                      <PassengersIcon />
                      <span>3</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <BriefcaseIcon />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estimated Price */}
            <Card className="border-2 border-yellow-300 shadow-lg bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <CardTitle className="font-mono text-lg">Estimated Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                {/* TODO: Calculate actual estimated price range */}
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-yellow-600 font-mono">
                    $100 - $140
                  </p>
                  <p className="text-xs text-gray-600 font-sans">
                    Final price may vary based on exact route and add-ons
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Card className="border-2 border-blue-500 shadow-xl">
              <CardContent className="pt-6">
                {/* TODO: Implement form submission */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 font-mono">
                  📧 Send Quote Request
                </Button>
                <p className="text-xs text-center text-gray-500 mt-3 font-sans">
                  By submitting, you agree to receive quote details via email
                </p>
              </CardContent>
            </Card>

            {/* Alternative Option */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="pt-6 text-center space-y-3">
                <p className="text-sm font-sans text-gray-600">
                  Ready to book now?
                </p>
                <Link href="/ride/ride-info">
                  <Button variant="outline" className="w-full font-mono">
                    ← Back to Booking
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-2 border-gray-200 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50">
              <CardContent className="pt-6">
                <h4 className="font-mono font-bold text-center mb-3">
                  Prefer to Talk?
                </h4>
                <div className="text-center space-y-2">
                  <p className="text-sm font-sans text-gray-600">
                    Call us for immediate assistance
                  </p>
                  <p className="font-mono font-bold text-blue-600 text-lg">
                    (555) 123-4567
                  </p>
                  <p className="text-xs text-gray-500">Available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-12">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-sans font-semibold text-sm">Fast Response</p>
                  <p className="text-xs text-gray-600">Within 2 hours</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💰</div>
                  <p className="font-sans font-semibold text-sm">No Obligation</p>
                  <p className="text-xs text-gray-600">Free quotes</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <p className="font-sans font-semibold text-sm">Privacy Protected</p>
                  <p className="text-xs text-gray-600">Secure data</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⭐</div>
                  <p className="font-sans font-semibold text-sm">5-Star Service</p>
                  <p className="text-xs text-gray-600">1000+ reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RideQuotePage;
