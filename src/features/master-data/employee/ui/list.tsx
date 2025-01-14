'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/employeeColumns';
import TableFilter from '@/components/template/tableFilter';
import { MASTER_DATA } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useEmployee from '../hooks/useEmployee';
import { MASTERDATA_EMPLOYEE } from '@/shared/constants/path';
import { EmployeeFilterFields } from '@/shared/model/master-data/employeeTypes';

export default function EmployeeList() {
  const { handleDelete, mutationDelete} = useEmployee();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${MASTERDATA_EMPLOYEE.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Employee</h1>
            <p>Berikut adalah daftar employee yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(MASTERDATA_EMPLOYEE.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={MASTER_DATA.FETCH_EMPLOYEE_LIST}
          columnDef={columnDef}
          filterFields={EmployeeFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
