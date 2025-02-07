'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/featureColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FeatureFilterFields } from '@/shared/model/app-setting/featureTypes';
import useFeature from '../hooks/useFeature';
import { APPSETTING_FEATURE } from '@/shared/constants/path';

export default function FeatureList() {
  const { handleDelete, mutationDelete} = useFeature();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_FEATURE.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Feature</h1>
            <p>Berikut adalah daftar feature yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_FEATURE.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_FEATURE_LIST}
          columnDef={columnDef}
          filterFields={FeatureFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={APP_SETTING.EXPORT_PDF_FEATURE}
          endPointExcel={APP_SETTING.EXPORT_EXCEL_FEATURE}
          endPointCSV={APP_SETTING.EXPORT_CSV_FEATURE}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
