import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { RoleTableFields } from "@/shared/model/app-setting/roleTypes";
import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";

const columnHelper = createColumnHelper<RoleTableFields>();

const columnRoleDef = [
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
	}
	
]

type Props = {
  name: string
}

export default function LookupRole({ name }:Props) {

  return (
    <InputLookup
      endPoint={APP_SETTING.FETCH_ROLE_LIST}
      columnDef={columnRoleDef}
      filterFields={filterFields}
      title="Role"
      name={name}
      placeholder="Role"
      required
    />
  )
}