import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createTaskSchedule = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_TASK_SCHEDULE,
		data
	});

	return res?.data;
};

const updateTaskSchedule= async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_TASK_SCHEDULE}`,
		data,
	});

	return res?.data;
};

const deleteTaskSchedule = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_TASK_SCHEDULE}/${id}`
	});
	return res?.data;
};

export { deleteTaskSchedule, createTaskSchedule, updateTaskSchedule };
