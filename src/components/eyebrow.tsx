import { cn } from "cn";

export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "inverted";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] uppercase",
        tone === "brand" ? "text-brand" : "text-brand-deep-foreground/80",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-4.5",
          tone === "brand" ? "bg-brand" : "bg-brand-deep-foreground/60"
        )}
      />
      {children}
    </div>
  );
}
