import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TempGauge } from "@/components/temp-gauge";
import { ComplianceBand } from "@/components/compliance-band";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deliveryOptions, deliveryTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Delivery",
  description:
    "Next-day, same-day, and urgent cold-chain delivery — 3PL licensed, HIPAA-compliant drivers and dispatchers.",
};

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Impeccable Expertise in Tailored Solutions"
        title="Delivery built around your window, not ours"
        subtitle="Embrace peace of mind with our 3PL license, HIPAA-compliant team of drivers and dispatchers, and a versatile fleet featuring small units, sprinters, and box trucks."
        crumb="Delivery"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
            Custom & White Glove Services
          </div>
          <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">
            Our white-glove services are tailored to meet your unique needs. Feel
            free to reach out to us for personalized solutions.
          </p>

          <div className="mt-10 overflow-x-auto rounded-[2px] border border-border">
            <Table className="min-w-[520px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Tier</TableHead>
                  <TableHead>Window</TableHead>
                  <TableHead>Detail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveryTiers.map((tier) => (
                  <TableRow key={tier.name}>
                    <TableCell className="font-display text-base font-semibold">
                      {tier.name}
                    </TableCell>
                    <TableCell className="font-mono tabular-nums text-brand-accent">
                      {tier.window}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{tier.detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <TempGauge className="mt-8" />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
            Reliable Delivery Options
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-4">
            {deliveryOptions.map((opt) => (
              <div key={opt.name} className="bg-card p-5">
                <div className="font-display text-base font-semibold">{opt.name}</div>
                <p className="mt-1.5 text-[13px] text-muted-foreground">{opt.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[15px] text-muted-foreground">
            With our top-tier 3PL license and dedicated HIPAA-compliant drivers and
            dispatchers, we have the expertise and resources to tailor solutions
            perfectly suited to your needs.
          </p>
        </div>
      </section>

      <ComplianceBand />
    </>
  );
}
