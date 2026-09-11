import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons/Link";

export const navChildLink = defineType({
  name: "navChildLink",
  title: "Dropdown Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "href",
      title: "Path",
      type: "string",
      description: "Relative path, e.g. /delivery",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});
