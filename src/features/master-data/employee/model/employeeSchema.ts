import { z } from 'zod';

export const EmployeeSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	email: z
		.string()
		.email({ message: "Email is invalid" })
		.min(1, { message: 'Email wajib diisi' }),
	mobile_phone: z
		.string(),	
	employee_photo: z
		.string(),
	company: z
		.string(),
	division: z
		.string(),
	is_active: z.
		boolean().default(false).optional(),
	join_date: z
		.string(),
	resign_date: z
		.string(),
	unique_key: z
		.string()
});
