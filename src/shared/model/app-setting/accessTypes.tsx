import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type AccessTableFields = {
	id: number;
	no: number;
	name: string;
	entity: string;
	role: string;
	feature: string;
	allow_add: boolean;
	allow_delete: boolean;
	allow_print: boolean;
	allow_update: boolean;
	allow_view: boolean;
}

export interface AccessFormFields {
	id?: number;
	name: string;
	entity_id: number;
	entity: string;
	role_id: number;
	role: string;
	feature_id: number;
	feature: string;
	allow_add: boolean;
	allow_delete: boolean;
	allow_print: boolean;
	allow_update: boolean;
	allow_view: boolean;
}

export const AccessFilterFields: filterParams[] = [
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
		label: 'Entity',
		name: 'entity',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Role',
		name: 'role',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Feature',
		name: 'feature',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Allow View',
		name: 'allow_view',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Allow Print',
		name: 'allow_print',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
]
