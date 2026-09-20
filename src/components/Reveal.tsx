"use client";

import { motion, useReducedMotion } from "motion/react";
import { contentTransition, fadeUp } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : fadeUp.hidden}
      animate={fadeUp.show}
      transition={contentTransition(reduceMotion, delay)}
    >
      {children}
    </motion.div>
  );
}
