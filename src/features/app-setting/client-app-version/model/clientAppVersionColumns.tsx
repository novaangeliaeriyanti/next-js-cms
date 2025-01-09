import { createColumnHelper } from '@tanstack/react-table';
import { ClientAppVersionTableFields } from '@/shared/model/app-setting/clientAppVersionTypesTypes';
import { isEmpty } from '@/shared/hooks/useValidate';

const columnHelper = createColumnHelper<ClientAppVersionTableFields>();

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
  columnHelper.accessor('client_app_type', {
    header: 'Client App Type',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('version', {
    header: 'Version',
    cell: (info) => <div className='text-center'>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('is_active', {
    header: 'Is Active',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
];