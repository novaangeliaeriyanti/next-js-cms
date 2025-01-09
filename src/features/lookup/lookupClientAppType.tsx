import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE, COMPARISON } from "@/shared/constants/dataType";
import { ClientAppVersionTableFields } from "@/shared/model/app-setting/clientAppVersionTypes";

const columnHelper = createColumnHelper<ClientAppVersionTableFields>();

const columnRoleDef = [
  columnHelper.accessor('no', {
    enableSorting: false,
    header: 'No',
  }),
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  // columnHelper.accessor('name', {
  //   header: 'Name',
  // }),
  // columnHelper.accessor('name', {
  //   header: 'Value',
  // }),
  // columnHelper.accessor('name', {
  //   header: 'Parameter',
  // }),
  columnHelper.accessor('client_app_type', {
    header: 'Client App Type',
  }),
  columnHelper.accessor('is_active', {
    header: 'Is Active',
  }),
  
];

const filterFields: filterParams[] = [
  {
    label: 'ID',
    name: 'id',
    column_data_type: FILTER_DATA_TYPE.NUMERIC,
    comparison: COMPARISON.EQUAL
  },
  {
    label: 'Client App Type',
    name: 'client_app_type'
  }
]


type Props = {
  name: string
}

export default function LookupClientAppType({ name }:Props) {

  return (
    <InputLookup
      endPoint={APP_SETTING.FETCH_CLIENT_APP_TYPE}
      columnDef={columnRoleDef}
      filterFields={filterFields}
      title="Client App Type"
      name={name}
      placeholder="Client App Type"
      required
    />
  )
}