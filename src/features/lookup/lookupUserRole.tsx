import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { RoleTableFields } from "@/shared/model/app-setting/roleTypes";
import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";

const columnHelper = createColumnHelper<RoleTableFields>();

const columnUserRoleDef = [
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
  columnHelper.accessor('is_administrator', {
    header: 'Is Administrator',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('is_active', {
    header: 'Is Active',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  
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
		label: 'Is Administrator',
		name: 'is_administrator'
	},
  {
		label: 'Is Active',
		name: 'is_active'
	}
]

type Props = {
  name: string,
}

export default function LookupUserRole({ name }:Props) {
  return (
    <InputLookup
      endPoint={APP_SETTING.FETCH_ROLE_LIST}
      columnDef={columnUserRoleDef}
      filterFields={filterFields}
      title="Role"
      name={name}
      placeholder="Role"
      required
    />
  )
}