import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

// Defaults to the dev project for local use; override with
// SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET (e.g. when deploying
// the production studio against the client's project).
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "a4hcjnc6";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "365 Health CMS",

  projectId,
  dataset,

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
