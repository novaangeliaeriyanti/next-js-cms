import { MASTER_DATA } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createEmployee = async (data: any) => {
	const res = await postData({
		endpoint: MASTER_DATA.CREATE_EMPLOYEE,
		data
	});

	return res?.data;
};

const updateEmployee = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${MASTER_DATA.UPDATE_EMPLOYEE}`,
		data
	});

	return res?.data;
};

const deleteEmployee = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${MASTER_DATA.DELETE_EMPLOYEE}/${id}`
	});
	return res?.data;
};

const uploadEmployeePhoto = async (data: any) => {
	try {
		const res = await postData({
			endpoint: MASTER_DATA.UPLOAD_EMPLOYEE_PHOTO,
			data
		});
		return res?.data;
	} catch (error) {
		throw error
	}
};
export { deleteEmployee, updateEmployee, createEmployee, uploadEmployeePhoto };
