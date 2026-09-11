import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { TempGauge } from "@/components/temp-gauge";
import { complianceBand } from "@/lib/content";

export function ComplianceBand() {
  return (
    <section className="border-t border-border bg-brand-deep">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-[1.3fr_1fr] sm:items-end sm:gap-12">
          <div>
            <Eyebrow tone="inverted">{complianceBand.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold text-brand-deep-foreground sm:text-4xl">
              {complianceBand.heading}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="max-w-sm text-[15px] text-brand-deep-foreground/75">
              {complianceBand.copy}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <LinkButton
                href="/product-solutions"
                size="lg"
                className="bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/85"
              >
                Explore our technology
                <ArrowRight className="size-3.5" />
              </LinkButton>
              <TempGauge
                className="text-brand-deep-foreground/60"
                trackClassName="bg-brand-deep-foreground/25 before:bg-brand-deep-foreground/25 after:bg-brand-deep-foreground/25"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
