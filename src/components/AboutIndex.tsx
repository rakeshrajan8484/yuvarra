"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/Button";
import { about, aboutTabs } from "@/lib/pages";
import { contentTransition, fadeUp } from "@/lib/motion";

type TabId = (typeof aboutTabs)[number]["id"];

function tabFromHash(hash: string): TabId | null {
  const value = hash.replace("#", "");
  const match = aboutTabs.find((tab) =>
    tab.hashes.some((item) => item === value),
  );
  return match?.id ?? null;
}

export function AboutIndex() {
  const reduceMotion = useReducedMotion() === true;
  const panelId = useId();
  const [tab, setTab] = useState<TabId>("about");

  useEffect(() => {
    const next = tabFromHash(window.location.hash);
    if (next) setTab(next);
  }, []);

  function onTabListKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const current = aboutTabs.findIndex((item) => item.id === tab);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setTab(aboutTabs[(current + 1) % aboutTabs.length].id);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setTab(
        aboutTabs[(current - 1 + aboutTabs.length) % aboutTabs.length].id,
      );
    }
    if (event.key === "Home") {
      event.preventDefault();
      setTab(aboutTabs[0].id);
    }
    if (event.key === "End") {
      event.preventDefault();
      setTab(aboutTabs[aboutTabs.length - 1].id);
    }
  }

  return (
    <section className="bg-surface" aria-label="About sections">
      <div className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10 lg:pt-14">
        <div
          className="flex gap-x-8 overflow-x-auto border-b border-hairline"
          role="tablist"
          aria-label="About topics"
          onKeyDown={onTabListKeyDown}
        >
          {aboutTabs.map((item) => {
            const selected = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`about-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(item.id)}
                className={`relative shrink-0 whitespace-nowrap min-h-11 pb-4 text-[15px] ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {selected ? (
                  <motion.span
                    layoutId="about-filter"
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

      <div
        id="global-presence"
        className="mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 lg:px-10 lg:py-24"
      >
        <motion.div
          key={tab}
          id={panelId}
          role="tabpanel"
          aria-labelledby={`about-tab-${tab}`}
          initial={reduceMotion ? false : fadeUp.hidden}
          animate={fadeUp.show}
          transition={contentTransition(reduceMotion)}
        >
          {tab === "about" ? <AboutPanel /> : null}
          {tab === "apeiron" ? <ApeironPanel /> : null}
          {tab === "why" ? <WhyPanel /> : null}
          {tab === "principles" ? <PrinciplesPanel /> : null}
          {tab === "presence" ? <PresencePanel /> : null}
        </motion.div>
      </div>
    </section>
  );
}

function AboutPanel() {
  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h2 className="font-display max-w-[20ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
          {about.introTitle}
        </h2>
        <div className="mt-6 max-w-[72ch] space-y-4 text-[17px] leading-7 text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
      <figure className="relative min-h-[280px] lg:col-span-5">
        <Image
          src="/images/hero-desk.jpg"
          alt="Desk overlooking Hong Kong harbour"
          fill
          className="object-cover"
          sizes="40vw"
        />
      </figure>
    </div>
  );
}

function ApeironPanel() {
  return (
    <div>
      <h2 className="font-display max-w-[22ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        {about.apeironTitle}
      </h2>
      <div className="mt-6 max-w-[72ch] space-y-4 text-[17px] leading-7 text-muted">
        {about.apeironParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8">
        <Button href={about.apeironHref} variant="secondary">
          {about.apeironCta}
        </Button>
      </div>
    </div>
  );
}

function WhyPanel() {
  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
          {about.whyTitle}
        </h2>
        <div className="mt-6 space-y-4 text-[17px] leading-7 text-muted">
          {about.whyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
      <ul className="lg:col-span-6">
        {about.whyPoints.map((point) => (
          <li
            key={point}
            className="flex gap-3 border-b border-hairline py-4 first:pt-0"
          >
            <Check
              size={20}
              weight="regular"
              className="mt-0.5 shrink-0 text-sage"
              aria-hidden="true"
            />
            <span className="text-[17px] text-ink">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrinciplesPanel() {
  return (
    <div>
      <h2 className="font-display max-w-[20ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        {about.principlesTitle}
      </h2>
      <p className="mt-4 max-w-[65ch] text-[17px] leading-7 text-muted">
        {about.principlesLede}
      </p>
      <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
        {about.principles.map((item) => (
          <li
            key={item.title}
            className="grid gap-3 py-7 md:grid-cols-12 md:gap-8"
          >
            <h3 className="font-display text-xl text-ink md:col-span-4">
              {item.title}
            </h3>
            <p className="text-[16px] leading-7 text-muted md:col-span-8">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PresencePanel() {
  return (
    <div>
      <h2 className="font-display max-w-[18ch] text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        {about.presenceTitle}
      </h2>
      <p className="mt-4 max-w-[65ch] text-[17px] leading-7 text-muted">
        {about.presenceLede}
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {about.offices.map((office) => (
          <article key={office.name} className="border-t border-ink pt-6">
            <h3 className="font-display text-2xl text-ink">{office.name}</h3>
            <p className="mt-3 text-[16px] leading-7 text-muted">{office.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
