import Image from "next/image";
import { clients } from "@/lib/content";

/**
 * Continuous CSS marquee — the track is the client list rendered twice
 * back to back, animated left by exactly 50% of its width so the loop
 * is seamless. Pauses on hover and honors prefers-reduced-motion (see
 * globals.css).
 */
export function ClientLogoSlider() {
  const track = [...clients, ...clients];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />
      <div className="animate-marquee flex w-max items-stretch gap-4 group-hover:[animation-play-state:paused]">
        {track.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-border bg-card sm:h-24 sm:w-44"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={100}
              className="h-full w-full object-contain p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
