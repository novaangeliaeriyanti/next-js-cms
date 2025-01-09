'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/clientAppVersionColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import { APPSETTING_CLIENT_APP_VERSION } from '@/shared/constants/path';
import useClientAppVersion from '../hooks/useClientAppVersion';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { ClientAppVersionFilterFields } from '@/shared/model/app-setting/clientAppVersionTypes';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function ClientAppVersionList() {
  const { handleDelete, mutationDelete} = useClientAppVersion();

  // const onRowEdit = (row: any) => {
  //   router.push(
  //     `${APPSETTING_ACCESS.UPDATE}/${row.id}`
  //   );
  // }

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Client App Version List</h1>
            <p>Berikut adalah daftar client app version yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_CLIENT_APP_VERSION.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_CLIENT_APP_VERSION_LIST}
          columnDef={columnDef}
          filterFields={ClientAppVersionFilterFields}
          // onRowEdit={onRowEdit}
          onRowDelete={onRowDelete}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
