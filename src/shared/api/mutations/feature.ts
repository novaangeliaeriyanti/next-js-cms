import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createFeature = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_FEATURE,
		data
	});

	return res?.data;
};

const updateFeature = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_FEATURE}`,
		data
	});

	return res?.data;
};

const deleteFeature = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_FEATURE}/${id}`
	});
	return res?.data;
};

export { deleteFeature, createFeature, updateFeature };
