"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { submitContact } from "@/app/actions";
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

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialFormState);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-[2px] border border-brand/30 bg-brand-tint p-6">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
        <p className="text-sm text-brand-deep dark:text-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
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
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input id="contact-name" name="name" placeholder="Jane Rivera" required />
          <FieldError>{state.errors?.name}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            required
          />
          <FieldError>{state.errors?.email}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-mobile">Mobile</FieldLabel>
          <Input id="contact-mobile" name="mobile" type="tel" placeholder="(555) 010-0199" required />
          <FieldError>{state.errors?.mobile}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us about your cold-chain shipment or storage needs…"
            required
          />
          <FieldError>{state.errors?.message}</FieldError>
        </Field>
      </FieldGroup>
      <SubmitButton />
    </form>
  );
}
