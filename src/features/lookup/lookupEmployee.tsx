import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { EmployeeTableFields } from "@/shared/model/app-setting/employeeTypes";
import { formatDate, isEmpty } from "@/shared/hooks/useValidate";

const columnHelper = createColumnHelper<EmployeeTableFields>();

const columnEmployeeDef = [
  columnHelper.accessor('no', {
    enableSorting: false,
    header: 'No',
  }),
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
  }),
  columnHelper.accessor('mobile_phone', {
    header: 'Mobile Phone',
  }),
  columnHelper.accessor('employee_photo', {
    header: 'Employee Photo',
  }),
  columnHelper.accessor('company', {
    header: 'Company',
  }),
  columnHelper.accessor('division', {
    header: 'Division',
  }),
  // columnHelper.accessor('is_active', {
  //   header: 'Is Active',
  //   cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  // }),
  // columnHelper.accessor('supervisor', {
  //   header: 'Supervisor',
  // }),
  // columnHelper.accessor('join_date', {
  //   header: 'Join Date',
  //   cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? formatDate(info.getValue()) : '-'}</div>
  // }),
  // columnHelper.accessor('resign_date', {
  //   header: 'Resign Date',
  //   cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? formatDate(info.getValue()) : '-'}</div>
  // }),
  // columnHelper.accessor('unique_key', {
  //   header: 'Unique Key',
  // }),
];

const filterFields: filterParams[] = [
  {
    label: 'ID',
    name: 'id',
    column_data_type: FILTER_DATA_TYPE.NUMERIC,
    comparison: 'EQUAL'
  },
	{
		label: 'Name',
		name: 'name'
	},
	{
		label: 'Email',
		name: 'email'
	},
  {
		label: 'Mobile Phone',
		name: 'mobile_phone'
	},
  {
		label: 'Employee Photo',
		name: 'employee_photo'
	},
  {
		label: 'Company',
		name: 'company'
	},
  {
		label: 'Division',
		name: 'division'
	},
  // {
	// 	label: 'Is Active',
	// 	name: 'is_active'
	// },
  // {
	// 	label: 'Supervisor',
	// 	name: 'supervisor'
	// },
  // {
	// 	label: 'Join Date',
	// 	name: 'join_date'
	// },
  // {
	// 	label: 'Resign Date',
	// 	name: 'resign_date'
	// },
  // {
	// 	label: 'Unique Key',
	// 	name: 'unique_key'
	// },
]

type Props = {
  name: string,
}

export default function LookupEmployee({ name }:Props) {
  return (
    <InputLookup
      endPoint={APP_SETTING.FETCH_EMPLOYEE_LIST}
      columnDef={columnEmployeeDef}
      filterFields={filterFields}
      title="User"
      name={name}
      placeholder="User"
      required
    />
  )
}