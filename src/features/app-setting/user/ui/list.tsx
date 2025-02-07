'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/userColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { UserFilterFields } from '@/shared/model/app-setting/userTypes';
import useUser from '../hooks/useUser';
import { APPSETTING_USER } from '@/shared/constants/path';

export default function RoleList() {
  const { handleDelete, mutationDelete} = useUser();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_USER.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar User</h1>
            <p>Berikut adalah daftar user yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_USER.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_USER_LIST}
          columnDef={columnDef}
          filterFields={UserFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={APP_SETTING.EXPORT_PDF_USER}
          endPointExcel={APP_SETTING.EXPORT_EXCEL_USER}
          endPointCSV={APP_SETTING.EXPORT_CSV_USER}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
