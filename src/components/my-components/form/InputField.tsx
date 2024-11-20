import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputFieldProps } from "@/lib/interfaces";

const InputField = ({
  name,
  label,
  placeholder,
  control,
  type,
}: InputFieldProps) => (
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
            id={name}
            type={type}
            placeholder={placeholder}
            className="block w-full p-1 rounded mb-4 text-sm hover:bg-gray-200"
            {...field}
          />
        </FormControl>
        <FormMessage className="text-red-400" />
      </FormItem>
    )}
  />
);

export default InputField;
