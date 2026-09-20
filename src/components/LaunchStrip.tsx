"use client";

import { ArrowRight, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { copy } from "@/lib/site";

const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 24,
  mass: 0.72,
};

export function LaunchStrip() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion() === true;
  const [visible, setVisible] = useState(true);
  const open = visible && pathname !== copy.announcementHref;

  return (
    <AnimatePresence initial={!reduceMotion}>
      {open ? (
        <motion.div
          key="launch-strip"
          initial={
            reduceMotion
              ? false
              : { height: 0, opacity: 0, clipPath: "inset(0 0 100% 0)" }
          }
          animate={{ height: "auto", opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={
            reduceMotion
              ? { height: 0 }
              : { height: 0, opacity: 0, clipPath: "inset(0 0 100% 0)" }
          }
          transition={reduceMotion ? { duration: 0 } : spring}
          className="overflow-hidden bg-ink text-on-ink"
        >
          <motion.div
            initial={reduceMotion ? false : { y: -12 }}
            animate={{ y: 0 }}
            exit={reduceMotion ? undefined : { y: -8 }}
            transition={reduceMotion ? { duration: 0 } : { ...spring, delay: 0.04 }}
            className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-10"
          >
            <p className="text-[15px] leading-6">
              <span className="font-medium tracking-[0.08em] text-white">
                {copy.launchKicker}
              </span>
              <span className="text-on-ink-muted"> / </span>
              <span className="font-medium text-white">{copy.launchTitle}.</span>{" "}
              <span className="text-on-ink-muted">{copy.launchBody}</span>
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <Button href={copy.announcementHref} variant="inverse">
                {copy.launchCta}
                <ArrowRight size={16} weight="regular" aria-hidden="true" />
              </Button>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] text-on-ink-muted hover:text-white"
                onClick={() => setVisible(false)}
              >
                <X size={18} weight="regular" aria-hidden="true" />
                <span className="sr-only">{copy.launchDismiss}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
