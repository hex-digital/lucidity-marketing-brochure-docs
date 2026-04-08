import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { convertToModelMessages, stepCountIs, streamText, tool } from 'ai';
import { Document, type DocumentData } from 'flexsearch';
import { z } from 'zod';
import { aiConfig } from '@/config/ai';
import { source } from '@/lib/source';
import { chatMessageRequestSchema } from '../validation/chatMessageSchema';
import { BaseUserError } from '@pkg/errors/BaseUserError';
import type { ChatUIMessage } from '../types/ChatMessage';

interface CustomDocument extends DocumentData {
  url: string;
  title: string;
  description: string;
  content: string;
}

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

/** System prompt, you can update it to provide more specific information */
const systemPrompt = aiConfig.chat.systemPrompt;

const searchServer = createSearchServer();

export type SearchTool = typeof searchTool;

const searchTool = tool({
  description: 'Search the docs content and return raw JSON results.',
  inputSchema: z.object({
    query: z.string(),
    limit: z.number().int().min(1).max(100).default(10),
  }),
  async execute({ query, limit }) {
    const search = await searchServer;
    return search.searchAsync(query, { limit, merge: true, enrich: true });
  },
});

export const chat = {
  post: async (rawRequest: Request) => {
    if (!aiConfig.chat.enabled) {
      return Response.json(
        { ok: false, error: 'Chat is currently disabled.' },
        { status: 500 },
      );
    }

    try {
      const { messages } = chatMessageRequestSchema.parse(await rawRequest.json());

      const result = streamText({
        model: openrouter.chat(process.env.OPENROUTER_MODEL ?? 'z-ai/glm-4.5-air:free'),
        stopWhen: stepCountIs(5),
        tools: {
          search: searchTool,
        },
        messages: [
          { role: 'system', content: systemPrompt },
          ...(await convertToModelMessages<ChatUIMessage>(messages ?? [], {
            convertDataPart(part) {
              if (part.type === 'data-client')
                return {
                  type: 'text',
                  text: `[Client Context: ${JSON.stringify(part.data)}]`,
                };
            },
          })),
        ],
        toolChoice: 'auto',
      });

      return result.toUIMessageStreamResponse();
    } catch (error) {
      console.error('Chat message failed.', error);

      if (error instanceof z.ZodError) {
        return Response.json({ ok: false, error: 'Invalid chat message.' }, { status: 400 });
      }

      return Response.json(
        { ok: false, error: 'Unable to chat.' },
        { status: error instanceof BaseUserError ? 400 : 500 },
      );
    }
  },
};

async function createSearchServer() {
  const search = new Document<CustomDocument>({
    document: {
      id: 'url',
      index: ['title', 'description', 'content'],
      store: true,
    },
  });

  const docs = await chunkedAll(
    source.getPages().map(async (page) => {
      if (!('getText' in page.data)) return null;

      return {
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        content: await page.data.getText('raw'),
      } as CustomDocument;
    }),
  );

  for (const doc of docs) {
    if (doc) search.add(doc);
  }

  return search;
}

async function chunkedAll<O>(promises: Promise<O>[]): Promise<O[]> {
  const SIZE = 50;
  const out: O[] = [];
  for (let i = 0; i < promises.length; i += SIZE) {
    out.push(...(await Promise.all(promises.slice(i, i + SIZE))));
  }
  return out;
}
