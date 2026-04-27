import { z } from 'zod';
import { talkToSalesService } from '@/features/talk-to-sales/api/services/talkToSalesService';
import { talkToSalesRequestSchema } from '@/features/talk-to-sales/api/validation/sendTalkToSales';

export const sendTalkToSales = {
  post: async (rawRequest: Request) => {
    try {
      const payload = talkToSalesRequestSchema.parse(await rawRequest.json());

      await talkToSalesService().sendTalkToSales(payload);

      return Response.json(
        {
          ok: true,
          status: 'created' as const,
        },
        { status: 201 },
      );
    } catch (error) {
      if (error instanceof SyntaxError) {
        return Response.json(
          { ok: false, error: 'Malformed JSON request body.' },
          { status: 400 },
        );
      }

      if (error instanceof z.ZodError) {
        return Response.json(
          { ok: false, error: 'Invalid talk to sales request.' },
          { status: 400 },
        );
      }

      console.error('Talk to sales submission failed.', {
        name: error instanceof Error ? error.name : 'UnknownError',
      });

      return Response.json({ ok: false, error: 'Unable to send message.' }, { status: 500 });
    }
  },
};
