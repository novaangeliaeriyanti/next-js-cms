import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { MASTER_DATA } from '@/shared/constants/endpoint';
import CompanyEntryForm from './entry';
import { MASTERDATA_COMPANY } from '@/shared/constants/path';
import { CompanyFormFields } from '@/shared/model/master-data/companyTypes';
import useCompany from '../hooks/useCompany';

function MasterDataCompanyUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
      invoice_due_date: new Date(data?.invoice_due_date * 1000)?.toLocaleString()
    }

    return data;

  }

  const { data, isLoading } = useFetchById(MASTER_DATA.FETCH_COMPANY_BY_ID, id as string);
  const dataCompany = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useCompany();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: CompanyFormFields = {
      id: dataCompany?.id,
			name: data.name,
			is_vendor: data.is_vendor,
      invoice_due_date: Math.floor(new Date(data?.invoice_due_date).getTime()/ 1000)
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(MASTERDATA_COMPANY.LIST)
	}, [router])

  useEffect(() => {
    if (isSuccess) goBack()
  }, [isSuccess, goBack])

  return (
    <>
      <section className="mt-5">
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={goBack}
            type="button"
          >
            <FaLeftLong />
          </Button>
          <h1>Edit Company</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <CompanyEntryForm
          initialData={dataCompany}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default MasterDataCompanyUpdate;
