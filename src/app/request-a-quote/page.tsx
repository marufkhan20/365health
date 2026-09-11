import type { Metadata } from "next";
import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

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
        title="Request a Quote"
        crumb="Request a Quote"
        image="/images/request-quote-hero.jpg"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <FadeIn>
            <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
              Fill out the below form to Request a Quote
            </h2>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <AdvancedTechSection
        image="/images/service-1.png"
        imageAlt="Air freight and ground fleet supporting 365 Health's logistics network"
        bordered={false}
      />
    </>
  );
}
