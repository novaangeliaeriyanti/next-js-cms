import type { UseQueryResult } from '@tanstack/react-query';

import { fetchById } from '../api/fetch/fetchById';
import useFetchHook from '@/shared/hooks/useFetchHook';

const useFetchById = (endpoint: string, id: string) => {
	const fetchQueryFn = fetchById({ endpoint, id });
	const fetchQuery: UseQueryResult = useFetchHook({
		keys: fetchQueryFn.key,
		api: fetchQueryFn.api,
		options: {
			enabled: !!id,
			meta: {
				errorMessage: 'Gagal mendapatkan data',
			},
		},
	});

	return {
		...fetchQuery,
	};
};

export default useFetchById;
