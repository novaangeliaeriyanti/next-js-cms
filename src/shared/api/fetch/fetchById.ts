// import Cookies from 'js-cookie';

// import { APP_SETTING } from '@/shared/constants/endpoint';
import { getData } from '@/shared/lib/axiosHelper';

type Props = {
	key: any[];
	api: () => Promise<any>;
};

interface params {
	endpoint: string;
	id: string;
}

function fetchById({
	endpoint,
	id
}: params): Props {
	const KEY = [endpoint, {id}];

	const API = async () => {
		const res = await getData({
			endpoint: `${endpoint}/${id}`,
		});
		return res?.data?.data;
	};

	return { key: KEY, api: API };
}

export {
	fetchById,
};
