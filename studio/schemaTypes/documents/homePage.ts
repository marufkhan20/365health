import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons/Home";
import { imageWithAlt } from "../shared/imageWithAlt";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "band", title: "Delivery & Storage Band" },
    { name: "whoWeAre", title: "Who We Are" },
    { name: "offer", title: "What We Offer" },
    { name: "clients", title: "Clients" },
    { name: "advancedTech", title: "Advanced Technology" },
    { name: "testimonial", title: "Testimonial" },
  ],
  fields: [
    // --- Hero ---
    imageWithAlt("heroImage", "Hero image", { group: "hero" }),
    defineField({
      name: "heroStats",
      title: "Hero stats",
      type: "array",
      group: "hero",
      of: [defineArrayMember({ type: "statItem" })],
      validation: (r) => r.max(3),
    }),
    defineField({ name: "primaryCtaLabel", title: "Primary button label", type: "string", group: "hero", initialValue: "Discover our solutions" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary button label", type: "string", group: "hero", initialValue: "Request a quote" }),

    // --- Delivery / storage / products band ---
    defineField({ name: "storageHeading", title: "Secure Storage Capacity — heading", type: "string", group: "band" }),
    defineField({ name: "storageCopy", title: "Secure Storage Capacity — copy", type: "text", rows: 3, group: "band" }),
    defineField({ name: "productsHeading", title: "Products and Solutions — heading", type: "string", group: "band" }),
    defineField({ name: "productsCopy", title: "Products and Solutions — copy", type: "text", rows: 3, group: "band" }),

    // --- Who We Are ---
    defineField({ name: "whoWeAreHeading", title: "Heading", type: "string", group: "whoWeAre" }),
    defineField({ name: "whoWeAreCopy", title: "Copy", type: "text", rows: 5, group: "whoWeAre" }),
    imageWithAlt("whoWeAreImage", "Image", { group: "whoWeAre" }),

    // --- What We Offer ---
    defineField({ name: "offerHeading", title: "Heading", type: "string", group: "offer" }),
    defineField({ name: "offerCopy", title: "Intro copy", type: "text", rows: 3, group: "offer" }),
    defineField({
      name: "offerItems",
      title: "Offer cards",
      type: "array",
      group: "offer",
      of: [
        defineArrayMember({
          type: "object",
          name: "offerItem",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "copy", type: "text", rows: 3 }),
            imageWithAlt("icon", "Icon", { required: false }),
            defineField({ name: "href", title: "Link path", type: "string" }),
          ],
          preview: { select: { title: "name", media: "icon" } },
        }),
      ],
      validation: (r) => r.max(2),
    }),

    // --- Clients ---
    defineField({ name: "clientsHeading", title: "Heading", type: "string", group: "clients", initialValue: "Trusted by professionals" }),
    defineField({
      name: "clients",
      title: "Client logos",
      type: "array",
      group: "clients",
      of: [defineArrayMember({ type: "clientLogo" })],
    }),

    // --- Advanced Technology (text lives in Site Settings → Compliance Band) ---
    imageWithAlt("advancedTechImage", "Advanced Technology image", { group: "advancedTech" }),

    // --- Testimonial ---
    defineField({ name: "testimonialIntro", title: "Intro", type: "text", rows: 2, group: "testimonial" }),
    defineField({
      name: "testimonialQuoteParts",
      title: "Quote (as separate message cards)",
      description: "The design shows this as two stacked message-style cards, so keep each part to one or two sentences.",
      type: "array",
      group: "testimonial",
      of: [defineArrayMember({ type: "text", rows: 2 })],
      validation: (r) => r.max(2),
    }),
    defineField({ name: "testimonialAttribution", title: "Attribution", type: "string", group: "testimonial" }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
