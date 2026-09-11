import { AdvancedTechSection } from "@/components/advanced-tech-section";
import { ClientLogoSlider } from "@/components/client-logo-slider";
import { CredentialBand } from "@/components/credential-band";
import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";
import { HeroImage } from "@/components/hero-image";
import { LinkButton } from "@/components/link-button";
import { QuickMessageForm } from "@/components/quick-message-form";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { cn } from "cn";
import { ArrowRight, User, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  // stega: false — Visual Editing isn't wired up yet, and some of this data
  // (e.g. credential icon keys) flows into logic, not just display.
  const [{ data: home }, { data: settings }] = await Promise.all([
    sanityFetch({ query: HOME_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);

  if (!home || !settings) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-brand-deep">
        {home.heroImage ? (
          <HeroImage
            src={urlFor(home.heroImage).width(1920).url()}
            alt={home.heroImage.alt ?? ""}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/85 to-brand-deep/45" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <FadeIn mount>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] text-brand-deep-foreground sm:text-6xl lg:text-7xl">
              {settings.tagline}.
            </h1>
          </FadeIn>
          <FadeIn mount delay={0.15}>
            <p className="mt-6 max-w-lg text-[17px] text-brand-deep-foreground/75">
              {settings.subhead}
            </p>
          </FadeIn>

          <FadeIn mount delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <LinkButton
                href="/services"
                size="lg"
                className="bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/85"
              >
                {home.primaryCtaLabel ?? "Discover our solutions"}
                <ArrowRight className="size-3.5" />
              </LinkButton>
              <LinkButton
                href="/request-a-quote"
                variant="outline"
                size="lg"
                className="border-brand-deep-foreground/30 bg-transparent text-brand-deep-foreground hover:bg-brand-deep-foreground/10"
              >
                {home.secondaryCtaLabel ?? "Request a quote"}
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
            {home.clientsHeading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mx-auto mt-8 max-w-6xl px-6 pb-12 sm:pb-16">
          <ClientLogoSlider
            clients={(home.clients ?? [])
              .filter((c) => c.logo)
              .map((c) => ({ name: c.name ?? "", logo: urlFor(c.logo!).width(320).url() }))}
          />
        </FadeIn>
      </section>

      {/* On-Time Delivery / Secure Storage Capacity / Products and Solutions —
          one unified band on the live site, directly under the client logos */}
      <section className="border-b border-border bg-brand-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 divide-brand-deep-foreground/15 sm:grid-cols-3 sm:gap-0 sm:divide-x">
            <FadeIn className="sm:pr-10">
              <Eyebrow tone="inverted">{home.deliveryHeading}</Eyebrow>
              <div className="mt-5 flex flex-col gap-4">
                {(home.featuredDeliveryTiers ?? []).map((tier) => (
                  <div key={tier._id}>
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
              <Eyebrow tone="inverted">{home.storageHeading}</Eyebrow>
              <p className="mt-5 text-[15px] text-brand-deep-foreground/75">
                {home.storageCopy}
              </p>
              <Link
                href="/warehouse"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.06em] text-brand-deep-foreground hover:text-brand-accent"
              >
                Warehouse & fulfillment <ArrowRight className="size-3.5" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="sm:pl-10">
              <Eyebrow tone="inverted">{home.productsHeading}</Eyebrow>
              <p className="mt-5 text-[15px] text-brand-deep-foreground/75">
                {home.productsCopy}
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
                {home.whoWeAreHeading}
              </h2>
              <p className="mt-5 text-[15px] text-muted-foreground">
                {home.whoWeAreCopy}
              </p>
              <LinkButton href="/services" size="lg" className="mt-7">
                Discover our solutions
                <ArrowRight className="size-3.5" />
              </LinkButton>
            </FadeIn>
            {home.whoWeAreImage ? (
              <FadeIn
                delay={0.15}
                className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-border sm:aspect-square"
              >
                <Image
                  src={urlFor(home.whoWeAreImage).width(1000).url()}
                  alt={home.whoWeAreImage.alt ?? ""}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </FadeIn>
            ) : null}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <Eyebrow>What We Offer</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold sm:text-4xl">
              {home.offerHeading}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] text-muted-foreground">
              {home.offerCopy}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12 grid gap-10 sm:grid-cols-2">
            {(home.offerItems ?? []).map((s) => (
              <div key={s._key} className="border-t border-border pt-5">
                <div className="flex size-11 items-center justify-center rounded-[2px] border border-border bg-secondary">
                  {s.icon ? (
                    <Image
                      src={urlFor(s.icon).width(48).url()}
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
            <CredentialBand credentials={settings.credentials} />
          </FadeIn>
        </div>
      </section>

      {home.advancedTechImage ? (
        <AdvancedTechSection
          image={urlFor(home.advancedTechImage).width(1200).url()}
          imageAlt={home.advancedTechImage.alt ?? ""}
          complianceBand={settings.complianceBand}
        />
      ) : null}

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
                {home.testimonialIntro}
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="flex flex-col gap-4">
              {(home.testimonialQuoteParts ?? []).map((part, i) => (
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
                — {home.testimonialAttribution}
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
              <Eyebrow>{settings.getInTouch?.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                {settings.getInTouch?.heading}
              </h2>
              <p className="mt-5 max-w-md text-[15px] text-muted-foreground">
                {settings.getInTouch?.copy}
              </p>
            </FadeIn>
            <FadeIn
              delay={0.15}
              className="rounded-[2px] border border-border bg-card p-7 sm:p-9"
            >
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.06em] text-brand">
                {settings.getInTouch?.formHeading}
              </div>
              <QuickMessageForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
