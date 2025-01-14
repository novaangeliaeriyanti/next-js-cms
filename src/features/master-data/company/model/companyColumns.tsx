import { createColumnHelper } from '@tanstack/react-table';
import { formatDate, isEmpty } from '@/shared/hooks/useValidate';
import { CompanyTableFields } from '@/shared/model/master-data/companyTypes';

const columnHelper = createColumnHelper<CompanyTableFields>();

export const columnDef = [
  columnHelper.accessor('id', {
    id: 'action',
    enableSorting: false,
    header: 'Action',
    size: 50,
    meta: ['edit','delete'],
  }),
  columnHelper.accessor('no', {
    enableSorting: false,
    header: 'No',
  }),
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('is_vendor', {
    header: 'Allow Access Web',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('invoice_due_date', {
    header: 'Invoice Due Date',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? formatDate(new Date(info.getValue() * 1000)?.toLocaleString(), 'dd MMMM yyyy, HH:mm') : '-'}</div>
  }),
];