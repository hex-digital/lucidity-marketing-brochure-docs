import { z } from 'zod';

export const talkToSalesFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required.'),
  lastName: z.string().trim().min(1, 'Last name is required.'),
  jobTitle: z
    .string()
    .trim()
    .min(1, 'Job title is required.')
    .max(250, 'Job title must be 250 characters or less.'),
  organisation: z
    .string()
    .trim()
    .min(1, 'Organisation is required.')
    .max(250, 'Organisation must be 250 characters or less.'),
  email: z.email('Enter a valid email address.'),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
  registerForUpdates: z.boolean().optional(),
  agreeToPrivacyPolicy: z.literal(true, {
    error: 'You must agree to the Privacy Policy.',
  }),
});

export type TalkToSalesFormData = z.infer<typeof talkToSalesFormSchema>;
