import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoPanel } from "@/components/photo-panel";
import { ComplianceBand } from "@/components/compliance-band";
import { productFamilies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Product Solutions",
  description:
    "CCT Rx™ temperature-controlled containers, pallet shippers, and Tyvek® thermal covers for pharma and biotech cold chain.",
};

const whyStorageMatters = [
  "Ensures the medication's potency is maintained",
  "Ensures the integrity of medications is preserved",
  "Prevents medicine from being spoiled or deteriorated",
  "Assures quality and safety throughout the product's shelf life",
];

const whyProfessionals = [
  {
    title: "Precise temperature control",
    copy: "Reefer trucks maintain a precise temperature throughout transport — from room temperature to freezing — independent of the weather, with drivers monitoring for maintenance and documentation.",
  },
  {
    title: "Flexible delivery options",
    copy: "Medications are highly personalized — a professional team can change quickly based on what's being shipped and delivered, while maintaining high quality standards.",
  },
  {
    title: "Secure handling",
    copy: "Pharmaceuticals are delicate and costly. Professionals experienced with delicate, precious items load, transport, and unload every shipment with care.",
  },
  {
    title: "Regulatory compliance",
    copy: "Pharma transport experts know the rules that must be followed while loading, storing, and transporting these items.",
  },
  {
    title: "Total visibility",
    copy: "Trace shipments and receive notice after delivery — documentation that matters for your company and for local/federal record-keeping standards.",
  },
];

export default function ProductSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products and Solutions"
        title="Thermal packaging, built for the cold chain"
        subtitle="Packaging requirements vary — some medications require refrigeration or freezing, while others remain stable at room temperature. We provide a range of packaging solutions for temperature-sensitive medications and products."
        crumb="Product Solutions"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex flex-col gap-14">
            {productFamilies.map((family, i) => (
              <div
                key={family.name}
                className="grid gap-8 border-t border-border pt-10 sm:grid-cols-[1fr_1fr] sm:items-start"
              >
                <div className={i % 2 === 1 ? "sm:order-2" : undefined}>
                  <PhotoPanel label={family.name} ratio="4/3" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand-accent">
                    {family.tagline}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{family.name}</h2>
                  <p className="mt-3 text-[15px] text-muted-foreground">{family.copy}</p>
                  <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-4">
                    {family.specs.map((spec) => (
                      <div key={spec.k} className="flex items-baseline justify-between gap-4">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted-foreground">
                          {spec.k}
                        </dt>
                        <dd className="text-right text-sm font-medium">{spec.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
            Monitoring Solutions
          </div>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold sm:text-3xl">
            Why pharmaceutical storage matters
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whyStorageMatters.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-accent" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-[15px] text-muted-foreground">
            Medication storage is largely influenced by temperature, humidity, and
            sunlight. Pharmacists must guarantee their facilities have the proper
            equipment to keep medications at the temperature, moisture, and light
            conditions their code of ethics requires. You&rsquo;ll find these
            advantages when you transport pharmaceuticals and vaccinations with a
            team of professionals from 365 Health:
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {whyProfessionals.map((item) => (
              <div key={item.title}>
                <div className="font-display text-base font-semibold">{item.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
