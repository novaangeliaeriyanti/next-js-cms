import type { UseQueryResult } from '@tanstack/react-query';

import { fetchList } from '../api/fetch/fetchList';
import useFetchHook from '@/shared/hooks/useFetchHook';
import { defaultListParams } from '@/shared/model/defaultParams';

const useFetchList = (data: defaultListParams, endpoint: string ) => {
  const fetchQueryFn = fetchList({...data, endpoint});
  // console.log('data fetclist',data)
  const fetchQuery: UseQueryResult = useFetchHook({
    keys: fetchQueryFn.key,
    api: fetchQueryFn.api,
    options: {
      meta: {
        errorMessage: 'Gagal mendapatkan data',
      }
    },
  });

  return {
    ...fetchQuery,
  };
};

export default useFetchList;
