import { MASTER_DATA } from '@/shared/constants/endpoint';
import { postData, putData, deleteData } from '@/shared/lib/axiosHelper';

const createCompany = async (data: any) => {
	const res = await postData({
		endpoint: MASTER_DATA.CREATE_COMPANY,
		data
	});

	return res?.data;
};

const updateCompany = async ({data}: {data: any}) => {
	const res = await putData({
		endpoint: `${MASTER_DATA.UPDATE_COMPANY}`,
		data
	});

	return res?.data;
};

const deleteCompany = async ({id}: {id: string}) => {
	const res = await deleteData({
		endpoint: `${MASTER_DATA.DELETE_COMPANY}/${id}`
	});
	return res?.data;
};

export { deleteCompany, updateCompany, createCompany };
