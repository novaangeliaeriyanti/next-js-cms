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

export default function RoleList() {
  const { handleDelete, mutationDelete} = useUser();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
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
            // onClick={() => router.push(APPSETTING_CLIENT_APP_VERSION.ADD)}
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
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
