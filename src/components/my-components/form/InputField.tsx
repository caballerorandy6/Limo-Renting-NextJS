import React, { forwardRef } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  type: string;
  id: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ name, label, placeholder, control, type, id }: InputFieldProps, ref) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            htmlFor={name}
            className="text-white uppercase text-sm font-sans"
          >
            {label}
          </FormLabel>
          <FormControl>
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
              {...field}
              ref={ref}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  )
);

InputField.displayName = "InputField"; // Important for debugging and readability in React DevTools

export default InputField;
