import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useEmployee from '../hooks/useEmployee';
import { EmployeeFormFields } from '@/shared/model/master-data/employeeTypes';
import { MASTERDATA_EMPLOYEE } from '@/shared/constants/path';
import EmployeeEntryForm from './entry';

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

	const { handleCreate, mutationCreate } = useEmployee();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: EmployeeFormFields = {
			name: data.name,
			email: data.email,
			mobile_phone: data.mobile_phone,
			employee_photo: data.employee_photo?.name ,
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
	}, [])

	const goBack=() => {
		router.replace(MASTERDATA_EMPLOYEE.LIST)
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
