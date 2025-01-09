import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/form/form';
import { cn } from '@/shared/lib/utils';

export type InputFieldProps = {
  title?: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;

};

export function InputField({
  title,
  name,
  type = 'text',
  placeholder,
  required = false,
  className

}: InputFieldProps) {
  const { control, getFieldState } = useFormContext();
  const fieldState = getFieldState(name);

  return (
    <div
      className={cn(
        'flex flex-col gap-1 w-full',
        className
      )}
    >
      {title &&
        <label htmlFor={name}>
          {title} {required && <span className="text-red-500">*</span>}
        </label>
      }
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
                <input
                  type="text"
                  id={name}
                  placeholder={placeholder}
                  {...field}
                  className={cn(
                    'border border-[#E5E5F0] rounded-xl p-3 focus-visible:ring-1 focus-visible:ring-[#E5E5F0] focus-visible:border-[#E5E5F0] outline-none w-full',
                    fieldState.error
                      ? 'border border-destructive text-destructive placeholder:text-destructive'
                      : '',
                    className
                  )}
                />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
