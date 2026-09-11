"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { cn } from "cn";

export function GelPackGallery({
  images,
  alt,
}: {
  images: readonly string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <DialogPrimitive.Root>
        <DialogPrimitive.Trigger
          render={
            <button
              type="button"
              aria-label="View larger image"
              className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-[10px] border border-border bg-card"
            />
          }
        >
          <Image
            key={images[active]}
            src={images[active]}
            alt={alt}
            fill
            className="object-contain p-4"
            sizes="(min-width: 640px) 45vw, 90vw"
          />
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/80 duration-150 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
          <DialogPrimitive.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 outline-none duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
            <div className="relative aspect-square w-full overflow-hidden rounded-[10px] bg-white">
              <Image
                src={images[active]}
                alt={alt}
                fill
                className="object-contain p-8"
                sizes="90vw"
              />
              <DialogPrimitive.Close
                aria-label="Close"
                className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80"
              >
                <X className="size-5" />
              </DialogPrimitive.Close>
            </div>
          </DialogPrimitive.Popup>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      {images.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "relative size-12 shrink-0 overflow-hidden rounded-[6px] border-2 bg-card transition-colors",
                i === active ? "border-brand" : "border-border hover:border-brand/50"
              )}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
