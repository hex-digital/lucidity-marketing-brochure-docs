'use client';

import { Check, LoaderCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { feedbackConfig } from '@/config/feedback';
import { useFeedback } from '@/features/feedback/hooks/useFeedback';
import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef } from 'react';

interface DocsFeedbackWidgetProps extends ComponentPropsWithoutRef<'section'> {
  pageTitle: string;
}

export function DocsFeedbackWidget({ className, pageTitle }: DocsFeedbackWidgetProps) {
  const {
    comment,
    errorMessage,
    hasSucceeded,
    isDisabled,
    isExpanded,
    isPending,
    isSubmittingComment,
    onCommentChange,
    selectedRating,
    submitComment,
    submitRating,
  } = useFeedback({ pageTitle });

  return (
    <motion.section
      aria-label="Docs feedback"
      className={cn(
        className,
        'docs-feedback-widget w-full max-w-[21rem] rounded-[1rem] border border-fd-border bg-fd-card/70 px-2 py-2 text-fd-foreground',
      )}
      data-expanded={isExpanded}
      data-success={hasSucceeded}
      layout
      transition={{ duration: 0.28, ease: 'easeInOut' }}
    >
      <div className="flex flex-col gap-1">
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          layout="position"
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <p className="text-sm">{feedbackConfig.widget.title}</p>
          <div className="flex items-center gap-1">
            {feedbackConfig.widget.ratings.map((option) => {
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
                    'flex size-8 items-center justify-center rounded-full border border-transparent text-[1.2rem] transition-[background-color,border-color,color,opacity] duration-200',
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
        </motion.div>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              key="details"
              className="docs-feedback-widget__details overflow-hidden"
              initial={{ height: 0, opacity: 0, y: -4 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -4 }}
              transition={{
                height: { duration: 0.26, ease: 'easeInOut' },
                opacity: { duration: 0.18, ease: 'easeOut' },
                y: { duration: 0.22, ease: 'easeOut' },
              }}
            >
              <div className="flex flex-col gap-2 pt-1">
                <AnimatePresence mode="wait" initial={false}>
                  {hasSucceeded ? (
                    <motion.div
                      key="success"
                      className="flex flex-col items-center gap-3 rounded-[0.75rem] border border-fd-border/80 bg-fd-background/70 px-4 py-6 text-center"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <Check className="size-8" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xl font-semibold">
                          {feedbackConfig.widget.successTitle}
                        </p>
                        <p className="text-sm text-fd-muted-foreground">
                          {feedbackConfig.widget.successDescription}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      <label className="space-y-2">
                        <textarea
                          value={comment}
                          maxLength={feedbackConfig.widget.commentMaxLength}
                          disabled={isDisabled}
                          onChange={(event) => {
                            onCommentChange(event.target.value);
                          }}
                          placeholder={feedbackConfig.widget.placeholder}
                          className="min-h-32 w-full resize-none rounded-2xl border border-fd-border bg-fd-background px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-150 focus:border-sky-500 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
                        />
                      </label>

                      <div className="space-y-1 text-xs text-fd-muted-foreground flex justify-between">
                        <div className="text-label-12 flex justify-end items-center gap-1 p-0">
                          <svg
                            fill="none"
                            height="14"
                            viewBox="0 0 22 14"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M19.5 1.25H2.5C1.80964 1.25 1.25 1.80964 1.25 2.5V11.5C1.25 12.1904 1.80964 12.75 2.5 12.75H19.5C20.1904 12.75 20.75 12.1904 20.75 11.5V2.5C20.75 1.80964 20.1904 1.25 19.5 1.25ZM2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H19.5C20.8807 14 22 12.8807 22 11.5V2.5C22 1.11929 20.8807 0 19.5 0H2.5ZM3 3.5H4H4.25H4.6899L4.98715 3.82428L7 6.02011L9.01285 3.82428L9.3101 3.5H9.75H10H11V4.5V10.5H9V6.79807L7.73715 8.17572L7 8.97989L6.26285 8.17572L5 6.79807V10.5H3V4.5V3.5ZM15 7V3.5H17V7H19.5L17 9.5L16 10.5L15 9.5L12.5 7H15Z"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                          supported.
                        </div>
                        <p>
                          {comment.length}/{feedbackConfig.widget.commentMaxLength}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="min-h-5">
                          {errorMessage ? (
                            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
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
                          <span>{feedbackConfig.widget.submitLabel}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
