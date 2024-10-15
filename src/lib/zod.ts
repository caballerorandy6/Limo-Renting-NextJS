//Zod
import { z } from "zod";

// Zod schema
export const formSchema = z.object({
  pickUpLocation: z.string().min(2, {
    message: "Pick up location is required and must be at least 2 characters.",
  }),
  dropOffLocation: z.string().min(2, {
    message: "Drop off location is required and must be at least 2 characters.",
  }),
  stops: z
    .array(
      z.string().min(2, {
        message: "Stop location is required and must be at least 2 characters.",
      })
    )
    .optional(),
  dateOfService: z.date({ required_error: "Date of service is required." }),
  pickUpTime: z.string().refine((value) => value.trim().length > 0, {
    message: "Pick up time is required.",
  }),
  typeOfService: z.string().refine((value) => value.trim().length > 0, {
    message: "Type of service is required.",
  }),
  passengers: z.string().refine((value) => value.trim().length > 0, {
    message: "Number of passengers is required.",
  }),
  firstName: z.string().min(2, {
    message: "First name is required and must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name is required and must be at least 2 characters.",
  }),
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number with 10 digits." })
    .max(10, {
      message: "Please enter a valid phone number with 10 digits.",
    }),
  // countries: z.array(z.string()).nonempty({
  //   message: "Country telephone prefix is ​​required",
  // }),
});