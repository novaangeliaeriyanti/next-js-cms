import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import ParameterEntryForm from './entry';
import useParameter from '../hooks/useParameter';
import { ParameterFormFields } from '@/shared/model/app-setting/parameterTypes';
import { APPSETTING_PARAMETER } from '@/shared/constants/path';

function AppSettingParameterUpdate() {
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

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_PARAMETER_BY_ID, id as string);
  const dataParameter = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useParameter();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: ParameterFormFields = {
      id: dataParameter?.id,
      name: data.name,
			is_active: data.is_active,
			description:data.description
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_PARAMETER.LIST)
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
          <h1>Edit Parameter</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <ParameterEntryForm
          initialData={dataParameter}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingParameterUpdate;
