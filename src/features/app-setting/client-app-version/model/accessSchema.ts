import { z } from 'zod';

export const ClientAppVersionSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Name wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	role: z.object({
		id: z
			.number({invalid_type_error: "Role wajib diisi",
			}),
		name: z
			.string().min(1, { message: 'Role wajib diisi' }),
	}),
	entity: z.object({
		id: z
			.number({invalid_type_error: "Entity wajib diisi",
			}),
		name: z.string().min(1, { message: 'Entity wajib diisi' }),
	}),
	feature: z.object({
		id: z
			.number({invalid_type_error: "Feature wajib diisi",
			}),
		name: z.string().min(1, { message: 'Feature wajib diisi' }),
	}),
	allow_view: z.
		boolean().default(false).optional(),
	allow_update: z.
		boolean().default(false).optional(),
	allow_print: z.
		boolean().default(false).optional(),
	allow_add: z.
		boolean().default(false).optional(),
	allow_delete: z.
		boolean().default(false).optional(),
});
