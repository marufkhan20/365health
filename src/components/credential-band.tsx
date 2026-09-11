import { BadgeCheck, ScanBarcode, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import type { SITE_SETTINGS_QUERY_RESULT } from "sanity.types";

const ICONS: Record<string, LucideIcon> = {
  truck: Truck,
  "shield-check": ShieldCheck,
  "scan-barcode": ScanBarcode,
  "badge-check": BadgeCheck,
};

export function CredentialBand({
  credentials,
}: {
  credentials: NonNullable<SITE_SETTINGS_QUERY_RESULT>["credentials"];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {(credentials ?? []).map((c) => {
        const Icon = ICONS[c.icon ?? "badge-check"] ?? BadgeCheck;
        return (
          <div
            key={c._key}
            className="group relative overflow-hidden rounded-[3px] border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-brand" />
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-brand-deep-foreground">
              <Icon className="size-5" />
            </div>
            <div className="mt-3 font-display text-lg font-semibold leading-tight">
              {c.label}
            </div>
            <p className="mt-1.5 text-[13px] text-muted-foreground">{c.detail}</p>
          </div>
        );
      })}
    </div>
  );
}
