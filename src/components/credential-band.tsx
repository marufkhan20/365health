import { credentials } from "@/lib/content";

export function CredentialBand() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-border bg-border sm:grid-cols-4">
      {credentials.map((c) => (
        <div key={c.label} className="bg-card p-5">
          <div className="font-display text-lg font-semibold leading-tight">{c.label}</div>
          <p className="mt-1.5 text-[13px] text-muted-foreground">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}
