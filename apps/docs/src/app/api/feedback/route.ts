import { sendFeedback } from '@/features/feedback/server/routes/sendFeedback';

export async function POST(request: Request) {
  return sendFeedback.post(request);
}
