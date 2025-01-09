import { createColumnHelper } from '@tanstack/react-table';
import { AccessTableFields } from '@/shared/model/app-setting/accessTypes';
import { isEmpty } from '@/shared/hooks/useValidate';

const columnHelper = createColumnHelper<AccessTableFields>();

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
  columnHelper.accessor('entity', {
    header: 'Entity',
    cell: (info) => <div className='text-center'>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: (info) => <div className='text-center'>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('feature', {
    header: 'Feature',
    cell: (info) => <div className='text-center'>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('allow_view', {
    header: 'Allow View',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('allow_print', {
    header: 'Allow Print',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('allow_add', {
    header: 'Allow Add',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('allow_update', {
    header: 'Allow Update',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('allow_delete', {
    header: 'Allow Delete',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  
  
];