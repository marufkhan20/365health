"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { submitQuote } from "@/app/actions";
import { initialFormState } from "@/lib/validations";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? "Sending…" : "Request a Quote"}
    </Button>
  );
}

export function QuoteForm({ services }: { services: string[] }) {
  const [state, formAction] = useActionState(submitQuote, initialFormState);

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
          <FieldLabel htmlFor="quote-name" className="sr-only">
            Name
          </FieldLabel>
          <Input id="quote-name" name="name" placeholder="Name" required />
          <FieldError>{state.errors?.name}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-email" className="sr-only">
            Email
          </FieldLabel>
          <Input id="quote-email" name="email" type="email" placeholder="Email" required />
          <FieldError>{state.errors?.email}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-mobile" className="sr-only">
            Mobile Number
          </FieldLabel>
          <Input id="quote-mobile" name="mobile" type="tel" placeholder="Mobile Number" required />
          <FieldError>{state.errors?.mobile}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-service" className="sr-only">
            Service
          </FieldLabel>
          <Select name="service">
            <SelectTrigger id="quote-service" className="w-full">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError>{state.errors?.service}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-message" className="sr-only">
            Message
          </FieldLabel>
          <Textarea id="quote-message" name="message" rows={5} placeholder="Message" required />
          <FieldError>{state.errors?.message}</FieldError>
        </Field>
      </FieldGroup>
      <SubmitButton />
    </form>
  );
}
