import { company } from "@/lib/content";

/**
 * Thin mail-sending wrapper. Uses Resend when RESEND_API_KEY is set in the
 * environment (add the key + verify a sending domain in the Resend
 * dashboard); otherwise logs the submission so local development still
 * exercises the full form flow without live credentials.
 */
export async function sendLeadEmail(subject: string, lines: Record<string, string>) {
  const body = Object.entries(lines)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(`[lead email — RESEND_API_KEY not set, logging only]\n${subject}\n${body}`);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? `365 Health Website <onboarding@resend.dev>`,
      to: company.email,
      subject,
      text: body,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend request failed: ${res.status} ${await res.text()}`);
  }
}
