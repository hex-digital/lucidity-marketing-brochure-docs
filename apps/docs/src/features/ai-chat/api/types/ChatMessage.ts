import { z } from 'zod';
import type { UIMessage } from 'ai';

export type ChatUIMessage = UIMessage<
  never,
  {
    client: {
      location: string;
    };
  }
>;

export const chatMessage = z.object({
  messages: z.array(z.custom<ChatUIMessage>()),
});
export type ChatMessage = z.infer<typeof chatMessage>;
