import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createUser = async (data: any) => {
	const res = await postData({
		endpoint: APP_SETTING.CREATE_USER,
		data
	});

	return res?.data;
};


const deleteUser = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_USER}/${id}`
	});
	return res?.data;
};

export { deleteUser, createUser };
