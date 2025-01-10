import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import ClientAppVersionEntryForm from './entry';
import { ClientAppVersionFormFields } from '@/shared/model/app-setting/clientAppVersionTypes';
import router from 'next/router';
import { APPSETTING_CLIENT_APP_VERSION } from '@/shared/constants/path';
import useClientAppVersion from '../hooks/useClientAppVersion';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';

function AppSettingClientAppVersionAdd() {
	const dataClientAppVersion = {
		client_app_type: '',
		version: '',
		is_active: false
	};

	const { handleCreate, mutationCreate } = useClientAppVersion();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: ClientAppVersionFormFields = {
			client_app_type: data?.client_app_type?.client_app_type,
			version: Number(data?.version),
			is_active: data.is_active,
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_CLIENT_APP_VERSION.LIST)
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
					<h1>Add Client App Version</h1>
				</div>
			</section>
			<ClientAppVersionEntryForm 
				initialData={dataClientAppVersion} 
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

export default AppSettingClientAppVersionAdd;
