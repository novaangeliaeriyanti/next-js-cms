import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { EntityTableFields } from '@/shared/model/app-setting/entityTypes'
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE, COMPARISON } from "@/shared/constants/dataType";

const columnHelper = createColumnHelper<EntityTableFields>();

const columnEntityDef = [
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
    comparison: COMPARISON.EQUAL
  },
  {
    label: 'Name',
    name: 'name'
  }
]

type Props = {
  name: string,
}


export default function LookupEntity({ name }:Props) {
  return (
    <InputLookup
      endPoint={APP_SETTING.FETCH_ENTITY_LIST}
      columnDef={columnEntityDef}
      filterFields={filterFields}
      title="Entity"
      name={name}
      placeholder="Entity"
      required
    />
  )
}