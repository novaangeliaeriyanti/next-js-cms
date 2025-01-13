import { z } from 'zod';

export const ParameterSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	description: z
		.string(),
	is_active: z.
		boolean().default(false).optional(),
});
