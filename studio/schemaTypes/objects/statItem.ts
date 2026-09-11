import { defineField, defineType } from "sanity";
import { NumberIcon } from "@sanity/icons/Number";

export const statItem = defineType({
  name: "statItem",
  title: "Stat",
  type: "object",
  icon: NumberIcon,
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "e.g. 98.5% or 150,000+",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "unit", title: "Unit (optional)", type: "string", description: "e.g. Sq Ft" }),
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "copy", title: "Supporting copy (optional)", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});
