"use client";

//Router
import { useRouter } from "next/navigation";

//React
import { useEffect, useRef } from "react";

//React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

//Interfaces
import { FormData } from "@/lib/interfaces";

//Zod
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

//Store Zustand
import { useAddStopStore } from "@/store/addStopStore";
//import { useNameAndFlagStore } from "@/store/nameAndFlagStore";
import { useRideInfoStore } from "@/store/rideInfoStore";

// Components
import { Input } from "@/components/ui/input";
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
import InputField from "@/components/my-components/form/InputField";
import CheckboxField from "@/components/my-components/form/CheckBoxField";

//Utils
import {
  cn,
  generateRangeUpto50,
  pickUpTimeArray,
  typeOfServiceArray,
} from "@/lib/utils";

//Icons
import LocationIcon from "../icons/LocationIcon";
import CloseIcon from "../icons/CloseIcon";
import CalendarIcon from "../icons/CalendarIcon";

//Other
import { format } from "date-fns";

//Init Google Maps Autocomplete
const initAutocomplete = (
  inputId: string,
  callback: (place: google.maps.places.PlaceResult) => void
) => {
  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById(inputId) as HTMLInputElement,
    {
      types: ["geocode"],
      componentRestrictions: { country: "us" },
      fields: ["formatted_address", "geometry", "name", "place_id"],
    }
  );
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    callback(place);
  });
};

const FormQuote = () => {
  const { stops, addStop, removeStop } = useAddStopStore();
  //const { countries, fetchCountries } = useNameAndFlagStore();
  const { setRide } = useRideInfoStore();
  const router = useRouter();
  // Use Refs for Google Maps Autocomplete
  const pickUpRef = useRef<HTMLInputElement | null>(null);
  const dropOffRef = useRef<HTMLInputElement | null>(null);

  //useForm Hook
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
      //countries: [],
      messageData: false,
      roundTrip: false,
      returnDate: undefined,
      returnTime: "",
    },
  });

  //Acces to the roundTrip value
  const roundTrip = form.watch("roundTrip");

  useEffect(() => {
    // Wait for the Google Maps script to load
    const checkGoogleMaps = () => {
      if (typeof google !== "undefined" && google.maps) {
        if (pickUpRef.current) {
          initAutocomplete("pickUpLocation", (place) => {
            form.setValue("pickUpLocation", place.formatted_address || "");
          });
        }
        if (dropOffRef.current) {
          initAutocomplete("dropOffLocation", (place) => {
            form.setValue("dropOffLocation", place.formatted_address || "");
          });
        }
      } else {
        // Retry after a short delay if Google Maps isn't available
        setTimeout(checkGoogleMaps, 100);
      }
    };

    // Start checking for Google Maps
    checkGoogleMaps();
  }, [form]);

  //  Sync stops with form values
  useEffect(() => {
    form.setValue("stops", stops);
  }, [stops, form]);

  // Form submit
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setRide(data);
      form.reset();
      router.push("/ride");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <script
        async
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      ></script>
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
            ref={pickUpRef}
          />
          {/* Add Stop Button */}
          <div className="flex justify-center items-center my-2">
            <Button
              type="button"
              onClick={addStop}
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
              key={index}
              control={form.control}
              name={`stops.${index}`}
              defaultValue="" //Initial value for the input
              render={({ field }) => (
                <FormItem className="relative mb-2">
                  <FormLabel
                    htmlFor={`stops.${index}`}
                    className="text-white uppercase text-sm font-sans"
                  >
                    Stop {index + 1}:
                  </FormLabel>
                  <FormControl>
                    <Input
                      id={`stops.${index}`}
                      type="text"
                      placeholder="Enter address, point of interest, or airport code"
                      className="block w-full p-1 rounded text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />

                  <Button
                    type="button"
                    onClick={() => removeStop(index)}
                    variant={"outline"}
                    className="absolute inset-y-0 right-0 flex items-center border-none"
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
            ref={dropOffRef}
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

// useEffect(() => {
//   fetchCountries();
// }, [fetchCountries]);

{
  /* <div className="flex items-center justify-center"> */
}
{
  /* Flag and Name - Select
            <FormField
              control={form.control}
              name="countries"
              render={({ field }) => (
                <FormItem className="w-2/12">
                  <Select onValueChange={field.onChange} value={field.value[0]}>
                    <FormControl className="hover:bg-gray-200 transition-colors">
                      <SelectTrigger className="font-mono text-gray-500">
                        <SelectValue placeholder="Country telephone prefix is ​​required" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem
                          key={country?.flag}
                          value={`${country?.name?.common} ${country?.flag}`}
                          className="flex items-center justify-center font-mono cursor-pointer  hover:border hover:border-gray-500 hover:rounded"
                        >
                          {`${country.name?.common} ${country.flag}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            /> */
}
