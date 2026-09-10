import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { ComplianceBand } from "@/components/compliance-band";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { company, gelPacks, type GelPackSize } from "@/lib/content";

export const metadata: Metadata = {
  title: "Flexible Hot/Cold Gel Packs",
  description:
    "Reusable, non-toxic flexible hot/cold gel packs — small, medium, and large, with and without wraps. Wholesale inquiries welcome.",
};

const sizes: (GelPackSize | "All")[] = ["All", "Small", "Medium", "Large"];

function GelPackGrid({ size }: { size: GelPackSize | "All" }) {
  const packs = size === "All" ? gelPacks : gelPacks.filter((p) => p.size === size);
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {packs.map((pack) => (
        <div key={pack.sku}>
          <PhotoPanel label={pack.sku} ratio="1/1" />
          <div className="mt-3 flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-semibold leading-tight">
              {pack.name}
            </h3>
            <Badge variant="secondary" className="shrink-0">
              {pack.size}
            </Badge>
          </div>
          <div className="mt-2 font-mono text-[12.5px] tabular-nums text-muted-foreground">
            {pack.dimensions} &middot; {pack.weight}
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[12.5px] text-muted-foreground">
            {pack.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-thermal" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.06em] text-brand hover:underline"
          >
            Contact us
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function GelPacksPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Flexible Hot/Cold Gel Packs"
        subtitle="Non-toxic, reusable, and flexible when frozen — engineered for both hot and cold therapy across shipping and patient-care use cases."
        crumb="Gel Packs"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Tabs defaultValue="All">
            <TabsList>
              {sizes.map((s) => (
                <TabsTrigger key={s} value={s}>
                  {s}
                </TabsTrigger>
              ))}
            </TabsList>
            {sizes.map((s) => (
              <TabsContent key={s} value={s}>
                <GelPackGrid size={s} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center sm:py-16">
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-brand">
            Looking to buy wholesale?
          </div>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block font-display text-2xl font-semibold text-secondary-foreground hover:text-brand sm:text-3xl"
          >
            {company.email}
          </a>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
