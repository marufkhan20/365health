import Link from "next/link";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import { TempGauge } from "@/components/temp-gauge";
import { company, navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-thermal" />
              <span className="font-display text-xl font-semibold tracking-tight">
                {company.shortName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] text-muted-foreground">
              {company.tagline}.
            </p>
            <TempGauge className="mt-6" />
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
              Navigate
            </div>
            <nav className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
              Contact
            </div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/80">
              <span>{company.address.line1}</span>
              <span>{company.address.line2}</span>
              <a href={company.phoneHref} className="hover:text-brand">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="hover:text-brand">
                {company.email}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={company.social.facebook}
                aria-label="Facebook"
                className="text-muted-foreground hover:text-brand"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={company.social.x}
                aria-label="X"
                className="text-muted-foreground hover:text-brand"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href={company.social.instagram}
                aria-label="Instagram"
                className="text-muted-foreground hover:text-brand"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Chatsworth, CA · Cold Chain 3PL</span>
        </div>
      </div>
    </footer>
  );
}
