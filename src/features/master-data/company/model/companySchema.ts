import { z } from 'zod';

export const CompanySchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Nama wajib diisi' })
		.max(255, { message: 'Maksimal 255 karakter' }),
	is_vendor: z.
		boolean().default(false).optional(),
	invoice_due_date: z
		.string()
		// .transform((val) => parseInt(val))
});
