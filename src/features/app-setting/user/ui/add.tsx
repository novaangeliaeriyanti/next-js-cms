import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import router from 'next/router';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import useUser from '../hooks/useUser';
import { UserFormFields } from '@/shared/model/app-setting/userTypes';
import UserEntryForm from './entry';
import { APPSETTING_USER } from '@/shared/constants/path';


function AppSettingUserAdd() {
	const dataUser = {
	identity_id:'',
	name: '',
	email: '',
	mobile_phone: '',
	role: '',
	password: '',
	salt: '',
	device_info: '',
	device_location: '',
	ip_address: '',
	latitude: '',
	longitude: '',
	is_active: false,
	is_lock: false,
	created_date: '',
	last_login: '',
	access_token: '',
	refresh_token: '',
	reset_token: '',
	fcm_token: '',
	otp:'',
	login_attempt:'',
	reset_password_attempt: '',
	};

	const { handleCreate, mutationCreate } = useUser();
	const { isPending, isError, error,isSuccess } = mutationCreate;

	const onFormSubmit = useCallback((data: any) => {
		const formData: UserFormFields = {
			identity_id:data?.name?.id,
			name: data?.name?.name,
			email: data?.email,
			mobile_phone: data?.mobile_phone,
			role: data?.role?.name,
			role_id:data?.role?.id,
			password: data?.password,
			salt: data?.salt,
			device_info: data?.device_info,
			device_location: data?.device_location,
			ip_address: data?.ip_address,
			latitude: data?.latitude,
			longitude: data?.longitude,
			is_active: data?.is_active,
			is_lock: data?.is_lock,
			created_date: data?.created_date,
			create_date: data?.created_date,
			last_login: data?.last_login,
			access_token: data?.access_token,
			refresh_token: data?.refresh_token,
			reset_token: data?.reset_token,
			fcm_token: data?.fcm_token,
			otp:data?.otp,
			login_attempt:data?.login_attempt,
			reset_password_attempt: data?.reset_password_attempt,
		}
		handleCreate(formData);
	}, [])

	const goBack=() => {
		router.replace(APPSETTING_USER.LIST)
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
					<h1>Add User</h1>
				</div>
			</section>
			<UserEntryForm
				initialData={dataUser} 
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

export default AppSettingUserAdd;
