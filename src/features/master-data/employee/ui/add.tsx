import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useEmployee from '../hooks/useEmployee';
import { EmployeeFormFields } from '@/shared/model/master-data/employeeTypes';
import { MASTERDATA_EMPLOYEE } from '@/shared/constants/path';
import EmployeeEntryForm from './entry';
import { isEmpty } from '@/shared/hooks/useValidate';
import { convertFileToBase64 } from '@/shared/hooks/useImage';

function MasterDataEmployeeAdd() {
	const dataEmployee = {
		name: '',
		email: '',
		mobile_phone: '',
		employee_photo: '',
		company: {
			id:'',
			name:''
		},
		division: {
			id:'',
			name:''
		},
		is_active: false,
		join_date: '',
		resign_date: '',
		unique_key: '',
	};

	const { handleCreate, mutationCreate, handleUploadPhoto } = useEmployee();
	const { isPending, isError, error,isSuccess, data } = mutationCreate;
	const [employeePhoto, setEmployeePhoto] =  useState<File>();
	
	const onFormSubmit = useCallback((data: any) => {
		const formData: EmployeeFormFields = {
			name: data.name,
			email: data.email,
			mobile_phone: data.mobile_phone,
			employee_photo: data.employee_photo?.name,
			company: data.company?.name,
			company_id: data?.company?.id,
			division: data.division?.division,
			division_id:data?.division?.division_id,
			is_active: data.is_active ,
			join_date: data.join_date ,
			resign_date: data.resign_date ,
			unique_key: data.unique_key ,
			}
		handleCreate(formData);
		setEmployeePhoto(data?.employee_photo)
	}, [])

	const goBack=() => {
		router.replace(MASTERDATA_EMPLOYEE.LIST)
	}

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
				  id: (data as any)?.data?.id
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
					<h1>Add Employee</h1>
				</div>
			</section>
			<EmployeeEntryForm
				initialData={dataEmployee} 
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

export default MasterDataEmployeeAdd;
