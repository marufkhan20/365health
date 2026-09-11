import { defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons/Package";
import { imageWithAlt } from "../shared/imageWithAlt";

export const gelPacksPage = defineType({
  name: "gelPacksPage",
  title: "Gel Packs Page",
  type: "document",
  icon: PackageIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "wholesale", title: "Wholesale CTA" },
  ],
  fields: [
    imageWithAlt("heroImage", "Hero banner", { group: "hero" }),
    defineField({ name: "title", title: "Page title", type: "string", group: "hero", initialValue: "Flexible Hot/Cold Gel Packs" }),
    defineField({
      name: "note",
      title: "Note",
      type: "string",
      group: "hero",
      readOnly: true,
      initialValue: "The product list itself lives under \"Gel Pack Products\" in the sidebar, not on this page.",
    }),

    defineField({ name: "wholesaleEyebrow", title: "Eyebrow", type: "string", group: "wholesale", initialValue: "Looking to buy wholesale?" }),
  ],
  preview: {
    prepare: () => ({ title: "Gel Packs Page" }),
  },
});
