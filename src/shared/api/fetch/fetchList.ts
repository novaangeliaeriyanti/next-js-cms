import { postData } from '@/shared/lib/axiosHelper';
import { defaultListParams } from '@/shared/model/defaultParams';
import {COMPARISON, FILTER_DATA_TYPE } from "@/shared/constants/dataType";

type Props = {
	key: string[];
	api: () => Promise<any>;
};

interface params extends defaultListParams {
	endpoint: string
}

function fetchList({
	endpoint,
	page_number = 0,
	page_size = 10,
	criteria = {
		logical: 'OR',
		conditions: []
	},
	...params
}: params): Props {
	let conditions: any[] = (Array.isArray(criteria.conditions) ? criteria.conditions : [criteria.conditions] )
	.filter(item => item?.name && item?.value)
	.map(item => ({
		...item,
		column_data_type: item?.column_data_type || FILTER_DATA_TYPE.STRING,
		comparison: item?.comparison || COMPARISON.LIKE
	}));
	criteria.logical = criteria.logical;
	criteria.conditions = conditions;
	const KEY = [endpoint, `PAGE-${page_number}`, `SIZE-${page_size}`, `SORTBY-${params.sort_by}`, `SORTDIR-${params.sort_direction}`, JSON.stringify(criteria)];

	const API = async () => {
		const res = await postData({
			endpoint: endpoint,
			data: {
				page_number: page_number + 1,
				page_size,
				criteria,
				...params
			}
		});

		return res?.data?.data;
	};

	return { key: KEY, api: API };
}

export {
	fetchList,
};
