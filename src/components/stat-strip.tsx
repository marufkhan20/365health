import { cn } from "cn";

export function StatStrip({
  stats,
  className,
}: {
  stats: readonly { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 divide-x divide-border/60 border-t border-border",
        className
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="px-4 pt-4 first:pl-0 sm:px-6 sm:pt-5">
          <div className="font-mono text-2xl font-medium tabular-nums sm:text-3xl">
            {s.value}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
