"use server";

import {
  contactSchema,
  quickMessageSchema,
  quoteSchema,
  type FormState,
} from "@/lib/validations";
import { sendLeadEmail } from "@/lib/email";

function fieldErrors(issues: { path: PropertyKey[]; message: string }[]) {
  const errors: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { status: "error", errors: fieldErrors(parsed.error.issues) };
  }
  if (parsed.data.company_website) {
    // honeypot tripped — pretend success, drop silently
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const { name, email, mobile, message } = parsed.data;
  await sendLeadEmail(`New contact form submission from ${name}`, {
    Name: name,
    Email: email,
    Mobile: mobile,
    Message: message,
  });

  return { status: "success", message: "Thanks — we'll be in touch shortly." };
}

export async function submitQuote(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = quoteSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { status: "error", errors: fieldErrors(parsed.error.issues) };
  }
  if (parsed.data.company_website) {
    return { status: "success", message: "Thanks — a member of our team will follow up." };
  }

  const { name, email, mobile, service, message } = parsed.data;
  await sendLeadEmail(`New quote request from ${name} (${service})`, {
    Name: name,
    Email: email,
    Mobile: mobile,
    Service: service,
    Message: message,
  });

  return { status: "success", message: "Thanks — a member of our team will follow up." };
}

export async function submitQuickMessage(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = quickMessageSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { status: "error", errors: fieldErrors(parsed.error.issues) };
  }
  if (parsed.data.company_website) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const { name, email, company, message } = parsed.data;
  await sendLeadEmail(`New quick message from ${name} (${company})`, {
    Name: name,
    Email: email,
    Company: company,
    Message: message,
  });

  return { status: "success", message: "Thanks — we'll be in touch shortly." };
}
