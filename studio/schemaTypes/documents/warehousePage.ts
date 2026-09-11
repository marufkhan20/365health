import { defineArrayMember, defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons/Package";
import { imageWithAlt } from "../shared/imageWithAlt";

export const warehousePage = defineType({
  name: "warehousePage",
  title: "Warehouse Page",
  type: "document",
  icon: PackageIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Intro" },
    { name: "capabilities", title: "Capabilities" },
    { name: "storage", title: "Storage Importance" },
    { name: "advancedTech", title: "Advanced Technology" },
  ],
  fields: [
    imageWithAlt("heroImage", "Hero banner", { group: "hero" }),
    defineField({ name: "title", title: "Page title", type: "string", group: "hero", initialValue: "Warehouse and Fulfilment" }),

    defineField({ name: "introLead", title: "Lead line", type: "string", group: "intro", initialValue: "We're Your All-in-One Pharma Solution." }),
    defineField({ name: "introCopy", title: "Copy", type: "text", rows: 4, group: "intro" }),

    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      group: "capabilities",
      of: [
        defineArrayMember({
          type: "object",
          name: "capability",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "copy", type: "text", rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "name" } },
        }),
      ],
    }),

    defineField({ name: "storageHeading", title: "Heading", type: "string", group: "storage", initialValue: "Importance of Proper Pharmaceutical Storage" }),
    defineField({ name: "storageCopy", title: "Copy", type: "text", rows: 5, group: "storage" }),
    imageWithAlt("storageImage", "Storage photo", { group: "storage" }),

    imageWithAlt("advancedTechImage", "Advanced Technology image", { group: "advancedTech" }),
  ],
  preview: {
    prepare: () => ({ title: "Warehouse Page" }),
  },
});
