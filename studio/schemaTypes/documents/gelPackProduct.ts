import { defineArrayMember, defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons/Package";

export const gelPackProduct = defineType({
  name: "gelPackProduct",
  title: "Gel Pack Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({ name: "sku", title: "SKU", type: "string", validation: (r) => r.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
      options: { list: ["Small", "Medium", "Large"], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Heading suffix override",
      type: "string",
      description: 'Shown instead of the plain size in the heading, e.g. "Back & Abdomen".',
    }),
    defineField({ name: "dimensions", title: "Dimensions", type: "string", validation: (r) => r.required() }),
    defineField({ name: "weight", title: "Weight", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "features",
      title: "Features & specifications",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "images",
      title: "Product photos",
      description: "The first image is the default; all are shown as clickable thumbnails, with the first one opening a lightbox on click.",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }),
          ],
        }),
      ],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      validation: (r) => r.required().integer(),
    }),
  ],
  orderings: [
    { title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "sku", media: "images.0" },
  },
});
