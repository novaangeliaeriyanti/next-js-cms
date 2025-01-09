import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const deleteTaskSchedule = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_TASK_SCHEDULE}/${id}`
	});
	return res?.data;
};

export { deleteTaskSchedule };
