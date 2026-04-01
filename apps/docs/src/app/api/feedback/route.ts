import { sendFeedback } from '@/features/feedback/api/routes/sendFeedback';

export async function POST(request: Request) {
  return sendFeedback.post(request);
}
