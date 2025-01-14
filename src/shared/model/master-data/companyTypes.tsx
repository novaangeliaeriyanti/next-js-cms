import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type CompanyTableFields = {
	id: number;
	no: number;
	name: string;
	is_vendor: boolean;
	invoice_due_date: number;
}

export interface CompanyFormFields {
	id?: number;
	name: string;
	is_vendor: boolean;
	invoice_due_date: number;
}

export const CompanyFilterFields: filterParams[] = [
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
		label: 'Is Vendor',
		name: 'is_vendor',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Invoice Due Date',
		name: 'invoice_due_date',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
]

