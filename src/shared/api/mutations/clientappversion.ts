import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createClientAppVersion = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_CLIENT_APP_VERSION,
		data
	});

	return res?.data;
};

const updateClientAppVersion = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_CLIENT_APP_VERSION}`,
		data
	});

	return res?.data;
};

const deleteClientAppVersion = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_CLIENT_APP_VERSION}/${id}`
	});
	return res?.data;
};

export { createClientAppVersion,updateClientAppVersion, deleteClientAppVersion };
