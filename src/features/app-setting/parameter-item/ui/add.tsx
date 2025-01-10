import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useParameterItem from '../hooks/useParameterItem';
import { ParameterItemFormFields } from '@/shared/model/app-setting/parameterItemTypes';
import { APPSETTING_PARAMETER_ITEM } from '@/shared/constants/path';
import ParameterItemEntryForm from './entry';

function AppSettingParameterItemAdd() {
	const dataParameterItem= {
		name: '',
		is_active: false,
		parameter: { parameter_id: null, parameter: null },
		value:''
	};

	const { handleCreate, mutationCreate } = useParameterItem();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: ParameterItemFormFields = {
			name: data.name,
			parameter_id: data?.parameter?.parameter_id,
			parameter:data?.parameter?.parameter,
			value:data?.value,
			is_active: data.is_active,
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_PARAMETER_ITEM.LIST)
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
					<h1>Add Parameter Item</h1>
				</div>
			</section>
			<ParameterItemEntryForm
				initialData={dataParameterItem} 
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

export default AppSettingParameterItemAdd;
