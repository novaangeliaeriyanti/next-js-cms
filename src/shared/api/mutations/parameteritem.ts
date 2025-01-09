import { APP_SETTING } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const deleteParameterItem = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${APP_SETTING.DELETE_PARAMETER_ITEM}/${id}`
	});
	return res?.data;
};

export { deleteParameterItem };
