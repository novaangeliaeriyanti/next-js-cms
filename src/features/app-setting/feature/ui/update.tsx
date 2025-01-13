import React, { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import useFetchById from '@/shared/hooks/useFetchById';
import { APP_SETTING } from '@/shared/constants/endpoint';
import useFeature from '../hooks/useFeature';
import { FeatureFormFields } from '@/shared/model/app-setting/featureTypes';
import { APPSETTING_FEATURE } from '@/shared/constants/path';
import FeatureEntryForm from './entry';

function AppSettingFeatureUpdate() {
  const router = useRouter()
  const {
    query: { id },
  } = router;


  const toSchema = (data: any) => {
    data = {
      ...data,
      parent_feature: {
        id: data?.parent_feature_id,
        name: data?.parent_feature
      },
    }

    return data;

  }

  const { data, isLoading } = useFetchById(APP_SETTING.FETCH_FEATURE_BY_ID, id as string);
  const dataFeature = toSchema((data as any));
  const { handleUpdate, mutationUpdate } = useFeature();
	const { isPending, isError, error,isSuccess } = mutationUpdate;

  const onFormSubmit = (data: any) => {
		const formData: FeatureFormFields = {
      id: dataFeature?.id,
			name: data.name,
			path:data.path,
			parent_feature:data?.parent_feature?.name,
      parent_feature_id:data?.parent_feature?.id,
			is_active: data.is_active,
		}		
		handleUpdate({
      data: formData
    });
	}

  const goBack=useCallback(() => {
		router.replace(APPSETTING_FEATURE.LIST)
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
          <h1>Edit Feature</h1>
        </div>
      </section>
      {isLoading
        ? <div>Loading</div>
        : <FeatureEntryForm
          initialData={dataFeature}
          onFormSubmit={onFormSubmit}
          isPending={isPending}
        />
      }
    </>
  );
}

export default AppSettingFeatureUpdate;
