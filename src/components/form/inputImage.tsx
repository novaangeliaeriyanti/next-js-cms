import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/form/form';
import { cn } from '@/shared/lib/utils';
import { Input } from '../ui/input';
import { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image';
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string,
  containerClassName?: string,
};

export function InputImage({
  title,
  name,
  required = false,
  className,
  containerClassName,
  ...props

}: InputFieldProps) {
  const { control, getFieldState, setValue, watch } = useFormContext();
  const fieldState = getFieldState(name as string);

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e){
      return null
    }
    const file = e?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
        setValue(name as string, file);
      };
      reader.readAsDataURL(file) 
    } else {
      setSelectedFile(null);
      setValue(name as string, null);
    }

  };
  const handleRemoveClick = () => {
    setSelectedFile(null);
  };

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
              <Input id={name} type="file" onChange={handleFileChange}/>
            </FormControl>
            <FormMessage />
              {selectedFile && (
              <div className="mt-2 relative">
                <Image
                  src={selectedFile}
                  alt="Preview"
                  width={500}
                  height={500}
                />
                <button
                  onClick={handleRemoveClick}
                  className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2"
                  aria-label="Remove image"
                >
                  X
                </button>
              </div>
            )}
          </FormItem>
        )}
      />
    </div>
  );
}
