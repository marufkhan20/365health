import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { deliveryIntro, deliveryOptions, deliveryTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Delivery",
  description:
    "Next-day, same-day, urgent, and inside delivery — 3PL licensed, HIPAA-compliant drivers and dispatchers.",
};

export default function DeliveryPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden border-b border-border aspect-[1920/350]">
        <Image
          src="/images/delivery-hero.png"
          alt="365 Health Logistics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="h-px w-10 bg-brand" />
            <h1 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
              Reliable and Trusted Deliveries
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              {deliveryIntro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-14">
            <div className="h-px w-10 bg-brand" />
            <h2 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
              Custom and White Glove Services
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] text-muted-foreground">
              Our white-glove services are tailored to meet your unique needs. Feel
              free to reach out to us for personalized solutions.
            </p>

            <ol className="mt-8 flex flex-col gap-5">
              {deliveryTiers.map((tier, i) => (
                <li key={tier.name} className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-brand/30 font-mono text-xs text-brand">
                    {i + 1}
                  </span>
                  <p className="text-[15px] text-muted-foreground">
                    <span className="font-display font-semibold uppercase tracking-tight text-foreground">
                      {tier.name}:
                    </span>{" "}
                    {tier.detail}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-14">
            <div className="h-px w-10 bg-brand" />
            <h2 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
              Reliable Delivery Options
            </h2>
            <ul className="mt-6 flex flex-col gap-2.5">
              {deliveryOptions.map((opt) => (
                <li key={opt.name} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {opt.detail}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-2xl text-[15px] text-muted-foreground">
              With our top-tier 3PL license and dedicated HIPAA-compliant drivers and
              dispatchers, we have the expertise and resources to tailor solutions
              perfectly suited to your needs. Trust us to deliver excellence
              personalized just for you!
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
