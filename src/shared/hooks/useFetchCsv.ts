import { toast } from '@/components/ui/use-toast';
import useMutationHook from './useMutationHook';
import { exportDataCsv } from '../lib/axiosHelper';

const useFetchCsv = (endpoint: string) => {
	const  csvName = (inputString: string) => {
		const parts = inputString.split('/');
		return `${parts[0]}_${parts[1]}` || 'file';	
	}

	const handleDownloadCsv = (data:any) => {
		const url = URL.createObjectURL(data);
	  	const a = document.createElement('a');
		a.href = url;
		a.download = `${csvName(endpoint)}.csv`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const exportCsv = async (data: any) => {
	  const pdfBlob = await exportDataCsv({
		endpoint: endpoint,
		data,
		config: { responseType: 'arraybuffer' },
	  });
	return await pdfBlob
	};
  
	const mutationExportCsv = useMutationHook({
	  api: exportCsv,
	  options: {
		onError: (error: any) => {
		  toast({
			variant: 'destructive',
			title: `Gagal Export File ${csvName(endpoint)}.csv`,
			description: error?.message ?? 'Terjadi Kesalahan Jaringan',
		  });
		},
		onSuccess: (data: any) => {
			try {
				handleDownloadCsv(data);
				toast({
					variant: 'success',
					title: 'Berhasil',
					description: `Berhasil Export File ${csvName(endpoint)}.csv`,
				});
			} catch (error) {
				toast({
					variant: 'destructive',
					title: `Gagal Export File ${csvName(endpoint)}.csv`,
					description: 'Silahkan Coba Kembali',
				  });
			}
		  
		},
	  },
	});
  
	const handleExportCsv = async (data: any) => {
	  return await mutationExportCsv.mutateAsync(data);
	};
  
	return {
	  handleExportCsv,
	  mutationExportCsv
	};
  };
  
export default useFetchCsv;
  