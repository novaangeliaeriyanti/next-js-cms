import { useQueryClient } from '@tanstack/react-query';
import { toast  } from '@/components/ui/use-toast';
import useMutationHook from '@/shared/hooks/useMutationHook';
import { APP_SETTING } from '@/shared/constants/endpoint';
import { deleteParameterItem } from '@/shared/api/mutations/parameterItem';
const useParameterItem = () => {
	const queryClient = useQueryClient();

	const mutationDelete = useMutationHook({
		api: deleteParameterItem,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_PARAMETER_ITEM_LIST}`] });
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
		mutationDelete,
		handleDelete
	};
};

export default useParameterItem;
