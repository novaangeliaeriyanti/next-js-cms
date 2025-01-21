import React, { useState, useEffect } from 'react';


import { FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input';
import { filterParams } from '@/shared/model/defaultParams';
import { File, FileX, Paperclip, RefreshCw } from 'lucide-react';

type FilterLogicalType = 'OR' | 'AND';
type CriteriaType = {
  logical?: 'AND' | 'OR';
  conditions?: filterParams | filterParams[];
}

interface FilterSectionProps{
  filterFields: filterParams[],
  setCriteria: (criteria: CriteriaType) => void,
  refresh:() => void,
  onExportPdf:() => void,
  onExportExcel: () => void,
  onExportCsv: () => void
}

export default function FilterSection<T,>({
  filterFields,
  setCriteria,
  refresh,
  onExportPdf,
  onExportExcel,
  onExportCsv
}: FilterSectionProps) {

  const [searchKey, setSearchKey] = useState<string | undefined>(undefined)
  const [searchValue, setSearchValue] = useState<string | undefined>('')
  const [filter, setFilter] = React.useState<filterParams[]>([])
  const [filterLogical, setFilterLogical] = React.useState<FilterLogicalType>('OR')


  useEffect(() => {
        setCriteria({
          logical: filterLogical,
          conditions: filter
        })
    }, [filter, filterLogical])

  const handleClearSearch = () => {
    setSearchValue('')
    setFilter([]);
    refresh()
  }

  const removeFilterItem = (indexToRemove: number) => {
    setFilter((prev) => prev.filter((_, index) => index !== indexToRemove));
  }
  const onSearch = () => {
    if (!searchKey || !searchValue) return;
    const filterSel = filterFields.find(item => item.name === searchKey)
    setFilter([...filter, { ...filterSel, value: searchValue }])
  };

  return (
    <div >

      <div className='flex flex-col gap-3 border p-2 rounded-xl bg-slate-50 '>
        <div className='flex md:flex-row gap-x-20 w-full justify-between items-center'>
          <div className='flex flex-row gap-3'>
            <Label>Logical:</Label>
            <RadioGroup defaultValue="OR" className='flex flex-row' onValueChange={(e) => setFilterLogical(e as FilterLogicalType)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="OR" id="OR" />
                <Label htmlFor="OR">OR</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="AND" id="AND" />
                <Label htmlFor="AND">AND</Label>
              </div>
            </RadioGroup>
          </div>

        </div>
        <div>
          <div className='flex flex-row w-full gap-3 items-center'>
            <div className='w-full flex flex-row gap-3'>
              <div className="flex gap-3 w-full">
                <div className='w-60'>
                  <Select
                    onValueChange={(e) => { console.log('e', e); setSearchKey(e) }}
                    value={searchKey}
                  >
                    <SelectTrigger >
                      <SelectValue placeholder={`--Select Criteria--`} />
                    </SelectTrigger>
                    <SelectContent>
                      {filterFields.map((field) => (
                        <SelectItem key={`opton-${field.name}`} value={field.name as string}>{field.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative w-full ">
                  <Input
                    placeholder='type to search'
                    className="px-10 py-2 "
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyUp={(e) => { console.log(searchKey, searchValue); e.key === 'Enter' && onSearch() }}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="icon-small text-thblue" />
                  </div>
                </div>
              </div>
              <div className='flex gap-3'>
                <Button type='button' className='flex gap-1' onClick={onSearch} >
                  <FaSearch size={15} />
                  Search
                </Button>
                <Button type='button'
                  className='flex gap-1'
                  onClick={handleClearSearch}
                >
                  <RefreshCw size={15}/>
                  Refresh
                </Button>
              </div>
            </div>
            <div className='flex w-1/3 gap-3 flex-row justify-end'>
                <Button
                  className='flex p-2 items-center justify-center rounded-md border bg-thgray text-white hover:bg-thgray/90' 
                  onClick={onExportCsv} 
                >
                  <Paperclip size={14}/>
                  <span>CSV</span>
                </Button>
                <Button type='button'
                  className='p-2 flex items-center justify-center rounded-md border bg-thgray text-white hover:bg-thgray/90' 
                  onClick={onExportExcel}
                >
                  <FileX width={15}/>
                  <span>Excel</span>
                </Button>
                <Button type='button'
                  className='flex p-2 items-center justify-center rounded-md border bg-thgray text-white hover:bg-thgray/90' 
                  onClick={onExportPdf}
                >
                  <File width={14}/>
                  <span>PDF</span>
                </Button>
            </div>

          </div>
          {filter.length > 0 &&
            <div className='flex gap-y-2 flex-col py-2 pr-2'>
              {filter.map((item, index) => (
                <div key={`item-filter-${index}`} className='flex w-1/2 justify-between'>
                  <span>
                    {index === 0 ? 'Search' : filterLogical}{' '}
                    <span className='text-blue-800 font-bold'>{item.label}</span> {' '}
                    {item.comparison} {' '}
                    <span className='text-blue-800 font-bold'>{item.value}</span>
                  </span>
                  <span
                    className='font-bold text-red-600 hover:text-red-800 cursor-pointer'
                    onClick={() => removeFilterItem(index)}
                  >
                    Remove
                  </span>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}