import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import useUser from '../hooks/useUser';
import { UserFormFields } from '@/shared/model/app-setting/userTypes';
import { APPSETTING_USER } from '@/shared/constants/path';
import UserEntryForm from './entry';
import { isEmpty } from '@/shared/hooks/useValidate';

function AppSettingUserUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
      longitude: data?.longitude?.toString(),
      latitude: data?.longitude?.toString(),
      login_attempt: data?.login_attempt?.toString(),
      reset_password_attempt: data?.reset_password_attempt?.toString(),
      created_date: !isEmpty(data?.create_date) ? new Date(data?.create_date)?.toISOString() : "",
      last_login: !isEmpty(data?.last_login) ? new Date(data?.last_login)?.toISOString() : "",
      name: { id: data?.identity_id, name: data?.name},
      role: { id: data?.role_id, name: data?.role },
    }
    return data;
  }

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_USER_BY_ID, id as string);
  const dataUser = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useUser();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: UserFormFields = {
      id: dataUser?.id,
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
			latitude: Number(data?.latitude),
			longitude: Number(data?.longitude),
			is_active: data?.is_active,
			is_lock: data?.is_lock,
			create_date: data?.created_date,
      created_date: data?.created_date,
			last_login: data?.last_login,
			access_token: data?.access_token,
			refresh_token: data?.refresh_token,
			reset_token: data?.reset_token,
			fcm_token: data?.fcm_token,
			otp:data?.otp,
			login_attempt:Number(data?.login_attempt),
			reset_password_attempt: Number(data?.reset_password_attempt),
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_USER.LIST)
	}, [router])

  useEffect(() => {
    if (isSuccess) goBack()
  }, [isSuccess, goBack])
  return (
    <>
      <section className="mt-5">
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={goBack}
            type="button"
          >
            <FaLeftLong />
          </Button>
          <h1>Edit User</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <UserEntryForm
          initialData={dataUser}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingUserUpdate;
