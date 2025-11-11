"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//Store
import { useContactEmailStore } from "@/stores/contactEmailStore";
import { useSendingEmailButtonStore } from "@/stores/sendingEmailButtonStore";
import { contactSchema } from "@/stores/contactEmailStore";

//Server Actions
import { submitContactForm } from "@/actions/contacts";

//Shadcn Components
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

//Hooks
import { useToast } from "@/hooks/use-toast";

//Libs
import { toastDate } from "@/lib/utils";

//Interfaces
import { ContactEmailProps } from "@/types/contact";

const ContactForm = () => {
  const { setContactEmail, contactEmail } = useContactEmailStore();
  const { buttonText, setButtonText } = useSendingEmailButtonStore();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: contactEmail,
  });

  // Submit handler. Using Server Action
  const onSubmit: SubmitHandler<ContactEmailProps> = async (data) => {
    setButtonText("Sending...");
    setContactEmail(data);

    try {
      // Use Server Action instead of API route
      const result = await submitContactForm(data);

      if (result.success) {
        // Reset the form
        form.reset();

        // Toast success
        toast({
          title: "Your Message has been sent.",
          description: toastDate,
          duration: 5000,
          variant: "custom",
        });
      } else {
        // Toast error
        toast({
          title: "Failed to send message",
          description: result.error || "Please try again later",
          duration: 5000,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setButtonText("Send Message");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-gray-200 rounded-lg shadow-md p-5 md:p-6 font-sans w-full bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
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
                    className="block w-full p-2 md:p-2.5 rounded text-sm md:text-base hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-sans text-xs md:text-sm" />
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
                    className="block w-full p-2 md:p-2.5 rounded text-sm md:text-base hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-sans text-xs md:text-sm" />
              </FormItem>
            )}
          />
        </div>

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-4 md:mt-5">
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="block w-full p-2 md:p-2.5 rounded text-sm md:text-base hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors"
                />
              </FormControl>
              <FormMessage className="text-red-500 font-sans text-xs md:text-sm" />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-4 md:mt-5">
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Message"
                  {...field}
                  className="resize-none block w-full p-2 md:p-2.5 rounded text-sm md:text-base hover:bg-gray-200 placeholder:text-gray-400 placeholder:font-sans border bg-gray-100 border-gray-300 transition-colors min-h-[120px]"
                />
              </FormControl>
              <FormMessage className="text-red-500 font-sans text-xs md:text-sm" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-6 md:mt-8 bg-blue-500 text-white cursor-pointer rounded uppercase font-mono w-full py-2 md:py-2.5 transition-colors hover:bg-blue-600 text-sm md:text-base"
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
