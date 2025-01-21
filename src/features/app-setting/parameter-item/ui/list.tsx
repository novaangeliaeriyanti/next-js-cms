'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/parameterItemColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useParameterItem from '../hooks/useParameterItem';
import { APPSETTING_PARAMETER_ITEM } from '@/shared/constants/path';
import { ParameterItemFilterFields } from '@/shared/model/app-setting/parameterItemTypes';

export default function ParameterList() {
  const { handleDelete, mutationDelete} = useParameterItem();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_PARAMETER_ITEM.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Parameter Item</h1>
            <p>Berikut adalah daftar parameter item yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_PARAMETER_ITEM.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_PARAMETER_ITEM_LIST}
          columnDef={columnDef}
          filterFields={ParameterItemFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={APP_SETTING.EXPORT_PDF_PARAMETER_ITEM}
          endPointExcel={APP_SETTING.EXPORT_EXCEL_PARAMETER_ITEM}
          endPointCSV={APP_SETTING.EXPORT_CSV_PARAMETER_ITEM}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
