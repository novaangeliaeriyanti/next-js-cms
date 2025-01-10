import { z } from 'zod';

export const ParameterItemSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	parameter: z.object({
		parameter_id: z
		.number({invalid_type_error: "Parameter wajib diisi",
		}),
		parameter: z
		.string().min(1, { message: 'Parameter wajib diisi' }),
	}),
	is_active: z.
		boolean().default(false).optional(),
	value: z
		.string()
});
