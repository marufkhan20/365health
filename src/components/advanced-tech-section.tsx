import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";
import { LinkButton } from "@/components/link-button";
import { cn } from "cn";
import type { SITE_SETTINGS_QUERY_RESULT } from "sanity.types";

/**
 * The "Advanced Technology & Strict Compliance" content, repeated as a
 * light image+text section on the homepage and About page (the shared
 * dark CTA band — <ComplianceBand /> — carries the same copy on the
 * other interior pages instead).
 */
export function AdvancedTechSection({
  image,
  imageAlt,
  complianceBand,
  bordered = true,
}: {
  image: string;
  imageAlt: string;
  complianceBand: NonNullable<SITE_SETTINGS_QUERY_RESULT>["complianceBand"];
  bordered?: boolean;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
          <FadeIn
            className={cn(
              "relative overflow-hidden sm:order-1",
              bordered
                ? "aspect-[4/3] rounded-[2px] border border-border sm:aspect-square"
                : "aspect-[958/652]"
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.15} className="sm:order-2">
            <Eyebrow>{complianceBand?.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              {complianceBand?.heading}
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground">
              {complianceBand?.copy}
            </p>
            <LinkButton href="/product-solutions" size="lg" className="mt-7">
              Explore our technology
              <ArrowRight className="size-3.5" />
            </LinkButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
