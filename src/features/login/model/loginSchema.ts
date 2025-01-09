import { z } from 'zod';


export const LoginSchema = z.object({
  user_name: z
        .string()
        .min(1, { message: 'Email wajib diisi' })
        .max(255, { message: 'Maksimal 255 karakter' })
        .email('Email tidak valid'),
    password: z
        .string()
        .min(1, { message: 'Kata sandi wajib diisi' })
        .max(255, { message: 'Maksimal 255 karakter' }),
});
