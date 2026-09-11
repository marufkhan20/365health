import { defineArrayMember, defineField, defineType } from "sanity";
import { WrenchIcon } from "@sanity/icons/Wrench";
import { imageWithAlt } from "../shared/imageWithAlt";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  icon: WrenchIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "stats", title: "Stats" },
    { name: "categories", title: "Service Categories" },
  ],
  fields: [
    imageWithAlt("heroImage", "Hero image", { group: "hero" }),
    defineField({ name: "title", title: "Page title", type: "string", group: "hero", initialValue: "Services" }),

    defineField({
      name: "stats",
      title: "Stat tiles",
      type: "array",
      group: "stats",
      of: [defineArrayMember({ type: "statItem" })],
      validation: (r) => r.max(3),
    }),

    defineField({ name: "categoriesHeading", title: "Section heading", type: "string", group: "categories" }),
    defineField({
      name: "categories",
      title: "Category cards",
      type: "array",
      group: "categories",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCategory",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link path", type: "string" }),
            imageWithAlt("image", "Photo"),
          ],
          preview: { select: { title: "name", media: "image" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services Page" }),
  },
});
