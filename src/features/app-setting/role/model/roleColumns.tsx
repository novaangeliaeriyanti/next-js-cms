import { isEmpty } from '@/shared/hooks/useValidate';
import { RoleTableFields } from '@/shared/model/app-setting/roleTypes';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<RoleTableFields>();

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
  columnHelper.accessor('is_active', {
    header: 'Is Active',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('is_administrator', {
    header: 'Is Administrator',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
];