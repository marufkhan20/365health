import { defineCliConfig } from "sanity/cli";

// Defaults to the dev project for local use; override with
// SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET (e.g. when deploying
// the production studio against the client's project).
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "a4hcjnc6";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineCliConfig({
  api: { projectId, dataset },
  // Ties `sanity deploy` to the already-created production studio
  // (health365-cms.sanity.studio, under the client's project) so it
  // doesn't prompt for an app id on every deploy.
  deployment: {
    appId: "bjziu6fedanfxuff1zmd7hhm",
  },
  /**
   * The Next.js app lives at the repo root (one level up from studio/),
   * not in a sibling `web/` folder — paths below are adjusted for that.
   */
  typegen: {
    enabled: true,
    path: "../src/**/*.{ts,tsx}",
    schema: "schema.json",
    generates: "../sanity.types.ts",
    overloadClientMethods: true,
  },
});
