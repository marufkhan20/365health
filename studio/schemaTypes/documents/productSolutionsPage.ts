import { defineArrayMember, defineField, defineType } from "sanity";
import { CubeIcon } from "@sanity/icons/Cube";
import { imageWithAlt } from "../shared/imageWithAlt";

export const productSolutionsPage = defineType({
  name: "productSolutionsPage",
  title: "Product Solutions Page",
  type: "document",
  icon: CubeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "cctRx", title: "CCT Rx Family" },
    { name: "categories", title: "Product Categories" },
    { name: "whyStorage", title: "Why Storage Matters" },
  ],
  fields: [
    imageWithAlt("heroImage", "Hero banner", { group: "hero" }),
    defineField({ name: "title", title: "Page title", type: "string", group: "hero", initialValue: "Products and Solutions" }),
    defineField({ name: "introCopy", title: "Intro copy", type: "text", rows: 4, group: "hero" }),

    defineField({ name: "cctRxHeading", title: "Heading", type: "string", group: "cctRx" }),
    defineField({ name: "cctRxCopy", title: "Copy", type: "text", rows: 4, group: "cctRx" }),
    defineField({
      name: "cctRxSlides",
      title: "Slider images",
      type: "array",
      group: "cctRx",
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
      name: "categories",
      title: "Category cards",
      type: "array",
      group: "categories",
      description: "e.g. Pallet Shippers, Thermal Covers, Monitoring Solutions.",
      of: [
        defineArrayMember({
          type: "object",
          name: "productCategory",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "copy", type: "text", rows: 3 }),
            imageWithAlt("image", "Photo"),
          ],
          preview: { select: { title: "name", media: "image" } },
        }),
      ],
    }),

    defineField({ name: "whyStorageEyebrow", title: "Eyebrow", type: "string", group: "whyStorage", initialValue: "Monitoring Solutions" }),
    defineField({ name: "whyStorageHeading", title: "Heading", type: "string", group: "whyStorage", initialValue: "Why pharmaceutical storage matters" }),
    defineField({
      name: "whyStorageBullets",
      title: "Bullet points",
      type: "array",
      group: "whyStorage",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "whyStorageCopy", title: "Paragraph", type: "text", rows: 4, group: "whyStorage" }),
    defineField({
      name: "whyProfessionals",
      title: "Advantages of professional handling",
      type: "array",
      group: "whyStorage",
      of: [
        defineArrayMember({
          type: "object",
          name: "advantage",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "copy", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Product Solutions Page" }),
  },
});
