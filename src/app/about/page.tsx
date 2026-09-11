import type { Metadata } from "next";
import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { missionVision } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "365 Health Logistics is a Chatsworth, CA cold-chain 3PL — our mission and vision for pharmaceutical logistics.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Us"
        crumb="About"
        image="/images/about.jpg"
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
                {missionVision.mission}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-px w-10 bg-brand" />
              <div className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight">
                Our Vision
              </div>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                {missionVision.vision}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <AdvancedTechSection
        image="/images/about-2.png"
        imageAlt="Air freight, trucks, and last-mile vans supporting 365 Health's cold chain network"
        bordered={false}
      />
    </>
  );
}
