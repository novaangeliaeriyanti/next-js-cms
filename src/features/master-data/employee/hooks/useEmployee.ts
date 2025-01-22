import { useQueryClient } from '@tanstack/react-query';
import { toast  } from '@/components/ui/use-toast';
import useMutationHook from '@/shared/hooks/useMutationHook';
import { MASTER_DATA } from '@/shared/constants/endpoint';
import { createEmployee, deleteEmployee, updateEmployee, uploadEmployeePhoto } from '@/shared/api/mutations/employee';

const useEmployee = () => {
	const queryClient = useQueryClient();

	const mutationCreate = useMutationHook({
		api: createEmployee,
		options: {
			onError: (error: any) => {
				toast({
				  variant: 'destructive',
				  title: 'Gagal Menambahkan Data',
				  description: error?.message ?? 'Network Error',
				});
			},
			onSuccess: () => {
				toast({
					variant: 'success',
					title: "Success",
					description:'Berhasil Menambahkan Data',
				  })
				queryClient.invalidateQueries({ queryKey: [`${MASTER_DATA.FETCH_EMPLOYEE_LIST}`] });
			},
		},
	});

	const handleCreate = async (data: any) => {
		return await mutationCreate.mutateAsync(data);
	};

	const mutationDelete = useMutationHook({
		api: deleteEmployee,
		options: {
			onError: (error: any) => {
				toast({
					variant: 'destructive',
					title: 'Gagal Menghapus',
					description: error?.message ?? 'Network Error',
				  });
			},
			onSuccess: () => {
				toast({
					variant: 'success',
					title: "Success",
					description:'Berhasil Menghapus Data',
				  })
				queryClient.invalidateQueries({ queryKey: [`${MASTER_DATA.FETCH_EMPLOYEE_LIST}`] });
			},
		},
	});

	const handleDelete = async ({id}: {id: string }) => {
		return await mutationDelete.mutateAsync({id});
	};

	const mutationUpdate = useMutationHook({
		api: updateEmployee,
		options: {
			onError: (error: any) => {
				console.log('errornya', error);
				toast({
				  variant: 'destructive',
				  title: 'Gagal Update Data',
				  description: error?.message ?? 'Network Error',
				});
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: [`${MASTER_DATA.FETCH_EMPLOYEE_LIST}`] });
				queryClient.invalidateQueries({ queryKey: [`${MASTER_DATA.FETCH_EMPLOYEE_BY_ID}`] });
				toast({
					variant: 'success',
					title: "Success",
					description:'Berhasil Update Data',
				  })
			},
		},
	});

	const handleUpdate = async ({data}: { data: any}) => {
		return await mutationUpdate.mutateAsync({data});
	};

	const mutationUploadPhoto = useMutationHook({
		api: uploadEmployeePhoto,
		options: {
			onError: (error: any) => {
				toast({
				  variant: 'destructive',
				  title: 'Gagal Upload Employee Photo',
				  description: 'Silahkan coba kembali',
				});
			},
			onSuccess: () => {
				toast({
					variant: 'success',
					title: "Success",
					description:'Berhasil Upload Employee Photo',
				  })
				// queryClient.invalidateQueries({ queryKey: [`${MASTER_DATA.FETCH_EMPLOYEE_LIST}`] });
			},
		},
	});

	const handleUploadPhoto = async (data: any) => {
		return await mutationUploadPhoto.mutateAsync(data);
	};

	return {
		mutationDelete,
		mutationCreate,
		mutationUpdate,
		mutationUploadPhoto,
		handleDelete,
		handleCreate,
		handleUpdate,
		handleUploadPhoto
	};
};

export default useEmployee;
