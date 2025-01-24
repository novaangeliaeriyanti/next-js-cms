import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { MASTER_DATA } from '@/shared/constants/endpoint';
import { EmployeeFormFields } from '@/shared/model/master-data/employeeTypes';
import useEmployee from '../hooks/useEmployee';
import { MASTERDATA_EMPLOYEE } from '@/shared/constants/path';
import EmployeeEntryForm from './entry';
import { isEmpty } from '@/shared/hooks/useValidate';
import { convertFileToBase64 } from '@/shared/hooks/useImage';

function MasterDataEmployeeUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
      company:{
        name:data?.company,
        id:data?.company_id
      },
      division:{
        division:data?.division,
        division_id:data?.division_id
      }
    }

    return data;

  }

  const { data, isLoading } = useFetchById(MASTER_DATA.FETCH_EMPLOYEE_BY_ID, id as string);
  const dataEmployee = toSchema((data as any));
  const { handleUpdate, mutationUpdate, handleUploadPhoto } = useEmployee();
	const { isPending, isError, error,isSuccess } = mutationUpdate;
  const [employeePhoto, setEmployeePhoto] =  useState<File>();

  const onFormSubmit = async(data: any) => {
		const formData: EmployeeFormFields = {
      id: dataEmployee?.id,
      name: data.name,
			email: data.email,
			mobile_phone: data.mobile_phone,
			employee_photo: data.employee_photo?.name,
			company: data.company?.name,
      company_id: data?.company?.id,
			division: data.division?.division,
      division_id: data?.division?.division_id,
			is_active: data.is_active ,
			join_date: data.join_date ,
			resign_date: data.resign_date ,
			unique_key: data.unique_key ,
		}		
		handleUpdate({
      data: formData
    });
    setEmployeePhoto(data?.employee_photo)
	}

  const goBack=useCallback(() => {
		router.replace(MASTERDATA_EMPLOYEE.LIST)
	}, [router])

  const onUploadEmployeePhoto = async()=>{
		const base64Content = await convertFileToBase64(employeePhoto as File);
		const base64Data = base64Content.split(',')[1]
		const dataEmployeePhoto = {
			Files:[
					{
					  file_name: employeePhoto?.name,
					  file_content: base64Data
					}
				  ],
				  id: dataEmployee?.id
		}
		handleUploadPhoto(dataEmployeePhoto)
	}

  useEffect(() => {
    if (isSuccess){
			if(!isEmpty(employeePhoto)){
				onUploadEmployeePhoto()
			}
			goBack()
		}
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
