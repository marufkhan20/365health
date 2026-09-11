import { defineField, defineType } from "sanity";
import { CheckmarkCircleIcon } from "@sanity/icons/CheckmarkCircle";

export const credentialItem = defineType({
  name: "credentialItem",
  title: "Credential",
  type: "object",
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Truck (freight / delivery)", value: "truck" },
          { title: "Shield (privacy / compliance)", value: "shield-check" },
          { title: "Barcode scan (traceability)", value: "scan-barcode" },
          { title: "Badge check (licensing)", value: "badge-check" },
        ],
        layout: "radio",
      },
      initialValue: "badge-check",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "detail", title: "Detail", type: "string", validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "label", subtitle: "detail" } },
});
