import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { MASTER_DATA } from '@/shared/constants/endpoint';
import { EmployeeFormFields } from '@/shared/model/master-data/employeeTypes';
import useEmployee from '../hooks/useEmployee';
import { MASTERDATA_EMPLOYEE } from '@/shared/constants/path';
import EmployeeEntryForm from './entry';

function MasterDataEmployeeUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
    }

    return data;

  }

  const { data, isLoading } = useFetchById(MASTER_DATA.FETCH_EMPLOYEE_BY_ID, id as string);
  const dataEmployee = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useEmployee();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: EmployeeFormFields = {
      id: dataEmployee?.id,
      name: data.name,
			email: data.email,
			mobile_phone: data.mobile_phone,
			employee_photo: data.employee_photo ,
			company: data.company ,
			division: data.division ,
			is_active: data.is_active ,
			join_date: data.join_date ,
			resign_date: data.resign_date ,
			unique_key: data.unique_key ,
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(MASTERDATA_EMPLOYEE.LIST)
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
          <h1>Edit Employee</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <EmployeeEntryForm
          initialData={dataEmployee}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default MasterDataEmployeeUpdate;
