import type { Metadata } from "next";
import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "About",
  description:
    "365 Health Logistics is a Chatsworth, CA cold-chain 3PL — our mission and vision for pharmaceutical logistics.",
};

export default async function AboutPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: ABOUT_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);
  if (!page) return null;

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={page.title ?? "About Us"}
        crumb="About"
        image={page.heroImage ? urlFor(page.heroImage).width(1920).url() : undefined}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-2">
            <FadeIn>
              <div className="h-px w-10 bg-brand" />
              <div className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight">
                Our Mission
              </div>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                {page.mission}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-px w-10 bg-brand" />
              <div className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight">
                Our Vision
              </div>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                {page.vision}
              </p>
            </FadeIn>
          </div>
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
