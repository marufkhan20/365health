import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { GelPackGallery } from "@/components/gel-pack-gallery";
import { LinkButton } from "@/components/link-button";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import {
  GEL_PACKS_PAGE_QUERY,
  GEL_PACK_PRODUCTS_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Flexible Hot/Cold Gel Packs",
  description:
    "Reusable, non-toxic flexible hot/cold gel packs — small, medium, and large, with and without wraps. Wholesale inquiries welcome.",
};

export default async function GelPacksPage() {
  const [{ data: page }, { data: gelPacks }, { data: settings }] = await Promise.all([
    sanityFetch({ query: GEL_PACKS_PAGE_QUERY, stega: false }),
    sanityFetch({ query: GEL_PACK_PRODUCTS_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);
  if (!page) return null;

  return (
    <>
      {page.heroImage ? (
        <section className="relative w-full overflow-hidden border-b border-border aspect-[1920/350]">
          <Image
            src={urlFor(page.heroImage).width(1920).url()}
            alt={page.heroImage.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/55 to-transparent" />
          <div className="relative flex h-full items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <FadeIn mount>
                <h1 className="max-w-md font-display text-2xl font-semibold text-brand-deep sm:text-3xl">
                  {page.title}
                </h1>
              </FadeIn>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex flex-col">
            {(gelPacks ?? []).map((pack, i) => (
              <FadeIn
                key={pack._id}
                delay={Math.min(i, 3) * 0.06}
                className="grid gap-10 border-t border-border py-12 first:border-t-0 first:pt-0 sm:grid-cols-2 sm:items-start"
              >
                <div className="mx-auto w-full max-w-sm sm:mx-0">
                  <GelPackGallery
                    images={(pack.images ?? []).map((img) => urlFor(img).width(800).url())}
                    alt={pack.name ?? ""}
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                    {pack.name} - {pack.label ?? pack.size}
                  </h2>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.06em] text-brand">
                    Features &amp; Specifications
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {[pack.dimensions, pack.weight, ...(pack.features ?? [])].map((item) => (
                      <li key={item} className="flex items-baseline gap-2.5 text-[15px] text-muted-foreground">
                        <span className="size-1 shrink-0 -translate-y-0.5 rounded-full bg-brand-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <LinkButton href="/contact" size="lg" className="mt-6">
                    Contact Us
                  </LinkButton>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center sm:py-16">
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-brand">
            {page.wholesaleEyebrow}
          </div>
          <a
            href={`mailto:${settings?.email ?? ""}`}
            className="mt-3 inline-flex items-center gap-2 font-display text-2xl font-semibold text-secondary-foreground hover:text-brand sm:text-3xl"
          >
            Email us at {settings?.email}
            <ArrowRight className="size-5" />
          </a>
        </div>
      </section>
    </>
  );
}
