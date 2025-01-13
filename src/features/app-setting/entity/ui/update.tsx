import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import { APPSETTING_ENTITY } from '@/shared/constants/path';
import useEntity from '../hooks/useEntity';
import EntityEntryForm from './entry';
import { EntityFormFields } from '@/shared/model/app-setting/entityTypes';

function AppSettingEntityUpdate() {
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

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_ENTITY_BY_ID, id as string);
  const dataEntity = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useEntity();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: EntityFormFields = {
      id: dataEntity?.id,
			name: data.name,
			allow_access_web: data.allow_access_web,
			allow_access_mobile: data.allow_access_mobile,
			allow_access_engine: data.allow_access_engine,
			unique_key:data.unique_key
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_ENTITY.LIST)
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
          <h1>Edit Entity</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <EntityEntryForm
          initialData={dataEntity}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingEntityUpdate;
