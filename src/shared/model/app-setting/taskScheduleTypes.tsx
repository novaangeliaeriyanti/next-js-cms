import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type TaskScheduleTableFields = {
	id: number;
	no: number;
	requestor_name: string;
	requestor_email: string;
	service_name: string;
	process_name: string;
	internal_data_source: string;
	register_date:string;
	execute_date:string;
	finish_date:string;
	result:string;
}

export interface TaskScheduleFormFields {
	id?: number;
	requestor_name: string;
	requestor_email: string;
	service_name: string;
	process_name: string;
	internal_data_source: string;
	register_date:string;
	execute_date:string;
	finish_date:string;
	result:string;
}

export const TaskScheduleFilterFields: filterParams[] = [
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
		label: 'Requestor Name',
		name: 'requestor_name',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Requestor Email',
		name: 'requestor_email',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Service Name',
		name: 'service_name',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Process Name',
		name: 'process_name',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Internal Data Source',
		name: 'internal_data_source',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Register Date',
		name: 'register_date',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Execute Date',
		name: 'execute_date',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Finish Date',
		name: 'finish_date',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Result',
		name: 'result',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
]

