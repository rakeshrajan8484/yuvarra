"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EnvelopeSimple, List, Phone, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { contact, copy, nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-on-ink">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between gap-4 px-5 text-[12px] md:h-10 md:text-[13px] lg:px-10">
          <p className="truncate text-on-ink-muted">{copy.apeiron}</p>
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone size={14} weight="regular" aria-hidden="true" />
              <span className="hidden sm:inline">{contact.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href={contact.emailHref}
              className="hidden items-center gap-2 hover:text-white md:inline-flex"
            >
              <EnvelopeSimple size={14} weight="regular" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-hairline bg-surface">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 lg:h-[72px] lg:px-10">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Yuvarra home">
            <Image
              src="/yuvarra-logo.png"
              alt="Yuvarra"
              width={402}
              height={245}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const current =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`text-[15px] ${
                    current ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:block">
            <Button href="/contact" variant="sage">
              {copy.connect}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={22} weight="regular" aria-hidden="true" />
            ) : (
              <List size={22} weight="regular" aria-hidden="true" />
            )}
            <span className="sr-only">
              {open ? "Close main menu" : "Open main menu"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-hairline bg-surface px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 space-y-3 text-sm text-muted">
            <a href={contact.phoneHref} className="block">
              {contact.phoneDisplay}
            </a>
            <a href={contact.emailHref} className="block">
              {contact.email}
            </a>
          </div>
          <div className="mt-6 sm:hidden">
            <Button href="/contact" variant="sage" className="w-full">
              {copy.connect}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
