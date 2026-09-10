import { cn } from "cn";

/**
 * The site's recurring visual signature: a redraw of the temperature-range
 * indicator printed on 365 Health's own thermal shippers (e.g. 2°C-8°C
 * refrigerated range). Used as a section marker in place of stock icons.
 */
export function TempGauge({
  low = "2°C",
  high = "8°C",
  position = 0.38,
  className,
  trackClassName,
}: {
  low?: string;
  high?: string;
  position?: number;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs text-muted-foreground",
        className
      )}
    >
      <span className="tabular-nums">{low}</span>
      <span
        className={cn(
          "relative h-px w-24 bg-border before:absolute before:-top-[3px] before:left-0 before:h-[7px] before:w-px before:bg-border after:absolute after:-top-[3px] after:right-0 after:h-[7px] after:w-px after:bg-border",
          trackClassName
        )}
      >
        <span
          className="absolute top-1/2 size-[7px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-thermal"
          style={{ left: `${position * 100}%` }}
        />
      </span>
      <span className="tabular-nums">{high}</span>
    </div>
  );
}
