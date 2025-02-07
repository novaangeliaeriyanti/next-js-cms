'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/entityColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { EntityFilterFields } from '@/shared/model/app-setting/entityTypes';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useEntity from '../hooks/useEntity';
import { APPSETTING_ENTITY } from '@/shared/constants/path';

export default function EntityList() {
  const { handleDelete, mutationDelete} = useEntity();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_ENTITY.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Entity</h1>
            <p>Berikut adalah daftar entity yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_ENTITY.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_ENTITY_LIST}
          columnDef={columnDef}
          filterFields={EntityFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={APP_SETTING.EXPORT_PDF_ENTITY}
          endPointExcel={APP_SETTING.EXPORT_EXCEL_ENTITY}
          endPointCSV={APP_SETTING.EXPORT_CSV_ENTITY}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
