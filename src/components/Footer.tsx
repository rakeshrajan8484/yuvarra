import Image from "next/image";
import Link from "next/link";
import { contact, copy, legal, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-4">
          <Image
            src="/yuvarra-logo.png"
            alt="Yuvarra"
            width={402}
            height={245}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-[38ch] text-[16px] leading-7 text-on-ink-muted">
            {copy.footerBlurb}
          </p>
          <p className="mt-4 text-sm text-on-ink-muted">{copy.apeiron}</p>
          <p className="mt-3 max-w-[38ch] text-sm leading-6 text-on-ink-muted">
            Licensed Money Lender, Hong Kong (Licence No. 1739/2025).
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-display text-sm">Navigation</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-on-ink-muted hover:text-on-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm">Contact</h2>
          <ul className="mt-4 space-y-2 text-[15px] text-on-ink-muted">
            <li>
              <a href={contact.phoneHref} className="hover:text-on-ink">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="hover:text-on-ink">
                {contact.email}
              </a>
            </li>
            <li>
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm">Legal</h2>
          <ul className="mt-4 space-y-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-on-ink-muted hover:text-on-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 text-sm leading-6 text-on-ink-muted lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-[54ch]">
            <p>{copy.warningZh}</p>
            <p>{copy.warningEn}</p>
          </div>
          <p>{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
