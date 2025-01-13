import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createParameter = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_PARAMETER,
		data
	});

	return res?.data;
};

const updateParameter = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_PARAMETER}`,
		data
	});

	return res?.data;
};

const deleteParameter = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_PARAMETER}/${id}`
	});
	return res?.data;
};

export { deleteParameter, createParameter, updateParameter };
