'use client';

import { useCallback, useMemo, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { Check, LoaderCircle } from 'lucide-react';
import { feedbackConfig } from '@/config/feedback';
import { cn } from '@/lib/cn';
import type { FeedbackRating } from '@pkg/notifications';

type RatingOption = (typeof feedbackConfig.ratings)[number];
type WidgetState = 'idle' | 'submitting-rating' | 'editing' | 'submitting-comment' | 'success';

interface DocsFeedbackWidgetProps {
  pageTitle: string;
}

interface FeedbackResponse {
  ok: boolean;
  status: 'created' | 'submitted' | 'updated';
  ts: string | null;
}

const FEEDBACK_ENDPOINT = '/api/feedback';

async function sendFeedback(payload: {
  rating: FeedbackRating;
  pagePath: string;
  pageTitle: string;
  comment?: string;
  ts?: string | null;
}): Promise<FeedbackResponse> {
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

export function DocsFeedbackWidget({ pageTitle }: DocsFeedbackWidgetProps) {
  const pathname = usePathname();
  const [selectedRating, setSelectedRating] = useState<FeedbackRating | null>(null);
  const [comment, setComment] = useState('');
  const [messageTs, setMessageTs] = useState<string | null>(null);
  const [widgetState, setWidgetState] = useState<WidgetState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const hasSucceeded = widgetState === 'success';
  const isSubmittingRating = widgetState === 'submitting-rating';
  const isSubmittingComment = widgetState === 'submitting-comment';
  const isDisabled = isSubmittingRating || isSubmittingComment;
  const isExpanded = widgetState !== 'idle';

  const selectedOption = useMemo<RatingOption | null>(() => {
    return feedbackConfig.ratings.find((option) => option.value === selectedRating) ?? null;
  }, [selectedRating]);

  const submitRating = useCallback(
    (rating: FeedbackRating) => {
      if (isDisabled) return;

      setSelectedRating(rating);
      setErrorMessage(null);
      setWidgetState('submitting-rating');

      startTransition(async () => {
        try {
          const result = await sendFeedback({
            rating,
            pagePath: pathname,
            pageTitle,
          });

          setMessageTs(result.ts);
          setWidgetState('editing');
        } catch {
          setWidgetState('editing');
          setErrorMessage(feedbackConfig.errorMessage);
        }
      });
    },
    [isDisabled, pageTitle, pathname],
  );

  const submitComment = useCallback(() => {
    if (!selectedRating || isDisabled) return;

    setErrorMessage(null);
    setWidgetState('submitting-comment');

    startTransition(async () => {
      try {
        const trimmedComment = comment.trim();
        const result = await sendFeedback({
          rating: selectedRating,
          pagePath: pathname,
          pageTitle,
          comment: trimmedComment,
          ts: messageTs,
        });

        setMessageTs(result.ts);
        setWidgetState('success');
      } catch {
        setWidgetState('editing');
        setErrorMessage(feedbackConfig.errorMessage);
      }
    });
  }, [comment, isDisabled, messageTs, pageTitle, pathname, selectedRating]);

  return (
    <section
      aria-label="Docs feedback"
      className="docs-feedback-widget w-full max-w-[31rem] rounded-[1.75rem] border border-fd-border bg-fd-card/70 px-4 py-3 text-fd-foreground shadow-sm backdrop-blur-sm sm:px-5"
      data-expanded={isExpanded}
      data-success={hasSucceeded}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-medium sm:text-lg">{feedbackConfig.title}</p>
          <div className="flex items-center gap-1">
            {feedbackConfig.ratings.map((option) => {
              const selected = option.value === selectedRating;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-label={option.iconLabel}
                  aria-pressed={selected}
                  disabled={isDisabled || hasSucceeded}
                  onClick={() => submitRating(option.value)}
                  className={cn(
                    'flex size-11 items-center justify-center rounded-full border border-transparent text-[1.75rem] transition-[background-color,border-color,color,opacity] duration-200',
                    selected
                      ? 'border-sky-200 bg-sky-100 text-sky-700 dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-300'
                      : 'hover:border-fd-border hover:bg-fd-secondary/70',
                    isDisabled && !selected ? 'opacity-70' : '',
                  )}
                >
                  <span aria-hidden="true">{option.emoji}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="docs-feedback-widget__details">
          <div className="flex flex-col gap-3 pt-1">
            {hasSucceeded ? (
              <div className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-fd-border/80 bg-fd-background/70 px-4 py-6 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Check className="size-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-semibold">{feedbackConfig.successTitle}</p>
                  <p className="text-sm text-fd-muted-foreground">
                    {feedbackConfig.successDescription}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <label className="space-y-2">
                  <span className="text-sm text-fd-muted-foreground">
                    {selectedOption ? `You selected ${selectedOption.label}. ` : ''}
                    {feedbackConfig.placeholder}
                  </span>
                  <textarea
                    value={comment}
                    maxLength={feedbackConfig.commentMaxLength}
                    disabled={isDisabled}
                    onChange={(event) => {
                      setComment(event.target.value);
                      if (errorMessage) {
                        setErrorMessage(null);
                      }
                    }}
                    placeholder={feedbackConfig.placeholder}
                    className="min-h-32 w-full resize-y rounded-2xl border border-fd-border bg-fd-background px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-150 focus:border-sky-500 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                  />
                </label>

                <div className="space-y-1 text-xs text-fd-muted-foreground">
                  <p>{feedbackConfig.markdownHint}</p>
                  <p>{feedbackConfig.markdownGuide.map((item) => item.syntax).join('  ')}</p>
                  <p>
                    {comment.length}/{feedbackConfig.commentMaxLength}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="min-h-5">
                    {errorMessage ? (
                      <p className="text-sm font-medium text-red-600">{errorMessage}</p>
                    ) : isSubmittingRating ? (
                      <p className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground">
                        <LoaderCircle className="size-4 animate-spin" />
                        Sending your rating...
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    disabled={isDisabled || !selectedRating}
                    onClick={submitComment}
                    className="inline-flex min-w-24 items-center justify-center gap-2 rounded-xl bg-fd-foreground px-4 py-2 text-sm font-medium text-fd-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isPending && isSubmittingComment ? (
                      <LoaderCircle className="size-4 animate-spin" />
                    ) : null}
                    <span>{feedbackConfig.submitLabel}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
