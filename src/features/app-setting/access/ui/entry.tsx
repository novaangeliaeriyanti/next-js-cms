import React, { useEffect } from 'react';
import { useForm, SubmitHandler, type FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';

import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import router, { useRouter } from 'next/router';
import { AccessSchema } from '../model/accessSchema';
import { InputField } from '@/components/form/inputField';
import LookupEntity from '@/features/lookup/lookupEntity';
import LookupRole from '@/features/lookup/lookupRole';
import LookupFeature from '@/features/lookup/lookupFeature';
import { CheckboxField } from '@/components/form/checkBoxField';
import { APPSETTING_ACCESS } from '@/shared/constants/path';

type Params = {
	initialData?: any;
	onFormSubmit?: (data: any) => void,
	isPending?: boolean
}


function AccessEntryForm({
	initialData,
	onFormSubmit,
	isPending
}: Params) {
	const form = useForm<z.infer<typeof AccessSchema>>({
		resolver: zodResolver(AccessSchema),
		defaultValues: initialData
	});

	const onSubmit: SubmitHandler<z.infer<typeof AccessSchema>> = (data) => {
		onFormSubmit && onFormSubmit(data);
	};

	const onError = (errors: FieldErrors<typeof AccessSchema>) => {
		console.log('form errors: ', errors);

	};

	const goBack = () => {
		router.replace(APPSETTING_ACCESS.LIST)
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
										<InputField
											title="Name"
											name='name'
											placeholder='Name'
											required
										/>
										<LookupRole name="role"/>
									</div>
									<div className='flex flex-col gap-3'>
										<LookupEntity name="entity"/>
										<LookupFeature name="feature"/>

									</div>
								</div>
								<div className="grid md:grid-cols-2 w-full gap-3 ">
									<div className='flex flex-col gap-3'>
										<CheckboxField name="allow_view" title="Allow View" />
										<CheckboxField name="allow_update" title="Allow Update" />
										<CheckboxField name="allow_print" title="Allow Print" />
									</div>
									<div className='flex flex-col gap-3'>
										<CheckboxField name="allow_add" title="Allow Add" />
										<CheckboxField name="allow_delete" title="Allow Delete" />
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

export default AccessEntryForm;
