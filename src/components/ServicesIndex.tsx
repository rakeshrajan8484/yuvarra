"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { serviceTabs, services } from "@/lib/pages";
import { contentTransition, fadeUp } from "@/lib/motion";

type TabId = (typeof serviceTabs)[number]["id"];

export function ServicesIndex() {
  const reduceMotion = useReducedMotion() === true;
  const panelId = useId();
  const [tab, setTab] = useState<TabId>("role");

  function onTabListKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const current = serviceTabs.findIndex((item) => item.id === tab);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setTab(serviceTabs[(current + 1) % serviceTabs.length].id);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setTab(
        serviceTabs[(current - 1 + serviceTabs.length) % serviceTabs.length].id,
      );
    }
    if (event.key === "Home") {
      event.preventDefault();
      setTab(serviceTabs[0].id);
    }
    if (event.key === "End") {
      event.preventDefault();
      setTab(serviceTabs[serviceTabs.length - 1].id);
    }
  }

  return (
    <section className="bg-surface" aria-label="Service sections">
      <div className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10 lg:pt-14">
        <div
          className="flex flex-wrap gap-x-8 gap-y-2 border-b border-hairline"
          role="tablist"
          aria-label="Service categories"
          onKeyDown={onTabListKeyDown}
        >
          {serviceTabs.map((item) => {
            const selected = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`services-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(item.id)}
                className={`relative min-h-11 pb-4 text-[15px] ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {selected ? (
                  <motion.span
                    layoutId="services-filter"
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
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <motion.div
          key={tab}
          id={panelId}
          role="tabpanel"
          aria-labelledby={`services-tab-${tab}`}
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.show}
          transition={contentTransition(reduceMotion)}
        >
          {tab === "role" ? <RolePanel /> : null}
          {tab === "platform" ? <PlatformPanel /> : null}
          {tab === "support" ? <SupportPanel /> : null}
        </motion.div>
      </div>
    </section>
  );
}

function RolePanel() {
  return (
    <div>
      <h2 className="font-display max-w-[20ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        {services.roleTitle}
      </h2>
      <div className="mt-6 max-w-[72ch] space-y-4 text-[17px] leading-7 text-muted">
        {services.roleParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <h3 className="font-display mt-16 text-xl tracking-[-0.02em] text-ink">
        {services.lifecycleTitle}
      </h3>
      <ol className="mt-6 divide-y divide-hairline border-y border-hairline">
        {services.lifecycle.map((item, index) => (
          <li key={item.title} className="grid gap-3 py-7 md:grid-cols-12">
            <span className="font-display text-sm tabular-nums text-sage md:col-span-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-10">
              <h4 className="font-display text-xl text-ink">{item.title}</h4>
              <p className="mt-2 max-w-[62ch] text-[16px] leading-7 text-muted">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PlatformPanel() {
  return (
    <div>
      <h2 className="font-display max-w-[18ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        {services.platformTitle}
      </h2>
      <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
        {services.platform.map((item) => (
          <li key={item.title} className="grid gap-3 py-7 md:grid-cols-12 md:gap-8">
            <h3 className="font-display text-xl text-ink md:col-span-5">
              {item.title}
            </h3>
            <p className="text-[16px] leading-7 text-muted md:col-span-7">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportPanel() {
  const [professionals, banks, carriers] = services.audiences;

  return (
    <div>
      <h2 className="font-display max-w-[22ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        {services.audiencesTitle}
      </h2>
      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <article className="lg:col-span-7">
          <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">
            {professionals.title}
          </h3>
          <p className="mt-4 max-w-[58ch] text-[17px] leading-7 text-muted">
            {professionals.lede}
          </p>
          <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
            {professionals.points.map((point) => (
              <li key={point} className="py-3 text-[16px] leading-7 text-ink">
                {point}
              </li>
            ))}
          </ul>
        </article>
        <div className="space-y-12 lg:col-span-5">
          {[banks, carriers].map((audience) => (
            <article key={audience.title}>
              <h3 className="font-display text-xl text-ink">{audience.title}</h3>
              <p className="mt-3 text-[16px] leading-7 text-muted">
                {audience.lede}
              </p>
              <ul className="mt-5 space-y-3 text-[16px] leading-7 text-ink">
                {audience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
