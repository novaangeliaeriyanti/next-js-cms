import { z } from 'zod';

export const UserSchema = z.object({
	name: z.object({
		id: z
		.number({invalid_type_error: "Name wajib diisi",
		}),
		name: z
		.string().min(1, { message: 'Name wajib diisi' }),
	}),
	mobile_phone: z
		.string(),
	email: z
		.string()
		.email({ message: "Email is invalid" })
		.min(1, { message: 'Email wajib diisi' }),
	role: z.object({
			id: z
			.number({invalid_type_error: "Role wajib diisi",
			}),
			name: z
			.string().min(1, { message: 'Role wajib diisi' }),
		}),
	password: z
		.string()
		.min(1, { message: 'Password wajib diisi' }),
	salt: z
		.string()
		.min(1, { message: 'Salt wajib diisi' }),
	device_info: z
		.string(),
	device_location: z
		.string(),
	ip_address: z
		.string(),
	longitude: z
		.string()
		.min(-180)
		.max(180)
		.transform((val) => parseFloat(val)),
	latitude: z
		.string()
		.min(-90)
		.max(90)
		.transform((val) => parseFloat(val)),
	is_active: z.
		boolean().default(false).optional(),
	is_lock: z.
		boolean().default(false).optional(),
	created_date: z
		.string(),
	last_login: z
		.string(),
	access_token: z
		.string(),
	reset_token: z
		.string(),
	fcm_token: z
		.string(),
	otp: z
		.string(),
	login_attempt: z
		.string()
		.min(0)
		.transform((val) => parseInt(val)),
	reset_password_attempt: z
		.string()
		.min(0)
		.transform((val) => parseInt(val)),
});
