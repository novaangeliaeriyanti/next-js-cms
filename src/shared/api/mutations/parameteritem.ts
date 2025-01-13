import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createParameterItem = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_PARAMETER_ITEM,
		data
	});

	return res?.data;
};

const updateParameterItem = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_PARAMETER_ITEM}`,
		data
	});

	return res?.data;
};

const deleteParameterItem = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_PARAMETER_ITEM}/${id}`
	});
	return res?.data;
};

export { deleteParameterItem, createParameterItem, updateParameterItem };
