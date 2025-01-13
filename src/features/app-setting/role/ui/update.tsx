import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import RoleEntryForm from './entry';
import useRole from '../hooks/useRole';
import { RoleFormFields } from '@/shared/model/app-setting/roleTypes';
import { APPSETTING_ROLE } from '@/shared/constants/path';

function AppSettingRoleUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
    }

    return data;

  }

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_ROLE_BY_ID, id as string);
  const dataRole = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useRole();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: RoleFormFields = {
      id: dataRole?.id,
      name: data.name,
			is_active: data.is_active,
			is_administrator: data.is_administrator,
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_ROLE.LIST)
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
          <h1>Edit Role</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <RoleEntryForm
          initialData={dataRole}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingRoleUpdate;
