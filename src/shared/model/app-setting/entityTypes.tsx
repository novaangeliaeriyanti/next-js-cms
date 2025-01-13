import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type EntityTableFields = {
	id: number;
	no: number;
	name: string;
	allow_access_web: boolean;
	allow_access_mobile: boolean;
	allow_access_engine: boolean;
	unique_key: string;
}

export interface EntityFormFields {
	id?: number;
	name: string;
	allow_access_web: boolean;
	allow_access_mobile: boolean;
	allow_access_engine: boolean;
	unique_key: string;
}

export const EntityFilterFields: filterParams[] = [
	{
		label: 'ID',
		name: 'id',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'Name',
		name: 'name',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Allow Access Web',
		name: 'allow_access_web',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Allow Access Mobile',
		name: 'allow_access_mobile',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Allow Access Engine',
		name: 'allow_access_engine',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Unique Key',
		name: 'unique_key',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
]

