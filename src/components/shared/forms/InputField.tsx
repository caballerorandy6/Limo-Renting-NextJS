import { forwardRef } from "react";

//Shadcn Components
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Custom Components
import PlaceAutocompleteInput from "./PlaceAutocompleteInput";

// Interfaces
import { InputFieldProps } from "@/types/forms";

// Utils
import { cn } from "@/lib/utils";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ name, label, placeholder, control, type, id, uncontrolled, className }: InputFieldProps, externalRef) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // For Google Maps autocomplete inputs, use PlaceAutocompleteInput
        if (uncontrolled) {
          return (
            <FormItem>
              <FormLabel
                htmlFor={id || name}
                className="text-white uppercase text-sm font-sans"
              >
                {label}
              </FormLabel>
              {/* Google Maps PlaceAutocompleteElement wrapper - fully integrated with react-hook-form */}
              <PlaceAutocompleteInput
                id={id || name}
                name={field.name}
                placeholder={placeholder}
                value={field.value || ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
                className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
              />
              <FormMessage className="text-red-400" />
            </FormItem>
          );
        }

        // For controlled inputs, use the shadcn Input component
        const mergedRef = (element: HTMLInputElement | null) => {
          if (typeof field.ref === "function") {
            field.ref(element);
          }
          if (externalRef) {
            if (typeof externalRef === "function") {
              externalRef(element);
            } else {
              externalRef.current = element;
            }
          }
        };

        return (
          <FormItem>
            <FormLabel
              htmlFor={id || name}
              className="text-white uppercase text-sm font-sans"
            >
              {label}
            </FormLabel>
            <Input
              id={id || name}
              type={type}
              placeholder={placeholder}
              className={cn("block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200", className)}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              ref={mergedRef}
              autoComplete="off"
            />
            <FormMessage className="text-red-400" />
          </FormItem>
        );
      }}
    />
  )
);

InputField.displayName = "InputField";

export default InputField;
