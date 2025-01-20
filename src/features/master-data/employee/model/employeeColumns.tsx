import { createColumnHelper } from '@tanstack/react-table';
import { formatDate, formatImage, isEmpty } from '@/shared/hooks/useValidate';
import { EmployeeTableFields } from '@/shared/model/master-data/employeeTypes';
import Image from 'next/image';
import { decode64 } from '@/shared/hooks/useImage';

const columnHelper = createColumnHelper<EmployeeTableFields>();

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
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('mobile_phone', {
    header: 'Mobile Phone',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('employee_photo', {
    header: 'Employee Photo',
    cell: (info) => 
      <div className='text-center'>
          <Image
            src={isEmpty(decode64(info.getValue())) ? "/person.jpg" : `/${decode64(info.getValue())}` }
            alt={decode64(info.getValue()) || 'photo'}
            width={50}
            height={50}
            className="h-full object-cover"
          />
      </div>
  }),
  columnHelper.accessor('company', {
    header: 'Company',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('division', {
    header: 'Division',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),
  columnHelper.accessor('is_active', {
    header: 'Is Active',
    cell: (info) => <div className='text-center'>{info.getValue() ? 'Yes' : 'No'}</div>
  }),
  columnHelper.accessor('join_date', {
    header: 'Join Date',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? formatDate(info.getValue()) : '-'}</div>
  }),
  columnHelper.accessor('resign_date', {
    header: 'Resign Date',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? formatDate(info.getValue()) : '-'}</div>
  }),
  columnHelper.accessor('unique_key', {
    header: 'Unique Key',
    cell: (info) => <div className={isEmpty(info.getValue()) ? 'text-center' : ''}>{!isEmpty(info.getValue()) ? info.getValue() : '-'}</div>
  }),

];