import { defineArrayMember, defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons/Link";

export const navLink = defineType({
  name: "navLink",
  title: "Nav Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "href",
      title: "Path",
      type: "string",
      description: "Relative path, e.g. /about",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "children",
      title: "Dropdown items",
      description: "Leave empty for a plain link. Add items to show a dropdown (e.g. under \"Services\").",
      type: "array",
      of: [defineArrayMember({ type: "navChildLink" })],
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href", children: "children" },
    prepare({ title, subtitle, children }) {
      return {
        title,
        subtitle: children?.length ? `${subtitle} · ${children.length} dropdown items` : subtitle,
      };
    },
  },
});
