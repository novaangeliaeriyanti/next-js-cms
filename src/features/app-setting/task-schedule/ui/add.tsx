import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useTaskSchedule from '../hooks/useTaskSchedule';
import { TaskScheduleFormFields } from '@/shared/model/app-setting/taskScheduleTypes';
import { APPSETTING_TASK_SCHEDULE } from '@/shared/constants/path';
import TaskScheduleEntryForm from './entry';


function AppSettingTaskScheduleAdd() {
	const dataRole = {
		requestor_name: '',
		requestor_email: '',
		service_name: '',
		process_name: '',
		internal_data_source: '',
		register_date:'',
		execute_date:'',
		finish_date:'',
		result:'',
	};

	const { handleCreate, mutationCreate } = useTaskSchedule();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: TaskScheduleFormFields = {
			requestor_name: data?.requestor_name,
			requestor_email: data?.requestor_email,
			service_name: data?.service_name,
			process_name: data?.process_name,
			internal_data_source: data?.internal_data_source,
			register_date:data?.register_date,
			execute_date:data?.execute_date,
			finish_date:data?.finish_date,
			result:data?.result,
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_TASK_SCHEDULE.LIST)
	}

	useEffect(() => {
    if (isSuccess) goBack()
  }, [isSuccess])

	return (
		<div className="mt-4 ">
			<section>
				<div className="flex items-center gap-5">
					<Button
						variant="ghost"
						size="icon"
						onClick={goBack}
						type="button"
					>
						<FaLeftLong />
					</Button>
					<h1>Add Role</h1>
				</div>
			</section>
			<TaskScheduleEntryForm
				initialData={dataRole} 
				onFormSubmit={onFormSubmit}
				isPending={isPending}
			/>
			{isError && (
				<div>{'error'}</div>
			)}
			 <LoadingOverlay isOpen={isPending}/>
			</div>
	);
}

export default AppSettingTaskScheduleAdd;
