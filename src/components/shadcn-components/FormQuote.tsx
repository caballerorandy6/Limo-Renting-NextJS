"use client";

//React
import { useEffect } from "react";

//React Hook Form
import { useForm } from "react-hook-form";

//Interfaces
import { FormData } from "@/lib/interfaces";

//Zod
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

//Store Zustand
import { useAddStopStore } from "@/store/addStopStore";
//import { useNameAndFlagStore } from "@/store/nameAndFlagStore";

//React Hook Form
import { SubmitHandler } from "react-hook-form";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
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
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

//Utils
import {
  cn,
  pickUpTimeArray,
  typeOfServiceArray,
  generateRangeUpto50,
} from "@/lib/utils";

//Icons
import LocationIcon from "./LocationIcon";
import CloseIcon from "./CloseIcon";
import CalendarIcon from "./CalendarIcon";

//Other
import { format } from "date-fns";

const FormQuote = () => {
  const { stops, addStop, removeStop } = useAddStopStore();
  //const { countries, fetchCountries } = useNameAndFlagStore();

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
    },
  });

  //  Sync stops with form values
  useEffect(() => {
    form.setValue("stops", stops);
  }, [stops, form]);

  // useEffect(() => {
  //   fetchCountries();
  // }, [fetchCountries]);

  // Form submit
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-gray-600 bg-opacity-80 p-4 rounded-xl mt-40"
      >
        <FormDescription className="text-white uppercase font-sans text-center font-bold text-2xl mb-4">
          Get an Instant Quote
        </FormDescription>

        {/* Pick Up Location - Input */}
        <FormField
          control={form.control}
          name="pickUpLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="pickUpLocation"
                className="text-white uppercase text-sm font-sans"
              >
                Pick Up Location:
              </FormLabel>
              <FormControl>
                <Input
                  id="pickUpLocation"
                  type="text"
                  placeholder="Enter address, point of interest, or airport code"
                  className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Add Stop Button */}
        <div className="flex justify-center items-center my-2">
          <Button
            type="button"
            onClick={addStop}
            variant="outline"
            className="text-blue-500 hover:text-blue-700 border-none uppercase"
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
        <FormField
          control={form.control}
          name="dropOffLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="dropOffLocation"
                className="text-white uppercase text-sm font-sans"
              >
                Drop Off Location:
              </FormLabel>
              <FormControl>
                <Input
                  id="dropOffLocation"
                  type="text"
                  placeholder="Enter address, point of interest, or airport code"
                  className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 items-center">
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
                        variant={"calendar"}
                        className={cn(
                          "w-full pl-3 text-left bg-white text-gray-500 flex items-center justify-between hover:bg-gray-200 transition-colors font-mono",
                          !field.value &&
                            "text-muted-foreground hover:text-white"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span className="text-gray-500 font-mono">
                            MM/DD/YYYY
                          </span>
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
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="firstName"
                  className="text-white uppercase text-sm font-sans"
                >
                  First Name:
                </FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* Last Name - Input */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="lastName"
                  className="text-white uppercase text-sm font-sans"
                >
                  Last Name:
                </FormLabel>
                <FormControl>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* Email - Input */}
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="emailAddress"
                  className="text-white uppercase text-sm font-sans"
                >
                  Email Address:
                </FormLabel>
                <FormControl>
                  <Input
                    id="emailAddress"
                    type="text"
                    placeholder="Email Address"
                    className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* <div className="flex items-center justify-center"> */}
          {/* Flag and Name - Select
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
            /> */}

          {/* Phone Number - Input */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="phoneNumber"
                  className="text-white uppercase text-sm font-sans"
                >
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    id="phoneNumber"
                    type="text"
                    placeholder="000-000-0000"
                    className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>
        {/* </div> */}

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 rounded text-white uppercase font-mono block mx-auto mt-4"
        >
          Get Prices & Availability
        </Button>
      </form>
    </Form>
  );
};

export default FormQuote;
