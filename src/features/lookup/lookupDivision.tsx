import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING, MASTER_DATA } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { formatDate, isEmpty } from "@/shared/hooks/useValidate";
import { DivisionTableFields } from "@/shared/model/master-data/employeeTypes";

const columnHelper = createColumnHelper<DivisionTableFields>();

const columnDivisionDef = [
  columnHelper.accessor('no', {
    enableSorting: false,
    header: 'No',
  }),
  columnHelper.accessor('division_id', {
    header: 'ID',
  }),
  columnHelper.accessor('division', {
    header: 'Divison',
  }),
];

const filterFields: filterParams[] = [
  {
    label: 'ID',
    name: 'division_id',
    column_data_type: FILTER_DATA_TYPE.NUMERIC,
    comparison: 'EQUAL'
  },
	{
		label: 'Division',
		name: 'division'
	},
]

type Props = {
  name: string,
}

export default function LookupDivision({ name }:Props) {
  return (
    <InputLookup
      endPoint={MASTER_DATA.FETCH_DIVISION_LIST}
      columnDef={columnDivisionDef}
      filterFields={filterFields}
      title="Division"
      name={name}
      placeholder="Division"
      required
    />
  )
}