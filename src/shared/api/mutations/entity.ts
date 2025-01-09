import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const deleteEntity = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_ENTITY}/${id}`
	});
	return res?.data;
};

export { deleteEntity };
