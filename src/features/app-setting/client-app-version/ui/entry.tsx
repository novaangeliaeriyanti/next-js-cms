import React, { useEffect } from 'react';
import { useForm, SubmitHandler, type FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';

import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import router, { useRouter } from 'next/router';
import { InputField } from '@/components/form/inputField';
import { CheckboxField } from '@/components/form/checkBoxField';
import { APPSETTING_CLIENT_APP_VERSION } from '@/shared/constants/path';
import { ClientAppVersionSchema } from '../model/clientAppVersionSchema';
import { Label } from '@/components/ui/label';
import LookupClientAppType from '@/features/lookup/lookupClientAppType';

type Params = {
	initialData?: any;
	onFormSubmit?: (data: any) => void,
	isPending?: boolean
}


function ClientAppVersionEntryForm({
	initialData,
	onFormSubmit,
	isPending
}: Params) {
	const form = useForm<z.infer<typeof ClientAppVersionSchema>>({
		resolver: zodResolver(ClientAppVersionSchema),
		defaultValues: initialData
	});

	const onSubmit: SubmitHandler<z.infer<typeof ClientAppVersionSchema>> = (data) => {
		onFormSubmit && onFormSubmit(data);
	};

	const onError = (errors: FieldErrors<typeof ClientAppVersionSchema>) => {
		console.log('form errors: ', errors);

	};

	const goBack = () => {
		router.replace(APPSETTING_CLIENT_APP_VERSION.LIST)
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
										<div className="grid w-full gap-3 ">
											<LookupClientAppType name='client_app_type'/>
										</div>
										<InputField
											title="Version"
											name="version"
											placeholder="Version"
											required
											onKeyDown={(e) => {
												if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
												  e.preventDefault();
												}
											}
											}
										/>
									</div>
									<div className='flex flex-col gap-3'>
										<Label htmlFor="is_active" className="text-sm font-medium">Is Active</Label>
										<CheckboxField name="is_active" title="Yes" />
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

export default ClientAppVersionEntryForm;
