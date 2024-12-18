import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  linkedin: z.string().url('URL LinkedIn invalide').optional().or(z.literal('')),
  twitter: z.string().url('URL Twitter invalide').optional().or(z.literal('')),
  website: z.string().url('URL du site web invalide').optional().or(z.literal(''))
});