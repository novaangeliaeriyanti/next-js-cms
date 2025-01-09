'use client';

import Table from '@/components/template/table';
import React, { useEffect } from 'react';
import { SortingState } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';
import { defaultListParams, filterParams } from '@/shared/model/defaultParams';
import useFetchList from '@/shared/hooks/useFetchList';
import { cn } from '@/shared/lib/utils';
import FilterSection from './filterSection';
import LoadingOverlay from '../ui/custom/loadingOverlay';

interface TableFilterProps<T,> {
  endPoint: string,
  columnDef: ColumnDef<T, any>[],
  filterFields: filterParams[],
  onRowClick?: (row: T) => void;
  onRowEdit?: (row: T) => void;
  onRowDelete?: (row: T) => void;
  initialPageSize?: number;
  maxHeight?: string;
}


export default function TableFilter<T,>(
  {
    endPoint,
    columnDef,
    filterFields = [],
    onRowClick,
    onRowEdit,
    onRowDelete,
    initialPageSize,
    maxHeight
  }: TableFilterProps<T>) {
  const [pagination, setPagination] = React.useState({
    page_number: 0,
    page_size: initialPageSize || 10,
  });
  type CriteriaType = {
    logical?: 'AND' | 'OR';
    conditions?: filterParams | filterParams[];
  }
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [criteria, setCriteria] = React.useState<CriteriaType>()
  const [pageParams, setPageParams] = React.useState<defaultListParams>({})
  const { data, isLoading, refetch } = useFetchList(pageParams, endPoint);
  const tableData = (data as any);

  useEffect(() => {
    setPageParams({
      ...pagination,
      sort_by: sorting[0]?.id,
      sort_direction: !sorting[0] || sorting[0]?.desc ? 'DESC' : 'ASC',
      criteria: criteria
    })
  }, [pagination, sorting, criteria])

  return (
    <section className="flex flex-col flex-1 bg-white rounded-xl shadow-xl my-4 p-3 gap-3 ">
      <FilterSection filterFields={filterFields} setCriteria={setCriteria} refresh={refetch}/>
      <div className={cn('overflow-y-auto ', maxHeight ? `min-h-[${maxHeight}] max-h-[${maxHeight}] pb-6`: 'min-h-screen max-h-screen pb-96')} >
        <Table
          data={tableData?.rows as any[] || []}
          columns={columnDef}
          page={pagination.page_number}
          pageSize={pagination.page_size}
          totalPage={tableData?.page_count || 0}
          totalData={tableData?.row_count || 0}
          loading={isLoading}
          manualPagination
          setPage={(page_number: number) => {
            setPagination({
              ...pagination,
              page_number,
            });
          }}
          setPageSize={(page_size: number) => {
            setPagination({
              ...pagination,
              page_size,
            });
          }}
          sorting={sorting}
          setSorting={setSorting}
          onRowClick={onRowClick}
          onRowEdit={onRowEdit}
          onRowDelete={onRowDelete}
        />
      </div>
    </section>
  );
}
