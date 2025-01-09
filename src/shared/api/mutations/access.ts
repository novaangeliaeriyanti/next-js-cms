import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createAccess = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_ACCESS,
		data
	});

	return res?.data;
};

const updateAccess = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_ACCESS}`,
		data
	});

	return res?.data;
};

const deleteAccess = async ({id}: {id: string}) => {
	// const res = await postData({
	// 	endpoint: `${APP_SETTING.UPDATE_ACCESS}/${id}`,
	// 	data
	// });

	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_ACCESS}/${id}`
	});
	return res?.data;
};

export { createAccess, updateAccess, deleteAccess };
