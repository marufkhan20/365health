import { cn } from "cn";

/**
 * Stand-in for real photography (warehouse floor, fleet, product shots).
 * The live site's photo assets aren't available to this build, so this
 * renders a deliberate, on-brand placeholder — a duotone freight-manifest
 * pattern with a caption — rather than a broken image or generic gray box.
 * Swap for <Image src="..." /> once real photography is supplied.
 */
export function PhotoPanel({
  label,
  ratio = "4/3",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2px] border border-border bg-brand-deep",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-32deg, #fff 0 2px, transparent 2px 26px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 p-3">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-brand-deep-foreground/70">
          {label}
        </span>
        <span className="size-1.5 rounded-full bg-thermal" />
      </div>
    </div>
  );
}
