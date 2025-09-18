import { z } from 'zod'

const MAX_USERNAME_LENGTH = 20
const MIN_USERNAME_LENGTH = 2
const USERNAME_REGEX = /^[a-zA-Z-]+$/

const errorMessages = {
  empty: 'Veuillez entrer un prénom',
  min: `Le prénom doit contenir au moins ${MIN_USERNAME_LENGTH} caractères`,
  max: `Le prénom ne doit pas dépasser ${MAX_USERNAME_LENGTH} caractères`,
  regex: 'Le prénom ne doit contenir que des lettres ou -',
}

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty(errorMessages.empty)
    .min(MIN_USERNAME_LENGTH, errorMessages.min)
    .max(MAX_USERNAME_LENGTH, errorMessages.max)
    .regex(USERNAME_REGEX, errorMessages.regex),
})

export type LoginFormData = z.infer<typeof loginSchema>
