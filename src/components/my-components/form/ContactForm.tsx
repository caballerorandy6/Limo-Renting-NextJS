"use client";

//React Hook Form
import { useForm } from "react-hook-form";

//Interfaces
import { FormContactData } from "@/lib/interfaces";

//Zod
import { contactSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

//React Hook Form
import { SubmitHandler } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const form = useForm<FormContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // Form submit
  const onSubmit: SubmitHandler<FormContactData> = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border shadow-md rounded p-8 mt-6 font-sans w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {/* Name */}
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="block w-full p-1 rounded text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-sans mb-2" />
              </FormItem>
            )}
          />
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {/* Name */}
                  <Input
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    className="block w-full p-1 rounded text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-sans mb-2" />
              </FormItem>
            )}
          />
        </div>
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="email"
                  type="text"
                  placeholder="Email:"
                  className="block w-full p-1 rounded mt-2 text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-sans mb-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Message"
                  className="resize-none block w-full mt-2 p-1 rounded mb-6 text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-sans mb-2 mt-0 pt-0" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 rounded text-white uppercase font-mono w-full mx-auto"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
