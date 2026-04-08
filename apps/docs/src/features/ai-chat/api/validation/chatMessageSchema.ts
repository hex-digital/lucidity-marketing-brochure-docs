import { chatMessage } from '../types/ChatMessage';
import type { z } from 'zod';

export const chatMessageRequestSchema = chatMessage;
export type ChatMessageRequest = z.infer<typeof chatMessageRequestSchema>;
