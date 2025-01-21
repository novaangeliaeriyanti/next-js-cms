'use client';
import React, { useEffect } from 'react';
import router from 'next/router';
import { columnDef } from '../model/taskScheduleColumns';
import TableFilter from '@/components/template/tableFilter';
import { APP_SETTING } from '@/shared/constants/endpoint';
import LoadingOverlay from '@/components/ui/custom/loadingOverlay';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { TaskScheduleFilterFields } from '@/shared/model/app-setting/taskScheduleTypes';
import useTaskSchedule from '../hooks/useTaskSchedule';
import { APPSETTING_TASK_SCHEDULE } from '@/shared/constants/path';

export default function TaskScheduleList() {
  const { handleDelete, mutationDelete} = useTaskSchedule();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
  }

  const onRowEdit = (row: any) => {
    router.push(
      `${APPSETTING_TASK_SCHEDULE.UPDATE}/${row.id}`
    );
  }
  
  return (
    <div className="mt-4">
      <div>
      <section >
        <div className="flex items-center justify-between">
          <div>
            <h1>Daftar Task Schedule</h1>
            <p>Berikut adalah task schedule yang terdaftar di sistem</p>
          </div>
          <Button size="lg" className="flex gap-3"
            onClick={() => router.push(APPSETTING_TASK_SCHEDULE.ADD)}
          >
            <FaPlus />
            Tambah
          </Button>
        </div>
      </section>
        <TableFilter
          endPoint={APP_SETTING.FETCH_TASK_SCHEDULE_LIST}
          columnDef={columnDef}
          filterFields={TaskScheduleFilterFields}
          onRowDelete={onRowDelete}
          onRowEdit={onRowEdit}
          endPointPDF={APP_SETTING.EXPORT_PDF_TASK_SCHEDULE}
          endPointExcel={APP_SETTING.EXPORT_EXCEL_TASK_SCHEDULE}
          endPointCSV={APP_SETTING.EXPORT_CSV_TASK_SCHEDULE}
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
