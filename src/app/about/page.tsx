import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { CredentialBand } from "@/components/credential-band";
import { ComplianceBand } from "@/components/compliance-band";
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
        title="A white-glove standard for pharma in transit."
        crumb="About"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
                Our Mission
              </div>
              <p className="mt-4 text-[17px] leading-relaxed">{missionVision.mission}</p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
                Our Vision
              </div>
              <p className="mt-4 text-[17px] leading-relaxed">{missionVision.vision}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <PhotoPanel label="365 Health team — Chatsworth, CA" ratio="4/3" />
            <PhotoPanel label="Reefer fleet, ready for dispatch" ratio="4/3" />
            <PhotoPanel label="Cold-storage racking" ratio="4/3" />
          </div>

          <div className="mt-14">
            <CredentialBand />
          </div>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
