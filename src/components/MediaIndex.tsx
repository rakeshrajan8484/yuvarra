"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { mediaFilters, mediaItems } from "@/lib/pages";
import { contentTransition, fadeUp } from "@/lib/motion";

const monthIndex: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Sept: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function mediaTime(date: string) {
  const [day, month, year] = date.split(" ");
  return Date.UTC(Number(year), monthIndex[month] ?? 0, Number(day));
}

type FilterId = (typeof mediaFilters)[number]["id"];

export function MediaIndex() {
  const reduceMotion = useReducedMotion() === true;
  const [filter, setFilter] = useState<FilterId>("all");

  const items = useMemo(() => {
    const filtered =
      filter === "all"
        ? mediaItems
        : mediaItems.filter((item) => item.type === filter);
    return [...filtered].sort((a, b) => mediaTime(b.date) - mediaTime(a.date));
  }, [filter]);

  const countLabel = items.length === 1 ? "1 Entry" : `${items.length} Entries`;

  function onTabListKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const current = mediaFilters.findIndex((item) => item.id === filter);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setFilter(mediaFilters[(current + 1) % mediaFilters.length].id);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setFilter(
        mediaFilters[(current - 1 + mediaFilters.length) % mediaFilters.length]
          .id,
      );
    }
  }

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <div
          className="flex flex-wrap gap-x-8 gap-y-2 border-b border-hairline"
          role="tablist"
          aria-label="Media types"
          onKeyDown={onTabListKeyDown}
        >
          {mediaFilters.map((item) => {
            const selected = item.id === filter;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`media-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="media-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setFilter(item.id)}
                className={`relative min-h-11 pb-4 text-[15px] ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {selected ? (
                  <motion.span
                    layoutId="media-filter"
                    className="absolute inset-x-0 bottom-0 h-px bg-ink"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
            Latest from Yuvarra
          </h2>
          <p className="text-sm text-muted" aria-live="polite">
            {countLabel}
          </p>
        </div>

        <div id="media-panel" role="tabpanel" aria-labelledby={`media-tab-${filter}`}>
          <motion.div
            key={filter}
            initial={reduceMotion ? false : fadeUp.hidden}
            animate={fadeUp.show}
            transition={contentTransition(reduceMotion)}
          >
            {items.length === 0 ? (
              <p className="mt-10 text-[17px] leading-7 text-muted">
                No entries in this category.
              </p>
            ) : (
              <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="grid gap-3 py-8 transition-colors hover:bg-stone md:grid-cols-12 md:gap-8"
                    >
                      <p className="text-sm text-muted md:col-span-3">
                        {item.type}
                        <span className="block text-ink">{item.date}</span>
                      </p>
                      <div className="md:col-span-9">
                        <h3 className="font-display max-w-[32ch] text-2xl leading-snug tracking-[-0.02em] text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-[62ch] text-[16px] leading-7 text-muted">
                          {item.lede}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
