"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { contactOffices } from "@/lib/pages";
import { contact } from "@/lib/site";

export function OfficeCarousel() {
  const reduceMotion = useReducedMotion() === true;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const office = contactOffices[index];
  const count = contactOffices.length;

  function step(delta: number) {
    setDirection(delta);
    setIndex((current) => (current + delta + count) % count);
  }

  function goTo(next: number) {
    if (next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Office locations"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="flex items-end justify-between gap-4 border-b border-hairline pb-5">
        <div className="flex flex-wrap gap-x-6 gap-y-2" role="tablist" aria-label="Offices">
          {contactOffices.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                id={`office-tab-${itemIndex}`}
                aria-selected={selected}
                aria-controls="office-panel"
                onClick={() => goTo(itemIndex)}
                className={`relative pb-2 text-[15px] ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.name}
                {selected ? (
                  <motion.span
                    layoutId="office-tab"
                    className="absolute inset-x-0 -bottom-[21px] h-px bg-ink"
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
        <div className="flex shrink-0">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink hover:text-sage"
            onClick={() => step(-1)}
            aria-label="Previous office"
          >
            <CaretLeft size={22} weight="regular" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink hover:text-sage"
            onClick={() => step(1)}
            aria-label="Next office"
          >
            <CaretRight size={22} weight="regular" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative min-h-[26rem] overflow-hidden pt-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={office.name}
            id="office-panel"
            role="tabpanel"
            aria-labelledby={`office-tab-${index}`}
            aria-live="polite"
            initial={{ x: direction * 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -28, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 380, damping: 32, mass: 0.8 }
            }
          >
            {/* <h3 className="font-display text-4xl leading-[1.12] tracking-[-0.03em] text-ink md:text-[2.75rem]">
              {office.name}
            </h3> */}
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-sm text-muted">Address</dt>
                <dd className="mt-2 text-[17px] leading-7 text-ink">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Email</dt>
                <dd className="mt-2 text-[17px] leading-7">
                  <a
                    href={contact.emailHref}
                    className="text-ink underline-offset-4 hover:text-sage hover:underline"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Telephone</dt>
                <dd className="mt-2 text-[17px] leading-7">
                  <a
                    href={contact.phoneHref}
                    className="text-ink underline-offset-4 hover:text-sage hover:underline"
                  >
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
