import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type ClientAppVersionTableFields = {
	id: number;
	no: number;
	client_app_type: string;
	// version: string;
	name:string;
	is_active: boolean;
}

export interface ClientAppVersionFormFields {
	id?: number;
	client_app_type: string;
	version: number;
	is_active: boolean;
}

export const ClientAppVersionFilterFields: filterParams[] = [
	{
		label: 'ID',
		name: 'id',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'Client Type App',
		name: 'client_app_type',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Version',
		name: 'version',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'Is Active',
		name: 'is_active',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
]

export const ClientAppTypeTableFields: filterParams[] = [
	{
		label: 'ID',
		name: 'id',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	// {
	// 	label: 'Client Type App',
	// 	name: 'client_app_type',
	// 	column_data_type: FILTER_DATA_TYPE.STRING,
	// 	comparison: 'LIKE'
	// },
	// {
	// 	label: 'Version',
	// 	name: 'version',
	// 	column_data_type: FILTER_DATA_TYPE.NUMERIC,
	// 	comparison: 'LIKE'
	// },
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
]
