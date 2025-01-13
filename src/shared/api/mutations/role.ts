import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';
const createRole = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_ROLE,
		data
	});

	return res?.data;
};

const updateRole = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${APP_SETTING.UPDATE_ROLE}`,
		data
	});

	return res?.data;
};

const deleteRole = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_ROLE}/${id}`
	});
	return res?.data;
};

export { deleteRole, createRole, updateRole };
