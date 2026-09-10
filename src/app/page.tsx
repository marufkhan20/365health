import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { TempGauge } from "@/components/temp-gauge";
import { PhotoPanel } from "@/components/photo-panel";
import { CredentialBand } from "@/components/credential-band";
import { ClientLogoRow } from "@/components/client-logo-row";
import { ComplianceBand } from "@/components/compliance-band";
import {
  company,
  deliveryTiers,
  heroStats,
  services,
  testimonial,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-brand-deep">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-32deg, #fff 0 2px, transparent 2px 26px)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow tone="inverted">Southern California · Cold Chain 3PL</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] text-brand-deep-foreground sm:text-6xl lg:text-7xl">
            {company.tagline}.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] text-brand-deep-foreground/75">
            {company.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <LinkButton
              href="/services"
              size="lg"
              className="bg-thermal text-thermal-foreground hover:bg-thermal/85"
            >
              Discover our solutions
              <ArrowRight className="size-3.5" />
            </LinkButton>
            <LinkButton
              href="/request-a-quote"
              variant="outline"
              size="lg"
              className="border-brand-deep-foreground/30 bg-transparent text-brand-deep-foreground hover:bg-brand-deep-foreground/10"
            >
              Request a quote
            </LinkButton>
            <TempGauge
              className="text-brand-deep-foreground/55"
              trackClassName="bg-brand-deep-foreground/25 before:bg-brand-deep-foreground/25 after:bg-brand-deep-foreground/25"
            />
          </div>

          <div className="mt-16 grid grid-cols-3 divide-x divide-brand-deep-foreground/15 border-t border-brand-deep-foreground/15 pt-6 sm:max-w-xl">
            {heroStats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0 sm:px-6">
                <div className="font-mono text-2xl font-medium tabular-nums text-brand-deep-foreground sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.06em] text-brand-deep-foreground/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery tiers */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Eyebrow>On-Time Delivery</Eyebrow>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold sm:text-4xl">
            Next day, same day, or urgent — your window, our commitment.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-3">
            {deliveryTiers.map((tier) => (
              <div key={tier.name} className="bg-card p-6">
                <div className="font-mono text-xs uppercase tracking-[0.06em] text-thermal">
                  {tier.window}
                </div>
                <div className="mt-2 font-display text-xl font-semibold">{tier.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse + Products split */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-14 sm:grid-cols-2">
            <div>
              <Eyebrow>Secure Storage Capacity</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Warehousing</h2>
              <p className="mt-4 text-[15px] text-muted-foreground">
                Our Southern California warehouse efficiently stores regular and
                temperature-controlled biopharma products, with up-to-date inventory
                counts. One convenient location streamlines storage and delivery —
                no need for multiple intermediaries.
              </p>
              <PhotoPanel label="Cold storage warehouse — Chatsworth, CA" className="mt-6" ratio="16/10" />
              <Link
                href="/warehouse"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.06em] text-brand hover:underline"
              >
                Warehouse & fulfillment <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div>
              <Eyebrow>Products and Solutions</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Thermal packaging, engineered
              </h2>
              <p className="mt-4 text-[15px] text-muted-foreground">
                A diverse range of meticulously engineered thermal packaging
                solutions, tailored for the pharmaceutical and biotech industries —
                built to meet the rigorous demands of temperature-sensitive items.
              </p>
              <PhotoPanel label="CCT Rx™ thermal shippers" className="mt-6" ratio="16/10" />
              <Link
                href="/product-solutions"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.06em] text-brand hover:underline"
              >
                Product solutions <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are + services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold sm:text-4xl">
            Your partners in cold storage medical logistics
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] text-muted-foreground">
            At 365 Health Logistics, we specialize in the cold-storage transportation
            of pharmaceuticals and medications. With a commitment to safety,
            reliability, and compliance, we provide end-to-end logistics solutions
            that protect the integrity of your products every step of the way. Our
            state-of-the-art technology and trained professionals ensure your
            medical supplies are handled with the utmost care and precision.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="border-t border-border pt-5">
                <div className="font-display text-lg font-semibold">{s.name}</div>
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

          <div className="mt-14">
            <CredentialBand />
          </div>
        </div>
      </section>

      {/* Clients + testimonial */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-14 sm:grid-cols-[1fr_1.1fr]">
            <div>
              <Eyebrow>Our Clients</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Trusted by professionals
              </h2>
              <div className="mt-8">
                <ClientLogoRow />
              </div>
            </div>
            <div className="border-l border-border pl-8">
              <Eyebrow>Hear From Our Clients</Eyebrow>
              <blockquote className="mt-4 text-xl font-medium leading-snug text-foreground sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
                — {testimonial.attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
