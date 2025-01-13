import TableFilter from '@/components/template/tableFilter';
import { Button } from '@/components/ui/button';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {filterParams } from "@/shared/model/defaultParams";
import { ColumnDef } from "@tanstack/react-table";
import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/shared/lib/utils";
import { FormControl, FormField, FormItem } from "./form";
import { isEmpty } from '@/shared/hooks/useValidate';

export interface InputLookupProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
	endPoint: string;
	columnDef: ColumnDef<T, any>[]
	filterFields: filterParams[],
	onSelect?: (row: any) => void,
	columnChild?: any,
}

export function InputLookup<T,>({
	endPoint,
	columnDef,
	filterFields,
	name,
	onSelect,
	title,
	required,
	placeholder,
	type,
	columnChild,
	...props
}: InputLookupProps<T>) {

	const [openModal, setOpenModal] = React.useState(false);
	const [selectedRow, setSelectedRow] = React.useState<T>();
	const { setValue, getValues, formState } = useFormContext();
	const { errors }: any = formState;
	const { control } = useFormContext();
	const handleSelect = () => {
		if (selectedRow) {
			onSelect && onSelect(selectedRow)
			setValue(name as string, selectedRow)
			errors[name as string] = null;
		}
		setOpenModal(false)
	}
	return (
		<div className="flex flex-row items-end gap-1">
			<div
				className={cn(
					'flex flex-col gap-1 w-full'
				)}
			>
				{title &&
					<label htmlFor={name}>
						{title} {required && <span className="text-red-500">*</span>}
					</label>
				}
				<FormField
					control={control}
					name={name as string}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className="flex flex-col gap-1">
									<div className="flex flex-row items-center gap-1">
										<Input
											id={name}
											placeholder={placeholder}
											readOnly
											type="text"
											value={getValues(name as string)?.[name as string] || getValues(name as string)?.name || ''}
											className={cn(
												errors[name as string]?.id?.message &&
													'border border-destructive text-destructive placeholder:text-destructive'
											)}
											onClick={() => setOpenModal(true)}
											onChange={(e) => { }}
										/>
										<Dialog open={openModal} onOpenChange={setOpenModal} >
											<DialogTrigger asChild>
												<Button >...</Button>
											</DialogTrigger>
											<DialogContent className="bg-white w-3/4 gap-0 ">
												<DialogHeader className="border-b-2 pb-4">
													<DialogTitle>{`Pilih ${title}`}</DialogTitle>
													<DialogDescription></DialogDescription>

												</DialogHeader>
												<div className="">
													<TableFilter
														endPoint={endPoint}
														columnDef={columnDef}
														filterFields={filterFields}
														initialPageSize={5}
														maxHeight="400px"
														onRowClick={setSelectedRow}
													/>
												</div>
												<div className="w-full flex flex-row gap-2 justify-end">
													<Button size="lg"
														className="flex gap-3"
														disabled={!selectedRow}
														onClick={handleSelect} >
														Pilih
													</Button>
													<Button size="lg"
														className="flex gap-3"
														variant="ghost"
														onClick={() => setOpenModal(false)}>
														Batal
													</Button>
												</div>
											</DialogContent>
										</Dialog>
									</div>
									{errors[name as string] && (
										<p className="text-red-500">{`${errors[name as string]?.id?.message}`}</p>
									)}
									{
										(columnChild?.length > 0 && !isEmpty(getValues(name as string)?.[name as string])) && (
											<div className='flex flex-col gap-1'>
												{
													columnChild?.map((item: string) => (
														<Input
															id={item}
															readOnly
															type="text"
															value={getValues(name as string)?.[item] || ''}
														/>
													))
												}
											</div>
											)
									}
								</div>
							</FormControl>
						</FormItem>
					)} />

			</div>

		</div>
	)
}