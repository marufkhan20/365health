import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";
import { ProductSlider } from "@/components/product-slider";
import { QuickMessageForm } from "@/components/quick-message-form";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { PRODUCT_SOLUTIONS_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Product Solutions",
  description:
    "CCT Rx™ temperature-controlled containers, pallet shippers, Tyvek® thermal covers, and monitoring solutions for pharma and biotech cold chain.",
};

export default async function ProductSolutionsPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: PRODUCT_SOLUTIONS_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ]);
  if (!page) return null;

  return (
    <>
      {page.heroImage ? (
        <section className="relative w-full overflow-hidden border-b border-border aspect-[1920/400]">
          <Image
            src={urlFor(page.heroImage).width(1920).url()}
            alt={page.heroImage.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </section>
      ) : null}

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <FadeIn>
            <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-6 text-center text-[15px] leading-relaxed text-muted-foreground">
              {page.introCopy}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="h-px w-10 bg-brand" />
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">
              {page.cctRxHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] text-muted-foreground">
              {page.cctRxCopy}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <ProductSlider
              images={(page.cctRxSlides ?? []).map((img) => ({
                src: urlFor(img).width(600).url(),
                alt: img.alt ?? "",
              }))}
            />
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="h-px w-10 bg-brand" />
          </FadeIn>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {(page.categories ?? []).map((cat, i) => (
              <FadeIn key={cat._key} delay={i * 0.1}>
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  {cat.name}
                </h3>
                <div className="relative mt-5 aspect-square overflow-hidden rounded-[2px] border border-border bg-card">
                  {cat.image ? (
                    <Image
                      src={urlFor(cat.image).width(600).url()}
                      alt={cat.image.alt ?? cat.name ?? ""}
                      fill
                      className="object-contain p-8"
                      sizes="(min-width: 640px) 33vw, 90vw"
                    />
                  ) : null}
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
            <Eyebrow>{page.whyStorageEyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold sm:text-3xl">
              {page.whyStorageHeading}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {(page.whyStorageBullets ?? []).map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-[15px] text-muted-foreground">
              {page.whyStorageCopy}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 grid gap-8 sm:grid-cols-2">
            {(page.whyProfessionals ?? []).map((item) => (
              <div key={item._key}>
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
              <Eyebrow>{settings?.getInTouch?.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                {settings?.getInTouch?.heading}
              </h2>
              <p className="mt-5 max-w-md text-[15px] text-muted-foreground">
                {settings?.getInTouch?.copy}
              </p>
            </FadeIn>
            <FadeIn
              delay={0.15}
              className="rounded-[2px] border border-border bg-card p-7 sm:p-9"
            >
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.06em] text-brand">
                {settings?.getInTouch?.formHeading}
              </div>
              <QuickMessageForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
