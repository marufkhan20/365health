import { defineArrayMember, defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons/Trolley";
import { imageWithAlt } from "../shared/imageWithAlt";

export const deliveryPage = defineType({
  name: "deliveryPage",
  title: "Delivery Page",
  type: "document",
  icon: TrolleyIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Intro" },
    { name: "tiers", title: "Delivery Tiers" },
    { name: "options", title: "Delivery Options" },
  ],
  fields: [
    imageWithAlt("heroImage", "Hero banner", { group: "hero" }),

    defineField({ name: "introHeading", title: "Heading", type: "string", group: "intro", initialValue: "Reliable and Trusted Deliveries" }),
    defineField({ name: "introCopy", title: "Copy", type: "text", rows: 5, group: "intro" }),
    defineField({ name: "whiteGloveHeading", title: "White Glove heading", type: "string", group: "intro", initialValue: "Custom and White Glove Services" }),
    defineField({ name: "whiteGloveCopy", title: "White Glove copy", type: "text", rows: 3, group: "intro" }),

    defineField({
      name: "deliveryTiers",
      title: "Delivery tiers (in order)",
      type: "array",
      group: "tiers",
      description: "Reference the Delivery Tier documents to show, in the order they should appear.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "deliveryTier" }] })],
    }),

    defineField({ name: "optionsHeading", title: "Heading", type: "string", group: "options", initialValue: "Reliable Delivery Options" }),
    defineField({
      name: "deliveryOptions",
      title: "Options",
      type: "array",
      group: "options",
      of: [
        defineArrayMember({
          type: "object",
          name: "deliveryOption",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "detail", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "detail" } },
        }),
      ],
    }),
    defineField({ name: "closingCopy", title: "Closing paragraph", type: "text", rows: 3, group: "options" }),
  ],
  preview: {
    prepare: () => ({ title: "Delivery Page" }),
  },
});
