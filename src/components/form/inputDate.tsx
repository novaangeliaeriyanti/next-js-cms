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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export interface InputDateProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
	name: string,
	dateDisabledEnd?:any,
	time?: boolean
}

export function InputDate<T,>({
	title,
	name,
	required,
	placeholder,
	dateDisabledEnd,
	time,
	...props
}: InputDateProps<T>) {

	const [openModal, setOpenModal] = React.useState(false);
	const [date, setDate] = React.useState<Date>()
	const { setValue, getValues, formState, watch } = useFormContext();
	const { errors }: any = formState;
	const { control } = useFormContext();

	const handleTimeChange = (
		type: "hour" | "minute",
		value: string
	  ) => {
		if (date) {
		  const newDate = new Date(date);
		  if (type === "hour") {
			newDate.setHours(parseInt(value));
		  } else if (type === "minute") {
			newDate.setMinutes(parseInt(value));
		  }
		  setDate(newDate);
		}
	  };	

	useEffect(() => {
		if (date) {
		  const utcDate = new Date(date).toISOString();
		  setValue(name, utcDate);
		  setOpenModal(false)
		}
	}, [date, name]);

	useEffect(() => {
	  if(!isEmpty(watch(name))){
		setDate(new Date(watch(name)))
	  }
	}, [])
	
	const formattedDate = getValues(name) ? time ? formatDate(getValues(name), "dd MMMM yyy, HH:mm") : formatDate(getValues(name)) : "";
	const hours = Array.from({ length: 24 }, (_, i) => i);

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
											value={!isEmpty(date) ? formattedDate : !isEmpty(watch(name)) ? time ? formatDate(watch(name), 'dd MMMM yyy, HH:mm') : formatDate(watch(name)) : ''}
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
											<PopoverContent className="popover-content w-140" align="start">
												<div className='flex flex-row'>
													<Calendar
														mode="single"
														selected={date}
														onSelect={setDate}
														initialFocus
														className='datepicker'
														dateDisabledEnd={dateDisabledEnd}
													/>
													{
														time && (
															<div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
															<ScrollArea className="w-64 sm:w-auto">
															<div className="flex sm:flex-col p-2">
																{hours.reverse().map((hour) => (
																<Button
																	key={hour}
																	size="icon"
																	variant={date && date.getHours() === hour ? "default" : "ghost"}
																	className="sm:w-full shrink-0 aspect-square border-none"
																	onClick={(e) => {
																		e.preventDefault()
																		handleTimeChange("hour", hour.toString())}
																	}
																>
																	{hour}
																</Button>
																))}
															</div>
															<ScrollBar orientation="horizontal" className="sm:hidden" />
															</ScrollArea>
															<ScrollArea className="w-64 sm:w-auto">
															<div className="flex sm:flex-col p-2">
																{Array.from({ length: 60 }, (_, i) => i).map((minute) => (
																<Button
																	key={minute}
																	size="icon"
																	variant={date && date.getMinutes() === minute ? "default" : "ghost"}
																	className="sm:w-full shrink-0 aspect-square border-none"
																	onClick={() => handleTimeChange("minute", minute.toString())}
																>
																	{minute.toString().padStart(2, '0')}
																</Button>
																))}
															</div>
															<ScrollBar orientation="horizontal" className="sm:hidden" />
															</ScrollArea>
														</div>
														)
													}
												</div>
											</PopoverContent>
										</Popover>
										<Button
											variant={!isEmpty(date) ? "destructive" : "secondary"}
											onClick={(e) => { 
												e.preventDefault()
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