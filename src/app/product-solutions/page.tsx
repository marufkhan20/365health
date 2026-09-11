import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";
import { ProductSlider } from "@/components/product-slider";
import { QuickMessageForm } from "@/components/quick-message-form";
import {
  cctRxFamily,
  cctRxSlides,
  getInTouch,
  productCategories,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Product Solutions",
  description:
    "CCT Rx™ temperature-controlled containers, pallet shippers, Tyvek® thermal covers, and monitoring solutions for pharma and biotech cold chain.",
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
      <section className="relative w-full overflow-hidden border-b border-border aspect-[1920/400]">
        <Image
          src="/images/products/products-hero.jpg"
          alt="365 Health Logistics packing a temperature-controlled shipping container"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <FadeIn>
            <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
              Products and Solutions
            </h1>
            <p className="mt-6 text-center text-[15px] leading-relaxed text-muted-foreground">
              Packaging requirements vary — some medications require
              refrigeration or freezing, while others remain stable at room
              temperature. Proper temperature monitoring is essential to
              preserving their effectiveness. We provide a range of packaging
              solutions for temperature-sensitive medications and products.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="h-px w-10 bg-brand" />
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">
              {cctRxFamily.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] text-muted-foreground">
              {cctRxFamily.copy}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <ProductSlider images={cctRxSlides} />
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="h-px w-10 bg-brand" />
          </FadeIn>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {productCategories.map((cat, i) => (
              <FadeIn key={cat.name} delay={i * 0.1}>
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  {cat.name}
                </h3>
                <div className="relative mt-5 aspect-square overflow-hidden rounded-[2px] border border-border bg-card">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-8"
                    sizes="(min-width: 640px) 33vw, 90vw"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{cat.copy}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <Eyebrow>Monitoring Solutions</Eyebrow>
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
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 grid gap-8 sm:grid-cols-2">
            {whyProfessionals.map((item) => (
              <div key={item.title}>
                <div className="font-display text-base font-semibold">{item.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-14 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
            <FadeIn>
              <Eyebrow>{getInTouch.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                {getInTouch.heading}
              </h2>
              <p className="mt-5 max-w-md text-[15px] text-muted-foreground">
                {getInTouch.copy}
              </p>
            </FadeIn>
            <FadeIn
              delay={0.15}
              className="rounded-[2px] border border-border bg-card p-7 sm:p-9"
            >
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.06em] text-brand">
                {getInTouch.formHeading}
              </div>
              <QuickMessageForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
