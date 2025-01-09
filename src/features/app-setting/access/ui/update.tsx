import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import AccessEntryForm from './entry';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import useAccess from '../hooks/useAccess';
import { AccessFormFields } from '@/shared/model/app-setting/accessTypes';
import { Router } from 'lucide-react';
import { APPSETTING_ACCESS } from '@/shared/constants/path';

function AppSettingAccessUpdate() {
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

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_ACCESS_BY_ID, id as string);
  const dataAccess = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useAccess();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: AccessFormFields = {
      id: dataAccess.id,
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
		console.log('data fromdat', formData)
		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_ACCESS.LIST)
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
          <h1>Edit Access</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <AccessEntryForm
          initialData={dataAccess}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingAccessUpdate;
