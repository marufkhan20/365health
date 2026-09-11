import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons/Trolley";

/**
 * Its own document type because it's genuinely reused: the homepage band
 * shows the first three, the Delivery page shows all four (including
 * "Inside Delivery", which the homepage band omits).
 */
export const deliveryTier = defineType({
  name: "deliveryTier",
  title: "Delivery Tier",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "window",
      title: "Window",
      type: "string",
      description: "e.g. 8 AM – 8 PM, or Cutoff 1 PM · Delivered by 8 PM",
      validation: (r) => r.required(),
    }),
    defineField({ name: "detail", title: "Detail sentence", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first. The homepage band shows the first 3.",
      validation: (r) => r.required().integer(),
    }),
  ],
  orderings: [
    { title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "window" },
  },
});
