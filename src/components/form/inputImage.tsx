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
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { isEmpty } from '@/shared/hooks/useValidate';
import { decode64 } from '@/shared/hooks/useImage';
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string,
  containerClassName?: string,
  name: string | "",
};

export function InputImage({
  title,
  name,
  required = false,
  className,
  containerClassName,
  ...props

}: InputFieldProps) {
  const { control, getFieldState, setValue, watch, getValues } = useFormContext();
  const fieldState = getFieldState(name as string);

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if(!e){
      return null
    }
    const file = e?.target?.files?.[0];
    console.log('file: ', file)
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
    setValue(name as string, null);
  };

  useEffect(() => {
	  if(!isEmpty(watch(name))){
      setValue(name as string, decode64(watch(name)));
	  }
	}, [])
  // console.log('selectedFile: ', selectedFile)
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
              <div className='flex flex-row justify-center items-center gap-2'>
                <Input
                  className=" text-stone-500 p-0 file:mr-5 file:py-3 file:px-3 file:border-none file:rounded-l-md file:text-sm file:font-medium file:bg-thblue file:text-primary-foreground hover:file:cursor-pointer hover:file:bg-thblue/90 flex items-center justify-between "
                  id={name} 
                  type="file" 
                  onChange={handleFileChange} 
                  accept='image/*'
                 />
              </div>
            </FormControl>
            <FormMessage />
              {selectedFile && (
              <div className="mt-2 relative">
                <Image
                  src={selectedFile}
                  alt="Preview"
                  width={150}
                  height={150}
                  className="border-[1px] border-gray-400 rounded-md p-4 border-dashed"
                />
                <button
                  onClick={handleRemoveClick}
                  className="absolute top-0 ml-[152px] bg-destructive text-white rounded-md hover:bg-destructive/80"
                  aria-label="Remove image"
                >
                  <X stroke="white"/>
                </button>
              </div>
            )}
          </FormItem>
        )}
      />
    </div>
  );
}
