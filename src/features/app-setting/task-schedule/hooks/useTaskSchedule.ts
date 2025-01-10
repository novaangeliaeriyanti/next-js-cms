import { useQueryClient } from '@tanstack/react-query';
import { toast  } from '@/components/ui/use-toast';
import useMutationHook from '@/shared/hooks/useMutationHook';
import { APP_SETTING } from '@/shared/constants/endpoint';
import { createTaskSchedule, deleteTaskSchedule } from '@/shared/api/mutations/taskschedule';
const useTaskSchedule = () => {
	const queryClient = useQueryClient();
	const mutationCreate = useMutationHook({
		api: createTaskSchedule,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_TASK_SCHEDULE_LIST}`] });
			},
		},
	});

	const handleCreate = async (data: any) => {
		return await mutationCreate.mutateAsync(data);
	};

	const mutationDelete = useMutationHook({
		api: deleteTaskSchedule,
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
				queryClient.invalidateQueries({ queryKey: [`${APP_SETTING.FETCH_TASK_SCHEDULE_LIST}`] });
			},
		},
	});

	const handleDelete = async ({id}: {id: string }) => {
		return await mutationDelete.mutateAsync({id});
	};


	return {
		mutationDelete,
		mutationCreate,
		handleDelete,
		handleCreate
	};
};

export default useTaskSchedule;
