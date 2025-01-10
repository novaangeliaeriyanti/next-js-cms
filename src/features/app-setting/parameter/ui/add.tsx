import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import { APPSETTING_PARAMETER } from '@/shared/constants/path';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useParameter from '../hooks/useParameter';
import ParameterEntryForm from './entry';
import { ParameterFormFields } from '@/shared/model/app-setting/parameterTypes';

function AppSettingParameterAdd() {
	const dataParameter = {
		name: '',
		is_active: false,
		description:''
	};

	const { handleCreate, mutationCreate } = useParameter();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: ParameterFormFields = {
			name: data.name,
			is_active: data.is_active,
			description:data.description
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_PARAMETER.LIST)
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
					<h1>Add Parameter</h1>
				</div>
			</section>
			<ParameterEntryForm
				initialData={dataParameter} 
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

export default AppSettingParameterAdd;
