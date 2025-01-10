import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import AccessEntryForm from './entry';
import useAccess from '../hooks/useAccess';
import { AccessFormFields } from '@/shared/model/app-setting/accessTypes';
import router from 'next/router';
import { APPSETTING_ACCESS } from '@/shared/constants/path';

function AppSettingAccessAdd() {
	const dataAccess = {
		name: '',
		role: { id: null, name: null },
		feature: { id: null, name: null },
		entity: { id: null, name: null },
	};

	const { handleCreate, mutationCreate } = useAccess();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: AccessFormFields = {
			name: data.name,
			allow_view: data.allow_view,
			allow_add: data.allow_add,
			allow_update: data.allow_update,
			allow_delete: data.allow_delete,
			allow_print: data.allow_print,
			entity_id:data.entity.id,
			entity: data.entity.name,
			role_id: data.role.id,
			role: data.role.name,
			feature_id: data.feature.id,
			feature: data.feature.name
		}		
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_ACCESS.LIST)
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
					<h1>Add Access</h1>
				</div>
			</section>
			<AccessEntryForm 
				initialData={dataAccess} 
				onFormSubmit={onFormSubmit}
				isPending={isPending}
			/>
			{isError && (
				<div>{'error'}</div>
			)}
			</div>
	);
}

export default AppSettingAccessAdd;
