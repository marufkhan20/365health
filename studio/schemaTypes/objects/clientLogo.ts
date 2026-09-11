import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons/Image";
import { imageWithAlt } from "../shared/imageWithAlt";

export const clientLogo = defineType({
  name: "clientLogo",
  title: "Client Logo",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({ name: "name", title: "Company name", type: "string", validation: (rule) => rule.required() }),
    imageWithAlt("logo", "Logo"),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
