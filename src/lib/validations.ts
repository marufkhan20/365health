import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.email("Enter a valid email"),
  mobile: z.string().trim().min(7, "Enter a valid phone number"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
  // honeypot — real users never fill this in. Must always pass validation
  // (no length limit) so a bot that fills it gets a generic "success"
  // response from the action below instead of a field-specific validation
  // error that would give away which field is the trap.
  company_website: z.string().optional(),
});

// The dropdown options themselves are CMS-driven (requestQuotePage.serviceOptions
// in Sanity), so this just checks a value was picked, not against a fixed list.
export const quoteSchema = contactSchema
  .omit({ message: true })
  .extend({
    service: z.string().trim().min(1, "Select a service"),
    message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
  });

// The homepage's "Get in Touch" mini-form — name, email, company, message.
export const quickMessageSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.email("Enter a valid email"),
  company: z.string().trim().min(2, "Enter your company name"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type QuoteValues = z.infer<typeof quoteSchema>;
export type QuickMessageValues = z.infer<typeof quickMessageSchema>;

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };
