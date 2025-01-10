import { z } from 'zod';

export const ClientAppVersionSchema = z.object({
	client_app_type: z.object({
		client_app_type: z
			.string().min(1, { message: 'Client App Type wajib diisi' }),
	}),
	version: z
		.string()
		.min(1, { message: 'Version wajib diisi' })
		.max(8, "Panjang input tidak boleh lebih dari 8 karakter"),
	is_active: z.
		boolean().default(false).optional(),
});
