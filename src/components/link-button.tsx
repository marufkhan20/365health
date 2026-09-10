import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

/**
 * Base UI's <Button> enforces button semantics and shouldn't wrap an <a>.
 * For CTAs that navigate, apply the same variant classes directly to
 * next/link instead — see @base-ui/react/docs/react/components/button.md.
 */
export function LinkButton({
  href,
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Link>
  );
}
