import Link from "next/link";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import { TempGauge } from "@/components/temp-gauge";
import { company, footerNavItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-brand-accent" />
              <span className="font-display text-xl font-semibold tracking-tight text-brand-deep-foreground">
                {company.shortName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] text-brand-deep-foreground/70">
              {company.tagline}.
            </p>
            <TempGauge
              className="mt-6 text-brand-deep-foreground/60"
              trackClassName="bg-brand-deep-foreground/25 before:bg-brand-deep-foreground/25 after:bg-brand-deep-foreground/25"
            />
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand-deep-foreground/60">
              Navigate
            </div>
            <nav className="mt-3 flex flex-col gap-2">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-brand-deep-foreground/85 hover:text-brand-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand-deep-foreground/60">
              Contact
            </div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-brand-deep-foreground/85">
              <span>{company.address.line1}</span>
              <span>{company.address.line2}</span>
              <a href={company.phoneHref} className="hover:text-brand-accent">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="hover:text-brand-accent">
                {company.email}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={company.social.facebook}
                aria-label="Facebook"
                className="text-brand-deep-foreground/70 hover:text-brand-accent"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={company.social.x}
                aria-label="X"
                className="text-brand-deep-foreground/70 hover:text-brand-accent"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href={company.social.instagram}
                aria-label="Instagram"
                className="text-brand-deep-foreground/70 hover:text-brand-accent"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-brand-deep-foreground/15 pt-6 font-mono text-[11px] text-brand-deep-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Chatsworth, CA · Cold Chain 3PL</span>
        </div>
      </div>
    </footer>
  );
}
