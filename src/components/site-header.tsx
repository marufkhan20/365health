"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LinkButton } from "@/components/link-button";
import type { SITE_SETTINGS_QUERY_RESULT } from "sanity.types";

const navLinkStyle =
  "rounded-[2px] px-3 py-2 font-mono text-[11.5px] uppercase tracking-[0.05em] transition-colors";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-4 scale-100 dark:scale-0" />
      <Moon className="absolute size-4 scale-0 dark:scale-100" />
    </Button>
  );
}

export function SiteHeader({ settings }: { settings: SITE_SETTINGS_QUERY_RESULT }) {
  const pathname = usePathname();
  const navItems = settings?.navItems ?? [];
  const companyName = settings?.name ?? "365 Health Logistics";
  const companyShortName = settings?.shortName ?? "365 Health";
  const phone = settings?.phone ?? "";
  const phoneHref = settings?.phoneHref ?? "";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6">
        <Link href="/" className="shrink-0 dark:rounded-[3px] dark:bg-white dark:px-2 dark:py-1.5">
          <Image
            src="/images/logo.png"
            alt={companyName}
            width={152}
            height={50}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <NavigationMenu className="ml-2 hidden max-w-none justify-start lg:flex" align="start">
          <NavigationMenuList className="gap-0.5">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const active =
                pathname === item.href ||
                (hasChildren && item.children!.some((c) => c.href === pathname));

              if (!hasChildren) {
                return (
                  <NavigationMenuItem key={item._key}>
                    <NavigationMenuLink
                      render={<Link href={item.href ?? "/"} />}
                      className={cn(
                        navLinkStyle,
                        active ? "text-brand" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item._key}>
                  <NavigationMenuTrigger
                    render={<Link href={item.href ?? "/"} />}
                    nativeButton={false}
                    className={cn(
                      navLinkStyle,
                      "h-auto bg-transparent hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent",
                      active ? "text-brand" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex w-64 flex-col gap-0.5 p-1.5">
                      {(item.children ?? []).map((child) => (
                        <li key={child._key}>
                          <NavigationMenuLink
                            render={<Link href={child.href ?? "/"} />}
                            className="rounded-[2px] px-3 py-2.5 text-[14px] font-medium text-foreground hover:bg-muted"
                          >
                            {child.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <LinkButton
            href="/request-a-quote"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Request a quote
          </LinkButton>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="font-display text-lg">
                  {companyShortName}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <div key={item._key}>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href={item.href ?? "/"}
                          className="block rounded-[2px] px-2 py-2.5 font-mono text-sm uppercase tracking-[0.04em] text-foreground hover:bg-muted"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                    {item.children?.length ? (
                      <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <SheetClose
                            key={child._key}
                            nativeButton={false}
                            render={
                              <Link
                                href={child.href ?? "/"}
                                className="block rounded-[2px] px-2 py-2 font-mono text-xs uppercase tracking-[0.04em] text-muted-foreground hover:bg-muted hover:text-foreground"
                              />
                            }
                          >
                            {child.label}
                          </SheetClose>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
                <LinkButton href="/request-a-quote" size="lg">
                  Request a quote
                </LinkButton>
                <a
                  href={phoneHref}
                  className="text-center font-mono text-sm text-muted-foreground"
                >
                  {phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
