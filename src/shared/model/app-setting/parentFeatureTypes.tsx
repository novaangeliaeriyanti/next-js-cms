import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type ParentFeatureTableFields = {
	id: number;
	no: number;
	name: string;
	parent_feature: string,
	path: string,
	is_active: boolean;
}

export interface ParentFeatureFormFields {
	name: string;
	parent_feature:string;
	path: string;
	is_active: boolean;
}

export const ParentFeatureFilterFields: filterParams[] = [
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
		label: 'Parent Feature',
		name: 'parent_feature',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Path',
		name: 'path',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Is Active',
		name: 'is_active',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
]

