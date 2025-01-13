import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type ClientAppTypeTableFields = {
	id: number;
	no: number;
	client_app_type: string,
	is_active: boolean;
}

export interface ClientAppTypeFormFields {
	id?: number;
	client_app_type:string;
	is_active: boolean;
}

export const ClientAppTypeFilterFields: filterParams[] = [
	{
		label: 'ID',
		name: 'id',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'Client App Type',
		name: 'client_app_type',
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

