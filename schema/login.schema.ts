import { z } from 'zod'

export const loginSchema = z.object({
  username: z
    .string('Veuillez entrer un prénom')
    .min(1, 'Veuillez entrer un prénom')
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(20, 'Le prénom ne doit pas dépasser 20 caractères')
    .regex(/^[a-zA-Z-]+$/, 'Le prénom ne doit contenir que des lettres ou -'),
})

export type LoginFormData = z.infer<typeof loginSchema>
