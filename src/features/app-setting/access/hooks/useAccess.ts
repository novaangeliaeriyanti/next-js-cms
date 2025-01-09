import { useQueryClient } from '@tanstack/react-query';

import { toast  } from '@/components/ui/use-toast';
import {
	createAccess,
	updateAccess,
	deleteAccess
} from '@/shared/api/mutations/access';
import useMutationHook from '@/shared/hooks/useMutationHook';
import { APP_SETTING } from '@/shared/constants/endpoint';
const useAccess = () => {
	const queryClient = useQueryClient();
	const mutationCreate = useMutationHook({
		api: createAccess,
		options: {
			onError: (error: any) => {
				console.log('errornya', error);
				toast({
				  variant: 'destructive',
				  title: 'Gagal Menyimpan',
				  description: error?.message ?? 'Network Error',
				});
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_ACCESS_LIST}`] });
				console.log('Berhasil submit data!');
			},
		},
	});

	const handleCreate = async (data: any) => {
		return await mutationCreate.mutateAsync(data);
	};

	const mutationUpdate = useMutationHook({
		api: updateAccess,
		options: {
			onError: (error: any) => {
				console.log('errornya', error);
				toast({
				  variant: 'destructive',
				  title: 'Gagal Menyimpan',
				  description: error?.message ?? 'Network Error',
				});
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_ACCESS_LIST}`] });
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_ACCESS_BY_ID}`] });
				console.log('Berhasil submit data!');
				toast({
				  title: 'Berhasil Menyimpan',
				});
			},
		},
	});

	const handleUpdate = async ({data}: { data: any}) => {
		return await mutationUpdate.mutateAsync({data});
	};

	const mutationDelete = useMutationHook({
		api: deleteAccess,
		options: {
			onError: (error: any) => {
				console.log('errornya', error);
				toast({
				  variant: 'destructive',
				  title: 'Gagal Menghapus',
				  description: error?.message ?? 'Network Error',
				});
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_ACCESS_LIST}`] });
				console.log('Berhasil hapus data!');
				toast({
				  title: 'Data berhasil dihapus',
				});
			},
		},
	});

	const handleDelete = async ({id}: {id: string }) => {
		return await mutationDelete.mutateAsync({id});
	};


	return {
		mutationCreate,
		handleCreate,
		mutationUpdate,
		handleUpdate,
		mutationDelete,
		handleDelete
	};
};

export default useAccess;
