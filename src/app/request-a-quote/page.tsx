import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { CredentialBand } from "@/components/credential-band";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Fill out the form to request a quote on cold-chain delivery, warehousing, product solutions, or gel packs.",
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Fill out the form below to request a quote"
        crumb="Request a Quote"
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-16 sm:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="max-w-sm text-[15px] text-muted-foreground">
                Tell us about your shipment or storage needs and a member of our
                team will follow up with a tailored quote — usually within one
                business day.
              </p>
              <div className="mt-10">
                <CredentialBand />
              </div>
            </div>
            <div className="rounded-[2px] border border-border bg-card p-7 sm:p-9">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
