//Zod
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { RoundTrip } from "./interfaces";

// Zod schema
export const formSchema = z
  .object({
    rideId: z
      .string()
      .uuid()
      .default(() => uuidv4()),
    pickUpLocation: z.string().min(2, {
      message:
        "Pick up location is required and must be at least 2 characters.",
    }),
    dropOffLocation: z.string().min(2, {
      message:
        "Drop off location is required and must be at least 2 characters.",
    }),
    stops: z.array(z.string()).optional(),
    dateOfService: z.date({ required_error: "Date of service is required." }),
    pickUpTime: z.string().refine((value) => value.trim().length > 0, {
      message: "Pick up time is required.",
    }),
    tripTypeId: z.string().min(1, {
      message: "Trip type is required.",
    }),
    serviceId: z.string().optional(),
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
    messageData: z.boolean().default(false).optional(),
    roundTrip: z.boolean(),
    returnDate: z.date().optional(),
    returnTime: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.roundTrip) {
        return !!data.returnDate && !!data.returnTime;
      }
      return true;
    },
    {
      message: "Return date and time are required for round trips.",
      path: ["returnDate", "returnTime"],
    }
  )
  .refine(
    (data) => {
      if (data.returnDate) {
        return data.dateOfService <= data.returnDate;
      }
      return true;
    },
    {
      message: "Date of service cannot be later than the return date.",
      path: ["dateOfService"],
    }
  );

  export const vehicleSchema = z.object({
    name: z.string().min(1, "Name is required").max(100, "Name is too long"),
    quantityPassengers: z.coerce
      .number()
      .min(1, "Must have at least 1 passenger")
      .max(50, "Maximum 50 passengers"),
    quantityBaggage: z.coerce
      .number()
      .min(0, "Cannot be negative")
      .max(20, "Maximum 20 baggage"),
    description: z.string().min(10, "Description must be at least 10 characters").max(1000, "Description is too long"),
    pricePerHour: z.coerce
      .number()
      .min(1, "Price must be greater than 0")
      .max(10000, "Price is too high"),
    pricePerMile: z.coerce
      .number()
      .min(0.1, "Price must be greater than 0")
      .max(1000, "Price is too high"),
    isActive: z.boolean().default(true),
    image: z
      .any()
      .refine((files) => !files || files?.length === 0 || files?.[0]?.size <= 5000000, "Image must be less than 5MB")
      .refine(
        (files) => !files || files?.length === 0 || ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
        "Only .jpg, .png, .webp formats are supported"
      )
      .optional(),
  });

  export const vehicleSchemaCreate = vehicleSchema.extend({
    image: z
      .any()
      .refine((files) => files?.length > 0, "Image is required")
      .refine((files) => files?.[0]?.size <= 5000000, "Image must be less than 5MB")
      .refine(
        (files) => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
        "Only .jpg, .png, .webp formats are supported"
      ),
  });

  export const createBookingSchema = z.object({
      // Contact Info
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().min(1, "Phone number is required"),

      // Trip Details
      pickUpLocation: z.string().min(1, "Pick-up location is required"),
      dropOffLocation: z.string().min(1, "Drop-off location is required"),
      stops: z.array(z.string()).default([]),
      dateOfService: z.coerce.date(),
      pickUpTime: z.string().min(1, "Pick-up time is required"),

      // Round Trip (optional)
      roundTrip: z.boolean().default(false),
      returnDate: z.coerce.date().optional().nullable(),
      returnTime: z.string().optional().nullable(),

      // Trip & Service Details
      tripTypeId: z.string().min(1, "Trip type is required"),
      passengers: z.number().int().positive("At least 1 passenger required"),

      // Vehicle & Service
      vehicleId: z.string().min(1, "Vehicle ID is required"),
      serviceId: z.string().optional().nullable(),

      // Add-ons
      childSeat: z.boolean().default(false),
      meetGreet: z.boolean().default(false),
      champagne: z.boolean().default(false),
      addOnsTotal: z.number().nonnegative().default(0),

      // Pricing & Distance
      distance: z.number().nonnegative().optional().nullable(),
      duration: z.number().int().nonnegative().optional().nullable(),
      totalPrice: z.number().positive("Total price must be greater than 0"),

      // Special Instructions
      specialInstructions: z.string().optional().nullable(),
    });
  
  

//Schema Contact Form
// export const contactSchema = z.object({
//   name: z
//     .string()
//     .min(2, { message: "Name is required and must be at least 2 characters." }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   phone: z
//     .string()
//     .min(10, { message: "Please enter a valid phone number with 10 digits." })
//     .max(10, {
//       message: "Please enter a valid phone number with 10 digits.",
//     }),
//   message: z.string().optional(),
// });
