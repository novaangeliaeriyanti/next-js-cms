import { z } from 'zod';

export const RoleSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	is_active: z.
		boolean().default(false).optional(),
	is_administrator: z.
		boolean().default(false).optional(),
});
