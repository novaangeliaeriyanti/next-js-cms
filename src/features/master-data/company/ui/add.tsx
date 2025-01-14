import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useCompany from '../hooks/useCompany';
import { CompanyFormFields } from '@/shared/model/master-data/companyTypes';
import { MASTERDATA_COMPANY } from '@/shared/constants/path';
import CompanyEntryForm from './entry';

function MasterDataCompanyAdd() {
	const dataCompany = {
		name: '',
		is_vendor: false,
		invoice_due_date:''
	};

	const { handleCreate, mutationCreate } = useCompany();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: CompanyFormFields = {
			name: data.name,
			is_vendor: data.is_vendor,
			invoice_due_date: Math.floor(new Date(data?.invoice_due_date).getTime()/ 1000),
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(MASTERDATA_COMPANY.LIST)
	}

	useEffect(() => {
    if (isSuccess) goBack()
  }, [isSuccess])

	return (
		<div className="mt-4 ">
			<section>
				<div className="flex items-center gap-5">
					<Button
						variant="ghost"
						size="icon"
						onClick={goBack}
						type="button"
					>
						<FaLeftLong />
					</Button>
					<h1>Add Company</h1>
				</div>
			</section>
			<CompanyEntryForm
				initialData={dataCompany} 
				onFormSubmit={onFormSubmit}
				isPending={isPending}
			/>
			{isError && (
				<div>{'error'}</div>
			)}
			 <LoadingOverlay isOpen={isPending}/>
			</div>
	);
}

export default MasterDataCompanyAdd;
