import nodemailer from "nodemailer";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  if (!host) return null;

  transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  return transporter;
}

// 365 Health's palette, sampled from src/app/globals.css (:root) so this
// stays visually consistent with the site without importing Tailwind here.
const COLORS = {
  pageBackground: "#F4F6FA",
  cardBackground: "#FFFFFF",
  border: "#DBE2ED",
  brand: "#0A5FE0",
  brandDeep: "#1D2A4F",
  brandTint: "#E6EEFC",
  text: "#12192E",
  muted: "#4B5568",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function buildLeadEmailHtml(heading: string, lines: Record<string, string>) {
  const rows = Object.entries(lines)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid ${COLORS.border};font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${COLORS.muted};width:120px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 0;border-bottom:1px solid ${COLORS.border};font-size:15px;color:${COLORS.text};white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body style="margin:0;padding:32px 12px;background-color:${COLORS.pageBackground};font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${COLORS.cardBackground};border:1px solid ${COLORS.border};border-radius:6px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 24px;text-align:center;">
                <span style="font-size:22px;font-weight:700;color:${COLORS.brand};">365</span><span style="font-size:22px;font-weight:700;color:${COLORS.brandDeep};">Health</span>
                <div style="margin-top:2px;font-size:10px;font-weight:600;letter-spacing:0.18em;color:${COLORS.muted};text-transform:uppercase;">Logistics</div>
              </td>
            </tr>
            <tr><td style="border-top:1px solid ${COLORS.border};"></td></tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <h1 style="margin:0 0 20px;font-size:18px;font-weight:600;color:${COLORS.text};">${escapeHtml(heading)}</h1>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr><td style="padding:0 32px 28px;"></td></tr>
            <tr><td style="border-top:1px solid ${COLORS.border};"></td></tr>
            <tr>
              <td style="padding:20px 32px;background-color:${COLORS.pageBackground};">
                <p style="margin:0;font-size:11px;line-height:18px;color:${COLORS.muted};">
                  365 Health Logistics · 21822 Lassen Street, Suite A, Chatsworth, CA 91311<br />
                  (877) 374-0577 · info@365health.global
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/**
 * Sends a lead-notification email (contact / quote / quick-message forms)
 * over the shared SMTP account, formatted with 365 Health's own branding.
 * Falls back to console logging when SMTP isn't configured, so local dev
 * still exercises the full form flow without live credentials.
 *
 * `from` stays a fixed, deliverable address (Gmail's SMTP server rejects or
 * rewrites a From that isn't the authenticated account or a verified alias —
 * it can't be set to whatever the visitor typed). `replyTo` is the visitor's
 * own email instead, so hitting Reply in the inbox goes straight to them.
 * `to` is read from Sanity (siteSettings.email) so the destination inbox can
 * be changed from the CMS at any time without a redeploy.
 */
export async function sendLeadEmail(
  subject: string,
  lines: Record<string, string>,
  { replyTo }: { replyTo: string },
) {
  const body = Object.entries(lines)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const mailer = getTransporter();
  if (!mailer) {
    console.info(`[lead email — SMTP not configured, logging only]\n${subject}\n${body}`);
    return;
  }

  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false });
  const to = settings?.email;
  if (!to) {
    console.error("[lead email] siteSettings.email is not set — cannot deliver lead:", subject);
    return;
  }
  const from = process.env.MAIL_FROM || "365 Health Logistics <info@365health.global>";

  await mailer.sendMail({
    from,
    to,
    replyTo,
    subject,
    text: body,
    html: buildLeadEmailHtml(subject, lines),
  });
}
