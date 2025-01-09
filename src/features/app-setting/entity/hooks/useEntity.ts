import { useQueryClient } from '@tanstack/react-query';
import { toast  } from '@/components/ui/use-toast';
import {
	deleteEntity,
} from '@/shared/api/mutations/entity';
import useMutationHook from '@/shared/hooks/useMutationHook';
import { APP_SETTING } from '@/shared/constants/endpoint';
const useEntity = () => {
	const queryClient = useQueryClient();

	const mutationDelete = useMutationHook({
		api: deleteEntity,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_ENTITY_LIST}`] });
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

export default useEntity;
