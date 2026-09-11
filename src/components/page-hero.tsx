import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { FadeIn } from "@/components/fade-in";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-border bg-brand-deep">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/90 via-brand-deep/75 to-brand-deep/90" />
        <div className="relative mx-auto flex min-h-[300px] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[360px]">
          <FadeIn mount>
            <h1 className="text-4xl font-semibold text-brand-deep-foreground sm:text-5xl">
              {title}
            </h1>
          </FadeIn>
          <FadeIn mount delay={0.15}>
            <div className="mt-6 flex items-center gap-1.5 rounded-full border border-brand-deep-foreground/25 bg-brand-deep-foreground/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-brand-deep-foreground/85">
              <Link href="/" className="hover:text-brand-accent">
                Home
              </Link>
              <ChevronRight className="size-3" />
              <span>{crumb}</span>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

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
