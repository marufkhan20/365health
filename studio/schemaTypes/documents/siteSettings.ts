import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons/Cog";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "company", title: "Company", default: true },
    { name: "navigation", title: "Navigation" },
    { name: "credentials", title: "Credentials" },
    { name: "compliance", title: "Compliance Band" },
    { name: "cta", title: "Get in Touch" },
  ],
  fields: [
    // --- Company ---
    defineField({ name: "name", title: "Full company name", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", group: "company", description: "Used in the header/footer logo lockup.", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "subhead", title: "Subhead", type: "text", rows: 2, group: "company" }),
    defineField({ name: "phone", title: "Phone (display)", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "phoneHref", title: "Phone (tel: link)", type: "string", group: "company", description: "e.g. tel:+18773740577" }),
    defineField({ name: "email", title: "Email", type: "string", group: "company", validation: (r) => r.required().email() }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      group: "company",
      fields: [
        defineField({ name: "line1", type: "string" }),
        defineField({ name: "line2", type: "string" }),
      ],
    }),
    defineField({
      name: "social",
      title: "Social links",
      type: "object",
      group: "company",
      fields: [
        defineField({ name: "facebook", type: "url" }),
        defineField({ name: "x", title: "X (Twitter)", type: "url" }),
        defineField({ name: "instagram", type: "url" }),
      ],
    }),

    // --- Navigation ---
    defineField({
      name: "navItems",
      title: "Header navigation",
      type: "array",
      group: "navigation",
      of: [defineArrayMember({ type: "navLink" })],
    }),
    defineField({
      name: "footerNavItems",
      title: "Footer navigation",
      type: "array",
      group: "navigation",
      description: "The footer intentionally uses a shorter link list than the header.",
      of: [defineArrayMember({ type: "navChildLink" })],
    }),

    // --- Credentials ---
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "array",
      group: "credentials",
      description: "Shown as the icon badge grid (3PL Licensed, HIPAA Compliant, etc).",
      of: [defineArrayMember({ type: "credentialItem" })],
      validation: (r) => r.max(4).warning("More than 4 will wrap awkwardly in the 4-column grid."),
    }),

    // --- Compliance band (reused across most pages) ---
    defineField({
      name: "complianceBand",
      title: "Advanced Technology & Strict Compliance",
      type: "object",
      group: "compliance",
      description: "This copy is shared across Home, About, Services, Warehouse, Product Solutions and Request a Quote.",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "copy", type: "text", rows: 4 }),
      ],
    }),

    // --- Get in touch (reused on Home + Product Solutions) ---
    defineField({
      name: "getInTouch",
      title: "Get in Touch",
      type: "object",
      group: "cta",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "copy", type: "text", rows: 3 }),
        defineField({ name: "formHeading", title: "Form heading", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
