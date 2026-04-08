import { chat } from '@/features/ai-chat/api/routes/chat';

export async function POST(request: Request) {
  return chat.post(request);
}
