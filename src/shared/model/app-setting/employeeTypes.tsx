import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export interface EmployeeTableFields {
	id?: number;
	no?: number;
	name: string;
	email: string;
	mobile_phone: string;
	employee_photo: string;
	company: string;
	division:string;
	is_active: boolean;
	supervisor: string;
	join_date: string;
	resign_date: string;
	unique_key: string;
}



