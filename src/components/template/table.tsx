import { cn } from '@/shared/lib/utils';
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Spinner } from '../ui/spinner';
import { MoveDown, MoveUp, MoveVertical } from "lucide-react"
import { Button } from '../ui/button';
import { RiDeleteBin6Fill, RiEdit2Fill } from 'react-icons/ri';
import { DeleteDialog } from '../ui/custom/deleteDialog';

interface TableTypeProps<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
  loading?: boolean;
  manualPagination?: boolean;
  noData?: React.ReactNode | string;
  onRowClick?: (row: T) => void;
  setPage?: (page: number) => void;
  page?: number;
  pageSize?: number;
  pageSizeList?: number[];
  setPageSize?: (pageSize: number) => void;
  totalData?: number;
  totalPage?: number;
  sorting?: SortingState;
  setSorting?: (column: any) => void;
  onRowEdit?: (row: any) => void;
  onRowDelete?: (row: any) => void;
}



const Table = <T,>({
  data = [],
  page = 0,
  pageSize = 10,
  pageSizeList = [5, 10, 20, 50, 100],
  totalPage = 20,
  columns,
  loading = false,
  manualPagination = false,
  noData = 'No Data',
  setPage,
  totalData = 0,
  setPageSize,
  onRowClick,
  sorting,
  setSorting,
  onRowEdit,
  onRowDelete,
  ...props
}: TableTypeProps<T>) => {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: manualPagination,
    state: {
      pagination: {
        pageIndex: page,
        pageSize: pageSize,
      },
      sorting,
    },
    initialState: {
      pagination: {
        pageIndex: page,
        pageSize: pageSize,
      }
    },
    onSortingChange: setSorting
  });

  const columnAction = (cell: any) => {
    const buttons = cell.column.columnDef.meta;
    return (
      <div className='flex flex-row gap-2'>
        {buttons.map((button: string) => {
          if (button === 'edit')
            return (
              <Button
                key={`button-${button}`}
                variant="ghost"
                size="lg-action"
                onClick={() => {
                  onRowEdit && onRowEdit(cell.row.original)
                }}
              >
                <RiEdit2Fill />
              </Button>
            )

          if (button === 'delete')
            return (
              <Button
                key={`button-${button}`}
                variant="ghost"
                size="lg-action"
                onClick={() => {
                  setRowToDelete(cell.row.original)
                }}
              >
                <RiDeleteBin6Fill />
              </Button>
            )
        })}
      </div>
    )
  }

  const [selectedRow, setSelectedRow] = useState(null);
  const [rowToDelete, setRowToDelete] = useState(null);

  const pageInfo = () => {
    const startIndex = (page + 1) * pageSize - (pageSize - 1);
    let endIndex = (page + 1) * pageSize;
    if (endIndex > totalData) endIndex = totalData;
    return `${startIndex}-${endIndex} of ${totalData} items`;
  }

  useEffect(() => {
    setSelectedRow(null)
  }, [data])

  const onConfirmDelete = (isConfirmed: boolean) => {
    if (isConfirmed) {
      onRowDelete && onRowDelete(rowToDelete);
    }
    setRowToDelete(null)
  }
  return (
    <div className="flex flex-col w-full h-full justify-between gap-y-2">
      <table className="w-full ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx, arr) => (
                <th
                  key={`th-${header.id}`}
                  className={cn('bg-thtablehead py-3', {
                    'rounded-l-lg': idx === 0,
                    'rounded-r-lg': idx === arr.length - 1,
                  })}
                >
                  <div
                    className={cn('flex justify-center border-thtableborder ', {
                      'border-l': idx !== 0,
                    })}
                  >
                    {header.isPlaceholder
                      ? null
                      :
                      (
                        <div
                          className={
                            header.column.getCanSort()
                              ? 'cursor-pointer select-none flex flex-row can-sort items-center justify-center '
                              : ''
                          }
                          onClick={header.column.getToggleSortingHandler()}
                          title={
                            header.column.getCanSort()
                              ? header.column.getNextSortingOrder() === 'asc'
                                ? 'Sort ascending'
                                : header.column.getNextSortingOrder() === 'desc'
                                  ? 'Sort descending'
                                  : 'Clear sort'
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                          header.column.getCanSort() ? (
                            {
                              asc: <MoveUp size={13} className="text-2xl text-thgray"/>,
                              desc: <MoveDown size={13} className="text-2xl text-thgray"/>,
                              default: <MoveVertical size={13} className="text-2xl text-thgray" />
                            }[header.column.getIsSorted() as string] ?? <MoveVertical size={13} className="text-2xl text-thgray"/>
                          ) : null
                        }
                        </div>
                      )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className="px-5 py-16"
              >
                <Spinner />
              </td>
            </tr>
          )}
          {!loading && data.length === 0 && (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className="p-5 text-center"
              >
                {noData}
              </td>
            </tr>
          )}
          {!loading &&
            data.length > 0 &&
            table.getRowModel().rows.map((row: any, idx) => (
              <tr
                key={`tr-${row.id}`}
                className={cn({
                  'border-t': idx !== 0,
                  'cursor-pointer hover:bg-zinc-100': !!onRowClick && row.original !== selectedRow,
                  'bg-zinc-300': row.original === selectedRow,

                })}
                onClick={() => {
                  setSelectedRow(row.original)
                  if (onRowClick) {
                    onRowClick(row.original);
                  }
                }}
              >
                {row.getVisibleCells().map((cell: any) => (
                  <td key={`td-${cell.id}`} className="py-4 px-2">
                    {cell.column.columnDef.id === 'action' ?
                      columnAction(cell)
                      :
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    }
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={`footer-th-${header.id}`}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="mr-5">
            {pageInfo()}
          </p>
          <p>Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(pageSize) => {
              if (!!setPageSize) {
                setPageSize(Number(pageSize));
              }
            }}
          >
            <SelectTrigger className="w-max">
              <SelectValue defaultValue={'10'} />
            </SelectTrigger>
            <SelectContent>
              {pageSizeList.map((pageSize) => (
                <SelectItem key={`ps-${pageSize}`} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <ReactPaginate
            nextLabel={<FaChevronRight />}
            previousLabel={<FaChevronLeft />}
            onPageChange={({ selected: page }) => {
              setPage && setPage(page);
            }}
            pageCount={totalPage}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            disabledLinkClassName="pagination-disabled"
            disabledClassName="pagination-disabled-container"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="nextprev-item"
            previousLinkClassName="page-link"
            nextClassName="nextprev-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="flex pl-0 list-style-none"
            activeClassName="pagination-active"
          />
        </div>
      </div>

      <DeleteDialog
        open={!!rowToDelete}
        onConfirm={onConfirmDelete}
       />
    </div>
  );
};

export default Table;
