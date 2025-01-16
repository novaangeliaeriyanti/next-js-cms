import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type EmployeeTableFields = {
	id: number;
	no: number;
	name: string;
	email: string;
	mobile_phone:string;
	employee_photo: string;
	company: string;
	division: string;
	is_active: boolean;
	join_date: string;
	resign_date: string;
	unique_key: string;
}

export type DivisionTableFields = {
	id: number;
	no: number;
	division: string;
	division_id?:number;
}

export interface EmployeeFormFields {
	id?: number;	
	name: string;
	email: string;
	mobile_phone:string;
	employee_photo: string;
	company: string;
	company_id: number;
	division: string;
	division_id: number;
	is_active: boolean;
	join_date: string;
	resign_date: string;
	unique_key: string;
}

export const EmployeeFilterFields: filterParams[] = [
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
		label: 'Email',
		name: 'email',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Mobile Phone',
		name: 'mobile_phone',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Employee Photo',
		name: 'employee_photo',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Company',
		name: 'company',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Division',
		name: 'division',
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
		label: 'Join Date',
		name: 'join_date',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Resign Date',
		name: 'resign_date',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Unique Key',
		name: 'unique_key',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
]

