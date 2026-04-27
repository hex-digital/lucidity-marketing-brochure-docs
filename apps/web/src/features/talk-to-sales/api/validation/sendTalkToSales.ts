import { z } from 'zod';
import { talkToSalesConfig } from '@/config/talkToSales';

export const talkToSalesItem = z.object({
  firstName: z.string().trim().min(1, 'First name is required.').max(120),
  lastName: z.string().trim().min(1, 'Last name is required.').max(120),
  jobTitle: z
    .string()
    .trim()
    .min(1, 'Job title is required.')
    .max(talkToSalesConfig.form.maxFieldLength),
  organisation: z
    .string()
    .trim()
    .min(1, 'Organisation is required.')
    .max(talkToSalesConfig.form.maxFieldLength),
  email: z.email('Enter a valid email address.'),
  phone: z.string().trim().max(60).optional().default(''),
  message: z.string().trim().max(1_500).optional().default(''),
  registerForUpdates: z.boolean().optional().default(false),
  agreeToPrivacyPolicy: z.literal(true),
});

export type TalkToSalesItem = z.infer<typeof talkToSalesItem>;

export const talkToSalesRequestSchema = talkToSalesItem;
export type TalkToSalesRequest = z.infer<typeof talkToSalesRequestSchema>;
