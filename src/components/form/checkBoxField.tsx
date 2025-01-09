"use client"

import { useFormContext } from 'react-hook-form';

import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/form/form"

type CheckboxFieldProps ={
  name: string;
  title?: string;
  className?: string;
  disable?: boolean;
  readOnly?: boolean;
  mandatory?: boolean;
}
export function CheckboxField({
  name,
  title,
  className,
  disable,
  readOnly,
  mandatory
}: CheckboxFieldProps) {
  const { control, getFieldState } = useFormContext();
  const fieldState = getFieldState(name);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              {title}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  )
}
