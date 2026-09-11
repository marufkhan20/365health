import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/content";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://365health.global"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.subhead,
  openGraph: {
    title: company.name,
    description: company.subhead,
    siteName: company.name,
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.subhead,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: "Chatsworth",
    addressRegion: "CA",
    postalCode: "91311",
    addressCountry: "US",
  },
  url: "https://365health.global",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
