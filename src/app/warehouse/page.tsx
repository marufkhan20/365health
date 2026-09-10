import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { ComplianceBand } from "@/components/compliance-band";
import { warehouseCapabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Warehouse & Fulfilment",
  description:
    "CA Board of Pharmacy licensed wholesale warehousing and fulfillment — returns, kitting, customization, and multi-site distribution.",
};

export default function WarehousePage() {
  return (
    <>
      <PageHero
        eyebrow="Warehouse and Fulfilment"
        title="We're your all-in-one pharma solution."
        subtitle="Not your ordinary 3PL — we also hold a coveted wholesale license with the California Board of Pharmacy, positioning us as a one-stop shop for product management, fulfillment, and warehousing."
        crumb="Warehouse"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-[1fr_1fr] sm:items-start">
            <div className="flex flex-col gap-8">
              {warehouseCapabilities.map((cap) => (
                <div key={cap.name} className="border-t border-border pt-5">
                  <div className="font-display text-lg font-semibold">{cap.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{cap.copy}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6">
              <PhotoPanel label="150,000+ sq ft — Southern California" ratio="4/3" />
              <PhotoPanel label="Kitting & assembly floor" ratio="4/3" />
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
              Importance of Proper Pharmaceutical Storage
            </div>
            <p className="mt-4 max-w-3xl text-[15px] text-muted-foreground">
              Storage requirements and manufacturer guidance are not uniform across
              medications — some require refrigeration or freezing, while others are
              stable at room temperature. Monitoring temperature and using proper
              pharmaceutical storage keeps medications potent, intact, and safe
              throughout their shelf life.
            </p>
          </div>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
