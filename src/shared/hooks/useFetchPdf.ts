import { toast } from '@/components/ui/use-toast';
import useMutationHook from './useMutationHook';
import { exportDataPdf } from '../lib/axiosHelper';

const useFetchPdf = (endpoint: string) => {
	const  pdfName = (inputString: string) => {
		const parts = inputString.split('/');
		return `${parts[1]}_${parts[2]}` || 'file';	
	}

	const handleDownloadPdf = (data:any) => {
		const url = URL.createObjectURL(data);
	  	const a = document.createElement('a');
		a.href = url;
		a.download = `${pdfName(endpoint)}.pdf`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const exportPdf = async (data: any) => {
	  const pdfBlob = await exportDataPdf({
		endpoint: endpoint,
		data,
		config: { responseType: 'arraybuffer' },
	  });
	return await pdfBlob
	};
  
	const mutationExportPdf = useMutationHook({
	  api: exportPdf,
	  options: {
		onError: (error: any) => {
		  toast({
			variant: 'destructive',
			title: `Gagal Export File ${pdfName(endpoint)}.pdf`,
			description: error?.message ?? 'Terjadi Kesalahan Jaringan',
		  });
		},
		onSuccess: (data: any) => {
			try {
				handleDownloadPdf(data);
				toast({
					variant: 'success',
					title: 'Berhasil',
					description: `Berhasil Export File ${pdfName(endpoint)}.pdf`,
				});
			} catch (error) {
				toast({
					variant: 'destructive',
					title: `Gagal Export File ${pdfName(endpoint)}.pdf`,
					description: 'Silahkan Coba Kembali',
				  });
			}
		  
		},
	  },
	});
  
	const handleExportPdf = async (data: any) => {
	  return await mutationExportPdf.mutateAsync(data);
	};
  
	return {
	  handleExportPdf,
	  mutationExportPdf
	};
  };
  
export default useFetchPdf;
  