import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach 365 Health Logistics at ${company.address.line1}, ${company.address.line2}, or call ${company.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect With Us"
        title="Let's talk cold chain."
        crumb="Contact"
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-16 sm:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
                Company Information
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-thermal" />
                  <div className="text-[15px]">
                    <div>{company.address.line1}</div>
                    <div>{company.address.line2}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-thermal" />
                  <a href={company.phoneHref} className="text-[15px] hover:text-brand">
                    {company.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-thermal" />
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[15px] hover:text-brand"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              {/* Free Maps embed — swap for the Maps Embed API + key in
                  production for reliability (this form can flash blank on
                  first paint in some regions/browsers without a key). */}
              <div className="mt-10 aspect-[4/3] overflow-hidden rounded-[2px] border border-border bg-muted">
                <iframe
                  title="365 Health Logistics location"
                  src="https://www.google.com/maps?q=21822+Lassen+Street+Suite+A+Chatsworth+CA+91311&output=embed"
                  className="h-full w-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-[2px] border border-border bg-card p-7 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
