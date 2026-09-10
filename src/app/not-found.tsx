import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { TempGauge } from "@/components/temp-gauge";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-24 sm:py-32">
      <Eyebrow>404 · Off Route</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        This shipment took a wrong turn.
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
        Let&rsquo;s get you back on the manifest.
      </p>
      <div className="mt-8 flex items-center gap-6">
        <LinkButton href="/" size="lg">
          Back to home
          <ArrowRight className="size-3.5" />
        </LinkButton>
        <TempGauge />
      </div>
    </section>
  );
}
