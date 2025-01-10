import React, { useEffect } from 'react';
import { useForm, SubmitHandler, type FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/form/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import router, { useRouter } from 'next/router';
import { InputField } from '@/components/form/inputField';
import { TaskScheduleSchema } from '../model/roleSchema';
import { APPSETTING_TASK_SCHEDULE } from '@/shared/constants/path';
import { TextAreaField } from '@/components/form/textAreaField';
import { InputDate } from '@/components/form/inputDate';

type Params = {
	initialData?: any;
	onFormSubmit?: (data: any) => void,
	isPending?: boolean
}


function TaskScheduleEntryForm({
	initialData,
	onFormSubmit,
	isPending
}: Params) {
	const form = useForm<z.infer<typeof TaskScheduleSchema>>({
		resolver: zodResolver(TaskScheduleSchema),
		defaultValues: initialData
	});

	const onSubmit: SubmitHandler<z.infer<typeof TaskScheduleSchema>> = (data) => {
		onFormSubmit && onFormSubmit(data);
	};

	const onError = (errors: FieldErrors<typeof TaskScheduleSchema>) => {
		console.log('form errors: ', errors);

	};

	const goBack = () => {
		router.replace(APPSETTING_TASK_SCHEDULE.LIST)
	}
	console.log('value ',form.getValues())
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
											title="Requestor Name"
											name='requestor_name'
											placeholder='Requestor Name'
											required
										/>
										<TextAreaField
											title="Requestor email"
											name='requestor_email'
											placeholder='Requestor Email'
											required
										/>
										<InputField
											title="Service Name"
											name='service_name'
											placeholder='Service Name'
											required
										/>
										<InputField
											title="Process Name"
											name='process_name'
											placeholder='Process Name'
											required
										/>
										<TextAreaField
											title="Internal Data Source"
											name='internal_data_source'
											placeholder='Internal Data Source'
											required
										/>
									</div>
									<div className='flex flex-col gap-3'>
										<TextAreaField
											title="Result"
											name='result'
											placeholder='Result'
											required
										/>
										<InputDate title="Register Date" name="register_date"/>
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

export default TaskScheduleEntryForm;
