import { clients } from "@/lib/content";

export function ClientLogoRow() {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
      {clients.map((name) => (
        <span
          key={name}
          className="font-display text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-brand"
        >
          {name}
        </span>
      ))}
    </div>
  );
}
