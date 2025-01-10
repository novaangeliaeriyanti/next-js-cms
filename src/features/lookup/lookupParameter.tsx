import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE, COMPARISON } from "@/shared/constants/dataType";
import { ParameterItemParameterTableFields } from "@/shared/model/app-setting/parameterItemTypes";

const columnHelper = createColumnHelper<ParameterItemParameterTableFields>();

const columnRoleDef = [
	columnHelper.accessor('no', {
		enableSorting: false,
		header: 'No',
	}),
	columnHelper.accessor('id', {
		header: 'ID',
	}),
	columnHelper.accessor('parameter', {
		header: 'Name',
	}),
	columnHelper.accessor('is_active', {
		header: 'Is Active',
	}),
	columnHelper.accessor('description', {
		header: 'Description',
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
    name: 'parameter'
  },
  {
	label: 'Is Active',
	name: 'is_active'
  },
  {
	label: 'Description',
	name: 'description'
  }
]
type Props = {
	name: string,
	columnChild: any
}
export default function LookupParameter({ name, columnChild }: Props) {

	return (
		<InputLookup
			endPoint={APP_SETTING.FETCH_PARAMETER}
			columnDef={columnRoleDef}
			filterFields={filterFields}
			title="Parameter"
			name={name}
			placeholder="Parameter"
			required
			columnChild={columnChild}
		/>
	)
}