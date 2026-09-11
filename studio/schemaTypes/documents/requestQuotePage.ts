import { defineArrayMember, defineField, defineType } from "sanity";
import { EditIcon } from "@sanity/icons/Edit";
import { imageWithAlt } from "../shared/imageWithAlt";

export const requestQuotePage = defineType({
  name: "requestQuotePage",
  title: "Request a Quote Page",
  type: "document",
  icon: EditIcon,
  fields: [
    imageWithAlt("heroImage", "Hero image"),
    defineField({ name: "title", title: "Page title", type: "string", initialValue: "Request a Quote" }),
    defineField({ name: "formHeading", title: "Form heading", type: "string", initialValue: "Fill out the below form to Request a Quote" }),
    defineField({
      name: "serviceOptions",
      title: "Service dropdown options",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    imageWithAlt("advancedTechImage", "Advanced Technology image"),
  ],
  preview: {
    prepare: () => ({ title: "Request a Quote Page" }),
  },
});
