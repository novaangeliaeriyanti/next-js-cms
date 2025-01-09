import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { filterParams } from "@/shared/model/defaultParams";

export type UserTableFields = {
	id: number;
	no: number;
	name: string;
	email: string;
	mobile_phone: string;
	role: string;
	password: string;
	salt: string;
	device_info: string;
	device_location: string;
	ip_address: string;
	latitude: number;
	longitude: number;
	is_active: boolean;
	is_lock: boolean;
	created_date: string;
	last_login: string;
	access_token: string;
	refresh_token: string;
	reset_token: string;
	fcm_token: string;
	otp:string;
	login_attempt: number;
	reset_password_attempt: number;
}

export interface UserFormFields {
	id: number;
	no: number;
	name: string;
	email: string;
	mobile_phone: string;
	role: string;
	password: string;
	salt: string;
	device_info: string;
	device_location: string;
	ip_address: string;
	latitude: number;
	longitude: number;
	is_active: boolean;
	is_lock: boolean;
	created_date: string;
	last_login: string;
	access_token: string;
	refresh_token: string;
	reset_token: string;
	fcm_token: string;
	otp:string;
	login_attempt: number;
	reset_password_attempt: number;
}

export const UserFilterFields: filterParams[] = [
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
		label: 'Role',
		name: 'role',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Password',
		name: 'password',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Salt',
		name: 'salt',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'device_info',
		name: 'device_info',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Device Location',
		name: 'device_location',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'IP Address',
		name: 'ip_address',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Latitude',
		name: 'latitude',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'Longitude',
		name: 'longitude',
		column_data_type: FILTER_DATA_TYPE.NUMERIC,
		comparison: 'LIKE'
	},
	{
		label: 'Is Active',
		name: 'is_active',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'LIKE'
	},
	{
		label: 'Is Lock',
		name: 'is_lock',
		column_data_type: FILTER_DATA_TYPE.BOOLEAN,
		comparison: 'EQUAL'
	},
	{
		label: 'Created Date',
		name: 'created_date',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Last Login',
		name: 'last_login',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Access Token',
		name: 'access_token',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'Refresh Token',
		name: 'refresh_token',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'FCM Token',
		name: 'fcm_token',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
	{
		label: 'OTP',
		name: 'otp',
		column_data_type: FILTER_DATA_TYPE.STRING,
		comparison: 'LIKE'
	},
]

