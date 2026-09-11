import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { serviceCategories } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive cold chain logistics services for the pharmaceutical and biotech sector.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services"
        crumb="Services"
        image="/images/services-hero.webp"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn className="text-center">
            <Eyebrow className="mx-auto w-fit">What We Offer</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Every part of the cold chain, handled
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {serviceCategories.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.1}>
                <Link href={s.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-border">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 text-center font-display text-xl font-semibold uppercase tracking-tight group-hover:text-brand">
                    {s.name}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* <ComplianceBand /> */}
    </>
  );
}
