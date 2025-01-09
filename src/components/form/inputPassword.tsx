// import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { createElement, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { PiEye } from 'react-icons/pi';
import { PiEyeSlash } from 'react-icons/pi';

import { Box } from '@/components/ui/box';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/form/form';
import { Input } from '@/components/ui/input';

type InputPasswordProps = {
  name?: string;
  placeholder?: string;
  description?: string | JSX.Element;
  errorMessage?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add this to the props
};

export function InputPassword({
  name = 'password',
  placeholder = 'Enter password',
  description,
  errorMessage = true,
  onChange, // Destructure the onChange prop
  ...props
}: InputPasswordProps) {
  const { control, getFieldState } = useFormContext();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Box className='relative'>
              <Input
                {...field}
                type={passwordVisibility ? 'text' : 'password'}
                autoComplete='on'
                placeholder={placeholder}
                className={`pr-12 ${getFieldState(name).error && 'border border-destructive text-destructive'}`}
                onChange={(e) => {
                  field.onChange(e); // Call the original onChange from react-hook-form
                  if (onChange) onChange(e); // Call the custom onChange if provided
                }}
                {...props}
              />
              <Box
                className='absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground'
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {createElement(passwordVisibility ? PiEyeSlash : PiEye, {
                  className: `${getFieldState(name).error && 'text-primary'} h-6 w-6`,
                })}
              </Box>
            </Box>
          </FormControl>
          {errorMessage && <FormMessage />}
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
