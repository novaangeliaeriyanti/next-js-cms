import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createEntity = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_ENTITY,
		data
	});

	return res?.data;
};

const deleteEntity = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_ENTITY}/${id}`
	});
	return res?.data;
};

export { deleteEntity, createEntity };
