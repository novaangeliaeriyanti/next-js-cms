import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { FeatureTableFields } from '@/shared/model/app-setting/featureTypes'
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE, COMPARISON } from "@/shared/constants/dataType";

const columnHelper = createColumnHelper<FeatureTableFields>();

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
	columnHelper.accessor('path', {
		header: 'Path',
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
		label: 'Path',
		name: 'path'
	}
]
type Props = {
	name: string,
	columnChild: any
}
export default function LookupFeature({ name, columnChild }: Props) {

	return (
		<InputLookup
			endPoint={APP_SETTING.FETCH_FEATURE_LIST}
			columnDef={columnRoleDef}
			filterFields={filterFields}
			title="Feature"
			name={name}
			placeholder="Feature"
			required
			columnChild={columnChild}
		/>
	)
}