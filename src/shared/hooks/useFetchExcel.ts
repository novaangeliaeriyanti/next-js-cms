import { toast } from '@/components/ui/use-toast';
import useMutationHook from './useMutationHook';
import { exportDataExcel } from '../lib/axiosHelper';

const useFetchExcel = (endpoint: string) => {
	const  excelName = (inputString: string) => {
		const parts = inputString.split('/');
		return `${parts[0]}_${parts[1]}` || 'file';	
	}

	const handleDownloadExcel = (data:any) => {
		const url = URL.createObjectURL(data);
	  	const a = document.createElement('a');
		a.href = url;
		a.download = `${excelName(endpoint)}.xlsx`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const exportExcel = async (data: any) => {
	  const pdfBlob = await exportDataExcel({
		endpoint: endpoint,
		data,
		config: { responseType: 'arraybuffer' },
	  });
	return await pdfBlob
	};
  
	const mutationExportExcel = useMutationHook({
	  api: exportExcel,
	  options: {
		onError: (error: any) => {
		  toast({
			variant: 'destructive',
			title: `Gagal Export File ${excelName(endpoint)}.xlsx`,
			description: error?.message ?? 'Terjadi Kesalahan Jaringan',
		  });
		},
		onSuccess: (data: any) => {
			try {
				handleDownloadExcel(data);
				toast({
					variant: 'success',
					title: 'Berhasil',
					description: `Berhasil Export File ${excelName(endpoint)}.xlsx`,
				});
			} catch (error) {
				toast({
					variant: 'destructive',
					title: `Gagal Export File ${excelName(endpoint)}.xlsx`,
					description: 'Silahkan Coba Kembali',
				  });
			}
		  
		},
	  },
	});
  
	const handleExportExcel = async (data: any) => {
		try {
			return await mutationExportExcel.mutateAsync(data);
		} catch (error) {
			return error
		}
	};
  
	return {
	  handleExportExcel,
	  mutationExportExcel
	};
  };
  
export default useFetchExcel;
  