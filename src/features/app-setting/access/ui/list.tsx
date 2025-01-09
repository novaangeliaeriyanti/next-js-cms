'use client';
import React from 'react';
import router from 'next/router';
import { columnDef } from '../model/accessColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import { APPSETTING_ACCESS } from '@/shared/constants/path';
import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa';
import useAccess from '../hooks/useAccess';
import { AccessFilterFields } from '@/shared/model/app-setting/accessTypes';

export default function AppsetttingAccessList() {
  const { handleDelete} = useAccess();

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_ACCESS.UPDATE}/${row.id}`
    );
  }

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }
  return (
    <div className="mt-4">
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Access</h1>
            <p>Berikut adalah daftar access yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_ACCESS.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
      <div>
        <TableFilter
          endPoint={APP_SETTING.FETCH_ACCESS_LIST}
          columnDef={columnDef}
          filterFields={AccessFilterFields}
          onRowEdit={onRowEdit}
          onRowDelete={onRowDelete}
        />
      </div>

    </div>
  );
}
