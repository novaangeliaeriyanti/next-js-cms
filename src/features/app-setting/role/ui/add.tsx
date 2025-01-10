import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useRole from '../hooks/useRole';
import { RoleFormFields } from '@/shared/model/app-setting/roleTypes';
import { APPSETTING_ROLE } from '@/shared/constants/path';
import RoleEntryForm from './entry';

function AppSettingRoleAdd() {
	const dataRole = {
		name: '',
		is_active: false,
		is_administrator: false,
	};

	const { handleCreate, mutationCreate } = useRole();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: RoleFormFields = {
			name: data.name,
			is_active: data.is_active,
			is_administrator: data.is_administrator,
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_ROLE.LIST)
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
					<h1>Add Role</h1>
				</div>
			</section>
			<RoleEntryForm
				initialData={dataRole} 
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

export default AppSettingRoleAdd;
