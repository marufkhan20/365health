import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">{crumb}</span>
        </div>
        <Eyebrow className="mt-6">{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-[16.5px] text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
