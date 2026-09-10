import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.email("Enter a valid email"),
  mobile: z.string().trim().min(7, "Enter a valid phone number"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
  // honeypot — real users never fill this in
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export const quoteServices = [
  "Delivery",
  "Warehouse",
  "Product Solutions",
  "Flexible Gel Packs",
] as const;

export const quoteSchema = contactSchema
  .omit({ message: true })
  .extend({
    service: z.enum(quoteServices, { message: "Select a service" }),
    message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
  });

export type ContactValues = z.infer<typeof contactSchema>;
export type QuoteValues = z.infer<typeof quoteSchema>;

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };
