//Shadcn Components
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

//Interfaces
import { CheckboxFieldProps } from "@/components/my-components/form/interfaces";

const CheckboxField = ({ name, label, control }: CheckboxFieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4 shadow mt-4 bg-white font-sans rounded">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <div className="space-y-1 leading-none">
          <FormLabel>{label}</FormLabel>
        </div>
      </FormItem>
    )}
  />
);

export default CheckboxField;
