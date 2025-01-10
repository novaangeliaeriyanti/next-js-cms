import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type ParameterTableFields = {
	id: number;
	no: number;
	name: string;
	is_active: boolean;
	description: string;
}

export interface ParameterFormFields {
	name: string;
	is_active: boolean;
	description: string;
}

export const ParameterFilterFields: filterParams[] = [
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
		label: 'Desctiption',
		name: 'description',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
]

