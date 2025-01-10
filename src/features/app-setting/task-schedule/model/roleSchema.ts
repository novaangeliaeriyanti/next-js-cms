import { z } from 'zod';

export const TaskScheduleSchema = z.object({
	requestor_name: z
		.string()
		.min(1, { message: 'Requestor Name wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	requestor_email: z
		.string()
		.email({ message: "Requestor Email is invalid" })
		.min(1, { message: 'Requestor Email wajib diisi' }),
	service_name: z
		.string()
		.min(1, { message: 'Service Name wajib diisi' }),
	process_name: z
		.string()
		.min(1, { message: 'Process Name wajib diisi' }),
	internal_data_source: z
		.string(),
	register_date: z
		.string(),
	execute_date: z
		.string(),
	finish_date: z
		.string(),
	result: z
		.string(),
});
