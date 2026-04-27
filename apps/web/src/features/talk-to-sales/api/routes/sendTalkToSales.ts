import { z } from 'zod';
import { talkToSalesService } from '@/features/talk-to-sales/api/services/talkToSalesService';
import { talkToSalesRequestSchema } from '@/features/talk-to-sales/api/validation/sendTalkToSales';

export const sendTalkToSales = {
  post: async (rawRequest: Request) => {
    try {
      const payload = talkToSalesRequestSchema.parse(await rawRequest.json());

      await talkToSalesService().sendTalkToSales(payload);

      return Response.json({
        ok: true,
        status: 'created' as const,
      });
    } catch (error) {
      console.error('Talk to sales submission failed.', error);

      if (error instanceof z.ZodError) {
        return Response.json(
          { ok: false, error: 'Invalid talk to sales request.' },
          { status: 400 },
        );
      }

      return Response.json({ ok: false, error: 'Unable to send message.' }, { status: 500 });
    }
  },
};
