import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import { APPSETTING_CLIENT_APP_VERSION } from '@/shared/constants/path';
import ClientAppVersionEntryForm from './entry';
import useClientAppVersion from '../hooks/useClientAppVersion';
import { ClientAppVersionFormFields } from '@/shared/model/app-setting/clientAppVersionTypes';

function AppSettingClientAppVersionUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
      entity: {
        id: data?.entity_id,
        name: data?.entity
      },
      role: {
        id: data?.role_id,
        name: data?.role
      },
      feature: {
        id: data?.feature_id,
        name: data?.feature
      }
    }

    return data;

  }

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_CLIENT_APP_VERSION_BY_ID, id as string);
  const dataClientAppVersion = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useClientAppVersion();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: ClientAppVersionFormFields = {
      id:dataClientAppVersion?.id,
      client_app_type: data?.client_app_type?.client_app_type,
			version: Number(data?.version),
			is_active: data.is_active,
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_CLIENT_APP_VERSION.LIST)
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
          <h1>Edit Client App Version</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <ClientAppVersionEntryForm
          initialData={dataClientAppVersion}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingClientAppVersionUpdate;
