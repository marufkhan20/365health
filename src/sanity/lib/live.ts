import { defineLive } from "next-sanity/live";
import { client } from "../client";

// No browserToken: the dataset is public, so the browser's live connection
// works unauthenticated. Only the server needs a token (for draft mode).
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: false,
});
