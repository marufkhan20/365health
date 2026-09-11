"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { submitQuickMessage } from "@/app/actions";
import { initialFormState } from "@/lib/validations";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

export function QuickMessageForm() {
  const [state, formAction] = useActionState(submitQuickMessage, initialFormState);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-[2px] border border-brand/30 bg-brand-tint p-6">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
        <p className="text-sm text-brand-deep dark:text-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="quick-name">Name</FieldLabel>
          <Input id="quick-name" name="name" placeholder="Jane Rivera" required />
          <FieldError>{state.errors?.name}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quick-email">Email</FieldLabel>
          <Input id="quick-email" name="email" type="email" placeholder="jane@company.com" required />
          <FieldError>{state.errors?.email}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quick-company">Company name</FieldLabel>
          <Input id="quick-company" name="company" placeholder="Company name" required />
          <FieldError>{state.errors?.company}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quick-message">Message</FieldLabel>
          <Textarea id="quick-message" name="message" rows={4} placeholder="Message" required />
          <FieldError>{state.errors?.message}</FieldError>
        </Field>
      </FieldGroup>
      <SubmitButton />
    </form>
  );
}
