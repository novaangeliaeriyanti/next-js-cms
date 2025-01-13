import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, type FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import router, { useRouter } from 'next/router';
import { InputField } from '@/components/form/inputField';
import { TextAreaField } from '@/components/form/textAreaField';
import { InputDate } from '@/components/form/inputDate';
import { UserSchema } from '../model/userSchema';
import { APPSETTING_USER } from '@/shared/constants/path';
import { CheckboxField } from '@/components/form/checkBoxField';
import LookupUserRole from '@/features/lookup/lookupUserRole';
import { InputPassword } from '@/components/form/inputPassword';
import LookupUser from '@/features/lookup/lookupEmployee';

type Params = {
	initialData?: any;
	onFormSubmit?: (data: any) => void,
	isPending?: boolean
}


function UserEntryForm({
	initialData,
	onFormSubmit,
	isPending
}: Params) {
	const form = useForm<z.infer<typeof UserSchema>>({
		resolver: zodResolver(UserSchema),
		defaultValues: initialData
	});
	const onSubmit: SubmitHandler<z.infer<typeof UserSchema>> = (data) => {
		onFormSubmit && onFormSubmit(data);
	};

	const onError = (errors: FieldErrors<typeof UserSchema>) => {
		console.log('form errors: ', errors);

	};

	const goBack = () => {
		router.replace(APPSETTING_USER.LIST)
	}
	
	return (
		<>
			<section className="flex flex-col flex-1 bg-white rounded-xl shadow-xl my-5 p-4 pb-60 overflow-y-auto max-h-screen ">
				<div className="h-full w-full flex grow">
					<Form {...form}>
						<form
							className='w-full flex flex-col'
							onSubmit={form.handleSubmit(onSubmit, onError)}
						>
							<div className='flex flex-col flex-1 gap-3 mb-3'>
								<div className="grid md:grid-cols-2 w-full gap-3 ">
									<div className='flex flex-col gap-3'>
										<LookupUser name="name" />
										<InputField
											title="Mobile Phone"
											name='mobile_phone'
											placeholder='Mobile Phone'
										/>
										<InputField
											title="Email"
											name='email'
											placeholder='Email'
											required
										/>
										<LookupUserRole name="role"/>
										<InputPassword
											title="Password"
											name='password'
											placeholder='Password'
											required
										/>
										<InputPassword
											title="Salt"
											name='salt'
											placeholder='Salt'
											required
										/>
										<TextAreaField
											title="Device Info"
											name='device_info'
											placeholder='Device Info'
										/>
										<TextAreaField
											title="Device Location"
											name='device_location'
											placeholder='Device Location'
										/>
										<InputField
											title="IP Address"
											name='ip_address'
											placeholder='IP Address'
											required
											onKeyDown={(e) => {
												if (!/[0-9\.]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
												  e.preventDefault();
												}
											  }}
										/>
										<InputField
											title="Longitude"
											name='longitude'
											placeholder='Longitude'
											required
											onKeyDown={(e) => {
												if (!/[0-9\.,\-]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
													e.preventDefault();
												}
											}}
											// location
										/>
									</div>
									<div className='flex flex-col gap-3'>
										<InputField
											title="Latitude"
											name='latitude'
											placeholder='Latitude'
											required
											onKeyDown={(e) => {
												if (!/[0-9\.,\-]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
													e.preventDefault();
												}
											  }}
											// location
										/>
										<CheckboxField name="is_active" title="Is Active" />
										<CheckboxField name="is_lock" title="Is Lock" />
										<InputDate title="Created Date" name="created_date"/>
										<InputDate title="Last Login" name="last_login" dateDisabledEnd={form?.watch('created_date')}/>
										<InputField
											title="Access Token"
											name='access_token'
											placeholder='Access Token'
										/>
										<InputField
											title="Reset Token"
											name='reset_token'
											placeholder='Reset Token'
										/>
										<InputField
											title="FCM Token"
											name='fcm_token'
											placeholder='FCM Token'
										/>
										<InputField
											title="OTP"
											name='otp'
											placeholder='OTP'
											onKeyDown={(e) => {
												if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
												  e.preventDefault();
												}
											}}
										/>
										<InputField
											title="Login Attempt"
											name='login_attempt'
											placeholder='Login Attempt'
											onKeyDown={(e) => {
												if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
												  e.preventDefault();
												}
											}}
											required
										/>
										<InputField
											title="Reset Password Attempt"
											name='reset_password_attempt'
											placeholder='Reset Password Attempt'
											onKeyDown={(e) => {
												if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
												  e.preventDefault();
												}
											}}
											required
										/>
									</div>
								</div> 
							</div>
							<div className='flex w-full justify-end gap-3'>
								<Button type='button' variant="ghost" onClick={goBack} >
									Batal
								</Button>
								<Button loading={isPending}>
									Simpan
								</Button>
							</div>
						</form>
					</Form >
				</div>
			</section>
		</>
	);
}

export default UserEntryForm;
