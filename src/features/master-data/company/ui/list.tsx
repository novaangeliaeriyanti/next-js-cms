'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/companyColumns';
import TableFilter from '@/components/template/tableFilter';
import { MASTER_DATA } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import useCompany from '../hooks/useCompany';
import { MASTERDATA_COMPANY } from '@/shared/constants/path';
import { CompanyFilterFields } from '@/shared/model/master-data/companyTypes';

export default function CompanyList() {
  const { handleDelete, mutationDelete} = useCompany();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${MASTERDATA_COMPANY.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Company</h1>
            <p>Berikut adalah daftar company yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(MASTERDATA_COMPANY.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={MASTER_DATA.FETCH_COMPANY_LIST}
          columnDef={columnDef}
          filterFields={CompanyFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={MASTER_DATA.EXPORT_PDF_COMPANY}
          endPointExcel={MASTER_DATA.EXPORT_EXCEL_COMPANY}
          endPointCSV={MASTER_DATA.EXPORT_CSV_COMPANY}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
