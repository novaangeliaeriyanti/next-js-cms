import { z } from 'zod';

export const ClientAppVersionSchema = z.object({
	client_app_type: z
		.string()
		.min(1, { message: 'Client App Type wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	version: z
		.string()
		.min(1, { message: 'Version wajib diisi' })
		.max(8, "Panjang input tidak boleh lebih dari 8 karakter"),
	is_active: z.
		boolean().default(false).optional(),
});
