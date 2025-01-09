import { z } from 'zod';

export const EntitySchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	allow_access_web: z.
		boolean().default(false).optional(),
	allow_access_mobile: z.
		boolean().default(false).optional(),
	allow_access_engine: z.
		boolean().default(false).optional(),
	unique_key: z
		.string()
		.min(1, { message: 'Unique Key wajib diisi' })
});
