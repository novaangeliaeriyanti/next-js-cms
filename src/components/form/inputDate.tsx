import TableFilter from '@/components/template/tableFilter';
import { Button } from '@/components/ui/button';
import React, { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/shared/lib/utils";
import { FormControl, FormField, FormItem } from "./form";
import { CalendarDays } from 'lucide-react';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
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
}

export function InputDate<T,>({
	title,
	name,
	required,
	placeholder,
	...props
}: InputDateProps<T>) {

	const [openModal, setOpenModal] = React.useState(false);
	const [date, setDate] = React.useState<Date>()
	const { setValue, getValues, formState } = useFormContext();
	const { errors }: any = formState;
	const { control } = useFormContext();

	useEffect(() => {
		setOpenModal(false)
	}, [date])
	
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
											value={!isEmpty(date) ? formatDate({date}) : ''}
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
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
												mode="single"
												selected={date}
												onSelect={setDate}
												initialFocus
												/>
											</PopoverContent>
											</Popover>
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