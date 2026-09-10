import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { ComplianceBand } from "@/components/compliance-band";
import { serviceCopy, serviceStats, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive cold chain logistics services for the pharmaceutical and biotech sector.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Comprehensive cold chain logistics services"
        subtitle={serviceCopy}
        crumb="Services"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-3">
            {serviceStats.map((s) => (
              <div key={s.label} className="bg-card p-7">
                <div className="font-mono text-3xl font-medium tabular-nums text-brand sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">
                  {s.unit} · {s.label}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.name}>
                <PhotoPanel label={s.name} ratio="4/3" />
                <div className="mt-4 font-display text-lg font-semibold">{s.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-brand hover:underline"
                >
                  Learn more <ArrowRight className="size-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
