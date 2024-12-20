"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactEmailStore } from "@/store/contactEmailStore";
import { ContactEmailProps } from "@/store/contactEmailStore";
import { useSendingEmailButtonStore } from "@/store/sendingEmailButtonStore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { contactSchema } from "@/store/contactEmailStore";
import { useToast } from "@/hooks/use-toast";
import { toastDate } from "@/lib/utils";

const ContactForm = () => {
  const { setContactEmail, contactEmail } = useContactEmailStore();
  const { buttonText, setButtonText } = useSendingEmailButtonStore();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: contactEmail,
  });

  // Submit handler. Sending data to the backend
  const onSubmit: SubmitHandler<ContactEmailProps> = async (data) => {
    setButtonText("Sending...");
    setContactEmail(data);
    //console.log(data);

    // Sending data to the backend
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Getting the response data
    const responseData = await response.json();
    console.log(responseData);

    // Reset the form
    form.reset();

    //Toast
    toast({
      title: "Your Message has been sent.",
      description: toastDate,
      duration: 5000,
      variant: "custom",
    });

    setButtonText("Send Message");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border shadow-md p-4 mt-6 font-sans w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...field}
                    className="block w-full p-1 rounded text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-sans" />
              </FormItem>
            )}
          />
          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    {...field}
                    className="block w-full p-1 rounded text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-sans" />
              </FormItem>
            )}
          />
        </div>

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="block w-full p-1 rounded mt-2 text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                />
              </FormControl>
              <FormMessage className="text-red-500 font-sans" />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Message"
                  {...field}
                  className="resize-none block w-full mt-2 p-1 rounded mb-6 text-sm hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                />
              </FormControl>
              <FormMessage className="text-red-500 font-sans" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="
          bg-blue-500 text-white cursor-pointer rounded uppercase font-mono w-full mx-auto transition-colors hover:bg-blue-600"
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
