import React, { useEffect } from 'react';
import { useForm, SubmitHandler, type FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import router, { useRouter } from 'next/router';
import { InputField } from '@/components/form/inputField';
import { CheckboxField } from '@/components/form/checkBoxField';
import { Label } from '@/components/ui/label';
import { RoleSchema } from '../model/roleSchema';
import { APPSETTING_ROLE } from '@/shared/constants/path';

type Params = {
	initialData?: any;
	onFormSubmit?: (data: any) => void,
	isPending?: boolean
}


function RoleEntryForm({
	initialData,
	onFormSubmit,
	isPending
}: Params) {
	const form = useForm<z.infer<typeof RoleSchema>>({
		resolver: zodResolver(RoleSchema),
		defaultValues: initialData
	});

	const onSubmit: SubmitHandler<z.infer<typeof RoleSchema>> = (data) => {
		onFormSubmit && onFormSubmit(data);
	};

	const onError = (errors: FieldErrors<typeof RoleSchema>) => {
		console.log('form errors: ', errors);

	};

	const goBack = () => {
		router.replace(APPSETTING_ROLE.LIST)
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
										<CheckboxField name="is_active" title="Is Active" />
										<CheckboxField name="is_administrator" title="Is Administrator" />
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

export default RoleEntryForm;
