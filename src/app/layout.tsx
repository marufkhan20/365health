import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import "./globals.css";

const fontDisplay = Big_Shoulders({
  variable: "--font-display",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const fontSans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // stega markers must never leak into metadata/SEO output.
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false });

  return {
    metadataBase: new URL("https://365health.global"),
    title: {
      default: `${settings?.name} | ${settings?.tagline}`,
      template: `%s | ${settings?.shortName}`,
    },
    description: settings?.subhead,
    openGraph: {
      title: settings?.name,
      description: settings?.subhead,
      siteName: settings?.name,
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // stega: false — Visual Editing isn't wired up yet, and this data flows
  // into logic (icon lookups) as well as display, so keep it plain strings.
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false });

  const structuredData = settings && {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: settings.name,
    description: settings.subhead,
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address?.line1,
      addressLocality: "Chatsworth",
      addressRegion: "CA",
      postalCode: "91311",
      addressCountry: "US",
    },
    url: "https://365health.global",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {structuredData ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        ) : null}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <SiteHeader settings={settings} />
            <main className="flex-1">{children}</main>
            <SiteFooter settings={settings} />
          </MotionConfig>
        </ThemeProvider>
        <SanityLive />
      </body>
    </html>
  );
}
