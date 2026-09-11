import { defineField } from "sanity";

/**
 * A single `image` field with a required alt-text subfield, so editors
 * can never publish a photo without accessible alt text. Reuse this
 * everywhere a photo is uploaded instead of the bare `image` type.
 */
export function imageWithAlt(name: string, title: string, options?: { group?: string; required?: boolean }) {
  return defineField({
    name,
    title,
    type: "image",
    group: options?.group,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        description: "Describe the image for screen readers and SEO.",
        validation: (rule) => (options?.required === false ? rule : rule.required()),
      }),
    ],
    validation: (rule) => (options?.required === false ? rule : rule.required()),
  });
}
