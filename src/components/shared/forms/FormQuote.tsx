"use client";

//Router
import { useRouter } from "next/navigation";

//React
import { useEffect, useState } from "react";

//React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

//Interfaces
import { FormData } from "@/types/forms";

//Zod
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

//Store Zustand
import { useAddStopStore } from "@/stores/addStopStore";
import { useRideInfoStore } from "@/stores/rideInfoStore";

//Server Actions
import { calculateRoute } from "@/actions";

//Shadcn Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

//Custom Components
import InputField from "@/components/shared/forms/InputField";
import PlaceAutocompleteInput from "@/components/shared/forms/PlaceAutocompleteInput";
import CheckboxField from "@/components/shared/forms/CheckBoxField";
import LocationIcon from "@/components/shared/icons/LocationIcon";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import CalendarIcon from "@/components/shared/icons/CalendarIcon";

//Utils
import {
  cn,
  generateRangeUpto50,
  pickUpTimeArray,
  typeOfServiceArray,
} from "@/lib/utils";

//Other
import { format } from "date-fns";
import Script from "next/script";

// Styles
import "@/styles/google-maps-override.css";

const FormQuote = () => {
  const { stops, addStop, removeStop } = useAddStopStore();
  const { setRide, setDistance, setDuration } = useRideInfoStore();

  const router = useRouter();

  // State to control Popover open/close
  const [datePopoverOpen, setDatePopoverOpen] = useState(false);
  const [returnDatePopoverOpen, setReturnDatePopoverOpen] = useState(false);

  //useForm Hook - Always start with empty values
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickUpLocation: "",
      stops: [],
      dropOffLocation: "",
      dateOfService: undefined,
      pickUpTime: "",
      typeOfService: "",
      passengers: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      messageData: false,
      roundTrip: false,
      returnDate: undefined,
      returnTime: "",
    },
  });

  //Access to the roundTrip value
  const roundTrip = form.watch("roundTrip");

  // Form submit - Using Server Action
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { pickUpLocation, dropOffLocation, stops } = data;
    setRide(data);

    try {
      // Use Server Action instead of API route
      const result = await calculateRoute({
        pickUpLocation,
        dropOffLocation,
        stops: stops || [],
      });

      if (!result.success) {
        throw new Error(result.error || "Error calculating the distance");
      }

      setDistance(result.distance || 0);
      setDuration(result.duration || 0);

      console.log({
        distance: result.distance,
        duration: result.duration,
        stops,
        pickUpLocation,
        dropOffLocation,
      });

      // Reset form and navigate to vehicles page
      form.reset();
      router.push("/ride");
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem calculating the distance.");
    }
  };

  return (
    <>
      <Script
        id="google-maps-api"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
        strategy="lazyOnload"
        async
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full bg-zinc-800 bg-opacity-60 p-8 rounded-xl "
        >
          <FormDescription className="text-white uppercase font-sans text-center font-bold text-2xl mb-4">
            Get an Instant Quote
          </FormDescription>
          {/* Pick Up Location - Input */}
          <InputField
            name="pickUpLocation"
            label="Pick Up Location"
            placeholder="Enter address, point of interest, or airport code"
            control={form.control}
            type="text"
            id="pickUpLocation"
            uncontrolled={true}
          />
          {/* Add Stop Button */}
          <div className="flex justify-center items-center my-2">
            <Button
              type="button"
              onClick={() => {
                addStop();
                form.setValue(`stops.${stops.length}`, "");
              }}
              variant="outline"
              className="text-blue-500 hover:text-blue-700 border-none uppercase font-sans font-bold"
            >
              <LocationIcon />
              Add Stop
            </Button>
          </div>
          {/* Stops - Input */}
          {stops.map((_, index) => (
            <FormField
              key={`stop-${index}`}
              control={form.control}
              name={`stops.${index}`}
              render={({ field }) => (
                <FormItem className="relative mb-2">
                  <FormLabel
                    htmlFor={`stops.${index}`}
                    className="text-white uppercase text-sm font-sans"
                  >
                    Stop {index + 1}:
                  </FormLabel>
                  {/* Google Maps PlaceAutocompleteElement - fully integrated with react-hook-form */}
                  <PlaceAutocompleteInput
                    id={`stop-${index}`}
                    name={field.name}
                    placeholder="Enter address, point of interest, or airport code"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200 pr-10"
                  />
                  <FormMessage className="text-red-400" />
                  <Button
                    type="button"
                    onClick={() => removeStop(index)}
                    className="absolute right-2 top-8 bg-red-500 hover:bg-red-700 text-white w-6 h-6 p-0 rounded flex items-center justify-center border-none transition-colors"
                    aria-label={`Remove stop ${index + 1}`}
                  >
                    <CloseIcon />
                  </Button>
                </FormItem>
              )}
            />
          ))}

          {/* Drop Off Location - Input */}
          <InputField
            name="dropOffLocation"
            label="Drop Off Location"
            placeholder="Enter address, point of interest, or airport code"
            control={form.control}
            type="text"
            id="dropOffLocation"
            uncontrolled={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-center">
            {/* Date of Service - Data Picker */}
            <FormField
              control={form.control}
              name="dateOfService"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase text-sm font-sans">
                    Date of Service
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="default"
                          className={cn(
                            "w-full pl-3 text-left bg-white flex items-center justify-between hover:bg-gray-200 transition-colors font-mono",
                            !field.value &&
                              "text-muted-foreground hover:text-black"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="font-mono">MM/DD/YYYY</span>
                          )}
                          <CalendarIcon />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date("2100-01-01") || date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Pick Up Time - Select */}
            <FormField
              control={form.control}
              name="pickUpTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-white font-sans">
                    Pick Up Time
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl className="hover:bg-gray-200 transition-colors">
                      <SelectTrigger className="font-mono">
                        <SelectValue placeholder="Select a pick-up time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {pickUpTimeArray.map((time: string) => (
                        <SelectItem
                          key={time}
                          value={time}
                          className="flex items-center justify-center font-mono cursor-pointer  hover:border hover:border-gray-500 hover:rounded"
                        >
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Type of Service - Select */}
            <FormField
              control={form.control}
              name="typeOfService"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-white font-sans">
                    Type of Service
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl className="hover:bg-gray-200 transition-colors">
                      <SelectTrigger className="font-mono">
                        <SelectValue placeholder="Select the type of service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {typeOfServiceArray.map((service) => (
                        <SelectItem
                          key={service}
                          value={service}
                          className="flex items-center justify-center font-mono cursor-pointer  hover:border hover:border-gray-500 hover:rounded"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Passengers - Select */}
            <FormField
              control={form.control}
              name="passengers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-white font-sans">
                    Passengers
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl className="hover:bg-gray-200 transition-colors">
                      <SelectTrigger className="font-mono">
                        <SelectValue placeholder="Passengers" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {generateRangeUpto50().map((passenger) => (
                        <SelectItem
                          key={passenger}
                          value={passenger}
                          className="flex items-center justify-center font-mono cursor-pointer  hover:border hover:border-gray-500 hover:rounded"
                        >
                          {passenger}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* First Name - Input */}
            <InputField
              name="firstName"
              label="First Name"
              placeholder="First Name"
              control={form.control}
              type="text"
              id="firstName"
            />

            {/* Last Name - Input */}
            <InputField
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              control={form.control}
              type="text"
              id="lastName"
            />

            {/* Email - Input */}
            <InputField
              name="emailAddress"
              label="Email Address"
              placeholder="Email Address"
              control={form.control}
              type="text"
              id="emailAddress"
            />

            {/* Phone Number - Input */}
            <InputField
              name="phoneNumber"
              label="Phone Number"
              placeholder="000-000-0000"
              control={form.control}
              type="text"
              id="phoneNumber"
            />
          </div>
          {/* </div> */}
          {/* Message and Data - Checkbox */}
          <CheckboxField
            name="messageData"
            label="Opt-in to receive texts with pictures and pricing"
            control={form.control}
          />
          {/* Round Trip */}
          <FormField
            control={form.control}
            name="roundTrip"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4 shadow mt-4 bg-white font-sans rounded">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Round Trip</FormLabel>
                </div>
              </FormItem>
            )}
          />
          {/* Round Trip Condition */}
          {roundTrip && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-center">
              {/* Return Date - Data Picker */}
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white uppercase text-sm font-sans">
                      Return Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="default"
                            className={cn(
                              "w-full pl-3 text-left bg-white flex items-center justify-between hover:bg-gray-200 transition-colors font-mono",
                              !field.value &&
                                "text-muted-foreground hover:text-black"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="font-mono">MM/DD/YYYY</span>
                            )}
                            <CalendarIcon />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date("2100-01-01") || date < new Date()
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />

              {/* Pick Up Time - Select */}
              <FormField
                control={form.control}
                name="returnTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-white font-sans">
                      Return Time
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl className="hover:bg-gray-200 transition-colors">
                        <SelectTrigger className="font-mono">
                          <SelectValue placeholder="Select a return time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {pickUpTimeArray.map((time) => (
                          <SelectItem
                            key={time}
                            value={time}
                            className="flex items-center justify-center font-mono cursor-pointer  hover:border hover:border-gray-500 hover:rounded"
                          >
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          )}
          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded text-white uppercase font-mono block mx-auto mt-4"
          >
            Get Prices & Availability
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormQuote;
