import { defineCliConfig } from "sanity/cli";

const projectId = "a4hcjnc6";
const dataset = "production";

export default defineCliConfig({
  api: { projectId, dataset },
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
