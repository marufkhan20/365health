import type { Metadata } from "next";
import Image from "next/image";
import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { FadeIn } from "@/components/fade-in";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { SITE_SETTINGS_QUERY, WAREHOUSE_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Warehouse & Fulfilment",
  description:
    "CA Board of Pharmacy licensed wholesale warehousing and fulfillment — returns, kitting, customization, and multi-site distribution.",
};

export default async function WarehousePage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: WAREHOUSE_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);
  if (!page) return null;

  return (
    <>
      {page.heroImage ? (
        <section className="relative w-full overflow-hidden border-b border-border aspect-[1914/497]">
          <Image
            src={urlFor(page.heroImage).width(1920).url()}
            alt={page.heroImage.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </section>
      ) : null}

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <FadeIn>
            <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-6 text-[15px] font-semibold text-foreground">
              {page.introLead}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {page.introCopy}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 flex flex-col gap-5">
            {(page.capabilities ?? []).map((cap) => (
              <p key={cap._key} className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{cap.name}:</span>{" "}
                {cap.copy}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={0.15} className="mt-14">
            <div className="h-px w-10 bg-brand" />
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.06em] text-brand">
              {page.storageHeading}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {page.storageCopy}
            </p>
          </FadeIn>

          {page.storageImage ? (
            <FadeIn
              delay={0.2}
              className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2px] border border-border"
            >
              <Image
                src={urlFor(page.storageImage).width(800).url()}
                alt={page.storageImage.alt ?? ""}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </FadeIn>
          ) : null}
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
