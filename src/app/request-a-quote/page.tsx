import type { Metadata } from "next";
import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { REQUEST_QUOTE_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Fill out the form to request a quote on cold-chain delivery, warehousing, product solutions, or gel packs.",
};

export default async function RequestQuotePage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: REQUEST_QUOTE_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);
  if (!page) return null;

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={page.title ?? "Request a Quote"}
        crumb="Request a Quote"
        image={page.heroImage ? urlFor(page.heroImage).width(1920).url() : undefined}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <FadeIn>
            <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
              {page.formHeading}
            </h2>
            <div className="mt-8">
              <QuoteForm services={page.serviceOptions ?? []} />
            </div>
          </FadeIn>
        </div>
      </section>

      {page.advancedTechImage ? (
        <AdvancedTechSection
          image={urlFor(page.advancedTechImage).width(1200).url()}
          imageAlt={page.advancedTechImage.alt ?? ""}
          complianceBand={settings?.complianceBand}
          bordered={false}
        />
      ) : null}
    </>
  );
}
