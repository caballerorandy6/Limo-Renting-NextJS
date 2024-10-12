"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddStopStore } from "@/store/addStopStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import LocationIcon from "./LocationIcon";
import CloseIcon from "./CloseIcon";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Interface for form data
interface FormData {
  pickUpLocation: string;
  stops: string[];
}

// Zod schema

const formSchema = z.object({
  pickUpLocation: z.string().min(2, {
    message: "Pick up location is required and must be at least 2 characters.",
  }),
  stops: z
    .array(
      z.string().min(2, {
        message: "Stop location is required and must be at least 2 characters.",
      })
    )
    .optional(),
});

const FormQuote = () => {
  const { stops, addStop, removeStop } = useAddStopStore();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickUpLocation: "",
      stops: [],
    },
  });

  // Form submit
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-gray-600 bg-opacity-80 p-4 rounded-xl"
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
                  className="block w-full p-1 rounded mb-4 text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
        {stops.map((stop, index) => (
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
                  Stop {index++}:
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
