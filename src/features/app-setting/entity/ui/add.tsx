import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import useEntity from '../hooks/useEntity';
import { EntityFormFields } from '@/shared/model/app-setting/entityTypes';
import { APPSETTING_ENTITY } from '@/shared/constants/path';
import EntityEntryForm from './entry';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';

function AppSettingEntityAdd() {
	const dataEntity = {
		name: '',
		allow_access_web: false,
		allow_access_mobile: false,
		allow_access_engine: false,
		unique_key:''
	};

	const { handleCreate, mutationCreate } = useEntity();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: EntityFormFields = {
			name: data.name,
			allow_access_web: data.allow_access_web,
			allow_access_mobile: data.allow_access_mobile,
			allow_access_engine: data.allow_access_engine,
			unique_key:data.unique_key
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_ENTITY.LIST)
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
					<h1>Add Entity</h1>
				</div>
			</section>
			<EntityEntryForm
				initialData={dataEntity} 
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

export default AppSettingEntityAdd;
