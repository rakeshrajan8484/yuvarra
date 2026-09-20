"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { contentTransition, fadeUp } from "@/lib/motion";
import { fundamentals } from "@/lib/pages";

const ADVANCE_MS = 5500;

export function Fundamentals() {
  const reduceMotion = useReducedMotion() === true;
  const headingId = useId();
  const panelId = useId();
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = fundamentals[index];

  function select(next: number) {
    setIndex((next + fundamentals.length) % fundamentals.length);
  }

  function goTo(next: number) {
    const wrapped = (next + fundamentals.length) % fundamentals.length;
    setIndex(wrapped);
    tabs.current[wrapped]?.focus();
  }

  function onListKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      goTo(index + 1);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(fundamentals.length - 1);
    }
  }

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % fundamentals.length);
    }, ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [index, reduceMotion]);

  return (
    <section className="border-t border-hairline bg-surface" aria-labelledby={headingId}>
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-12">
        <div className="px-5 py-16 lg:col-span-5 lg:border-r lg:border-hairline lg:px-10 lg:py-24">
          <h2
            id={headingId}
            className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl"
          >
            Fundamentals
          </h2>
          <div
            className="mt-10"
            role="tablist"
            aria-label="Fundamentals"
            aria-orientation="vertical"
            onKeyDown={onListKeyDown}
          >
            {fundamentals.map((entry, entryIndex) => {
              const selected = entryIndex === index;
              return (
                <button
                  key={entry.title}
                  type="button"
                  role="tab"
                  id={`fundamentals-tab-${entryIndex}`}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  ref={(node) => {
                    tabs.current[entryIndex] = node;
                  }}
                  onClick={() => select(entryIndex)}
                  className={`block w-full border-t border-hairline py-5 text-left font-display text-lg leading-snug tracking-[-0.02em] last:border-b ${
                    selected ? "font-medium text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {entry.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-hairline px-5 py-12 lg:col-span-7 lg:border-t-0 lg:px-10 lg:py-24">
          <motion.div
            key={item.title}
            id={panelId}
            role="tabpanel"
            aria-labelledby={`fundamentals-tab-${index}`}
            initial={reduceMotion ? false : fadeUp.hidden}
            animate={fadeUp.show}
            transition={contentTransition(reduceMotion)}
          >
            <h3 className="font-display max-w-[20ch] text-3xl leading-[1.15] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              {item.title}
            </h3>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-7 text-muted">
              {item.body}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
