import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons/Users";
import { imageWithAlt } from "../shared/imageWithAlt";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UsersIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "missionVision", title: "Mission & Vision" },
    { name: "advancedTech", title: "Advanced Technology" },
  ],
  fields: [
    imageWithAlt("heroImage", "Hero image", { group: "hero" }),
    defineField({ name: "title", title: "Page title", type: "string", group: "hero", initialValue: "About Us" }),

    defineField({ name: "mission", title: "Our Mission", type: "text", rows: 5, group: "missionVision" }),
    defineField({ name: "vision", title: "Our Vision", type: "text", rows: 5, group: "missionVision" }),

    imageWithAlt("advancedTechImage", "Advanced Technology image", { group: "advancedTech" }),
  ],
  preview: {
    prepare: () => ({ title: "About Page" }),
  },
});
