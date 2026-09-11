import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { ClientLogoSlider } from "@/components/client-logo-slider";
import { CredentialBand } from "@/components/credential-band";
import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";
import { HeroImage } from "@/components/hero-image";
import { LinkButton } from "@/components/link-button";
import { QuickMessageForm } from "@/components/quick-message-form";
import {
  company,
  deliveryTiers,
  getInTouch,
  serviceCopy,
  services,
  testimonial,
  testimonialIntro,
} from "@/lib/content";
import { cn } from "cn";
import { ArrowRight, User, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-brand-deep">
        <HeroImage
          src="/images/home-hero.png"
          alt="A 365 Health Logistics courier loading temperature-sensitive packages into a delivery van"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/85 to-brand-deep/45" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <FadeIn mount>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] text-brand-deep-foreground sm:text-6xl lg:text-7xl">
              {company.tagline}.
            </h1>
          </FadeIn>
          <FadeIn mount delay={0.15}>
            <p className="mt-6 max-w-lg text-[17px] text-brand-deep-foreground/75">
              {company.subhead}
            </p>
          </FadeIn>

          <FadeIn mount delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <LinkButton
                href="/services"
                size="lg"
                className="bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/85"
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
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Clients */}
      <section className="border-b border-border">
        <FadeIn className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">
          <Eyebrow>Our Clients</Eyebrow>
          <h2 className="mt-4 max-w-lg text-2xl font-semibold sm:text-3xl">
            Trusted by professionals
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mx-auto mt-8 max-w-6xl px-6 pb-12 sm:pb-16">
          <ClientLogoSlider />
        </FadeIn>
      </section>

      {/* On-Time Delivery / Secure Storage Capacity / Products and Solutions —
          one unified band on the live site, directly under the client logos */}
      <section className="border-b border-border bg-brand-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 divide-brand-deep-foreground/15 sm:grid-cols-3 sm:gap-0 sm:divide-x">
            <FadeIn className="sm:pr-10">
              <Eyebrow tone="inverted">On-Time Delivery</Eyebrow>
              <div className="mt-5 flex flex-col gap-4">
                {deliveryTiers.map((tier) => (
                  <div key={tier.name}>
                    <div className="font-display text-lg font-semibold text-brand-deep-foreground">
                      {tier.name}
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] tabular-nums text-brand-accent">
                      {tier.window}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="sm:px-10">
              <Eyebrow tone="inverted">Secure Storage Capacity</Eyebrow>
              <p className="mt-5 text-[15px] text-brand-deep-foreground/75">
                Our Southern California warehouse efficiently stores regular and
                temperature-controlled biopharma products, with up-to-date
                inventory counts. One convenient location streamlines storage
                and delivery — no need for multiple intermediaries.
              </p>
              <Link
                href="/warehouse"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.06em] text-brand-deep-foreground hover:text-brand-accent"
              >
                Warehouse & fulfillment <ArrowRight className="size-3.5" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="sm:pl-10">
              <Eyebrow tone="inverted">Products and Solutions</Eyebrow>
              <p className="mt-5 text-[15px] text-brand-deep-foreground/75">
                Our company offers a diverse range of meticulously engineered
                thermal packaging solutions tailored specifically for the
                pharmaceutical and biotech industries. Our products are
                designed to meet the rigorous demands of temperature-sensitive
                items.
              </p>
              <Link
                href="/product-solutions"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.06em] text-brand-deep-foreground hover:text-brand-accent"
              >
                Product solutions <ArrowRight className="size-3.5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who we are + services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
            <FadeIn>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Your partners in cold storage medical logistics
              </h2>
              <p className="mt-5 text-[15px] text-muted-foreground">
                At 365 Health Logistics, we specialize in the cold-storage
                transportation of pharmaceuticals and medications. With a
                commitment to safety, reliability, and compliance, we provide
                end-to-end logistics solutions that protect the integrity of
                your products every step of the way. Our state-of-the-art
                technology and trained professionals ensure your medical
                supplies are handled with the utmost care and precision.
              </p>
              <LinkButton href="/services" size="lg" className="mt-7">
                Discover our solutions
                <ArrowRight className="size-3.5" />
              </LinkButton>
            </FadeIn>
            <FadeIn
              delay={0.15}
              className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-border sm:aspect-square"
            >
              <Image
                src="/images/who-we-are.png"
                alt="Air freight, trucks, and last-mile vans supporting 365 Health's cold chain network"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <Eyebrow>What We Offer</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold sm:text-4xl">
              Comprehensive cold chain logistics services
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] text-muted-foreground">
              {serviceCopy}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12 grid gap-10 sm:grid-cols-2">
            {services.slice(0, 2).map((s) => (
              <div key={s.name} className="border-t border-border pt-5">
                <div className="flex size-11 items-center justify-center rounded-[2px] border border-border bg-secondary">
                  {s.icon ? (
                    <Image
                      src={s.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 dark:invert"
                    />
                  ) : (
                    <Warehouse className="size-5 text-brand" />
                  )}
                </div>
                <div className="mt-4 font-display text-lg font-semibold">
                  {s.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.15}>
            <LinkButton href="/services" size="lg" className="mt-10">
              View our services
              <ArrowRight className="size-3.5" />
            </LinkButton>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-14">
            <CredentialBand />
          </FadeIn>
        </div>
      </section>

      <AdvancedTechSection
        image="/images/who-we-are.png"
        imageAlt="Air freight and ground fleet supporting 365 Health's temperature-monitoring technology"
      />

      {/* Testimonial */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.1fr] sm:items-start sm:gap-16">
            <FadeIn>
              <Eyebrow>Hear From Our Clients</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Trusted by professionals
              </h2>
              <p className="mt-5 max-w-sm text-[15px] text-muted-foreground">
                {testimonialIntro}
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="flex flex-col gap-4">
              {testimonial.quoteParts.map((part, i) => (
                <div
                  key={part}
                  className={cn(
                    "flex items-start gap-3 rounded-[2px] border p-5",
                    i === 0
                      ? "border-brand/30 bg-brand-tint"
                      : "border-border bg-card"
                  )}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-brand-deep-foreground">
                    <User className="size-4" />
                  </span>
                  <p className="text-[15px] text-foreground">{part}</p>
                </div>
              ))}
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
                — {testimonial.attribution}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
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
