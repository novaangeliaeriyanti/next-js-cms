"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/form/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFormContext } from "react-hook-form"
import { cn } from "@/shared/lib/utils"

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string,
  containerClassName?: string,
  options?: { label: string, value: string }[]
};

export function SelectField({
  title,
  name,
  containerClassName,
  className,
  required,
  placeholder,
  options,
}: InputFieldProps) {
  const { control, getFieldState } = useFormContext();
  const fieldState = getFieldState(name as string);
  return (
    <div
      className={cn(
        'flex flex-col gap-1 w-full',
        containerClassName
      )}
    >
      {title &&
        <label htmlFor={name}>
          {title} {required && <span className="text-red-500">*</span>}
        </label>
      }

      <FormField
        control={control}
        name={name as string}
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}

            >
              <FormControl>
                <SelectTrigger
                  className={cn(
                    className,
                    fieldState.error
                      ? 'border border-destructive text-destructive placeholder:text-destructive'
                      : ''
                  )}
                >
                  <SelectValue placeholder={placeholder || `--Select ${title || ''}--`} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem key={`opton-${option.value}`} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}