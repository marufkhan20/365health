import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { imageWithAlt } from "../shared/imageWithAlt";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    imageWithAlt("heroImage", "Hero image"),
    defineField({ name: "title", title: "Page title", type: "string", initialValue: "Contact" }),
    defineField({ name: "formHeading", title: "Form heading", type: "string", initialValue: "Connect with Us" }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" }),
  },
});
