'use client';

import { useMemo, useState } from 'react';
import { CheckboxField } from '@/components/form/components/CheckboxField';
import { TextArea } from '@/components/form/components/TextArea';
import { TextInput } from '@/components/form/components/TextInput';
import { talkToSalesFormSchema } from '@/forms/talk-to-sales/talkToSales.schema';
import { cn } from '@/lib/cn';

interface TalkToSalesFormProps {
  className?: string;
  onSuccess?: () => void;
  showIntro?: boolean;
}

interface FormValues {
  firstName: string;
  lastName: string;
  jobTitle: string;
  organisation: string;
  email: string;
  phone: string;
  message: string;
  registerForUpdates: boolean;
  agreeToPrivacyPolicy: boolean;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  organisation: '',
  email: '',
  phone: '',
  message: '',
  registerForUpdates: false,
  agreeToPrivacyPolicy: false,
};

export function TalkToSalesForm({
  className,
  onSuccess,
  showIntro = true,
}: TalkToSalesFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobTitleCount = useMemo(
    () => `${values.jobTitle.length}/250`,
    [values.jobTitle.length],
  );
  const organisationCount = useMemo(
    () => `${values.organisation.length}/250`,
    [values.organisation.length],
  );

  const updateField = (field: keyof FormValues, value: string | boolean) => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const parsed = talkToSalesFormSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors = Object.fromEntries(
        Object.entries(parsed.error.flatten().fieldErrors).map(([key, value]) => [
          key,
          value?.[0] ?? '',
        ]),
      );
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/talk-to-sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        setSubmitError('Something went wrong. Please try again.');
        return;
      }

      setIsSubmitted(true);
      setValues(initialValues);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Unable to submit talk to sales form.', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[12px] border border-neutral-30/40 bg-surface-dark px-5 py-7 text-center">
        <h3 className="text-page-title-s-desktop">Thanks, we received your message.</h3>
        <p className="mt-3 opacity-80">
          One of our team will be in touch shortly to arrange a demo and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(event);
      }}
      className={cn('flex w-full flex-col gap-5', className)}
    >
      {showIntro ? (
        <div>
          <h2 className="text-page-title-s-desktop">Talk to Sales</h2>
          <p className="mt-4 max-w-[62ch] opacity-80">
            Tell us a little about your team and goals, and we&apos;ll get back to arrange a
            practical walkthrough of Lucidity.js and a demo tailored to your setup.
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <TextInput
          id="firstName"
          name="firstName"
          label="First Name"
          required
          value={values.firstName}
          onChange={(event) => updateField('firstName', event.target.value)}
          placeholder="First Name"
          error={errors.firstName}
        />
        <TextInput
          id="lastName"
          name="lastName"
          label="Last Name"
          required
          value={values.lastName}
          onChange={(event) => updateField('lastName', event.target.value)}
          placeholder="Last Name"
          error={errors.lastName}
        />
      </div>

      <TextInput
        id="email"
        name="email"
        label="Email"
        required
        value={values.email}
        onChange={(event) => updateField('email', event.target.value)}
        placeholder="Email"
        error={errors.email}
      />

      <TextInput
        id="jobTitle"
        name="jobTitle"
        label="Job Title"
        required
        maxLength={250}
        description={jobTitleCount}
        value={values.jobTitle}
        onChange={(event) => updateField('jobTitle', event.target.value)}
        placeholder="Type your answer"
        error={errors.jobTitle}
      />

      <TextInput
        id="organisation"
        name="organisation"
        label="Organisation"
        required
        maxLength={250}
        description={organisationCount}
        value={values.organisation}
        onChange={(event) => updateField('organisation', event.target.value)}
        placeholder="Type your answer"
        error={errors.organisation}
      />

      <TextInput
        id="phone"
        name="phone"
        label="Phone"
        value={values.phone}
        onChange={(event) => updateField('phone', event.target.value)}
        placeholder="Phone"
        error={errors.phone}
      />

      <TextArea
        id="message"
        name="message"
        label="Message"
        value={values.message}
        onChange={(event) => updateField('message', event.target.value)}
        placeholder="Tell us about your project"
        error={errors.message}
      />

      <div className="flex flex-col gap-4">
        <CheckboxField
          id="registerForUpdates"
          label="Register for Lucidity updates"
          checked={values.registerForUpdates}
          onCheckedChange={(checked) => updateField('registerForUpdates', checked)}
          error={errors.registerForUpdates}
        />
        <CheckboxField
          id="agreeToPrivacyPolicy"
          label="I agree to the"
          required
          checked={values.agreeToPrivacyPolicy}
          onCheckedChange={(checked) => updateField('agreeToPrivacyPolicy', checked)}
          error={errors.agreeToPrivacyPolicy}
          showPrivacyLink
        />
      </div>

      {submitError ? <p className="text-sm text-red-300">{submitError}</p> : null}

      <button
        type="submit"
        className="w-full rounded-[12px] bg-neutral-10 px-5 py-4 text-center text-page-eyebrow uppercase text-neutral-70 transition-colors hover:bg-mist-dark disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Register'}
      </button>
    </form>
  );
}
