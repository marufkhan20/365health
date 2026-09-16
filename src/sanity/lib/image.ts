import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

// Sanity asset refs encode the real pixel size, e.g.
// "image-<hash>-1400x700-png" — parsing this lets us size an image's
// container to its own aspect ratio instead of a fixed box, so nothing
// gets cropped or letterboxed regardless of what shape gets uploaded.
export function getImageDimensions(source: { asset?: { _ref?: string } } | null | undefined) {
  const ref = source?.asset?._ref;
  const match = ref?.match(/-(\d+)x(\d+)-/);
  if (!match) return { width: 4, height: 3 };
  return { width: Number(match[1]), height: Number(match[2]) };
}
