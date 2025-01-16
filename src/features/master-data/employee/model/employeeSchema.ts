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
		.union([z.string(),z.instanceof(File)])
		.optional(),		
	company: z.object({
		id: z
		.number({invalid_type_error: "Company wajib diisi",
		}),
		name: z
		.string().min(1, { message: 'Company wajib diisi' }),
	}),
	division: z
		.object({
		division_id: z
		.number({invalid_type_error: "Division wajib diisi",
		}),
		division: z
		.string().min(1, { message: 'Division wajib diisi' }),
	}),
	is_active: z.
		boolean().default(false).optional(),
	join_date: z
		.string(),
	resign_date: z
		.union([z.null(), z.string()]),
	unique_key: z
		.string()
});
