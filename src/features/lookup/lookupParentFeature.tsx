import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE, COMPARISON } from "@/shared/constants/dataType";
import { ParentFeatureTableFields } from "@/shared/model/app-setting/parentFeatureTypes";

const columnHelper = createColumnHelper<ParentFeatureTableFields>();

const columnParentFeatureDef = [
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
  columnHelper.accessor('parent_feature', {
    header: 'Parent Feature',
  }),
  columnHelper.accessor('path', {
    header: 'Path',
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
    label: 'Name',
    name: 'name'
  },
  {
    label: 'Parent Feature',
    name: 'parent_feature'
  },
  {
    label: 'Path',
    name: 'path'
  }
]


type Props = {
  name: string,
}

export default function LookupParentFeature({ name }:Props) {
  return (
    <InputLookup
      endPoint={APP_SETTING.FETCH_PARENT_FEATURE}
      columnDef={columnParentFeatureDef}
      filterFields={filterFields}
      title="Parent Feature"
      name={name}
      placeholder="Name"
      columnChild={["name", "path"]}
    />
  )
}