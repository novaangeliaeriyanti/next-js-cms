import type { QueryFunction, QueryKey } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

type UseFetchHookProps = {
  keys: QueryKey;
  api: QueryFunction<any, QueryKey>;
  initialData?: any;
  options?: any;
};

const useFetchHook = ({
  keys,
  api,
  initialData,
  options,
}: UseFetchHookProps) => {
  const fetchQuery = useQuery({
    queryKey: keys,
    queryFn: api,
    ...(initialData && { initialData }),
    ...options, // Spread any additional options here
  });
  // console.log('options ', options)
  return fetchQuery;
};

export default useFetchHook;
