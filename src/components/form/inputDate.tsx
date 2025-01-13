import TableFilter from '@/components/template/tableFilter';
import { Button } from '@/components/ui/button';
import React, { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/shared/lib/utils";
import { FormControl, FormField, FormItem } from "./form";
import { CalendarIcon, X } from 'lucide-react';
import { format, parseISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { formatDate, isEmpty } from '@/shared/hooks/useValidate';

export interface InputDateProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
	name: string,
	dateDisabledEnd?:any
}

export function InputDate<T,>({
	title,
	name,
	required,
	placeholder,
	dateDisabledEnd,
	...props
}: InputDateProps<T>) {

	const [openModal, setOpenModal] = React.useState(false);
	const [date, setDate] = React.useState<Date>()
	const { setValue, getValues, formState } = useFormContext();
	const { errors }: any = formState;
	const { control } = useFormContext();

	useEffect(() => {
		if (date) {
		  const utcDate = new Date(date).toISOString();
		  setValue(name, utcDate);
		  setOpenModal(false)
		}
	}, [date, setValue, name]);
	
	const formattedDate = getValues(name) ? formatDate(getValues(name)) : "";

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
											placeholder="Pilih Tanggal"
											readOnly
											type="text"
											value={!isEmpty(date) ? formattedDate : ''}
											className={cn(
												errors[name as string]?.id?.message &&
													'border border-destructive text-destructive placeholder:text-destructive'
											)}
											onClick={() => setOpenModal(true)}
											onChange={(e) => { }}
										/>
										<Popover open={openModal}>
											<PopoverTrigger asChild>
												<Button
												className={cn(
													!date && "text-muted-foreground"
												)}
												onClick={() => setOpenModal(true)}
												>
												<CalendarIcon stroke='white' />
												</Button>
											</PopoverTrigger>
											<PopoverContent className="popover-content" align="start">
												<Calendar
												mode="single"
												selected={date}
												onSelect={setDate}
												initialFocus
												className='datepicker'
												dateDisabledEnd={dateDisabledEnd}
												/>
											</PopoverContent>
										</Popover>
										<Button
											variant={!isEmpty(date) ? "destructive" : "secondary"}
											onClick={() => { 
												if(!isEmpty(date)){
													setDate(undefined);
													setValue(name, '');  
												}
											}}
											>
												<X stroke='white' />
										</Button>
									</div>
									{errors[name as string] && (
										<p className="text-red-500">{`${errors[name as string]?.id?.message}`}</p>
									)}
								</div>
							</FormControl>
						</FormItem>
					)} />

			</div>

		</div>
	)
}