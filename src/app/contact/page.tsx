import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false });
  return {
    title: "Contact",
    description: `Reach 365 Health Logistics at ${settings?.address?.line1}, ${settings?.address?.line2}, or call ${settings?.phone}.`,
  };
}

export default async function ContactPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: CONTACT_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);
  if (!page) return null;

  return (
    <>
      <PageHero
        eyebrow="Connect With Us"
        title={page.title ?? "Contact"}
        crumb="Contact"
        image={page.heroImage ? urlFor(page.heroImage).width(1920).url() : undefined}
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-16 sm:grid-cols-[1.1fr_1fr]">
            <FadeIn>
              <div className="h-px w-10 bg-brand" />
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                {page.formHeading}
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
                Company Information
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  <div className="text-[15px]">
                    <div>{settings?.address?.line1}</div>
                    <div>{settings?.address?.line2}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  <a href={settings?.phoneHref} className="text-[15px] hover:text-brand">
                    {settings?.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  <a
                    href={`mailto:${settings?.email ?? ""}`}
                    className="text-[15px] hover:text-brand"
                  >
                    {settings?.email}
                  </a>
                </div>
              </div>

              {/* Free Maps embed — swap for the Maps Embed API + key in
                  production for reliability (this form can flash blank on
                  first paint in some regions/browsers without a key). */}
              {settings?.address?.line1 ? (
                <div className="mt-10 aspect-[4/3] overflow-hidden rounded-[2px] border border-border bg-muted">
                  <iframe
                    title="365 Health Logistics location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      [settings.address.line1, settings.address.line2].filter(Boolean).join(" "),
                    )}&output=embed`}
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
