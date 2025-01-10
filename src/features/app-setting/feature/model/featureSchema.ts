import { z } from 'zod';

export const FeatureSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	parent_feature: z.object({
		parent_feature: z
		.string().min(1, { message: 'Parent Feature wajib diisi' }),
	}),
	is_active: z.
		boolean().default(false).optional(),
});
