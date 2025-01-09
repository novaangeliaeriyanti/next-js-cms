import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useFeature from '../hooks/useFeature';
import { FeatureFormFields } from '@/shared/model/app-setting/featureTypes';
import { APPSETTING_FEATURE } from '@/shared/constants/path';
import FeatureEntryForm from './entry';

function AppSettingFeatureAdd() {
	const dataEntity = {
		name: '',
		allow_access_web: false,
		allow_access_mobile: false,
		allow_access_engine: false,
		unique_key:''
	};

	const { handleCreate, mutationCreate } = useFeature();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: FeatureFormFields = {
			name: data.name,
			path:data.path,
			parent_feature:data.parent_feature,
			is_active: data.is_active,
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_FEATURE.LIST)
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
					<h1>Add Feature</h1>
				</div>
			</section>
			<FeatureEntryForm
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

export default AppSettingFeatureAdd;
