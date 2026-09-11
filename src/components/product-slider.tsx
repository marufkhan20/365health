"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "cn";

const AUTOPLAY_MS = 4000;

export function ProductSlider({
  images,
}: {
  images: readonly { src: string; alt: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const isProgrammaticScroll = useRef(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // 1 item per view below the sm breakpoint, 3 at/above — matches the
  // track item width classes below (keep these in sync).
  const [itemsPerView, setItemsPerView] = useState(3);

  const count = images.length;
  // Distinct reachable scroll positions — with N images shown M at a
  // time, only N - M + 1 positions are physically scrollable (the last
  // M - 1 images can never sit flush at the start of the view). Sizing
  // the dots/steps to that count, not the image count, keeps every dot
  // meaningful and every step distinct.
  const steps = Math.max(1, count - itemsPerView + 1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setItemsPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Maps a step to a scroll position proportionally across the track's
  // full scrollable range, rather than a child's offsetLeft — offsets
  // near the end silently clamp when several items are shown per view,
  // which would make "next" a no-op there. Proportional positions are
  // always distinct and reachable, so wraparound is reliable.
  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track || steps === 0) return;
    const wrapped = ((i % steps) + steps) % steps;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const target = steps > 1 ? (maxScroll * wrapped) / (steps - 1) : 0;
    isProgrammaticScroll.current = true;
    track.scrollTo({ left: target, behavior: "smooth" });
    setActive(wrapped);
    activeRef.current = wrapped;
    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);
  };

  // reflect manual drag/scroll (not triggered by our own scrollToIndex)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      const i = Math.round(ratio * (steps - 1));
      setActive(i);
      activeRef.current = i;
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [steps]);

  // autoplay — loops continuously, pauses on hover/focus, skipped for
  // prefers-reduced-motion
  useEffect(() => {
    if (paused || steps <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      scrollToIndex(activeRef.current + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, steps]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="flex aspect-square w-full shrink-0 snap-start items-center justify-center rounded-[2px] border border-border bg-card p-8 sm:w-[calc((100%-3rem)/3)]"
          >
            <div className="relative h-full w-full">
              <Image src={img.src} alt={img.alt} fill className="object-contain" sizes="(min-width: 640px) 33vw, 90vw" />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous product"
        onClick={() => scrollToIndex(active - 1)}
        className="absolute left-0 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:text-brand"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next product"
        onClick={() => scrollToIndex(active + 1)}
        className="absolute right-0 top-1/2 flex size-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:text-brand"
      >
        <ChevronRight className="size-4" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: steps }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "size-1.5 rounded-full transition-colors",
              i === active ? "bg-brand" : "bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}
