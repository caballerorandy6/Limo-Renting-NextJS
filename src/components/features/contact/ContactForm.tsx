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
