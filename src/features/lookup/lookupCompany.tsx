import { InputLookup } from "@/components/form/inputLookUp"
import { APP_SETTING, MASTER_DATA } from "@/shared/constants/endpoint"
import { createColumnHelper } from "@tanstack/react-table";
import { filterParams } from "@/shared/model/defaultParams";
import { FILTER_DATA_TYPE } from "@/shared/constants/dataType";
import { formatDate, isEmpty } from "@/shared/hooks/useValidate";
import { CompanyTableFields } from "@/shared/model/master-data/companyTypes";

const columnHelper = createColumnHelper<CompanyTableFields>();

const columnCompanyDef = [
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
  columnHelper.accessor('is_vendor', {
    header: 'Is Vendor',
  }),
  columnHelper.accessor('invoice_due_date', {
    header: 'Invoice Due Date',
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
		label: 'Is Vendor',
		name: 'is_vendor'
	},
  {
		label: 'Invoice Due Date',
		name: 'invoice_due_date'
	},
]

type Props = {
  name: string,
}

export default function LookupCompany({ name }:Props) {
  return (
    <InputLookup
      endPoint={MASTER_DATA.FETCH_COMPANY_LIST}
      columnDef={columnCompanyDef}
      filterFields={filterFields}
      title="Company"
      name={name}
      placeholder="Company"
      required
    />
  )
}