import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import useTaskSchedule from '../hooks/useTaskSchedule';
import { TaskScheduleFormFields } from '@/shared/model/app-setting/taskScheduleTypes';
import { APPSETTING_TASK_SCHEDULE } from '@/shared/constants/path';
import TaskScheduleEntryForm from './entry';

function AppSettingTaskScheduleUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
    }
    return data;
  }

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_TASK_SCHEDULE_BY_ID, id as string);
  const dataTaskSchedule = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useTaskSchedule();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: TaskScheduleFormFields = {
      id: dataTaskSchedule?.id,
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
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_TASK_SCHEDULE.LIST)
	}, [router])

  useEffect(() => {
    if (isSuccess) goBack()
  }, [isSuccess, goBack])

  return (
    <>
      <section className="mt-5">
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={goBack}
            type="button"
          >
            <FaLeftLong />
          </Button>
          <h1>Edit Task Schedule</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <TaskScheduleEntryForm
          initialData={dataTaskSchedule}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingTaskScheduleUpdate;
