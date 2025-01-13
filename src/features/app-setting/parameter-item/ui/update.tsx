import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import ParameterItemEntryForm from './entry';
import useParameterItem from '../hooks/useParameterItem';
import { ParameterItemFormFields } from '@/shared/model/app-setting/parameterItemTypes';
import { APPSETTING_PARAMETER_ITEM } from '@/shared/constants/path';

function AppSettingParameterItemUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
      parameter: { parameter_id: data?.parameter_id, parameter: data?.parameter },
    }
    return data;
  }

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_PARAMETER_ITEM_BY_ID, id as string);
  const dataParameterItem = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useParameterItem();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: ParameterItemFormFields = {
      id: dataParameterItem?.id,
      name: data.name,
			parameter_id: data?.parameter?.parameter_id,
			parameter:data?.parameter?.parameter,
			value:data?.value,
			is_active: data.is_active,
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_PARAMETER_ITEM.LIST)
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
          <h1>Edit Parameter Item</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <ParameterItemEntryForm
          initialData={dataParameterItem}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingParameterItemUpdate;
