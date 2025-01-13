import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/form/form';
import { cn } from '@/shared/lib/utils';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string,
  containerClassName?: string,
};

export function InputField({
  title,
  name,
  required = false,
  className,
  containerClassName,
  ...props

}: InputFieldProps) {
  const { control, getFieldState, setValue } = useFormContext();
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
            <FormControl>
                <Input 
                {...field}
                id={name}
                className={cn(
                  className,
                  fieldState.error
                    ? 'border border-destructive text-destructive placeholder:text-destructive'
                    : '',
                )}
                {...props}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
