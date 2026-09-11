"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Hero background photo with a slow settle-in zoom on load — a subtle
 * Ken Burns effect rather than a static frame. Reduced-motion users get
 * the plain final frame via <MotionConfig reducedMotion="user"> in
 * layout.tsx.
 */
export function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </motion.div>
  );
}
