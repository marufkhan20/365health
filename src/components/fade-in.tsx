"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared entrance animation — fade + gentle rise, either triggered on
 * mount (for above-the-fold content, e.g. the hero) or on scroll into
 * view (everything below it). Transform-based motion is stripped
 * automatically for prefers-reduced-motion via <MotionConfig> in layout.tsx.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 18,
  duration = 0.6,
  mount = false,
  once = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  mount?: boolean;
  once?: boolean;
  className?: string;
}) {
  const trigger = mount
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once, margin: "-80px 0px" },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}
