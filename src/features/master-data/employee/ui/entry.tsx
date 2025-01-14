import React, { useEffect } from 'react';
import { useForm, SubmitHandler, type FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import router, { useRouter } from 'next/router';
import { InputField } from '@/components/form/inputField';
import { CheckboxField } from '@/components/form/checkBoxField';
import { InputDate } from '@/components/form/inputDate';
import { EmployeeSchema } from '../model/employeeSchema';
import { MASTERDATA_EMPLOYEE } from '@/shared/constants/path';
import { TextAreaField } from '@/components/form/textAreaField';

type Params = {
	initialData?: any;
	onFormSubmit?: (data: any) => void,
	isPending?: boolean
}


function EmployeeEntryForm({
	initialData,
	onFormSubmit,
	isPending
}: Params) {
	const form = useForm<z.infer<typeof EmployeeSchema>>({
		resolver: zodResolver(EmployeeSchema),
		defaultValues: initialData
	});

	const onSubmit: SubmitHandler<z.infer<typeof EmployeeSchema>> = (data) => {
		onFormSubmit && onFormSubmit(data);
	};

	const onError = (errors: FieldErrors<typeof EmployeeSchema>) => {
		console.log('form errors: ', errors);

	};
	const goBack = () => {
		router.replace(MASTERDATA_EMPLOYEE.LIST)
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
										<InputField
											title="Email"
											name='email'
											placeholder='Email'
											required
										/>
										<InputField
											title="Mobile Phone"
											name='mobile_phone'
											placeholder='Mobile Phone'
											required
										/>
										<InputField
											title="Company"
											name='company'
											placeholder='Company'
											required
										/>
										<CheckboxField name="is_active" title="Is Active" />
									</div>
									<div className='flex flex-col gap-3'>
										<InputField
											title="Division"
											name='division'
											placeholder='Division'
											required
										/>
										<InputDate
											title="Join Date"
											name="join_date"
											placeholder="Join Date"
										/>
										<InputDate
											title="Resign Date"
											name="resign_date"
											placeholder="Resign Date"
										/>
										<TextAreaField
										   title="Unique Key"
										   name="unique_key"
										   placeholder="Unique Key"
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

export default EmployeeEntryForm;
