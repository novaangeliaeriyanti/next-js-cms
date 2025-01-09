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

export default function TaskScheduleList() {
  const { handleDelete, mutationDelete} = useTaskSchedule();

  const onRowDelete = (row: any) => {
    handleDelete({ id: row.id })
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
            // onClick={() => router.push(APPSETTING_CLIENT_APP_VERSION.ADD)}
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
        />
      </div>
      <LoadingOverlay isOpen={mutationDelete?.isPending}/>
    </div>
  );
}
