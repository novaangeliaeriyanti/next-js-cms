import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export interface RoleTableFields {
	id: number;
	no: number;
	name: string;
	is_administrator: boolean;
	is_active: boolean;
}

export interface RoleFormFields {
	name: string;
	is_administrator: boolean;
	is_active: boolean;
}

export const RoleFilterFields: filterParams[] = [
	{
		label: 'ID',
		name: 'id',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'No',
		name: 'no',
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
		label: 'Is Active',
		name: 'is_active',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Is Administrator',
		name: 'is_administrator',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
]


