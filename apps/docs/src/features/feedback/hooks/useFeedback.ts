'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { feedbackConfig } from '@/config/feedback';
import type { FeedbackRating, UserFeedbackPayload } from '@/features/feedback/types';

type WidgetState = 'idle' | 'editing' | 'submitting-comment' | 'success';

interface FeedbackResponse {
  ok: boolean;
  status: 'created';
  ts: string | null;
}

const FEEDBACK_ENDPOINT = '/api/feedback';
const SUCCESS_RESET_DELAY_MS = 2200;

async function sendFeedback(payload: UserFeedbackPayload): Promise<FeedbackResponse> {
  const response = await fetch(FEEDBACK_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as Partial<FeedbackResponse> | null;

  if (!response.ok || !data?.ok || typeof data.status !== 'string') {
    throw new Error('Feedback request failed.');
  }

  return {
    ok: true,
    status: data.status,
    ts: typeof data.ts === 'string' ? data.ts : null,
  };
}

interface UseFeedbackOptions {
  pageTitle: string;
}

export function useFeedback({ pageTitle }: UseFeedbackOptions) {
  const pathname = usePathname();
  const [selectedRating, setSelectedRating] = useState<FeedbackRating | null>(null);
  const [comment, setComment] = useState('');
  const [widgetState, setWidgetState] = useState<WidgetState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const hasSucceeded = widgetState === 'success';
  const isSubmittingComment = widgetState === 'submitting-comment';
  const isDisabled = isSubmittingComment;
  const isExpanded = widgetState !== 'idle';

  useEffect(() => {
    if (!hasSucceeded) return;

    const resetTimer = window.setTimeout(() => {
      setWidgetState('idle');
      setSelectedRating(null);
      setComment('');
      setErrorMessage(null);
    }, SUCCESS_RESET_DELAY_MS);

    return () => {
      window.clearTimeout(resetTimer);
    };
  }, [hasSucceeded]);

  const submitRating = useCallback(
    (rating: FeedbackRating) => {
      if (isDisabled) return;
      setSelectedRating(rating);
      setErrorMessage(null);
      setWidgetState('editing');
    },
    [isDisabled],
  );

  const onCommentChange = useCallback((value: string) => {
    setComment(value);
    setErrorMessage((currentError) => (currentError ? null : currentError));
  }, []);

  const submitComment = useCallback(() => {
    if (!selectedRating || isDisabled) return;

    setErrorMessage(null);
    setWidgetState('submitting-comment');

    startTransition(async () => {
      try {
        const trimmedComment = comment.trim();

        if (!trimmedComment) {
          setWidgetState('editing');
          setErrorMessage(feedbackConfig.widget.errorNoMessage);
          return;
        }

        await sendFeedback({
          rating: selectedRating,
          pagePath: pathname,
          pageUrl: typeof window !== 'undefined' ? window.location.href : pathname,
          pageTitle,
          comment: trimmedComment,
        });

        setWidgetState('success');
      } catch {
        setWidgetState('editing');
        setErrorMessage(feedbackConfig.widget.errorMessage);
      }
    });
  }, [comment, isDisabled, pageTitle, pathname, selectedRating]);

  return {
    comment,
    errorMessage,
    hasSucceeded,
    isDisabled,
    isExpanded,
    isPending,
    isSubmittingComment,
    selectedRating,
    submitComment,
    submitRating,
    onCommentChange,
  };
}
