import { useQueryClient } from '@tanstack/react-query';
import { toast  } from '@/components/ui/use-toast';
import {
	deleteClientAppVersion,
	createClientAppVersion,
	updateClientAppVersion
} from '@/shared/api/mutations/clientappversion';
import useMutationHook from '@/shared/hooks/useMutationHook';
import { APP_SETTING } from '@/shared/constants/endpoint';
const useClientAppVersion = () => {
	const queryClient = useQueryClient();
	const mutationCreate = useMutationHook({
		api: createClientAppVersion,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_CLIENT_APP_VERSION_LIST}`] });
			},
		},
	});

	const handleCreate = async (data: any) => {
		return await mutationCreate.mutateAsync(data);
	};

	const mutationDelete = useMutationHook({
		api: deleteClientAppVersion,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_CLIENT_APP_VERSION_LIST}`] });
			},
		},
	});

	const handleDelete = async ({id}: {id: string }) => {
		return await mutationDelete.mutateAsync({id});
	};

	const mutationUpdate = useMutationHook({
		api: updateClientAppVersion,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_CLIENT_APP_VERSION_LIST}`] });
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_CLIENT_APP_VERSION_BY_ID}`] });
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

	return {
		mutationCreate,
		handleCreate,
		mutationDelete,
		handleDelete,
		mutationUpdate,
		handleUpdate
	};
};

export default useClientAppVersion;
