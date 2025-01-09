import React, { useEffect } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginSchema } from '../model/loginSchema';
import usePostLogin from '../hooks/useLogin';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/form/inputField';
import { InputPassword } from '@/components/form/inputPassword';
import CustomAlert from '@/components/ui/custom/customAlert';

import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

function Login() {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      user_name: '',
      password: '',
    },
  });

  const onSubmitLogin: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
    handleOnSubmit(data);
  };

  const { handleOnSubmit, mutationQuery } = usePostLogin();
  const { isPending, isError, error } = mutationQuery;

  return (
    <div className="flex w-full justify-center items-center h-dvh">
      <div className="h-full w-full flex justify-center items-center grow">

        <div className="p-5 min-w-[450px]">
          <h1 className="text-thblue mb-16">Company Logo</h1>
          <h1 className="mb-1">Hi, welcome back 👋</h1>
          <h5 className="mb-5 text-thgray">
            Please enter your user id and password
          </h5>
          <Form {...form}>

            <form
              onSubmit={form.handleSubmit(onSubmitLogin)}
              onKeyDown={(e) => e.key === 'Enter' && form.handleSubmit(onSubmitLogin)}
            >
              <div className="relative mb-3 space-y-3">
                <InputField name='user_name' placeholder='Email' />
                <InputPassword name='password' placeholder='Kata sandi' />
              </div>
              <div className="flex justify-end mb-3">
                <p className="text-thblue font-bold">Forgot Password</p>
              </div>
              <Button loading={isPending} className="w-full">
                Login
              </Button>
            </form>
            {isError ? (
              <CustomAlert type='error' className='mb-6'>
                {/* @ts-ignore */}
                {error?.response?.data?.message ?? error?.message}
              </CustomAlert>
            ) : null}
          </Form >

        </div>
      </div>
      <div className="bg-blue-950 h-full w-8/12">
        <Image
          src="/bg-login.svg"
          alt="image"
          width={1024}
          height={700}
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
