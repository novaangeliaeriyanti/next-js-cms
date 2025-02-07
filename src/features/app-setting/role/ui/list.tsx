'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/roleColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useRole from '../hooks/useRole';
import { RoleFilterFields } from '@/shared/model/app-setting/roleTypes';
import { APPSETTING_ROLE } from '@/shared/constants/path';

export default function RoleList() {
  const { handleDelete, mutationDelete} = useRole();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_ROLE.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Role</h1>
            <p>Berikut adalah daftar role yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_ROLE.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_ROLE_LIST}
          columnDef={columnDef}
          filterFields={RoleFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={APP_SETTING.EXPORT_PDF_ROLE}
          endPointExcel={APP_SETTING.EXPORT_EXCEL_ROLE}
          endPointCSV={APP_SETTING.EXPORT_CSV_ROLE}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
