import type { Metadata } from "next";
import Image from "next/image";
import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { FadeIn } from "@/components/fade-in";
import { warehouseCapabilities, warehouseIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Warehouse & Fulfilment",
  description:
    "CA Board of Pharmacy licensed wholesale warehousing and fulfillment — returns, kitting, customization, and multi-site distribution.",
};

export default function WarehousePage() {
  return (
    <>
      <section className="relative w-full overflow-hidden border-b border-border aspect-[1914/497]">
        <Image
          src="/images/warehouse-hero.jpg"
          alt="365 Health Logistics warehouse racking"
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
              Warehouse and Fulfilment
            </h1>
            <p className="mt-6 text-[15px] font-semibold text-foreground">
              We&rsquo;re Your All-in-One Pharma Solution.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {warehouseIntro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 flex flex-col gap-5">
            {warehouseCapabilities.map((cap) => (
              <p key={cap.name} className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{cap.name}:</span>{" "}
                {cap.copy}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={0.15} className="mt-14">
            <div className="h-px w-10 bg-brand" />
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.06em] text-brand">
              Importance of Proper Pharmaceutical Storage
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              As a direct consequence of this, the requirements for storing
              different medications and the advice given by their manufacturers
              are not uniform. There are some that have to be kept at a cold
              temperature, such as the refrigerator or the freezer, while others
              may be kept at room temperature. Here are the reasons why
              it&rsquo;s so vital to monitor temperature and why it&rsquo;s so
              important to use the proper pharmaceutical storage keep
              medications in the proper manner.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2px] border border-border"
          >
            <Image
              src="/images/warehouse-2.jpg"
              alt="Cold storage racking aisle"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <AdvancedTechSection
        image="/images/warehouse-3.png"
        imageAlt="Air freight and ground fleet supporting 365 Health's warehouse network"
        bordered={false}
      />
    </>
  );
}
